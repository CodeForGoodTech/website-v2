import React from "react";
import PageHeroBanner from "../../PageHeroBanner";
/* =========================================
   Custom SVG Icons
========================================= */

function IconMentorship() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-10 w-10 md:h-11 md:w-11"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="26" r="6" />
      <circle cx="42" cy="26" r="6" />
      <path d="M10 48v-8c0-4 3-7 7-7h2c4 0 7 3 7 7v8" />
      <path d="M34 48v-8c0-4 3-7 7-7h2c4 0 7 3 7 7v8" />
      <path d="M16 48h12M40 48h12" />
      <path d="M26 8h14v8H26z" />
      <path d="M33 16v4" />
    </svg>
  );
}

function IconProjects() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-10 w-10 md:h-11 md:w-11"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="8" y="10" width="40" height="34" rx="3" />
      <path d="M22 52h12M28 44v8" />
      <path d="M16 58h24" />
      <rect x="14" y="16" width="28" height="16" rx="2" />
      <path d="M18 22h10M18 28h8" />
      <path d="M34 24l8 8" />
      <path d="M38 32l4-1-1-4" />
    </svg>
  );
}

function IconStipend() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-10 w-10 md:h-11 md:w-11"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="28" cy="18" r="10" />
      <path d="M28 12v12" />
      <path d="M24 15c1-2 7-2 8 1 1 4-8 3-8 7 1 3 7 3 8 1" />
      <path d="M8 46l10-2 10 4 12-6c2-1 4 1 3 3l-1 1" />
      <path d="M8 46v12" />
      <path d="M8 58h10l10 2h8c2 0 4-.5 5.5-1.5L56 48c2-1.5 2.5-4.5 1-6.5-1.5-2-4.5-2.5-6.5-1L40 47" />
      <path d="M28 48h10" />
    </svg>
  );
}

function IconLaptopIssue() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-10 w-10 md:h-11 md:w-11"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="10" y="12" width="36" height="26" rx="2" />
      <path d="M6 46h44" />
      <path d="M18 54h20" />
      <path d="M24 46v8M32 46v8" />
      <path d="M22 24l4-4M34 24l-4 4" />
    </svg>
  );
}

function IconLeaderboard() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-10 w-10 md:h-11 md:w-11"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 52V34h8v18" />
      <path d="M24 52V28h8v24" />
      <path d="M38 52V18h8v34" />
      <path d="M42 18V8" />
      <path d="M42 8l-8 8" />
      <path d="M42 8l8 8" />
    </svg>
  );
}

function IconNetwork() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-10 w-10 md:h-11 md:w-11"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="26" r="6" />
      <circle cx="32" cy="20" r="6" />
      <circle cx="46" cy="26" r="6" />
      <path d="M8 48c1.5-7 6-10 10-10s8.5 3 10 10" />
      <path d="M22 50c1.5-8 6-11 10-11s8.5 3 10 11" />
      <path d="M36 48c1.5-7 6-10 10-10s8.5 3 10 10" />
      <path d="M26 10l2-4M36 10l-2-4M32 6v-4" />
    </svg>
  );
}

/* =========================================
   Reusable UI
========================================= */

function SectionContainer({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-[1180px] px-6 md:px-8 xl:px-0 ${className}`}>
      {children}
    </div>
  );
}

function GainCard({ icon, text }) {
  return (
    <div className="flex min-h-[84px] items-center gap-4 rounded-[26px] border-[2px] border-[#BE9C06] bg-white px-5 py-4 md:min-h-[92px] md:px-6 md:py-5">
      <div className="shrink-0 text-[#880163]">{icon}</div>
      <p
        className="text-[16px] leading-[1.35] text-[#1B2336] md:text-[18px] lg:text-[19px]"
        style={{
          fontFamily: "'Raleway', sans-serif",
          fontWeight: 700,
        }}
      >
        {text}
      </p>
    </div>
  );
}

function GainSection({ title = "What you gain", items }) {
  return (
    <section className="w-full py-8 md:py-10">
      <SectionContainer>
        <div className="rounded-[18px] bg-transparent">
          <div className="mb-8 overflow-hidden rounded-t-[38px] bg-[#98006d] text-center">
            <div className="px-6 py-4 md:py-5">
              <h3
                className="text-[24px] leading-none text-white md:text-[34px] lg:text-[38px]"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 500,
                }}
              >
                {title}
              </h3>
            </div>
          </div>

          <div className="space-y-5 md:space-y-6">
            {items.map((item, idx) => (
              <GainCard key={idx} icon={item.icon} text={item.text} />
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

// function PathwaysIntro() {
//   return (
//     <div className="mt-14 md:mt-16 lg:mt-20">
//       <h6
//         className="text-center text-[32px] leading-[1.15] text-[#465c80] md:text-[44px] lg:text-[56px]"
//         style={{
//           fontFamily: "'Raleway', sans-serif",
//           fontWeight: 800,
//         }}
//       >
//         Contribution Pathways at C4GT
//       </h6>

//       <p
//         className="mx-auto mt-7 text-left text-[18px] leading-[1.6] text-[#4b6285] md:text-[20px] lg:text-[22px]"
//         style={{
//           fontFamily: "'Nunito Sans', sans-serif",
//           fontWeight: 400,
//         }}
//       >
//         C4GT offers multiple pathways for students and professionals to
//         meaningfully engage with Digital Public Goods (DPGs), Digital Public
//         Infrastructure (DPIs), and Tech-for-Good projects.
//       </p>

//       <div
//         className="mt-6 space-y-2 text-left text-[17px] leading-[1.6] text-[#4b6285] md:text-[18px] lg:text-[19px]"
//         style={{
//           fontFamily: "'Nunito Sans', sans-serif",
//           fontWeight: 400,
//         }}
//       >
//         <p>
//           Discover real-world GovTech projects shared by our partner
//           organizations and explore the broader open-source ecosystem.
//         </p>
//         <p>
//           Build skills and contribute meaningfully through hands-on project
//           experiences guided by mentors and practitioners.
//         </p>
//         <p>
//           Receive stipends and career-focused support designed to strengthen job
//           readiness and professional growth.
//         </p>
//       </div>
//     </div>
//   );
// }

function PathwaysIntro() {
  return (
    <div className="mt-10 md:mt-12 lg:mt-14">
      <div className="mx-auto max-w-[1460px] px-4 sm:px-6 lg:px-8">
        <h6
          className="text-center text-[28px] leading-[1.15] text-[#465c80] md:text-[34px] lg:text-[34px]"
          style={{
            fontFamily: "'Gotham', sans-serif",
            fontWeight: 800,
          }}
        >
          Contribution Pathways at C4GT
        </h6>

        <p
          className="mx-auto mt-8 max-w-[1680px] text-left text-[15px] leading-[1.85] text-[#4b6285] md:text-[16px] lg:text-[18px]"
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 400,
          }}
        >
          C4GT offers multiple pathways for students and professionals to
          meaningfully engage with Digital Public Goods (DPGs), Digital Public
          Infrastructure (DPIs), and Tech-for-Good projects.
        </p>
      </div>
    </div>
  );
}

function WhatYouGainDMPSection() {
  return (
    <GainSection
      items={[
        { icon: <IconMentorship />, text: "1:1 mentorship from industry experts" },
        { icon: <IconProjects />, text: "Work on real-world, production-grade projects" },
        { icon: <IconStipend />, text: "Earn ₹1,00,000 upon successful completion" },
      ]}
    />
  );
}

function WhatYouGainOpenCommunitySection() {
  return (
    <GainSection
      items={[
        { icon: <IconLaptopIssue />, text: "Solve real issues & earn bounties" },
        { icon: <IconLeaderboard />, text: "Climb the leaderboard & build your GitHub profile" },
        { icon: <IconNetwork />, text: "Grow your network within the C4GT ecosystem" },
      ]}
    />
  );
}

function TestimonialsSection() {
  return (
    <section className="w-full pt-8 pb-6 md:pt-10 md:pb-8 lg:pt-12 lg:pb-10">
      <SectionContainer>
        <h2
          className="mb-5 text-center text-[28px] leading-[1.33] text-[#415674] md:mb-6 md:text-[31px] lg:text-[34px]"
          style={{
            fontFamily: "'Gotham', 'Montserrat', 'Nunito Sans', sans-serif",
            fontWeight: 600,
          }}
        >
          Testimonials
        </h2>

        <div className="relative w-full overflow-hidden rounded-none">
          <div className="relative h-[340px] w-full md:h-[390px] lg:h-[430px] xl:h-[450px]">
            <iframe
              src="https://pl-app.iiit.ac.in/rcts/c4gt/testimonials"
              title="Testimonials"
              className="absolute inset-0 h-full w-full border-0"
              scrolling="no"
              loading="lazy"
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

/* =========================================
   Main Component
========================================= */

export default function ContributorsPageSections() {
  return (
    <div className="w-full bg-[#f5f7fb]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&family=Raleway:wght@500;600;700;800&display=swap');
      `}</style>
       <PageHeroBanner title="Contributors" currentPage="Contributors" />

      {/* Contributors Intro */}
      <section className="w-full py-8 md:py-10 lg:py-12">
  <SectionContainer>
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.92fr_1fr] lg:gap-10">
      {/* Left Image */}
      <div className="flex justify-center lg:justify-start">
        <img
          src="/downloaded-images/2024_03_Image-Container-1-1.png"
          alt="C4GT contributor community network"
          className="w-full max-w-[300px] object-contain md:max-w-[360px] lg:max-w-[408px]"
        />
      </div>

      {/* Right Text */}
      <div className="max-w-[760px]">
        <p
          className="text-[15px] leading-[1.8] text-[#4b6285] md:text-[16px] lg:text-[18px]"
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 400,
          }}
        >
          C4GT brings together students, professionals, and the developer
          community to collaborate on real-world Digital Public and Tech-for-
          Good projects from partner organizations. Contributors gain hands-on
          experience, build in-demand skills under expert mentorship, and grow
          within a vibrant open-source ecosystem.
        </p>

        <p
          className="mt-8 text-[15px] leading-[1.8] text-[#4b6285] md:text-[16px] lg:text-[18px]"
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 400,
          }}
        >
          Through Discord and GitHub, they engage, collaborate, and create
          meaningful impact while accelerating their learning and career
          journey.
        </p>
      </div>
    </div>

    <PathwaysIntro />
  </SectionContainer>
</section>

      {/* Dedicated Mentoring Program */}
      {/* <section className="w-full pb-6 md:pb-8">
        <SectionContainer>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <div className="max-w-[560px]">
              <h2
                className="text-[32px] leading-[1.15] text-[#1b2336] md:text-[46px] lg:text-[56px]"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 600,
                }}
              >
                Dedicated Mentoring Program
              </h2>

              <p
                className="mt-6 text-[18px] leading-[1.6] text-[#4b6285] md:text-[20px] lg:text-[22px]"
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                A structured 3-month flagship program where selected contributors
                work 1:1 with industry mentors on population-scale Digital
                Public Goods and Tech-for-Good projects. Includes milestone
                reviews and a stipend of ₹1 lakh.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src="/downloaded-images/2026_03_AMIT4345.JPG-scaled.jpeg"
                alt="Dedicated Mentoring Program"
                className="w-full max-w-[600px] rounded-[4px] object-cover lg:max-w-[620px]"
              />
            </div>
          </div>
        </SectionContainer>
      </section> */}
<section className="w-full pb-6 md:pb-8 lg:pb-10">
  <SectionContainer>
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_500px] lg:gap-12">
      {/* Left Content */}
      <div className="max-w-[700px]">
        <h2
          className="text-[28px] leading-[1.28] text-[#1B2336] md:text-[32px] lg:text-[36px]"
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 600,
          }}
        >
          Dedicated Mentoring Program
        </h2>

        <p
          className="mt-6 text-[15px] leading-[1.8] text-[#4b6285] md:text-[16px] lg:text-[18px]"
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 400,
          }}
        >
          A structured 3-month flagship program where selected contributors
          work 1:1 with industry mentors on population-scale Digital Public
          Goods and Tech-for-Good projects. Includes milestone reviews and a
          stipend of ₹1 lakh.
        </p>
      </div>

      {/* Right Image */}
      <div className="flex justify-center lg:justify-end">
        <img
          src="/downloaded-images/2026_03_AMIT4345.JPG-scaled.jpeg"
          alt="Dedicated Mentoring Program"
          className="w-full max-w-[360px] rounded-none object-cover md:max-w-[440px] lg:max-w-[500px]"
        />
      </div>
    </div>
  </SectionContainer>
</section>
      <WhatYouGainDMPSection />

      {/* Open Community */}
      {/* <section className="w-full pt-4 pb-6 md:pt-6 md:pb-8">
        <SectionContainer>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <div className="flex justify-center lg:justify-start">
              <img
                src="/downloaded-images/2026_03_Screenshot-2026-02-18-085819.png"
                alt="Open Community projects board"
                className="w-full max-w-[600px] rounded-[2px] object-cover lg:max-w-[620px]"
              />
            </div>

            <div className="max-w-[560px]">
              <h2
                className="text-[32px] leading-[1.15] text-[#1b2336] md:text-[46px] lg:text-[56px]"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 600,
                }}
              >
                Open Community
              </h2>

              <p
                className="mt-6 text-[18px] leading-[1.6] text-[#4b6285] md:text-[20px] lg:text-[22px]"
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                A year-round open pathway for contributors to solve low- and
                medium-complexity issues (bounty & non-bounty) across partner
                repositories while building credibility in the ecosystem.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section> */}
      <section className="w-full pt-4 pb-6 md:pt-6 md:pb-8 lg:pt-6 lg:pb-10">
  <SectionContainer>
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[500px_minmax(0,1fr)] lg:gap-12">
      {/* Left Image */}
      <div className="flex justify-center lg:justify-start">
        <img
          src="/downloaded-images/2026_03_Screenshot-2026-02-18-085819.png"
          alt="Open Community projects board"
          className="w-full max-w-[360px] object-cover md:max-w-[440px] lg:max-w-[500px]"
        />
      </div>

      {/* Right Content */}
      <div className="max-w-[700px]">
        <h2
          className="text-[28px] leading-[1.33] text-[#1B2336] md:text-[32px] lg:text-[36px]"
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 600,
          }}
        >
          Open Community
        </h2>

        <p
          className="mt-6 text-[15px] leading-[1.8] text-[#4b6285] md:text-[16px] lg:text-[18px]"
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 400,
          }}
        >
          A year-round open pathway for contributors to solve low- and
          medium-complexity issues (bounty & non-bounty) across partner
          repositories while building credibility in the ecosystem.
        </p>
      </div>
    </div>
  </SectionContainer>
</section>
<section className="w-full pt-4 pb-6 md:pt-6 md:pb-8 lg:pt-6 lg:pb-10">
  <SectionContainer>
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_500px] lg:gap-12">
      {/* Left Content */}
      <div className="max-w-[690px]">
        <h2
          className="text-[28px] leading-[1.33] text-[#1B2336] md:text-[32px] lg:text-[36px]"
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 600,
          }}
        >
          SheCodes by C4GT
        </h2>

        <p
          className="mt-6 text-[15px] leading-[1.8] text-[#4b6285] md:text-[16px] lg:text-[18px]"
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 400,
          }}
        >
          A women-focused 2-day hands-on workshop followed by a 10-day guided
          engagement designed to introduce more women to open source and
          Tech-for-Good projects.
        </p>
      </div>

      {/* Right Image */}
      <div className="flex justify-center lg:justify-end">
        <img
          src="/downloaded-images/2026_01_workshop3.jpeg"
          alt="SheCodes by C4GT workshop"
          className="w-full max-w-[360px] object-cover md:max-w-[430px] lg:max-w-[500px]"
        />
      </div>
    </div>
  </SectionContainer>
</section>

      <WhatYouGainOpenCommunitySection />

      <TestimonialsSection />
    </div>
  );
}