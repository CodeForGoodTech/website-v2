"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as XLSX from "xlsx";

import { ArrowRight } from "lucide-react";
import PageHeroBanner from "../../PageHeroBanner";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function getOrgLogo(orgName) {
  if (!orgName) return null;
  const name = orgName.toLowerCase().trim();
  
  if (name.includes("open function") || name.includes("openfn")) {
    return "/downloaded-images/2024_10_Open_Function_logo.png";
  }
  if (name.includes("mifos")) {
    return "/downloaded-images/2024_10_Mifos_Initiative_logo.webp";
  }
  if (name.includes("planetread") || name.includes("planet read")) {
    return "/downloaded-images/2024_10_PlanetRead_logo-e1730096605747.jpeg";
  }
  if (name.includes("a2i")) {
    return "/downloaded-images/2024_10_a2i_logo.png";
  }
  if (name.includes("tattle")) {
    return "/downloaded-images/2024_10_Tattle_logo.png";
  }
  if (name.includes("bhashini")) {
    return "/downloaded-images/2024_10_Bhashini_logo.webp";
  }
  if (name.includes("convegenius") || name.includes("conve genius")) {
    return "/downloaded-images/2024_10_Convegenius_logo.png";
  }
  if (name.includes("dhiway")) {
    return "/downloaded-images/2024_02_Dhiway.webp";
  }
  if (name.includes("mojaloop")) {
    return "/downloaded-images/2024_10_Mojaloop_logo.png";
  }
  if (name.includes("samagra")) {
    return "/downloaded-images/2024_10_SamagraX_logo.png";
  }
  if (name.includes("samanvay")) {
    return "/downloaded-images/2024_02_samanvay-v2.png";
  }
  if (name.includes("national health authority") || name.includes("nha")) {
    return "/downloaded-images/2024_02_National-Health-Authority-.webp";
  }
  if (name.includes("ekstep")) {
    return "/downloaded-images/2024_02_EKStep_Logo.png";
  }
  if (name.includes("win over cancer")) {
    return "/downloaded-images/2024_10_Win_over_cancer_logo.jpg";
  }
  if (name.includes("dimagi")) {
    return "/downloaded-images/2024_10_Dimagi_logo.webp";
  }
  if (name.includes("tekdi")) {
    return "/downloaded-images/2024_10_Tekdi_logo.png";
  }
  if (name.includes("unicef")) {
    return "/downloaded-images/2024_10_UNICEF_logo.png";
  }
  if (name.includes("policyengine") || name.includes("policy engine")) {
    return "/downloaded-images/2024_10_PolicyEngine_logo.png";
  }
  if (name.includes("avanti fellows") || name.includes("avanti")) {
    return "/downloaded-images/2024_10_Avanti_Fellows_logo.jpg";
  }
  if (name.includes("fide")) {
    return "/downloaded-images/2024_10_FIDE_logo.jpg";
  }
  if (name.includes("reap benefit") || name.includes("reapbenefit")) {
    return "/downloaded-images/2024_10_Reap_benefit_logo-removebg-preview.png";
  }
  if (name.includes("shikshalokam") || name.includes("shiksha lokam")) {
    return "/downloaded-images/2024_10_Shikshalokam_logo.png";
  }
  if (name.includes("swasth")) {
    return "/downloaded-images/2024_10_Swasth_Alliance_logo.png";
  }
  if (name.includes("tech4dev") || name.includes("tech 4 dev")) {
    return "/downloaded-images/2024_10_Project_Tech4Dev_logo-scaled.webp";
  }
  if (name.includes("piramal")) {
    return "/downloaded-images/2024_10_Piramal_Swasthya_logo.jpg";
  }
  if (name.includes("arghyam")) {
    return "/downloaded-images/2024_10_Arghyam_logo.png";
  }
  if (name.includes("belongg")) {
    return "/downloaded-images/2024_10_Belongg_logo.png";
  }
  if (name.includes("idinsight") || name.includes("id insight")) {
    return "/downloaded-images/2024_10_IDinsight_logo.jpg";
  }
  if (name.includes("haqdarshak")) {
    return "/downloaded-images/2024_10_Haqdarshak_logo.png";
  }
  if (name.includes("sugarlabs") || name.includes("sugar labs")) {
    return "/downloaded-images/2024_10_Sugarlabs_logo.png";
  }
  if (name.includes("egov")) {
    return "/downloaded-images/2024_10_eGov_logo.png";
  }
  if (name.includes("zendalona")) {
    return "/downloaded-images/2024_10_Zendalona_logo.jpeg";
  }
  if (name.includes("meity")) {
    return "/downloaded-images/2024_10_MeitY_logo.png";
  }
  if (name.includes("thoughtworks") || name.includes("thought works")) {
    return "/downloaded-images/2024_10_thoughtworks_logo.jpg";
  }
  if (name.includes("digital green") || name.includes("digitalgreen")) {
    return "/downloaded-images/2024_10_Digital_green_logo.webp";
  }
  
  return null;
}

function parseTakeaways(takeawaysVal) {
  if (!takeawaysVal) return [];
  if (Array.isArray(takeawaysVal)) return takeawaysVal;
  if (typeof takeawaysVal === "string") {
    return takeawaysVal
      .split(/\r?\n/)
      .map((t) => t.replace(/^\d+[\.\)]\s*/, "").trim())
      .filter(Boolean);
  }
  return [];
}

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

      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(sheet);

      const found = rows.find((row) => {
        const projectUrl = row["Project URL"] || "";
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

  const cleanSlug = slug.toLowerCase().trim();
  const logoUrl = project["Logo"] || getOrgLogo(project["Organization / Partner"]);

  // Resolve values dynamically directly from populated Excel sheet
  const contributorBio = project["Contributor Bio"] || "";
  const mentorBio = project["Mentor Bio"] || "";
  const contributorPhoto = project["Contributor Image"] || "";
  const mentorPhoto = project["Mentor Image"] || "";
  const videoUrl = project["Video URL"] || "";
  const mentorVideoUrl = project["Mentor Video URL"] || "";
  const rawTakeaways = project["Key Impact Takeaways"] || "";

  const takeaways = parseTakeaways(rawTakeaways);

  return (
    <div className="bg-white min-h-screen">
      {/* HERO BANNER */}
      <PageHeroBanner
        title={project["Top Header"] || project["Project Name"]}
        currentPage={project["Top Header"] || project["Project Name"]}
        backgroundImage="/assets/external/Group-1244830747-3.png"
      />

      {/* DETAILS GRID */}
      <main className="max-w-[1200px] mx-auto px-4 py-[60px] font-sans text-[#415674]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Contributor & Mentor */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 pb-4 border-b border-gray-100">
              <div>
                <h4 className="font-['Raleway'] font-bold text-[#1b2336] text-[18px] mb-1">Contributor :</h4>
                <p className="text-[#415674] text-[16px]">{project["Contributor Name"]}</p>
              </div>
              <div>
                <h4 className="font-['Raleway'] font-bold text-[#1b2336] text-[18px] mb-1">Mentor :</h4>
                <p className="text-[#415674] text-[16px]">{project["Mentor Name"]}</p>
              </div>
            </div>

            {/* Project Description */}
            <p className="text-[#415674] text-[16px] leading-[1.667] font-normal mb-8">
              {project["Project Description"]}
            </p>

            {/* Badges Stacked */}
            <div className="space-y-4 mb-8">
              {project["Domain"] && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-['Raleway'] font-bold text-[#880163] text-[16px] min-w-[120px]">Domain :</span>
                  <span className="bg-[#eff5fa] text-[#415674] px-4 py-1.5 rounded-[8px] text-[15px] font-medium inline-block w-fit">
                    {project["Domain"]}
                  </span>
                </div>
              )}
              {project["Geography"] && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-['Raleway'] font-bold text-[#880163] text-[16px] min-w-[120px]">Geography :</span>
                  <span className="bg-[#eff5fa] text-[#415674] px-4 py-1.5 rounded-[8px] text-[15px] font-medium inline-block w-fit">
                    {project["Geography"]}
                  </span>
                </div>
              )}
              {project["End-user"] && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-['Raleway'] font-bold text-[#880163] text-[16px] min-w-[120px]">End-user :</span>
                  <span className="bg-[#eff5fa] text-[#415674] px-4 py-1.5 rounded-[8px] text-[15px] font-medium inline-block w-fit">
                    {project["End-user"]}
                  </span>
                </div>
              )}
              {project["Category / Track"] && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-['Raleway'] font-bold text-[#880163] text-[16px] min-w-[120px]">Track :</span>
                  <span className="bg-[#eff5fa] text-[#415674] px-4 py-1.5 rounded-[8px] text-[15px] font-medium inline-block w-fit">
                    {project["Category / Track"]}
                  </span>
                </div>
              )}
              {project["Tech Stack"] && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-['Raleway'] font-bold text-[#880163] text-[16px] min-w-[120px]">Tech Stack :</span>
                  <span className="bg-[#eff5fa] text-[#415674] px-4 py-1.5 rounded-[8px] text-[15px] font-medium inline-block w-fit">
                    {project["Tech Stack"]}
                  </span>
                </div>
              )}
            </div>

            {/* Outline Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {project["Issue Ticket"] && (
                <a
                  href={project["Issue Ticket"]}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-[#880163] text-[#880163] hover:bg-[#880163] hover:text-white transition-colors duration-200 px-6 py-2.5 rounded-full font-bold text-[15px]"
                >
                  Issue Ticket
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
              {project["Progress Report"] && (
                <a
                  href={project["Progress Report"]}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-[#880163] text-[#880163] hover:bg-[#880163] hover:text-white transition-colors duration-200 px-6 py-2.5 rounded-full font-bold text-[15px]"
                >
                  Contributor Progress Report
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
              {project["Contributor Github"] && (
                <a
                  href={project["Contributor Github"]}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-[#880163] text-[#880163] hover:bg-[#880163] hover:text-white transition-colors duration-200 px-6 py-2.5 rounded-full font-bold text-[15px]"
                >
                  Contributor GitHub
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
              {project["Contributor Linkedin"] && (
                <a
                  href={project["Contributor Linkedin"]}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-[#880163] text-[#880163] hover:bg-[#880163] hover:text-white transition-colors duration-200 px-6 py-2.5 rounded-full font-bold text-[15px]"
                >
                  Contributor LinkedIn
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
              {project["Mentor Linkedin"] && (
                <a
                  href={project["Mentor Linkedin"]}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-[#880163] text-[#880163] hover:bg-[#880163] hover:text-white transition-colors duration-200 px-6 py-2.5 rounded-full font-bold text-[15px]"
                >
                  Mentor LinkedIn
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="w-full max-w-[280px] p-6 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center justify-center min-h-[220px] h-fit">
              {logoUrl ? (
                <img
                  src={logoUrl}
                  alt={project["Organization / Partner"]}
                  className="max-h-[160px] max-w-full object-contain"
                />
              ) : (
                <div className="text-[32px] font-bold text-[#880163] text-center">
                  {project["Organization / Partner"]}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* PROFILES AND TAKEAWAYS */}
      {(contributorBio || mentorBio || (takeaways && takeaways.length > 0)) && (
        <section className="w-full bg-[#EEF2F6] py-[60px] mt-[50px] relative overflow-hidden">
          {/* Decorative patterns */}
          <div className="absolute top-[20px] left-[20px] opacity-10 pointer-events-none">
            <img src="/assets/external/Pattern-1.png" alt="" width="120" />
          </div>
          <div className="absolute bottom-[20px] right-[20px] opacity-10 pointer-events-none">
            <img src="/assets/external/Pattern.png" alt="" width="100" />
          </div>

          <div className="max-w-[1200px] mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left Side: About Contributor & About Mentor */}
              <div className="lg:w-2/3 space-y-12">
                {/* Contributor Profile */}
                {contributorBio && (
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    {contributorPhoto && (
                      <img
                        src={contributorPhoto}
                        alt={project["Contributor Name"]}
                        className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] object-cover rounded-[16px] shrink-0 shadow-sm"
                      />
                    )}
                    <div className="space-y-3">
                      <h2 className="font-['Raleway'] font-bold text-[#880163] text-[24px]">About Contributor</h2>
                      <p className="text-[#415674] text-[16px] leading-[1.6]">
                        {contributorBio}
                      </p>
                      <div className="flex gap-4 pt-1">
                        {project["Contributor Github"] && (
                          <a href={project["Contributor Github"]} target="_blank" rel="noreferrer" className="text-[#880163] text-xl hover:opacity-85">
                            <FaGithub />
                          </a>
                        )}
                        {project["Contributor Linkedin"] && (
                          <a href={project["Contributor Linkedin"]} target="_blank" rel="noreferrer" className="text-[#880163] text-xl hover:opacity-85">
                            <FaLinkedinIn />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Mentor Profile */}
                {mentorBio && (
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    {mentorPhoto && (
                      <img
                        src={mentorPhoto}
                        alt={project["Mentor Name"]}
                        className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] object-cover rounded-[16px] shrink-0 shadow-sm"
                      />
                    )}
                    <div className="space-y-3">
                      <h2 className="font-['Raleway'] font-bold text-[#880163] text-[24px]">About Mentor</h2>
                      <p className="text-[#415674] text-[16px] leading-[1.6]">
                        {mentorBio}
                      </p>
                      <div className="flex gap-4 pt-1">
                        {project["Mentor Linkedin"] && (
                          <a href={project["Mentor Linkedin"]} target="_blank" rel="noreferrer" className="text-[#880163] text-xl hover:opacity-85">
                            <FaLinkedinIn />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Side: Key Takeaways */}
              {takeaways && takeaways.length > 0 && (
                <div className="lg:w-1/3">
                  <h2 className="font-['Raleway'] font-bold text-[#1b2336] text-[24px] mb-6">Key Impact Takeaways:</h2>
                  <ol className="space-y-4">
                    {takeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex gap-3 text-[16px] text-[#415674] leading-[1.5]">
                        <span className="font-bold text-[#880163] text-[18px] shrink-0">{idx + 1}.</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* VIDEO SECTION */}
      {(videoUrl || mentorVideoUrl) && (
        <section className="max-w-[1200px] mx-auto px-4 py-[60px] space-y-12">
          {videoUrl && (
            <div>
              <h2 className="font-['Raleway'] font-bold text-[#1b2336] text-[30px] text-center mb-8">Contributor Experience</h2>
              <div className="w-full max-w-[640px] aspect-video mx-auto rounded-lg overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
                <iframe
                  src={videoUrl}
                  title="Contributor Experience Video"
                  className="w-full h-full border-none"
                  allowFullScreen
                />
              </div>
            </div>
          )}
          {mentorVideoUrl && (
            <div>
              <h2 className="font-['Raleway'] font-bold text-[#1b2336] text-[30px] text-center mb-8">Mentor Experience</h2>
              <div className="w-full max-w-[640px] aspect-video mx-auto rounded-lg overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
                <iframe
                  src={mentorVideoUrl}
                  title="Mentor Experience Video"
                  className="w-full h-full border-none"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
}