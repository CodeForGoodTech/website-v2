import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import PageHeroBanner from "../PageHeroBanner";
import alumniicon from "@/assets/alumni.svg";
import facultyicon from "@/assets/faculty.svg";
import studenticon from "@/assets/student.svg";
import meriticon from "@/assets/merit.svg";
import img1 from "@/assets/hubs/image1.png"
import img2 from "@/assets/hubs/image.png"
import student from "@/assets/hubs/students.svg";
import internship from "@/assets/hubs/internship.svg";
import graduation from "@/assets/hubs/graduation.svg";
// ==============================
// DATA
// ==============================

const introImages = [
  img1,
  img2
];

const impactStats = [
  {
    id: 1,
    title: "2nd Year",
    icon: student,
    history: [
      { year: "2024-2025", val: 1095, pct: 100 },
      { year: "2023-2024", val: 1095, pct: 100 },
      { year: "2022-2023", val: 467, pct: 43 },
    ],
  },
  {
    id: 2,
    title: "3rd Year",
    icon: student,
    history: [
      { year: "2024-2025", val: 55, pct: 100 },
      { year: "2023-2024", val: 55, pct: 100 },
      { year: "2022-2023", val: 51, pct: 93 },
    ],
  },
  {
    id: 3,
    title: "4th Year",
    icon: student,
    history: [
      { year: "2024-2025", val: 45, pct: 100 },
      { year: "2023-2024", val: 45, pct: 100 },
      { year: "2022-2023", val: 24, pct: 53 },
    ],
  },
  {
    id: 4,
    title: "Capstone Internship",
    icon: internship,
    history: [
      { year: "2024-2025", val: 9, pct: 100 },
      { year: "2023-2024", val: 9, pct: 100 },
      { year: "2022-2023", val: 8, pct: 89 },
    ],
  },
  {
    id: 5,
    title: "Placements",
    icon: graduation,
    history: [
      { year: "2024-25", val: 26, pct: 100 },
      { year: "2023-24", val: 18, pct: 69 },
      { year: "2022-23", val: 16, pct: 61 },
    ],
  },
];

const journeyCards = [
  {
    badge: "2nd Year Students",
    title: "Foundations & Screening",
    focus: "Building readiness",
    list: [
      "Core technical foundations",
      "Hands-on, practice-based learning",
      "Screening for commitment and skill potential",
    ],
    gradient: "from-[#8f005d] to-[#a30073]",
  },
  {
    badge: "3rd Year Students",
    title: "Junior Developer Interns",
    focus: "Applied skills & engineering discipline",
    list: [
      "AI/ML fundamentals",
      "Git, GitHub & collaborative workflows",
      "Project execution and delivery practices",
    ],
    gradient: "from-[#830055] to-[#a10070]",
  },
  {
    badge: "4th Year Students",
    title: "Senior Developers / Team Lead Interns",
    focus: "Leadership & advanced engineering",
    list: [
      "Solution Architecture & System Design",
      "DevOps & Engineering",
      "MLOps & Deployment",
      "Leading teams on projects",
    ],
    gradient: "from-[#67003f] to-[#950061]",
  },
  {
    badge: "Working Professionals",
    title: "Mentorship & Community Leaders",
    focus: "Giving back & strengthening the ecosystem",
    list: [
      "Alumni step in as mentors for the next cohort",
      "Peer-led learning and community-driven growth",
    ],
    gradient: "from-[#870057] to-[#a00072]",
    bordered: true,
  },
];

const teamRoles = [
  {
    year: "3rd Year:",
    role: "Junior Developers",
    desc: "Focus on implementing features, writing code, and building engineering fundamentals under the guidance of seniors and mentors.",
    bg: "linear-gradient(135deg, #c8a9e0 0%, #dcc5ea 100%)",
    textColor: "#2d1b4e",
    icons: [
      "/downloaded-images/2025_12_4thsdfmdev.svg",
      "/downloaded-images/2025_12_4hsdmdev.svg",
      "/downloaded-images/2025_12_4hsdmdev.svg",
      "/downloaded-images/2025_12_4thsdfmdev.svg",
    ],
  },
  {
    year: "4th Year:",
    role: "Senior Developers",
    desc: "Take ownership of critical modules, support junior developers, and help maintain engineering discipline across the project.",
    bg: "linear-gradient(135deg, #9370db 0%, #b695d4 100%)",
    textColor: "white",
    icons: [
      "/downloaded-images/2025_12_4hsdmdev.svg",
      "/downloaded-images/2025_12_4thsdfmdev.svg",
    ],
  },
  {
    year: "4th Year:",
    role: "Team Lead",
    desc: "Oversees the team’s progress, coordinates tasks, and ensures smooth execution. Acts as the primary bridge between mentors and the student team.",
    bg: "linear-gradient(135deg, #b695d4 0%, #c8a9e0 100%)",
    textColor: "#2d1b4e",
    icons: ["/downloaded-images/2025_12_4thfdev.svg"],
  },
  {
    year: "Working Professional:",
    role: "Project Mentor",
    desc: "Guides the team with technical direction, reviews, and best practices. Helps students align their work with real-world expectations.",
    bg: "linear-gradient(135deg, #ffd60a 0%, #ffed4e 100%)",
    textColor: "#1a1a1a",
    icons: ["/downloaded-images/2025_12_4hsdmdev.svg"],
  },
];

const requirements = [
  {
    title: "Dedicated Workspace",
    icon: "/downloaded-images/2025_12_dedicated_workspace.svg",
  }, 
  {
    title: "Faculty In-Charge & Operational Support",
   // icon: "https://codeforgoodtech.in/wp-content/uploads/2025/12/faculty.svg",
   icon:facultyicon,
  },
  {
    title: "Student Identification & Screening",
    icon: studenticon,
  },
  {
    title: "Alumni Involvement",
    icon: alumniicon,
  },
  {
    title: "Administrative & Academic Alignment",
    icon: meriticon,
  },
];

const offerings = [
  {
    title: "Structured Fellowship Curriculum",
    desc: "Year-wise learning pathways (2nd to 4th year) with clearly defined skills and project-based training.",
    extra: "Full-stack • AI/ML • GitHub workflows • DevOps • MLOps • Solution Design",
    icon: "/downloaded-images/2025_12_dedicated_workspace.svg",
  },
  {
    title: "Expert Mentorship",
    desc: "Weekly guidance from Tutor Mentors + milestone reviews by Project Mentors from industry, research labs, and top open-source teams.",
    icon: "/downloaded-images/2025_12_expertmentor.svg",
  },
  {
    title: "Real Social-Impact Projects",
    desc: "Curated problem statements from NGOs, government bodies, and academic partners. Students build solutions that actually get deployed and make a difference.",
    icon: "/downloaded-images/2025_12_realsocial.svg",
  },
  {
    title: "Team Structure & Leadership Development",
    desc: "Multi-year engineering squads with rotating leadership roles. Students master code reviews, standups, sprint planning, and real engineering culture.",
    icon: "/downloaded-images/2025_12_leadership.svg",
  },
  {
    title: "Capstone Opportunities",
    desc: "Top final-year performers earn 5–6 month paid internships with industry partners, research labs, and advanced open-source tracks.",
    icon: "/downloaded-images/2025_12_administartive.svg",
  },
];

const benefits = [
  {
    title: "For Students",
    list: [
      "Real-world AI/ML & full-stack experience",
      "Hands-on projects & open-source contributions",
      "Mentorship by industry experts & alumni",
      "Soft skills & engineering discipline",
      "Job-ready portfolio by final year",
      "Exposure to tech-for-good projects",
      "Placement readiness & industry visibility",
    ],
  },
  {
    title: "For Organizations",
    list: [
      "Access to a pre-trained, industry-ready talent pool.",
      "Organization-centric model where interns work on your priority areas.",
      "Full-time intern engagement for a period of 6 months",
      "Structured collaboration: clear scoping, mentoring, reviews, and final evaluation",
    ],
  },
  {
    title: "For Colleges",
    list: [
      "Higher Placement Outcomes",
      "Recognition as a Technology & Innovation Hub",
      "Access to Advanced Training & Mentorship",
      "Opportunity for Real-World Project Showcase",
      "Alumni Engagement & Mentorship Culture",
      "Better Student Retention & Learning Outcomes",
    ],
  },
];

// ==============================
// SMALL COMPONENTS
// ==============================

function SectionHeading({ title, description, className = "" }) {
  return (
    <div className={`mx-auto mb-10 max-w-4xl text-center ${className}`}>
      <h2
        className="text-[32px] md:text-[34px]"
        style={{
          fontFamily: '"Raleway", sans-serif',
          fontWeight: 500,
          lineHeight: 1.28,
          color: "#880163",
          margin: 0,
          letterSpacing: "0px",
        }}
      >
        {title}
      </h2>

      {description ? (
        <p
          className="mx-auto mt-4 max-w-3xl"
          style={{
            fontFamily: '"Nunito Sans", sans-serif',
            fontSize: "17px",
            lineHeight: 1.8,
            fontWeight: 400,
            color: "#415674",
            margin: 0,
          }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function IconCard({ title, icon, optional = false }) {
  return (
    <Card
      className="border-0 bg-white rounded-[18px]"
      style={{ boxShadow: "5px 5px 180px 6px rgba(0,0,0,0.06)" }}
    >
      <CardContent className="flex flex-col items-center px-6 py-8 text-center">
        <div className="mb-5 flex h-[68px] w-[68px] items-center justify-center rounded-[16px] bg-[#880163] p-4">
          <img
            src={icon}
            alt={title}
            className="h-full w-full object-contain brightness-0 invert"
          />
        </div>

        <h3
          style={{
            fontFamily: '"Raleway", sans-serif',
            fontSize: "20px",
            lineHeight: 1.35,
            fontWeight: 600,
            color: "#1b2336",
            margin: 0,
          }}
        >
          {title}
        </h3>

        {optional ? (
          <Badge className="mt-3 rounded-full bg-[#fef3c7] px-3 py-1 text-[11px] font-semibold text-[#92400e] hover:bg-[#fef3c7]">
            Optional
          </Badge>
        ) : null}
      </CardContent>
    </Card>
  );
}

// ==============================
// PAGE
// ==============================

export default function C4GTHubs() {
  const [animateCharts, setAnimateCharts] = useState(false);
  const [currentIntroImage, setCurrentIntroImage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateCharts(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIntroImage((prev) => (prev + 1) % introImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;600;700&family=Nunito+Sans:wght@400;500;600&display=swap');
      `}</style>

      <main
        className="min-h-screen bg-white"
        style={{
          fontFamily: '"Nunito Sans", sans-serif',
          color: "#415674",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        {/* ============================== */}
        {/* HERO BANNER */}
        {/* ============================== */}
        <PageHeroBanner title="C4GT Hub" currentPage="C4GT Hub" />

        {/* ============================== */}
        {/* BREADCRUMB */}
        {/* ============================== */}
        {/* <section className="bg-white border-b border-[#dcdcdc]">
          <div className="mx-auto max-w-[1260px] px-4 md:px-[18px] py-[18px]">
            <div
              className="flex items-center gap-3"
              style={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: "16px",
                lineHeight: "30px",
                fontWeight: 600,
              }}
            >
              <span style={{ color: "#1b2336" }}>Home</span>
              <span style={{ color: "#9aa3b2" }}>›</span>
              <span style={{ color: "#880163" }}>C4GT Hub</span>
            </div>
          </div>
        </section> */}

        {/* ============================== */}
        {/* INTRO */}
        {/* ============================== */}
        <section className="bg-[#f8f9fa] border-t border-[#e1e1e1]">
          <div className="mx-auto max-w-[1260px] px-4 md:px-[18px] pt-[46px] md:pt-[52px] pb-[46px]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-[28px] md:gap-[34px] items-start">
              {/* LEFT */}
              <div>
                <h2
                  className="mb-[2px]"
                  style={{
                    fontFamily: '"Nunito Sans", sans-serif',
                    fontSize: "36px",
                    lineHeight: 1.24,
                    fontWeight: 500,
                    color: "#880163",
                    marginTop: 0,
                    letterSpacing: "0px",
                  }}
                >
                  C4GT Hub – Code 4 Good Tech Hub
                </h2>

                <h5
                  className="mb-[10px]"
                  style={{
                    fontFamily: '"Raleway", sans-serif',
                    fontSize: "20px",
                    lineHeight: 1.45,
                    fontWeight: 500,
                    color: "#BE9C06",
                    marginTop: 0,
                    letterSpacing: "0px",
                  }}
                >
                  Building the next generation of tech-for-good talent
                </h5>

                <div className="space-y-[18px]">
                  <p
                    style={{
                      fontFamily: '"Nunito Sans", sans-serif',
                      fontSize: "17px",
                      lineHeight: 1.85,
                      fontWeight: 400,
                      color: "#415674",
                      margin: 0,
                    }}
                  >
                    The C4GT Hubs is a multi-year initiative by RCTS, IIIT Hyderabad,
                    designed to build a sustainable tech talent pipeline from Tier 2
                    and Tier 3 engineering institutions through a hub-and-spoke
                    model. IIIT Hyderabad serves as the anchor hub, with partner
                    colleges as regional spokes, a model successfully implemented
                    over the past four years with Kakinada Institute of Engineering
                    and Technology (KIET).
                  </p>

                  <p
                    style={{
                      fontFamily: '"Nunito Sans", sans-serif',
                      fontSize: "17px",
                      lineHeight: 1.85,
                      fontWeight: 400,
                      color: "#415674",
                      margin: 0,
                    }}
                  >
                    Students are engaged from their 2nd to 4th year through
                    structured coursework in AI/ML, full-stack development,
                    open-source practices, and real-world problem solving. The
                    fellowship culminates in a six-month, full-time paid capstone
                    internship in the final year with tech-for-good organizations,
                    enabling a clear transition from learning to meaningful
                    employment.
                  </p>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="pt-[78px] md:pt-[84px] lg:pt-[72px]">
                <Card
                  className="overflow-hidden rounded-[2px] bg-white shadow-none"
                  style={{
                    border: "1px solid #d8d8d8",
                    boxShadow: "none",
                  }}
                >
                  <CardContent className="relative p-0">
                    <div className="relative aspect-[1.48/1] w-full overflow-hidden">
                      {introImages.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`C4GT Hub ${idx + 1}`}
                          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                            idx === currentIntroImage ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="absolute bottom-[8px] left-1/2 z-10 flex -translate-x-1/2 gap-[10px]">
                      {introImages.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setCurrentIntroImage(idx)}
                          className="rounded-full transition-all"
                          style={{
                            width: idx === currentIntroImage ? "8px" : "6px",
                            height: idx === currentIntroImage ? "8px" : "6px",
                            backgroundColor:
                              idx === currentIntroImage ? "#880163" : "#c8c8c8",
                            border: "none",
                            padding: 0,
                          }}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ============================== */}
        {/* IMPACT */}
        {/* ============================== */}
        <section className="bg-[#f8f9fa] pt-[18px] pb-[72px]">
          <div className="mx-auto max-w-[1260px] px-4 md:px-[18px]">
            <div className="text-center mb-[34px]">
              <h2
                style={{
                  fontFamily: '"Raleway", sans-serif',
                  fontSize: "34px",
                  lineHeight: 1.28,
                  fontWeight: 500,
                  color: "#880163",
                  margin: 0,
                }}
                className="text-[30px] md:text-[34px]"
              >
                C4GT Hub @ KIET - 3 Year Impact
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {impactStats.map((stat) => (
                <Card
                  key={stat.id}
                  className="rounded-[16px] border-0 bg-white"
                  style={{
                    boxShadow: "5px 5px 180px 6px rgba(0,0,0,0.06)",
                  }}
                >
                  <CardContent className="p-5">
                    <div
                      className="mb-4 text-center"
                      style={{
                        borderBottom: "3px solid #1B2336",
                        paddingBottom: "14px",
                      }}
                    >
                      <div
                        className="mx-auto mb-3 flex items-center justify-center rounded-[10px]"
                        style={{
                          width: "40px",
                          height: "40px",
                          background: "#c3395b",
                        }}
                      >
                        <img
                          src={stat.icon}
                          alt={stat.title}
                          className="h-[22px] w-[22px] object-contain"
                        />
                      </div>

                      <h3
                        style={{
                          fontFamily: '"Raleway", sans-serif',
                          fontSize: "16px",
                          lineHeight: 1.35,
                          fontWeight: 600,
                          color: "#1B2336",
                          margin: 0,
                        }}
                      >
                        {stat.title}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {stat.history.map((h, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div
                            style={{
                              width: "78px",
                              flexShrink: 0,
                              textAlign: "right",
                              fontFamily: '"Nunito Sans", sans-serif',
                              fontSize: "12px",
                              fontWeight: 600,
                              color: "#555",
                            }}
                          >
                            {h.year}
                          </div>

                          <div
                            className="h-8 flex-1 overflow-hidden rounded-[6px]"
                            style={{ background: "#f3f6f9" }}
                          >
                            <div
                              className="flex h-full items-center justify-end pr-2 transition-all duration-[1500ms]"
                              style={{
                                width: animateCharts ? `${h.pct}%` : "0%",
                                minWidth: animateCharts ? "36px" : "0px",
                                borderRadius: "6px",
                                background:
                                  "linear-gradient(135deg, #74d9e7 0%, #58c9dc 100%)",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: '"Nunito Sans", sans-serif',
                                  fontSize: "12px",
                                  fontWeight: 700,
                                  color: "#1b2336",
                                }}
                              >
                                {h.val}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== */}
        {/* JOURNEY - FIXED */}
        {/* ============================== */}
        <section className="bg-white py-[78px]">
          <div className="mx-auto max-w-[1260px] px-4 md:px-[18px]">
            <SectionHeading
              title="Year-wise Learning and Growth Pathway"
              description=""
              className="mb-[54px]"
            />

            <div className="relative">
              {/* horizontal connector line */}
              <div className="absolute left-0 right-0 top-[170px] hidden xl:block">
                <div className="mx-auto h-[10px] max-w-[1120px] rounded-full bg-[#8f6ec9]/70" />
              </div>

              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                {journeyCards.map((card, idx) => (
                  <div key={idx} className="relative">
                    <div
                      className={`relative overflow-visible rounded-[22px] bg-gradient-to-b ${card.gradient} px-7 pt-[84px] pb-[42px] text-white ${
                        card.bordered ? "border-[4px] border-[#7d63bf]" : ""
                      }`}
                      style={{
                        minHeight: "414px",
                        boxShadow: "0 20px 38px rgba(0,0,0,0.14)",
                      }}
                    >
                      {/* TOP YELLOW CIRCLE */}
                      <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
                        <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white shadow-[0_8px_18px_rgba(0,0,0,0.12)]">
                          <div className="h-[34px] w-[34px] rounded-full bg-[#f7c700]" />
                        </div>
                      </div>

                      {/* CARD CONTENT */}
                      <div>
                        <h3
                          className="mb-[10px]"
                          style={{
                            fontFamily: '"Raleway", sans-serif',
                            fontSize: "22px",
                            lineHeight: 1.28,
                            fontWeight: 700,
                            color: "#ffffff",
                            marginTop: 0,
                          }}
                        >
                          {card.title}
                        </h3>

                        <div
                          className="mb-5"
                          style={{
                            fontFamily: '"Nunito Sans", sans-serif',
                            fontSize: "16px",
                            lineHeight: 1.45,
                            fontWeight: 700,
                            color: "#ffffff",
                          }}
                        >
                          Focus: {card.focus}
                        </div>

                        <ul className="space-y-[12px]">
                          {card.list.map((item, i) => (
                            <li
                              key={i}
                              className="relative pl-7"
                              style={{
                                fontFamily: '"Nunito Sans", sans-serif',
                                fontSize: "14px",
                                lineHeight: 1.6,
                                fontWeight: 400,
                                color: "#ffffff",
                              }}
                            >
                              <span className="absolute left-0 top-[2px] h-[8px] w-[8px] rounded-full bg-[#ffd400]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* BOTTOM YEAR BADGE */}
                      <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 translate-y-1/2">
                        <div
                          className="rounded-full bg-white px-6 py-[10px] shadow-[0_10px_20px_rgba(0,0,0,0.12)]"
                          style={{
                            minWidth: "180px",
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Raleway", sans-serif',
                              fontSize: "13px",
                              lineHeight: 1.35,
                              fontWeight: 700,
                              color: "#6c53aa",
                            }}
                          >
                            {card.badge}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================== */}
        {/* HUB STRUCTURE */}
        {/* ============================== */}
        <section className="bg-white py-[72px]">
          <div className="mx-auto max-w-[1260px] px-4 md:px-[18px]">
            <SectionHeading
              title="Hub Structure"
              description="Hub operates through a structured team model that mirrors real engineering environments. Each team is designed to ensure continuous learning, responsibility sharing, and mentorship at multiple levels."
            />

            <div className="mx-auto max-w-[940px] space-y-8">
              {teamRoles.map((role, idx) => (
                <div key={idx} className="space-y-4">
                  <div
                    className="relative flex flex-col gap-5 overflow-hidden rounded-[20px] px-8 py-6 lg:flex-row lg:items-center lg:justify-between"
                    style={{
                      background: role.bg,
                      color: role.textColor,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    }}
                  >
                    <div className="absolute left-0 top-0 h-full w-[6px] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.4),transparent)]" />

                    <div>
                      <div
                        style={{
                          fontFamily: '"Raleway", sans-serif',
                          fontSize: "22px",
                          lineHeight: 1.35,
                          fontWeight: 600,
                        }}
                      >
                        <span
                          className="mr-1"
                          style={{
                            fontSize: "16px",
                            opacity: 0.85,
                            fontWeight: 500,
                          }}
                        >
                          {role.year}
                        </span>
                        {role.role}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 lg:justify-end">
                      {role.icons.map((icon, i) => (
                        <div key={i} className="rounded-[8px]">
                          <img
                            src={icon}
                            alt="Role icon"
                            className="h-12 w-12 rounded-[8px] object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <p
                    className="px-2"
                    style={{
                      fontFamily: '"Nunito Sans", sans-serif',
                      fontSize: "15px",
                      lineHeight: 1.8,
                      fontWeight: 400,
                      color: "#415674",
                      margin: 0,
                    }}
                  >
                    <strong style={{ fontWeight: 600 }}>
                      {role.year} {role.role}
                    </strong>
                    <br />
                    {role.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

       {/* ============================== */}
{/* REQUIREMENTS - FINAL ALIGNMENT FIX */}
{/* ============================== */}
<section className="bg-[#f6f6f7] py-[56px] md:py-[64px]">
  <div className="mx-auto w-full max-w-[1240px] px-4 md:px-6">
    {/* Heading */}
    <div className="mb-[34px] text-center">
      <h2
        className="m-0"
        style={{
          fontFamily: '"Raleway", sans-serif',
          fontSize: "clamp(34px, 3vw, 44px)",
          lineHeight: 1.22,
          fontWeight: 500,
          color: "#880163",
        }}
      >
        What We Need from Partner Colleges
      </h2>

      <p
        className="mx-auto mt-[16px] max-w-[920px]"
        style={{
          fontFamily: '"Nunito Sans", sans-serif',
          fontSize: "16px",
          lineHeight: "28px",
          fontWeight: 400,
          color: "#415674",
          marginBottom: 0,
        }}
      >
        Simple, clear support to help us build strong open-source development hubs on your campus
      </p>
    </div>

    {/* DESKTOP / TABLET EXACT LAYOUT */}
    <div className="hidden md:grid md:grid-cols-6 md:gap-x-[18px] md:gap-y-[20px]">
      {requirements.map((req, idx) => {
        const positionClass =
          idx === 0
            ? "col-span-2"
            : idx === 1
            ? "col-span-2"
            : idx === 2
            ? "col-span-2"
            : idx === 3
            ? "col-span-2 col-start-2"
            : "col-span-2 col-start-4";

        return (
          <div
            key={idx}
            className={`flex flex-col items-center bg-white text-center ${positionClass}`}
            style={{
              minHeight: "198px",
              borderRadius: "16px",
              border: "1px solid #d8d8d8",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              padding: "18px 22px 20px",
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: "82px",
                height: "82px",
                borderRadius: "8px",
                background: "#98006f",
                marginTop: "2px",
                marginBottom: "18px",
                flexShrink: 0,
              }}
            >
              <img
                src={req.icon}
                alt={req.title}
                className="object-contain brightness-0 invert"
                style={{
                  width: "46px",
                  height: "46px",
                }}
              />
            </div>

            <h3
              className="m-0"
              style={{
                fontFamily: '"Raleway", sans-serif',
                fontSize: "19px",
                lineHeight: "1.45",
                fontWeight: 600,
                color: "#1b2336",
                maxWidth: "95%",
              }}
            >
              {req.title}
            </h3>
          </div>
        );
      })}
    </div>

    {/* MOBILE STACK */}
    <div className="grid grid-cols-1 gap-[18px] md:hidden">
      {requirements.map((req, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center bg-white text-center"
          style={{
            minHeight: "198px",
            borderRadius: "16px",
            border: "1px solid #d8d8d8",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            padding: "18px 22px 20px",
          }}
        >
          <div
            className="flex items-center justify-center"
            style={{
              width: "82px",
              height: "82px",
              borderRadius: "8px",
              background: "#98006f",
              marginTop: "2px",
              marginBottom: "18px",
              flexShrink: 0,
            }}
          >
            <img
              src={req.icon}
              alt={req.title}
              className="object-contain brightness-0 invert"
              style={{
                width: "46px",
                height: "46px",
              }}
            />
          </div>

          <h3
            className="m-0"
            style={{
              fontFamily: '"Raleway", sans-serif',
              fontSize: "19px",
              lineHeight: "1.45",
              fontWeight: 600,
              color: "#1b2336",
              maxWidth: "95%",
            }}
          >
            {req.title}
          </h3>
        </div>
      ))}
    </div>

    {/* Bottom italic line */}
    <p
      className="mx-auto mt-[58px] text-center italic"
      style={{
        fontFamily: '"Nunito Sans", sans-serif',
        fontSize: "17px",
        lineHeight: "30px",
        fontWeight: 400,
        color: "#415674",
        marginBottom: 0,
      }}
    >
      Partner with C4GT Hub and transform your campus into a center of open-source innovation.
    </p>
  </div>
   <div className="mt-8 flex justify-center px-4">
  <Button
    asChild
className="h-auto rounded-[10px] bg-[#880163] px-8 sm:px-10 py-5 text-white hover:bg-[#6a014c] shadow-[0_8px_24px_rgba(255,215,0,0.18)]"    style={{
      fontFamily: '"Raleway", sans-serif',
      fontSize: "15px",
      fontWeight: 600,
    }}
  >
    <a
      href="https://codeforgoodtech.in/contact-us/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center"
    >
      Become a C4GT Hub Partner
      {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
    </a>
  </Button>
</div>
</section>

        {/* ============================== */}
        {/* OFFERINGS */}
        {/* ============================== */}
        {/* <section className="bg-white py-[72px]">
          <div className="mx-auto max-w-[1260px] px-4 md:px-[18px]">
            <SectionHeading
              title="Our Offerings"
              description="A complete open-source engineering fellowship that turns students into industry-ready contributors"
            />

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {offerings.map((offer, idx) => (
                <Card
                  key={idx}
                  className="rounded-[20px] border-0 bg-white"
                  style={{ boxShadow: "5px 5px 180px 6px rgba(0,0,0,0.06)" }}
                >
                  <CardContent className="flex h-full flex-col items-center px-6 py-8 text-center">
                    <div className="mb-5 flex h-[68px] w-[68px] items-center justify-center rounded-[16px] bg-[#880163] p-4">
                      <img
                        src={offer.icon}
                        alt={offer.title}
                        className="h-full w-full object-contain brightness-0 invert"
                      />
                    </div>

                    <h3
                      className="mb-4"
                      style={{
                        fontFamily: '"Raleway", sans-serif',
                        fontSize: "20px",
                        lineHeight: 1.35,
                        fontWeight: 600,
                        color: "#1b2336",
                        marginTop: 0,
                      }}
                    >
                      {offer.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: '"Nunito Sans", sans-serif',
                        fontSize: "15px",
                        lineHeight: 1.8,
                        fontWeight: 400,
                        color: "#475569",
                        margin: 0,
                      }}
                    >
                      {offer.desc}
                    </p>

                    {offer.extra ? (
                      <p
                        className="mt-4"
                        style={{
                          fontFamily: '"Nunito Sans", sans-serif',
                          fontSize: "15px",
                          lineHeight: 1.8,
                          fontWeight: 600,
                          color: "#880163",
                          marginBottom: 0,
                        }}
                      >
                        {offer.extra}
                      </p>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* ============================== */}
        {/* BENEFITS */}
        {/* ============================== */}
        {/* <section className="bg-[#f8f9fa] py-[72px]">
          <div className="mx-auto max-w-[1260px] px-4 md:px-[18px]">
            <SectionHeading title="Program Benefits" />

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {benefits.map((benefit, idx) => (
                <Card
                  key={idx}
                  className="rounded-[20px] bg-white shadow-none"
                  style={{
                    border: "4px solid #880163",
                  }}
                >
                  <CardContent className="px-6 py-8">
                    <h3
                      className="mb-5"
                      style={{
                        fontFamily: '"Raleway", sans-serif',
                        fontSize: "24px",
                        lineHeight: 1.3,
                        fontWeight: 600,
                        color: "#880163",
                        marginTop: 0,
                      }}
                    >
                      {benefit.title}
                    </h3>

                    <ul className="space-y-3">
                      {benefit.list.map((item, i) => (
                        <li
                          key={i}
                          className="relative pl-5"
                          style={{
                            fontFamily: '"Nunito Sans", sans-serif',
                            fontSize: "15px",
                            lineHeight: 1.8,
                            fontWeight: 400,
                            color: "#415674",
                          }}
                        >
                          <span className="absolute left-0 top-[1px] text-[18px] text-[#880163]">
                            •
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* ============================== */}
        {/* CTA */}
        {/* ============================== */}
        {/* <section className="bg-white py-[80px]">
          <div className="mx-auto max-w-[1260px] px-4 md:px-[18px] text-center">
            <p
              className="mb-8"
              style={{
                fontFamily: '"Nunito Sans", sans-serif',
                fontSize: "19px",
                lineHeight: 1.7,
                fontWeight: 400,
                color: "#415674",
                fontStyle: "italic",
                marginTop: 0,
              }}
            >
              Partner with C4GT Hub and transform your campus into a center of
              open-source innovation.
            </p>

          
          </div>
        </section> */}
      </main>
    </>
  );
}