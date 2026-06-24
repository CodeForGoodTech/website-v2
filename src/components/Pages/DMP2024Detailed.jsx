"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as XLSX from "xlsx";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function DMP2024Detailed() {
  const { slug } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProject();
  }, [slug]);

  async function loadProject() {
    try {
      const response = await fetch("/c4gt_projects_2024_detailed.xlsx");

      const buffer = await response.arrayBuffer();

      const workbook = XLSX.read(buffer, {
        type: "array",
      });

      const sheet =
        workbook.Sheets[workbook.SheetNames[0]];

      const rows =
        XLSX.utils.sheet_to_json(sheet);

   const found = rows.find((row) => {
    console.log("Current slug:", slug);
  const projectUrl =
    row["Project URL"] || "";

  const excelSlug = projectUrl
    .toString()
    .trim()
    .split("/")
    .filter(Boolean)
    .pop()
    ?.toLowerCase();

  return (
    excelSlug ===
    slug
      .toString()
      .trim()
      .toLowerCase()
  );
});

      setProject(found || null);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto py-20 text-center text-xl">
        Loading...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto py-20 text-center text-xl">
        Project not found
      </div>
    );
  }

  return (
    <div className="bg-[#F4F8FD] min-h-screen">

      {/* OVERVIEW */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16">

          <div>

            <div className="mb-10">

              <h1 className="text-5xl font-bold text-[#2E3F5B] mb-4">
                {project["Project Name"]}
              </h1>

              <p className="text-2xl text-[#92016B] font-medium">
                {project["Organization / Partner"]}
              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">

              {project["Contributor Name"] && (
                <div>
                  <h3 className="font-semibold text-[#92016B] text-xl mb-2">
                    Contributor
                  </h3>

                  <p className="text-lg text-[#4A638A]">
                    {project["Contributor Name"]}
                  </p>
                </div>
              )}

              {project["Mentor Name"] && (
                <div>
                  <h3 className="font-semibold text-[#92016B] text-xl mb-2">
                    Mentor
                  </h3>

                  <p className="text-lg text-[#4A638A]">
                    {project["Mentor Name"]}
                  </p>
                </div>
              )}

            </div>

            {project["Project Description"] && (
              <p className="text-xl text-[#4A638A] leading-10">
                {project["Project Description"]}
              </p>
            )}

          </div>

          {/* RIGHT SIDE DETAILS */}

          <div className="space-y-8">

            {project["Domain"] && (
              <div>
                <h3 className="text-[#92016B] font-semibold text-xl">
                  Domain
                </h3>

                <p className="text-lg text-[#4A638A] mt-2">
                  {project["Domain"]}
                </p>
              </div>
            )}

            {project["Category / Track"] && (
              <div>
                <h3 className="text-[#92016B] font-semibold text-xl">
                  Track
                </h3>

                <p className="text-lg text-[#4A638A] mt-2">
                  {project["Category / Track"]}
                </p>
              </div>
            )}

            {project["Tech Stack"] && (
              <div>
                <h3 className="text-[#92016B] font-semibold text-xl">
                  Tech Stack
                </h3>

                <p className="text-lg text-[#4A638A] mt-2">
                  {project["Tech Stack"]}
                </p>
              </div>
            )}

            {project["Geography"] && (
              <div>
                <h3 className="text-[#92016B] font-semibold text-xl">
                  Geography
                </h3>

                <p className="text-lg text-[#4A638A] mt-2">
                  {project["Geography"]}
                </p>
              </div>
            )}

            {project["End-user"] && (
              <div>
                <h3 className="text-[#92016B] font-semibold text-xl">
                  End User
                </h3>

                <p className="text-lg text-[#4A638A] mt-2">
                  {project["End-user"]}
                </p>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* LINKS */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold text-[#2E3F5B] mb-10">
          Project Resources
        </h2>

        <div className="flex flex-wrap gap-4">

          {project["Issue Ticket"] && (
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#92016B] text-[#92016B]"
            >
              <a
                href={project["Issue Ticket"]}
                target="_blank"
                rel="noreferrer"
              >
                Issue Ticket
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}

          {project["Progress Report"] && (
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#92016B] text-[#92016B]"
            >
              <a
                href={project["Progress Report"]}
                target="_blank"
                rel="noreferrer"
              >
                Progress Report
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}

          {project["Contributor Github"] && (
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#92016B] text-[#92016B]"
            >
              <a
                href={project["Contributor Github"]}
                target="_blank"
                rel="noreferrer"
              >
                Contributor GitHub
              </a>
            </Button>
          )}

          {project["Contributor Linkedin"] && (
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#92016B] text-[#92016B]"
            >
              <a
                href={project["Contributor Linkedin"]}
                target="_blank"
                rel="noreferrer"
              >
                Contributor LinkedIn
              </a>
            </Button>
          )}

          {project["Mentor Linkedin"] && (
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#92016B] text-[#92016B]"
            >
              <a
                href={project["Mentor Linkedin"]}
                target="_blank"
                rel="noreferrer"
              >
                Mentor LinkedIn
              </a>
            </Button>
          )}

        </div>
      </section>

    </div>
  );
}