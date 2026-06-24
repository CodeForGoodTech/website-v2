
"use client";

import { useEffect, useMemo, useState } from "react";
import * as XLSX from "xlsx";
import { Link } from "react-router-dom";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PAGE_SIZE = 9;

export default function DMP2024ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const [techStack, setTechStack] = useState("ALL TECH STACK");
  const [domain, setDomain] = useState("ALL DOMAIN");
  const [track, setTrack] = useState("ALL TRACK");
  const [organization, setOrganization] =
    useState("ALL ORGANISATION");

  useEffect(() => {
    loadExcel();
  }, []);

  async function loadExcel() {
    try {
      const response = await fetch(
        "/c4gt_projects_2024_detailed.xlsx"
      );

      const buffer = await response.arrayBuffer();

      const workbook = XLSX.read(buffer, {
        type: "array",
      });

      const sheet =
        workbook.Sheets[
          workbook.SheetNames[0]
        ];

      const json =
        XLSX.utils.sheet_to_json(sheet);

      const formatted = json.map((row) => ({
        projectName:
          row["Project Name"] || "",

        organization:
          row["Organization / Partner"] ||
          "",

        contributor:
          row["Contributor Name"] || "",

        mentor:
          row["Mentor Name"] || "",

        techStack:
          row["Tech Stack"] || "",

        track:
          row["Category / Track"] || "",

        domain:
          row["Domain"] || "",

        projectUrl:
          row["Project URL"] || "",

        topHeader:
          row["Top Header"] ||
          row["Organization / Partner"] ||
          "",

        logo:
          row["Logo"] || "",
      }));

      setProjects(formatted);
    } catch (error) {
      console.error(error);
    }
  }

  const techOptions = [
    "ALL TECH STACK",
    ...new Set(
      projects.flatMap((p) =>
        p.techStack
          ?.split(",")
          .map((s) => s.trim())
          .filter(Boolean)
      )
    ),
  ];

  const domainOptions = [
    "ALL DOMAIN",
    ...new Set(
      projects
        .map((p) => p.domain)
        .filter(Boolean)
    ),
  ];

  const trackOptions = [
    "ALL TRACK",
    ...new Set(
      projects
        .map((p) => p.track)
        .filter(Boolean)
    ),
  ];

  const orgOptions = [
    "ALL ORGANISATION",
    ...new Set(
      projects
        .map((p) => p.organization)
        .filter(Boolean)
    ),
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const techMatch =
        techStack === "ALL TECH STACK" ||
        project.techStack?.includes(
          techStack
        );

      const domainMatch =
        domain === "ALL DOMAIN" ||
        project.domain === domain;

      const trackMatch =
        track === "ALL TRACK" ||
        project.track === track;

      const orgMatch =
        organization ===
          "ALL ORGANISATION" ||
        project.organization ===
          organization;

      return (
        techMatch &&
        domainMatch &&
        trackMatch &&
        orgMatch
      );
    });
  }, [
    projects,
    techStack,
    domain,
    track,
    organization,
  ]);

  return (
   <section className="py-10 bg-[#f7f7f7]">
  <div className="max-w-[1240px] mx-auto px-6">

    {/* TECH STACK */}

    <div className="bg-[#f4e8f0] rounded-full h-[72px] px-3 flex items-center gap-2 overflow-x-auto mb-8">
      {techOptions.map((item) => (
        <Button
          key={`tech-${item}`}
          variant="ghost"
          className={`rounded-full shrink-0 h-[52px] px-8 text-[15px] font-semibold ${
            techStack === item
              ? "bg-[#98006d] text-white hover:bg-[#98006d]"
              : "hover:bg-transparent"
          }`}
          onClick={() => setTechStack(item)}
        >
          {item}
        </Button>
      ))}
    </div>

    {/* DOMAIN TRACK ORG */}

    <div className="grid md:grid-cols-3 gap-8 mb-14">

      <div className="bg-[#f4e8f0] rounded-full h-[70px] px-3 flex items-center gap-2 overflow-x-auto">
        {domainOptions.map((item) => (
          <Button
            key={`domain-${item}`}
            variant="ghost"
            className={`rounded-full shrink-0 h-[52px] px-8 text-[15px] font-semibold ${
              domain === item
                ? "bg-[#98006d] text-white hover:bg-[#98006d]"
                : ""
            }`}
            onClick={() => setDomain(item)}
          >
            {item}
          </Button>
        ))}
      </div>

      <div className="bg-[#f4e8f0] rounded-full h-[70px] px-3 flex items-center gap-2 overflow-x-auto">
        {trackOptions.map((item) => (
          <Button
            key={`track-${item}`}
            variant="ghost"
            className={`rounded-full shrink-0 h-[52px] px-8 text-[15px] font-semibold ${
              track === item
                ? "bg-[#98006d] text-white hover:bg-[#98006d]"
                : ""
            }`}
            onClick={() => setTrack(item)}
          >
            {item}
          </Button>
        ))}
      </div>

      <div className="bg-[#f4e8f0] rounded-full h-[70px] px-3 flex items-center gap-2 overflow-x-auto">
        {orgOptions.map((item) => (
          <Button
            key={`org-${item}`}
            variant="ghost"
            className={`rounded-full shrink-0 h-[52px] px-8 text-[15px] font-semibold ${
              organization === item
                ? "bg-[#98006d] text-white hover:bg-[#98006d]"
                : ""
            }`}
            onClick={() => setOrganization(item)}
          >
            {item}
          </Button>
        ))}
      </div>

    </div>

    {/* PROJECTS */}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {filteredProjects
        .slice(0, visibleCount)
        .map((project, idx) => {

          const slug =
            project.projectUrl
              ?.split("/")
              .filter(Boolean)
              .pop() || "";

          return (
            <Link
              key={
                project.projectUrl ||
                `${project.projectName}-${idx}`
              }
              to={`/dmp2024/${slug}`}
              className="block"
            >
              <Card
                className="
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-[#d8d2dc]
                  bg-white
                  shadow-sm
                  h-[550px]
                  flex
                  flex-col
                  hover:shadow-md
                  transition-shadow
                "
              >

                {/* TOP INFO */}

                <div className="px-8 pt-6 h-[130px]">

                  <h3 className="text-[18px] text-black mb-4">
                    {project.topHeader}
                  </h3>

                  <div className="space-y-5 text-[#4A638A] text-[14px]">

                    <div>
                      <span className="font-semibold">
                        Contributor Name –
                      </span>{" "}
                      {project.contributor}
                    </div>

                    <div>
                      <span className="font-semibold">
                        Mentor Name –
                      </span>{" "}
                      {project.mentor}
                    </div>

                  </div>

                </div>

                {/* LOGO */}

                <div className="h-[170px] flex items-center justify-center px-6">

                  {project.logo ? (
                    <img
                      src={project.logo}
                      alt={project.topHeader}
                      className="max-h-[150px] max-w-full object-contain"
                    />
                  ) : (
                    <div className="text-[56px] text-gray-400">
                      {project.topHeader}
                    </div>
                  )}

                </div>

                {/* PROJECT NAME */}

                <div className="bg-[#98006d] h-[38px] flex items-center justify-center px-4">

                  <p className="text-white text-center text-[13px] leading-tight">
                    {project.projectName}
                  </p>

                </div>

                {/* FOOTER */}

                <div className="px-8 py-6 text-[#4A638A] text-[14px] space-y-4 flex-1">

                  <p>{project.organization}</p>

                  <p>{project.track}</p>

                  <p>{project.techStack}</p>

                </div>

              </Card>
            </Link>
          );
        })}
    </div>

    {/* LOAD MORE */}

    {visibleCount < filteredProjects.length && (
      <div className="flex justify-center mt-14">

        <Button
          className="bg-[#98006d] hover:bg-[#7d0058] text-white px-8"
          onClick={() =>
            setVisibleCount(
              (prev) => prev + PAGE_SIZE
            )
          }
        >
          Load More
        </Button>

      </div>
    )}

  </div>
</section>
  );
}

