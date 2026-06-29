import React from "react";
import { Slash, FileText, Award } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import PageHeroBanner from "../../PageHeroBanner";
export default function OpenCommunityProjects() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* ============================== */}
      {/* HEADER BANNER */}
      {/* ============================== */}
       <PageHeroBanner title="Open Community Projects" currentPage="Open Community Projects" />

      {/* ============================== */}
      {/* INTRO SECTION */}
      {/* ============================== */}
    <section className="w-full bg-[#efefef] py-10 md:py-12 lg:py-14">
  <div className="mx-auto max-w-[1240px] px-4 md:px-8 lg:px-10">
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.02fr] lg:gap-10 xl:gap-14">
      {/* Left Text Content */}
      <div className="flex flex-col">
        <h2
          className="mb-5 text-[28px] leading-[1.33] text-[#415674] md:text-[31px] lg:text-[34px]"
          style={{
            fontFamily: "'Gotham', 'Montserrat', 'Nunito Sans', sans-serif",
            fontWeight: 600,
          }}
        >
          Open Community Projects
        </h2>

        <div
          className="mb-8 space-y-5 text-[18px] leading-[30px] text-[#415674]"
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 400,
          }}
        >
          <p>
            Explore a variety of projects around DPGs/DPI &amp; Tech for Good
            spanning different domains, complexities, and technical skills on
            the C4GT Community Projects Listing page.
          </p>
          <p>
            If you’re eager to make a positive impact through technology while
            enhancing your skills, delve into the projects below and start
            contributing!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/Code4GovTech/C4GT/wiki/Get-Started-with-your-Open%E2%80%90Source-Contributions"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex min-h-[52px] items-center justify-center
              bg-[#880163] px-8 py-[14px]
              text-[16px] text-white
              rounded-[4px]
              shadow-[0_6px_16px_rgba(0,0,0,0.16)]
              transition-opacity duration-200 hover:opacity-95
            "
            style={{
              fontFamily: "'Gotham', 'Montserrat', 'Nunito Sans', sans-serif",
              fontWeight: 600,
            }}
          >
            How to start contributing
          </a>

          <a
            href="https://discord.com/invite/V3Aa9qk4Wt"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex min-h-[52px] items-center justify-center
              bg-[#880163] px-8 py-[14px]
              text-[16px] text-white
              rounded-[4px]
              shadow-[0_6px_16px_rgba(0,0,0,0.16)]
              transition-opacity duration-200 hover:opacity-95
            "
            style={{
              fontFamily: "'Gotham', 'Montserrat', 'Nunito Sans', sans-serif",
              fontWeight: 600,
            }}
          >
            Join the Community
          </a>
        </div>
      </div>

      {/* Right Image Layout */}
      <div className="relative w-full max-w-[620px] mx-auto lg:ml-auto lg:mr-0 mt-2 lg:mt-0">
        {/* Main Featured Image */}
        <div className="relative z-10 w-full overflow-hidden rounded-[12px]">
          <img
            src="/downloaded-images/2024_02_Rectangle-161123340-3.png"
            alt="Open Community Workspace"
            className="block h-auto w-full object-cover"
          />
        </div>

        {/* Decorative gold pattern bottom-right */}
        <div className="pointer-events-none absolute -bottom-8 -right-8 z-0 hidden lg:block">
          <div className="relative h-[130px] w-[130px] overflow-hidden rounded-full">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="absolute left-[-12%] w-[140%] rounded-full border-t-2 border-[#BE9C06]"
                style={{
                  top: `${10 + i * 10}px`,
                  transform: "rotate(-35deg)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* ============================== */}
      {/* STANDARDS & FRAMEWORKS */}
      {/* ============================== */}
     <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-8">
        {/* Section Heading */}
        <h2
          className="mb-12 text-center text-3xl font-bold text-[#1b2336] md:text-[36px]"
          style={{ fontFamily: '"Raleway", sans-serif' }}
        >
          Standards & Frameworks
        </h2>

        {/* Cards Container */}
        <div className="flex flex-col gap-8">
          {/* ========================================= */}
          {/* CARD 1: Standardized Template */}
          {/* ========================================= */}
          <div className="flex flex-col rounded-[24px] bg-[#FCF8FA] p-4 shadow-sm border border-pink-50 md:flex-row md:gap-10 md:p-6">
            
            {/* Left Colored Block */}
            <div className="flex shrink-0 flex-col items-center justify-center rounded-[16px] bg-[#F1E4EC] p-8 text-center md:w-[400px]">
              <div className="mb-6">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D1A421"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="1" />
                  <line x1="10" y1="2" x2="10" y2="22" />
                  <line x1="10" y1="12" x2="22" y2="12" />
                </svg>
              </div>
              <h3
                className="text-[22px] font-bold leading-[1.3] text-[#1b2336] md:text-[24px]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Standardized Template <br className="hidden md:block" />
                for Issue Tickets
              </h3>
            </div>

            {/* Right Content Block */}
            <div className="flex flex-1 flex-col items-start justify-center py-6 pr-4 md:py-8 md:pr-8">
              <p
                className="mb-8 text-[16px] font-medium leading-[1.7] text-[#415674]"
                style={{ fontFamily: '"Nunito Sans", sans-serif' }}
              >
                A standard taxonomy has been created for problem statements (or
                issue tickets) on GitHub, to enable easy discovery of issue
                tickets by interested contributors and also make the process of
                listing issue tickets more convenient for the organizations.
              </p>
              <a
                href="https://github.com/Code4GovTech/C4GT/blob/main/.github/ISSUE_TEMPLATE/c4gt.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-auto items-center justify-center rounded-[6px] bg-[#880163] px-8 py-3 text-[15px] font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-[#6a014c]"
                style={{ fontFamily: '"Nunito Sans", sans-serif' }}
              >
                Click Here
              </a>
            </div>
          </div>

          {/* ========================================= */}
          {/* CARD 2: DPG Points System */}
          {/* ========================================= */}
          <div className="flex flex-col rounded-[24px] bg-[#FCF8FA] p-4 shadow-sm border border-pink-50 md:flex-row md:gap-10 md:p-6">
            
            {/* Left Colored Block */}
            <div className="flex shrink-0 flex-col items-center justify-center rounded-[16px] bg-[#F1E4EC] p-8 text-center md:w-[400px]">
              <div className="mb-6">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D1A421"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Center Medal */}
                  <circle cx="12" cy="10" r="5" />
                  <polygon
                    points="12 7.5 12.7 9 14.5 9.2 13.2 10.4 13.5 12 12 11.2 10.5 12 10.8 10.4 9.5 9.2 11.3 9"
                    fill="#D1A421"
                  />
                  {/* Ribbons */}
                  <polyline points="9.5 14.3 8 21 12 18.5 16 21 14.5 14.3" />
                  {/* Left Small Star */}
                  <polygon
                    points="5 14 5.5 15 7 15.2 6 16.2 6.2 17.5 5 16.8 3.8 17.5 4 16.2 3 15.2 4.5 15"
                    fill="none"
                  />
                  {/* Right Small Star */}
                  <polygon
                    points="19 14 19.5 15 21 15.2 20 16.2 20.2 17.5 19 16.8 17.8 17.5 18 16.2 17 15.2 18.5 15"
                    fill="none"
                  />
                </svg>
              </div>
              <h3
                className="text-[22px] font-bold leading-[1.3] text-[#1b2336] md:text-[24px]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                DPG Points System
              </h3>
            </div>

            {/* Right Content Block */}
            <div className="flex flex-1 flex-col items-start justify-center py-6 pr-4 md:py-8 md:pr-8">
              <p
                className="mb-8 text-[16px] font-medium leading-[1.7] text-[#415674]"
                style={{ fontFamily: '"Nunito Sans", sans-serif' }}
              >
                To incentivize and reward the contributors in the community, an
                incentivization framework has been introduced. The core of this
                framework is a gamified points system that rewards contributors
                for every issue ticket that they successfully solve. As
                contributors solve more tickets and score more points, they get
                access to increasing levels of rewards, starting from badges and
                certificates, all the way up to one-on-one office hours with
                industry experts.
              </p>
              <a
                href="https://github.com/Code4GovTech/C4GT/wiki/Point-System-for-Contributors"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-auto items-center justify-center rounded-[6px] bg-[#880163] px-8 py-3 text-[15px] font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-[#6a014c]"
                style={{ fontFamily: '"Nunito Sans", sans-serif' }}
              >
                Click Here
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    </div>
  );
}
