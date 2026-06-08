import React, { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Circle,
  Users,
  Folder,
  Shield,
  Loader2,
  Copy,
  Search,
  FileText,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function GitHubAppProofPage() {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [showJson, setShowJson] = useState(false);
  const [data, setData] = useState(null);
  const [expanded, setExpanded] = useState({});

  const headers = (bearerToken) => ({
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${bearerToken}`,
    "X-GitHub-Api-Version": "2022-11-28",
  });

  const fetchAllPages = async (url, authHeaders) => {
    let results = [];
    let page = 1;

    while (true) {
      const sep = url.includes("?") ? "&" : "?";
      const res = await fetch(`${url}${sep}per_page=100&page=${page}`, {
        headers: authHeaders,
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || `Failed to fetch ${url}`);
      }

      const json = await res.json();

      let batch = [];
      if (Array.isArray(json)) batch = json;
      else if (Array.isArray(json.repositories)) batch = json.repositories;
      else batch = [];

      results = [...results, ...batch];

      if (batch.length < 100) break;
      page++;
    }

    return results;
  };

  const fetchInitialData = async () => {
    setLoading(true);
    setError("");
    setData(null);

    try {
      if (!token.trim()) {
        throw new Error("Please paste your GitHub App JWT.");
      }

      const appJwt = token.trim();

      const appRes = await fetch("https://api.github.com/app", {
        headers: headers(appJwt),
      });

      if (!appRes.ok) {
        const err = await appRes.json().catch(() => ({}));
        throw new Error(err.message || "Invalid GitHub App JWT.");
      }

      const app = await appRes.json();

      const installations = await fetchAllPages(
        "https://api.github.com/app/installations",
        headers(appJwt)
      );

      const normalizedInstallations = installations.map((inst) => ({
        ...inst,
        loadingDetails: false,
        detailsLoaded: false,
        installationTokenError: null,
        repoCount: null,
        repos: [],
        totalIssues: null,
        openIssues: null,
        uniqueIssueCreators: null,
        issueCreators: [],
        issueSamples: [],
      }));

      setData({
        app,
        installations: normalizedInstallations,
        summary: {
          appName: app.name || app.slug || "Unknown App",
          githubInstallationsCount: app.installations_count ?? normalizedInstallations.length,
          fetchedInstallations: normalizedInstallations.length,
        },
      });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const loadInstallationDetails = async (installationId) => {
    if (!data) return;

    const appJwt = token.trim();

    setData((prev) => ({
      ...prev,
      installations: prev.installations.map((inst) =>
        inst.id === installationId
          ? { ...inst, loadingDetails: true, installationTokenError: null }
          : inst
      ),
    }));

    try {
      const tokenRes = await fetch(
        `https://api.github.com/app/installations/${installationId}/access_tokens`,
        {
          method: "POST",
          headers: headers(appJwt),
        }
      );

      if (!tokenRes.ok) {
        const err = await tokenRes.json().catch(() => ({}));
        throw new Error(err.message || "Failed to create installation token");
      }

      const tokenData = await tokenRes.json();
      const installationToken = tokenData.token;

      const repos = await fetchAllPages(
        "https://api.github.com/installation/repositories",
        headers(installationToken)
      );

      let totalIssues = 0;
      let openIssues = 0;
      const creators = new Set();
      const issueSamples = [];

      // Sequential on purpose to avoid exploding requests
      for (const repo of repos) {
        try {
          const issues = await fetchAllPages(
            `https://api.github.com/repos/${repo.owner.login}/${repo.name}/issues?state=all`,
            headers(installationToken)
          );

          const realIssues = issues.filter((item) => !item.pull_request);

          totalIssues += realIssues.length;
          openIssues += realIssues.filter((i) => i.state === "open").length;

          for (const issue of realIssues) {
            if (issue.user?.login) creators.add(issue.user.login);

            if (issueSamples.length < 8) {
              issueSamples.push({
                id: issue.id,
                number: issue.number,
                title: issue.title,
                state: issue.state,
                creator: issue.user?.login || "Unknown",
                repo: repo.full_name,
                url: issue.html_url,
              });
            }
          }
        } catch (repoErr) {
          console.warn("Repo issue fetch failed:", repo.full_name, repoErr);
        }
      }

      setData((prev) => ({
        ...prev,
        installations: prev.installations.map((inst) =>
          inst.id === installationId
            ? {
                ...inst,
                loadingDetails: false,
                detailsLoaded: true,
                installationTokenError: null,
                repoCount: repos.length,
                repos: repos.map((r) => ({
                  id: r.id,
                  name: r.name,
                  full_name: r.full_name,
                  private: r.private,
                  owner: r.owner?.login,
                })),
                totalIssues,
                openIssues,
                uniqueIssueCreators: creators.size,
                issueCreators: Array.from(creators),
                issueSamples,
              }
            : inst
        ),
      }));
    } catch (err) {
      setData((prev) => ({
        ...prev,
        installations: prev.installations.map((inst) =>
          inst.id === installationId
            ? {
                ...inst,
                loadingDetails: false,
                detailsLoaded: false,
                installationTokenError: err.message || "Failed to load details",
              }
            : inst
        ),
      }));
    }
  };

  const toggleExpand = (installationId) => {
    setExpanded((prev) => ({
      ...prev,
      [installationId]: !prev[installationId],
    }));
  };

  const filteredInstallations = useMemo(() => {
    if (!data?.installations) return [];

    const q = search.toLowerCase().trim();
    if (!q) return data.installations;

    return data.installations.filter((inst) => {
      const login = inst.account?.login?.toLowerCase() || "";
      const type = inst.account?.type?.toLowerCase() || "";
      const id = String(inst.id || "");
      return login.includes(q) || type.includes(q) || id.includes(q);
    });
  }, [data, search]);

  const copyJson = async () => {
    if (!data) return;
    await navigator.clipboard.writeText(JSON.stringify(data, null, 2));
  };

  const totalLoadedRepos =
    data?.installations?.reduce((sum, inst) => sum + (inst.repoCount || 0), 0) || 0;

  const totalLoadedIssues =
    data?.installations?.reduce((sum, inst) => sum + (inst.totalIssues || 0), 0) || 0;

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">GitHub App Proof Dashboard</h1>
            <p className="mt-1 text-sm text-slate-600">
              Frontend-only optimized audit page (lazy loads per installation).
            </p>
          </div>
          <Badge className="rounded-full px-4 py-1 text-sm">Frontend Only</Badge>
        </div>

        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Circle className="h-5 w-5" />
              Connect GitHub App
            </CardTitle>
            <CardDescription>Paste your valid GitHub App JWT</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3 md:grid-cols-[1fr_auto]">
              <Input
                type="password"
                placeholder="Paste GitHub App JWT here..."
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="h-12 rounded-xl"
              />
              <Button onClick={fetchInitialData} disabled={loading} className="h-12 rounded-xl px-6">
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Shield className="mr-2 h-4 w-4" />}
                {loading ? "Loading..." : "Load Installations"}
              </Button>
            </div>

            {error && (
              <Alert variant="destructive" className="rounded-xl">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {data && (
          <>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              <StatCard title="App" value={data.summary.appName} icon={<Circle className="h-5 w-5" />} />
              <StatCard title="Installations" value={String(data.summary.fetchedInstallations)} icon={<Users className="h-5 w-5" />} />
              <StatCard title="Loaded Repos" value={String(totalLoadedRepos)} icon={<Folder className="h-5 w-5" />} />
              <StatCard title="Loaded Issues" value={String(totalLoadedIssues)} icon={<FileText className="h-5 w-5" />} />
              <StatCard title="GitHub Count" value={String(data.summary.githubInstallationsCount)} icon={<Shield className="h-5 w-5" />} />
            </div>

            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="relative w-full md:max-w-sm">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                      placeholder="Search installation / login / type"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="pl-9 rounded-xl"
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="rounded-xl" onClick={() => setShowJson((p) => !p)}>
                      {showJson ? "Hide JSON" : "Show JSON"}
                    </Button>
                    <Button variant="outline" className="rounded-xl" onClick={copyJson}>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy JSON
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 lg:grid-cols-2">
              {filteredInstallations.map((inst) => {
                const isExpanded = !!expanded[inst.id];

                return (
                  <Card key={inst.id} className="rounded-2xl shadow-sm">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <CardTitle className="text-lg">{inst.account?.login || "Unknown Account"}</CardTitle>
                          <CardDescription>
                            Installation ID: <span className="font-medium">{inst.id}</span>
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="rounded-full">
                          {inst.account?.type || "Unknown"}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="space-y-1 text-xs text-slate-500">
                        <p><span className="font-medium text-slate-700">Created:</span> {inst.created_at}</p>
                        <p><span className="font-medium text-slate-700">Updated:</span> {inst.updated_at}</p>
                      </div>

                      {inst.detailsLoaded && (
                        <div className="flex flex-wrap gap-2">
                          <Badge className="rounded-full">Repos: {inst.repoCount}</Badge>
                          <Badge variant="outline" className="rounded-full">Issues: {inst.totalIssues}</Badge>
                          <Badge variant="outline" className="rounded-full">Open: {inst.openIssues}</Badge>
                          <Badge variant="outline" className="rounded-full">Creators: {inst.uniqueIssueCreators}</Badge>
                        </div>
                      )}

                      {inst.installationTokenError && (
                        <Alert className="rounded-xl">
                          <AlertDescription>{inst.installationTokenError}</AlertDescription>
                        </Alert>
                      )}

                      <div className="flex flex-wrap gap-2">
                        <Button
                          className="rounded-xl"
                          onClick={() => loadInstallationDetails(inst.id)}
                          disabled={inst.loadingDetails}
                        >
                          {inst.loadingDetails ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Loading Details...
                            </>
                          ) : (
                            "Load Repos + Issues"
                          )}
                        </Button>

                        <Button
                          variant="outline"
                          className="rounded-xl"
                          onClick={() => toggleExpand(inst.id)}
                        >
                          {isExpanded ? (
                            <>
                              <ChevronUp className="mr-2 h-4 w-4" />
                              Collapse
                            </>
                          ) : (
                            <>
                              <ChevronDown className="mr-2 h-4 w-4" />
                              Expand
                            </>
                          )}
                        </Button>
                      </div>

                      {isExpanded && (
                        <div className="space-y-4">
                          <div>
                            <p className="mb-2 text-sm font-semibold text-slate-700">Repositories</p>
                            <div className="max-h-48 overflow-y-auto rounded-xl border bg-white p-3 space-y-2">
                              {inst.repos.length === 0 ? (
                                <p className="text-sm text-slate-500">
                                  {inst.detailsLoaded ? "No repositories found" : "Load details first"}
                                </p>
                              ) : (
                                inst.repos.map((repo) => (
                                  <div
                                    key={repo.id}
                                    className="flex items-center justify-between rounded-lg border p-2"
                                  >
                                    <span className="text-sm font-medium break-all">{repo.full_name}</span>
                                    <Badge variant="outline" className="rounded-full">
                                      {repo.private ? "Private" : "Public"}
                                    </Badge>
                                  </div>
                                ))
                              )}
                            </div>
                          </div>

                          <div>
                            <p className="mb-2 text-sm font-semibold text-slate-700">Issue Samples</p>
                            <div className="max-h-56 overflow-y-auto rounded-xl border bg-white p-3 space-y-2">
                              {inst.issueSamples.length === 0 ? (
                                <p className="text-sm text-slate-500">
                                  {inst.detailsLoaded ? "No issues found" : "Load details first"}
                                </p>
                              ) : (
                                inst.issueSamples.map((issue) => (
                                  <div key={issue.id} className="rounded-lg border p-3">
                                    <p className="text-sm font-semibold break-all">{issue.title}</p>
                                    <p className="mt-1 text-xs text-slate-500">
                                      #{issue.number} • {issue.repo} • {issue.creator} • {issue.state}
                                    </p>
                                    <a
                                      href={issue.url}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="mt-2 inline-block text-xs font-medium text-blue-600 hover:underline"
                                    >
                                      Open Issue
                                    </a>
                                  </div>
                                ))
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {showJson && (
              <Card className="rounded-2xl shadow-sm">
                <CardHeader>
                  <CardTitle>Proof JSON Report</CardTitle>
                  <CardDescription>Share this as evidence of installations and loaded details.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="max-h-[600px] overflow-auto rounded-xl bg-slate-950 p-4">
                    <pre className="whitespace-pre-wrap text-xs text-green-300">
                      {JSON.stringify(data, null, 2)}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="p-5">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-sm text-slate-500">{title}</p>
            <p className="mt-2 break-all text-2xl font-bold text-slate-900">{value}</p>
          </div>
          <div className="rounded-2xl bg-slate-100 p-3 text-slate-700">{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
}