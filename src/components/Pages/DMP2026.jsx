import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
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

const DMP2026 = () => {
  /* =========================================================
     DATA
  ========================================================= */
  const heroImages = [
    "/downloaded-images/2025_01_DSC01375-scaled-e1737516671687.jpg",
    "/downloaded-images/2025_01_DSC01375-scaled-e1737516671687.jpg",
    "/downloaded-images/2025_01_DSC01841-2-scaled-e1737516962312.jpg",
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
      question: "Why should I apply to Code for Good Tech's Dedicated Mentoring Program?",
      answer:
        "This program offers mentorship, real-world project experience, and opportunities to work on impactful open-source projects.",
    },
    {
      question: "How long is the Code for Good Tech's Dedicated Mentoring Program?",
      answer:
        "The program runs for approximately 3 months. For DMP 2026, the coding period is June 10 to September 10.",
    },
    {
      question: "How are contributors selected for Code for Good Tech's Dedicated Mentoring Program?",
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
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
    const prev = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
    const current = testimonialIndex;
    const next = (testimonialIndex + 1) % testimonials.length;
    return [prev, current, next];
  }, [testimonialIndex, testimonials.length]);

  const currentTestimonial = testimonials[testimonialIndex];

  /* =========================================================
     RENDER
  ========================================================= */
  return (
    <div>
              <PageHeroBanner title="Dedicated Mentoring Program 2026 " currentPage="Dedicated Mentoring Program 2026" />

    <div className="min-h-screen bg-white text-slate-900">
      {/* =====================================================
          INFO MARQUEE
      ===================================================== */}
      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-gradient-to-r from-rose-50 to-pink-50 shadow-sm">
        <div className="mx-auto flex min-h-[52px] max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <MessageCircle className="h-5 w-5 shrink-0 text-[#BE9C06]" />
          <p className="text-sm font-medium text-[#232942] sm:text-base">
            <span className="font-bold">Join the C4GT community on Discord</span> to be the first
            to know when applications are live and stay updated on all things related to the
            program.
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
              <span className="font-semibold">DMP 2026 is now live! 🚀</span> DMP is C4GT&apos;s
              flagship, structured three-month contribution program that enables carefully selected
              students and early-career professionals to work on live, mission-critical
              Tech-for-Good projects listed by Digital Public Goods (DPG) and Tech-for-Good builder
              organisations.
            </p>

            <p className="mb-4 text-justify text-sm leading-7 text-slate-600 sm:text-base">
              C4GT has conducted multiple rounds of DMP since 2022 where selected students and
              working professionals get an opportunity to contribute to critical tech building
              blocks under the guidance of a dedicated mentor. They work closely with organisations
              building DPGs and open-source technology for a period of 3 months on problem
              statements that have population-scale social impact and receive a stipend of{" "}
              <span className="font-semibold">₹1 lakh</span>.
            </p>

            <p className="mb-6 text-justify text-sm leading-7 text-slate-600 sm:text-base">
              Code for Good Tech (C4GT) is an ecosystem initiative that enables contributors to
              build open-source solutions across Digital Public Infrastructure, Digital Public
              Goods, and other high-impact platforms driving population-scale social change.
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
                  <h3 className="mb-3 text-lg font-bold text-slate-900">{card.title}</h3>
                  <p className="text-sm leading-7 text-slate-600">{card.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ===================================================
            WHAT YOU GAIN / EXPECTATIONS / TIMELINES
        =================================================== */}
        <section className="py-10">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="rounded-2xl border border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold text-slate-900">What You Gain</h3>
                <ul className="space-y-3 text-sm leading-7 text-slate-600">
                  <li>🤝 1:1 Mentorship & Hands-on Learning</li>
                  <li>🚀 Career Growth & Opportunities</li>
                  <li>🌍 Create Impact at Population Scale</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold text-slate-900">Commitment & Expectations</h3>
                <ul className="space-y-3 text-sm leading-7 text-slate-600">
                  <li>• Commit ~20 hours per week for 3 months</li>
                  <li>• Complete all defined project milestones</li>
                  <li>• Maintain regular communication with mentor and team</li>
                  <li>• Clear midpoint and endpoint evaluations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold text-slate-900">DMP 2026 Timelines</h3>
                <ul className="space-y-3 text-sm leading-7 text-slate-600">
                  <li>
                    <span className="font-semibold text-slate-800">Projects Live:</span> Now
                  </li>
                  <li>
                    <span className="font-semibold text-slate-800">More Projects Added Until:</span>{" "}
                    April 24
                  </li>
                  <li>
                    <span className="font-semibold text-slate-800">Application Deadline:</span> May
                    10
                  </li>
                  <li>
                    <span className="font-semibold text-slate-800">Coding Period:</span> June 10 –
                    September 10
                  </li>
                  <li>
                    <span className="font-semibold text-slate-800">Stipend:</span> ₹1 lakh in 2
                    instalments
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

    

{/* ===================================================
    HOW IT WORKS
=================================================== */}
<section className="py-12">
  <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
    How It Works
  </h2>

  {/* Desktop / Tablet Image */}
  <div className="hidden md:block">
    <div className="mx-auto max-w-7xl">
      <img
        src={dmproadmapImage}
        alt="DMP 2026 roadmap"
        className="w-full h-auto object-contain"
      />
    </div>
  </div>

  {/* Mobile Image */}
  <div className="block md:hidden">
    <div className="mx-auto max-w-sm">
      <img
        src={dmpMobileRoadmapImage}
        alt="DMP 2026 mobile roadmap"
        className="w-full h-auto object-contain"
      />
    </div>
  </div>
</section>

        {/* ===================================================
            FAQ
        =================================================== */}
        <section className="py-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-left text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              FAQs
            </h2>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="overflow-hidden rounded-lg border border-slate-200 bg-white px-0 shadow-sm"
                >
                  <AccordionTrigger className="px-5 py-4 text-left text-sm font-semibold text-slate-900 hover:no-underline sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="border-t border-slate-100 px-5 py-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      {/* =====================================================
          FULL WIDTH CTA FOOTER SECTION
      ===================================================== */}
      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-gradient-to-r from-[#6a007e] to-[#8b0c80] py-16 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h3 className="mb-3 text-3xl font-bold sm:text-4xl">Ready to Make an Impact?</h3>
          <p className="mx-auto mb-8 max-w-3xl text-sm leading-7 text-fuchsia-50 sm:text-base">
            Join the C4GT community to be notified when DMP 2026 applications open, discover
            projects, track your applications, and stay updated throughout the program.
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