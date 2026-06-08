import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Users,
  Layers3,
  Rocket,
  ListChecks,
  Send,
  CheckCircle2,
  HandHelping,
  GitBranch,
} from "lucide-react";
import codingImage from "@/assets/coding.png";
import productImage from "@/assets/productuse.png";
import aiImage from "@/assets/AI.png";
import studentsImage from "@/assets/dmpstudent.png";
import WorkerImage from "@/assets/dmpworker.png";
import techImage from "@/assets/techenthu.png";
import dmproadmapImage from "@/assets/dmproadmap.png";
import dmpMobileRoadmapImage from "@/assets/dmp-mobileroadmap.png";
import PageHeroBanner from "../PageHeroBanner";
import projects from "@/data/dmp2026_projects.json";
import { Building2, FileText } from "lucide-react";

const stats = [
  {
    title: "Organizations",
    value: "14",
    icon: Building2,
  },
  {
    title: "Unique Applications",
    value: "2,000+",
    icon: FileText,
  },
  {
    title: "Contributors",
    value: "40",
    icon: Users,
  },
];

const DMP2026 = () => {
  /* =========================================================
     DATA
  ========================================================= */
  const heroImages = [
    "/downloaded-images/2026_01_WhatsApp-Image-2026-01-27-at-5.10.53-PM-1024x682.jpeg",
    "/downloaded-images/dmp2026-1.jpeg",
    "/downloaded-images/dmp2026-2.jpeg",
  ];

  const whyCards = [
    {
      icon: <Users className="h-7 w-7 text-fuchsia-700" />,
      title: "1:1 Mentorship & Hands-on Learning",
      text: "Work closely with mentors through problem-solving sessions and real project work. Learn by building with continuous guidance and feedback.",
    },
    {
      icon: <Rocket className="h-7 w-7 text-amber-600" />,
      title: "Career Growth & Opportunities",
      text: "Build a strong portfolio of real-world impact projects, unlock future opportunities, and earn a stipend while you learn.",
    },
    {
      icon: <Layers3 className="h-7 w-7 text-orange-600" />,
      title: "Create Impact at Population Scale",
      text: "Contribute to large-scale Digital Public Goods and be part of a community building meaningful technology for public good.",
    },
  ];

  const numbers = [
    { value: 270, label: "Projects", theme: "pink" },
    { value: 70, label: "Organizations", theme: "pink" },
    { value: 150, label: "Products", theme: "yellow" },
    { value: 14000, label: "Proposals", theme: "yellow" },
    { value: 290, label: "Contributors", theme: "pink" },
    { value: 200, label: "Mentors", theme: "pink" },
  ];

  const tracks = [
    {
      label: "Coding",
      image: codingImage,
    },
    {
      label: "Product Usability & UI/UX",
      image: productImage,
    },
    {
      label: "Artificial Intelligence (AI)",
      image: aiImage,
    },
  ];

  const participants = [
    {
      label: "College Students",
      image: studentsImage,
    },
    {
      label: "Working Professionals",
      image: WorkerImage,
    },
    {
      label: "Tech Enthusiasts",
      image: techImage,
    },
  ];

  const roadmapSteps = [
    {
      number: "01",
      title: "Projects Listing",
      subtitle: "Orgs propose their projects for DMP",
      icon: <ListChecks className="h-6 w-6" />,
    },
    {
      number: "02",
      title: "Proposals Submission",
      subtitle: "Contributors submit their proposals",
      icon: <Send className="h-6 w-6" />,
    },
    {
      number: "03",
      title: "Shortlisting",
      subtitle: "Top applicants with relevant submissions are shortlisted",
      icon: <CheckCircle2 className="h-6 w-6" />,
    },
    {
      number: "04",
      title: "Code with Support",
      subtitle: "Selected contributors work with mentors on assigned projects",
      icon: <HandHelping className="h-6 w-6" />,
    },
    {
      number: "05",
      title: "Merge for Impact",
      subtitle: "Completed code is merged for large-scale social impact",
      icon: <GitBranch className="h-6 w-6" />,
    },
  ];

  // You can replace these with your actual CSV-driven content later if needed
  const testimonials = [
    {
      name: "Pramod",
      org: "Past DMP Contributor",
      role: "Open Source Contributor",
      image: "/images/Pramod.png",
      testimonial:
        "DMP gave me a rare chance to work on meaningful, production-grade open-source systems with mentorship that genuinely accelerated my growth.",
    },
    {
      name: "Manu",
      org: "Past DMP Contributor",
      role: "Developer",
      image: "/images/Manu.JPG",
      testimonial:
        "The structure, mentorship, and project quality made DMP feel very different from a typical internship. It was deeply practical and impactful.",
    },
    {
      name: "Kanika",
      org: "Past DMP Contributor",
      role: "Engineer",
      image: "/images/Kanika.jpg",
      testimonial:
        "I learned how real teams collaborate on population-scale tech. The experience sharpened both my technical and communication skills.",
    },
    {
      name: "Ashish",
      org: "Past DMP Contributor",
      role: "Software Contributor",
      image: "/images/Ashish.jpg",
      testimonial:
        "DMP helped me understand open-source contribution at a much deeper level and gave me confidence to work on mission-critical systems.",
    },
    {
      name: "Sanika",
      org: "Past DMP Contributor",
      role: "Student Contributor",
      image: "/images/Sanika.jpg",
      testimonial:
        "The 1:1 mentorship and milestone-driven approach kept me focused and pushed me to produce work I’m genuinely proud of.",
    },
  ];

  const faqs = [
    {
      question:
        "Why should I apply to Code for Good Tech's Dedicated Mentoring Program?",
      answer:
        "This program offers mentorship, real-world project experience, and opportunities to work on impactful open-source projects.",
    },
    {
      question:
        "How long is the Code for Good Tech's Dedicated Mentoring Program?",
      answer:
        "The program runs for approximately 3 months. For DMP 2026, the coding period is June 10 to September 10.",
    },
    {
      question:
        "How are contributors selected for Code for Good Tech's Dedicated Mentoring Program?",
      answer:
        "Contributors are selected based on the quality and consistency of their open-source contributions, proposal quality, and engagement with the community.",
    },
    {
      question: "What is the expected commitment during DMP 2026?",
      answer:
        "Participants are expected to commit around 20 hours per week for 3 months, complete project milestones, maintain regular mentor communication, and clear midpoint and endpoint evaluations.",
    },
    {
      question: "How is the stipend paid?",
      answer:
        "The ₹1 lakh stipend is released in two instalments upon successfully passing the midpoint and endpoint evaluations.",
    },
  ];

  /* =========================================================
     STATE
  ========================================================= */
  const [heroIndex, setHeroIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [logos, setLogos] = useState([]);

  const PROJECTS_PER_PAGE = 10;

  useEffect(() => {
    fetch("/dmp2026-organizations.csv")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.trim().split("\n");

        const organizations = lines.slice(1).map((line) => {
          const parts = [];
          let current = "";
          let inQuotes = false;

          for (let i = 0; i < line.length; i++) {
            const char = line[i];

            if (char === '"') {
              inQuotes = !inQuotes;
            } else if (char === "," && !inQuotes) {
              parts.push(current);
              current = "";
            } else {
              current += char;
            }
          }

          parts.push(current);

          return {
            name: parts[0]?.trim(),
            logo: parts[1]?.trim(),
          };
        });

        setLogos(organizations);
      })
      .catch((error) => {
        console.error("Error loading organizations:", error);
      });
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setTestimonialIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  /* =========================================================
     ANIMATED NUMBER COMPONENT
  ========================================================= */
  const AnimatedNumber = ({ target, duration = 1400 }) => {
    const [value, setValue] = useState(0);
    const startRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() => {
      const animate = (ts) => {
        if (!startRef.current) startRef.current = ts;
        const elapsed = ts - startRef.current;
        const progress = Math.min(elapsed / duration, 1);
        setValue(Math.floor(progress * target));
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        }
      };

      rafRef.current = requestAnimationFrame(animate);

      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }, [target, duration]);

    return (
      <span className="text-3xl font-bold leading-none sm:text-4xl md:text-5xl">
        {value.toLocaleString()}+
      </span>
    );
  };

  /* =========================================================
     HELPERS
  ========================================================= */
  const visibleTestimonials = useMemo(() => {
    const prev =
      (testimonialIndex - 1 + testimonials.length) % testimonials.length;
    const current = testimonialIndex;
    const next = (testimonialIndex + 1) % testimonials.length;
    return [prev, current, next];
  }, [testimonialIndex, testimonials.length]);

  const currentTestimonial = testimonials[testimonialIndex];

  const filteredProjects = projects.filter(
    (item) =>
      item.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.project.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE,
  );

  /* =========================================================
     RENDER
  ========================================================= */
  return (
    <div>
      <PageHeroBanner
        title="Dedicated Mentoring Program 2026 "
        currentPage="Dedicated Mentoring Program 2026"
      />

      <div className="min-h-screen bg-white text-slate-900">
        {/* =====================================================
          INFO MARQUEE
      ===================================================== */}
        <section className="w-full bg-gradient-to-r from-rose-50 to-pink-50 shadow-sm">
          <div className="mx-auto flex min-h-[52px] max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
            <MessageCircle className="h-5 w-5 shrink-0 text-[#BE9C06]" />
            <p className="text-sm font-medium text-[#232942] sm:text-base">
              <span className="font-bold">
                Join the C4GT community on Discord
              </span>{" "}
              to be the first to know when applications are live and stay
              updated on all things related to the program.
            </p>
          </div>
        </section>

        {/* =====================================================
          PAGE WRAPPER
      ===================================================== */}
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* ===================================================
            HERO + ABOUT
        =================================================== */}
          <section className="grid gap-8 py-6 lg:grid-cols-[420px_1fr] lg:items-start">
            {/* Hero Carousel */}
            <div className="relative mx-auto w-full max-w-[420px]">
              <div className="relative h-[320px] overflow-hidden rounded-2xl shadow-xl sm:h-[360px]">
                {heroImages.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`DMP ${idx + 1}`}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                      idx === heroIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
              <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-fuchsia-700 to-pink-500" />
            </div>

            {/* Text */}
            <div className="pt-1">
              <h1 className="mb-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem]">
                Dedicated Mentoring Program 2026
              </h1>

              <p className="mb-4 text-justify text-sm leading-7 text-slate-600 sm:text-base">
                <span className="font-semibold">DMP 2026 is now live! 🚀</span>{" "}
                DMP is C4GT&apos;s flagship, structured three-month contribution
                program that enables carefully selected students and
                early-career professionals to work on live, mission-critical
                Tech-for-Good projects listed by Digital Public Goods (DPG) and
                Tech-for-Good builder organisations.
              </p>

              <p className="mb-4 text-justify text-sm leading-7 text-slate-600 sm:text-base">
                C4GT has conducted multiple rounds of DMP since 2022 where
                selected students and working professionals get an opportunity
                to contribute to critical tech building blocks under the
                guidance of a dedicated mentor. They work closely with
                organisations building DPGs and open-source technology for a
                period of 3 months on problem statements that have
                population-scale social impact and receive a stipend of{" "}
                <span className="font-semibold">₹1 lakh</span>.
              </p>

              <p className="mb-6 text-justify text-sm leading-7 text-slate-600 sm:text-base">
                Code for Good Tech (C4GT) is an ecosystem initiative that
                enables contributors to build open-source solutions across
                Digital Public Infrastructure, Digital Public Goods, and other
                high-impact platforms driving population-scale social change.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://pl-app.iiit.ac.in/c4gt/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-[#7E0054] text-[#7E0054] hover:bg-[#7E0054] hover:text-white"
                  >
                    Join Community
                  </Button>
                </a>
              </div>
            </div>
          </section>

          {/* ===================================================
            WHY PARTICIPATE
        =================================================== */}
          <section className="py-10">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why Participate in DMP?
            </h2>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {whyCards.map((card, idx) => (
                <Card
                  key={idx}
                  className="rounded-2xl border border-pink-100 bg-gradient-to-br from-rose-50 to-pink-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                      {card.icon}
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-slate-900">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-7 text-slate-600">
                      {card.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* ===================================================
    DMP TIMELINE
=================================================== */}
          <section className="py-12">
            <div className="mx-auto max-w-7xl">
              <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                DMP 2026 Timeline
              </h2>

              <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <img
                  src="/downloaded-images/dmp2026-timeline.jpg"
                  alt="DMP 2026 Timeline"
                  className="block w-full max-h-[500px] object-contain"
                />
              </div>
            </div>
          </section>

          {/* ===================================================
    COHORT OVERVIEW
=================================================== */}
          <section className="py-8">
            <div className="mx-auto">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                DMP 2026 Cohort Overview
              </h2>

              <p className="mb-4 text-justify text-sm leading-7 text-slate-600 sm:text-base">
                DMP 2026 marked another year of C4GT&apos;s flagship initiative,
                bringing together contributors, mentors, and organizations
                working to strengthen the Tech-for-Good ecosystem.
              </p>

              <p className="mb-4 text-justify text-sm leading-7 text-slate-600 sm:text-base">
                Out of 55 projects initially proposed, 40 projects from 14
                participating organizations were selected to be part of the
                program. These projects span critical domains including
                Healthcare, Education, FinTech, CivicTech, GovTech, Data & AI,
                and Open-Source Infrastructure.
              </p>

              <p className="text-justify text-sm leading-7 text-slate-600 sm:text-base">
                The program received approximately 2,000+ applications from
                aspiring contributors across the country, from which 40
                contributors were carefully selected to join the final cohort
                and work closely with mentors on impactful real-world projects
                over the three-month coding period.
              </p>
            </div>
          </section>

          <section className="py-8">
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.title}
                      className="flex min-h-[140px] items-center gap-5 rounded-2xl border-2 border-[#8a1876] bg-[#fdf6fa] px-6 py-5"
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#f3c7d4]">
                        <Icon
                          size={32}
                          className="text-[#c3395b]"
                          strokeWidth={2}
                        />
                      </div>

                      <div>
                        <div className="text-4xl font-bold text-[#c3395b]">
                          {stat.value}
                        </div>

                        <div className="text-base font-medium text-[#1a2340]">
                          {stat.title}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ===================================================
    PROJECTS
=================================================== */}
          <section className="py-12">
            <div className="mx-auto max-w-7xl">
              <h2 className="mb-3 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                DMP 2026 Projects
              </h2>

              <p className="mx-auto mb-8 max-w-3xl text-center text-slate-600">
                Browse all projects available under DMP 2026.
              </p>

              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  placeholder="Search organizations or projects..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-12 text-sm text-slate-900 shadow-sm transition-all duration-200 placeholder:text-slate-400 focus:border-[#7E0054] focus:outline-none focus:ring-4 focus:ring-[#7E0054]/10"
                />

                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchTerm("");
                      setCurrentPage(1);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Table */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full table-fixed">
                    <thead>
                      <tr className="bg-[#7E0054] text-white">
                        <th className="px-4 py-3 text-left">Organization</th>
                        <th className="px-4 py-3 text-left">Project</th>
                      </tr>
                    </thead>

                    <tbody>
                      {paginatedProjects.map((item, index) => (
                        <tr
                          key={index}
                          className="border-b border-slate-100 hover:bg-slate-50"
                        >
                          <td className="px-4 py-3 font-medium break-words">
                            {item.organization}
                          </td>

                          <td className="px-4 py-3 text-slate-600 break-words">
                            {item.project}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex flex-wrap justify-center gap-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className="rounded-lg border px-4 py-2 disabled:opacity-50"
                  >
                    Previous
                  </button>

                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`rounded-lg px-4 py-2 ${
                        currentPage === index + 1
                          ? "bg-[#7E0054] text-white"
                          : "border"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className="rounded-lg border px-4 py-2 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}

              {/* Results Count */}
              <p className="mt-4 text-center text-sm text-slate-500">
                Showing {paginatedProjects.length} of {filteredProjects.length}{" "}
                projects
              </p>
            </div>
          </section>

          {/* ===================================================
    PARTNER ORGANIZATIONS
=================================================== */}
          <section className="py-12">
            <div className="mx-auto max-w-7xl">
              <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Partner Organizations for DMP 2026
              </h2>

              <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
                {logos.map((org, index) => (
                  <div
                    key={org.name || index}
                    className="flex h-[120px] items-center justify-center rounded-2xl bg-white px-6 py-4"
                    style={{
                      boxShadow: "0 2px 12px rgba(184, 153, 4, 0.45)",
                    }}
                  >
                    <img
                      src={org.logo}
                      alt={org.name}
                      className="max-h-[60px] w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* =====================================================
          FULL WIDTH CTA FOOTER SECTION
      ===================================================== */}
        <section className="w-full bg-gradient-to-r from-[#6a007e] to-[#8b0c80] py-16 text-white">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <h3 className="mb-3 text-3xl font-bold sm:text-4xl">
              Ready to Make an Impact?
            </h3>
            <p className="mx-auto mb-8 max-w-3xl text-sm leading-7 text-fuchsia-50 sm:text-base">
              Join the C4GT community to be notified when DMP 2026 applications
              open, discover projects, track your applications, and stay updated
              throughout the program.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://pl-app.iiit.ac.in/c4gt/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#ffcb05] px-7 py-6 text-base font-semibold text-slate-900 hover:bg-[#f5b800]">
                  Join Community
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DMP2026;
