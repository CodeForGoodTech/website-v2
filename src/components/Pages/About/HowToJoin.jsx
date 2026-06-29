// import React from "react";
// import { Button } from "@/components/ui/button";
// import PageHeroBanner from "../../PageHeroBanner";

// /* =========================
//    THEME TOKENS (from site)
// ========================= */
// const COLORS = {
//   primary: "#880163",
//   primaryHover: "#6d014f",
//   gold: "#BE9C06",
//   heading: "#1B2336",
//   body: "#415674",
//   sectionBg: "#F6F6F6",
// };

// /* =========================
//    SIMPLE CUSTOM SVG ICONS
//    (closer than lucide for this page)
// ========================= */

// function IconMessageCommunity() {
//   return (
//     <svg viewBox="0 0 64 64" className="h-11 w-11 md:h-12 md:w-12" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
//       <rect x="6" y="8" width="26" height="20" rx="4" />
//       <path d="M12 34l8-6h12" />
//       <path d="M14 15h10M14 21h14" />
//       <rect x="36" y="12" width="22" height="16" rx="3" />
//       <path d="M48 32l6-4" />
//       <circle cx="24" cy="44" r="7" />
//       <circle cx="40" cy="44" r="7" />
//       <path d="M14 58c1.5-5 6-8 10-8s8.5 3 10 8" />
//       <path d="M30 58c1.5-5 6-8 10-8s8.5 3 10 8" />
//     </svg>
//   );
// }

// function IconInnovationHand() {
//   return (
//     <svg viewBox="0 0 64 64" className="h-11 w-11 md:h-12 md:w-12" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M42 6c4 0 7 3 7 7s-3 7-7 7-7-3-7-7 3-7 7-7z" />
//       <path d="M42 20v8" />
//       <path d="M38 24h8" />
//       <path d="M12 38l10-4c2-1 5-1 7 0l7 3c2 1 2 4 0 5l-5 2" />
//       <path d="M12 38v12" />
//       <path d="M12 50l8 4h14c2 0 4-.5 5.5-1.5L54 43c2-1.5 2.5-4.5 1-6.5-1.5-2-4.5-2.5-6.5-1L38 42" />
//     </svg>
//   );
// }

// function IconCodeBrackets() {
//   return (
//     <svg viewBox="0 0 64 64" className="h-11 w-11 md:h-12 md:w-12" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M24 14L10 32l14 18" />
//       <path d="M40 14l14 18-14 18" />
//     </svg>
//   );
// }

// function IconCommunityGroup() {
//   return (
//     <svg viewBox="0 0 64 64" className="h-11 w-11 md:h-12 md:w-12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//       <circle cx="20" cy="24" r="7" />
//       <circle cx="32" cy="18" r="7" />
//       <circle cx="44" cy="24" r="7" />
//       <path d="M8 48c1.5-7 6.5-11 12-11s10.5 4 12 11" />
//       <path d="M20 50c1.5-8 6.5-12 12-12s10.5 4 12 12" />
//       <path d="M32 48c1.5-7 6.5-11 12-11s10.5 4 12 11" />
//       <path d="M6 8h14v10H6zM44 8h14v10H44zM13 18v5M51 18v5" />
//     </svg>
//   );
// }

// function IconVisibilityGroup() {
//   return (
//     <svg viewBox="0 0 64 64" className="h-11 w-11 md:h-12 md:w-12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//       <circle cx="18" cy="30" r="7" />
//       <circle cx="32" cy="24" r="7" />
//       <circle cx="46" cy="30" r="7" />
//       <path d="M6 52c1.5-7 6-10 12-10s10.5 3 12 10" />
//       <path d="M20 54c1.5-8 6.5-11 12-11s10.5 3 12 11" />
//       <path d="M34 52c1.5-7 6-10 12-10s10.5 3 12 10" />
//       <path d="M32 8v6M24 12l-3-3M40 12l3-3" />
//     </svg>
//   );
// }

// function IconGrowthDoc() {
//   return (
//     <svg viewBox="0 0 64 64" className="h-11 w-11 md:h-12 md:w-12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M14 8h24l12 12v36H14z" />
//       <path d="M38 8v12h12" />
//       <path d="M22 30h14M22 38h10" />
//       <path d="M22 54V44h6v10" />
//       <path d="M32 54V36h6v18" />
//       <path d="M42 54V28h6v26" />
//       <circle cx="28" cy="20" r="7" />
//       <path d="M28 13v7h5" />
//     </svg>
//   );
// }

// /* =========================
//    REUSABLE WRAPPERS
// ========================= */

// function SectionContainer({ children, className = "" }) {
//   return (
//     <section className={`w-full ${className}`}>
//       <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">{children}</div>
//     </section>
//   );
// }

// function SplitSection({
//   title,
//   body,
//   image,
//   imageAlt,
//   reverse = false,
//   note,
// }) {
//   return (

//     <SectionContainer className="bg-white py-14 md:py-20">
//       <div
//         className={`grid grid-cols-1 items-start gap-10 lg:gap-14 ${
//           reverse ? "lg:grid-cols-[1.05fr_0.95fr]" : "lg:grid-cols-[0.95fr_1.05fr]"
//         }`}
//       >
//         {!reverse && (
//           <div className="space-y-6 md:space-y-8">
//             <h2 className="font-['Raleway'] text-[34px] font-semibold leading-[1.1] text-[#1B2336] md:text-[56px]">
//               {title}
//             </h2>
//             {body}
//           </div>
//         )}

//         <div className={`${reverse ? "lg:order-1" : ""}`}>
//           <img
//             src={image}
//             alt={imageAlt}
//             className="w-full rounded-[24px] object-cover"
//           />
//         </div>

//         {reverse && (
//           <div className="space-y-6 md:space-y-8 lg:order-2">
//             <h2 className="font-['Raleway'] text-[34px] font-semibold leading-[1.1] text-[#1B2336] md:text-[56px]">
//               {title}
//             </h2>
//             {body}
//           </div>
//         )}
//       </div>

//       {note ? <div className="mt-12 md:mt-14">{note}</div> : null}
//     </SectionContainer>
//   );
// }

// function BenefitCard({ icon, text, fullWidth = false }) {
//   return (
//     <div
//       className={`flex items-center gap-5 rounded-[28px] border-[2px] border-[#BE9C06] bg-white px-5 py-5 md:px-7 md:py-6 ${
//         fullWidth ? "w-full" : "min-h-[108px]"
//       }`}
//     >
//       <div className="shrink-0 text-[#880163]">{icon}</div>
//       <p className="font-['Raleway'] text-[18px] font-semibold leading-[1.28] text-[#1B2336] md:text-[22px]">
//         {text}
//       </p>
//     </div>
//   );
// }

// function BenefitSection({ items, columns = 2 }) {
//   return (
//     <SectionContainer className="bg-white py-4 md:py-8">
//       <div className="rounded-[22px] bg-[#F6F6F6] px-4 py-4 md:px-6 md:py-6">
//         {/* Header */}
//         <div className="mx-auto mb-8 overflow-hidden rounded-t-[34px] bg-[#880163] text-center">
//           <div className="px-6 py-4 md:py-5">
//             <h3 className="font-['Raleway'] text-[28px] font-semibold leading-tight text-white md:text-[44px]">
//               What Organizations get
//             </h3>
//             <p className="mt-1 font-['Nunito_Sans'] text-[14px] font-semibold text-white md:text-[18px]">
//               NGOs | NPOs | IDPGs | Tech-for-good orgs
//             </p>
//           </div>
//         </div>

//         {/* Cards */}
//         {columns === 2 ? (
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-6">
//             {items.map((item, idx) => (
//               <BenefitCard key={idx} icon={item.icon} text={item.text} />
//             ))}
//           </div>
//         ) : (
//           <div className="space-y-6">
//             {items.map((item, idx) => (
//               <BenefitCard
//                 key={idx}
//                 icon={item.icon}
//                 text={item.text}
//                 fullWidth
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </SectionContainer>
//   );
// }

// /* =========================
//    PAGE DATA
// ========================= */

// const dmpBenefits = [
//   {
//     icon: <IconMessageCommunity />,
//     text: "Structured Project delivery | 3 months",
//   },
//   {
//     icon: <IconInnovationHand />,
//     text: "Fresh Talent & Innovation Pipeline",
//   },
//   {
//     icon: <IconCodeBrackets />,
//     text: "Access to Skilled Student Contributors",
//   },
//   {
//     icon: <IconCommunityGroup />,
//     text: "Leverage Community-driven contributions",
//   },
// ];

// const openCommunityBenefits = [
//   {
//     icon: <IconCommunityGroup />,
//     text: "Reliable community contributions for low-complexity issues and enhancements",
//   },
//   {
//     icon: <IconVisibilityGroup />,
//     text: "Increase product visibility within a growing ecosystem",
//   },
//   {
//     icon: <IconGrowthDoc />,
//     text: "Sustained maintenance and growth through long-term contributor engagement",
//   },
// ];

// /* =========================
//    MAIN COMPONENT
// ========================= */

// export default function OrganizationsHowToJoinSections() {
//   return (
//     <div className="w-full bg-white font-['Nunito_Sans']">
//       {/* Load exact-ish site fonts */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&family=Raleway:wght@600;700;800&display=swap');
//       `}</style>
//   <PageHeroBanner title="How to Join" currentPage="How to Join" />
//       {/* CTA */}
//       <SectionContainer className="bg-white pt-10 md:pt-14">
//         <div className="mb-10 md:mb-14">
//           <Button
//             className="h-auto rounded-md bg-[#880163] px-6 py-4 font-['Nunito_Sans'] text-[15px] font-semibold text-white shadow-none hover:bg-[#6d014f] md:px-7 md:py-4 md:text-[16px]"
//           >
//             <a
//               href="https://github.com/Code4GovTech/C4GT/wiki/How-to-participate-as-an-organisation"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block"
//             >
//               New to C4GT? Let&apos;s Get You Started
//             </a>
//           </Button>
//         </div>
//       </SectionContainer>

//       {/* Dedicated Mentoring Program */}
//       <SplitSection
//         title="Dedicated Mentoring Program"
//         image="/downloaded-images/2025_04_DSC01393-1024x683.jpg"
//         imageAlt="Dedicated Mentoring Program meeting"
//         body={
//           <p className="font-['Nunito_Sans'] text-[18px] leading-[1.75] text-[#415674] md:text-[20px]">
//             The <strong>Dedicated Mentoring Program (DMP)</strong> enables students
//             and early-career professionals to work on live, open-source projects
//             with tech-for-good organizations. Through a{" "}
//             <strong>structured 3 month, 1:1 mentorship model</strong>, contributors
//             engage deeply with real-world challenges across domains such as
//             livelihoods, education, health, urban governance and other domains.
//           </p>
//         }
//       />

//       {/* DMP Benefits */}
//       <BenefitSection items={dmpBenefits} columns={2} />

//       {/* Open Community */}
//       <SplitSection
//         title="Open Community"
//         image="/downloaded-images/2026_01_WhatsApp-Image-2026-01-27-at-5.10.53-PM-1024x682.jpeg"
//         imageAlt="Open Community"
//         body={
//           <p className="font-['Nunito_Sans'] text-[18px] leading-[1.75] text-[#415674] md:text-[20px]">
//             The C4GT Open Community enables year-round collaboration between partner organizations and contributors, fostering organic engagement beyond structured programs. Organizations can post low-complexity tasks and feature requests, which are taken up by a skilled and motivated contributor community. This model enables organizations to engage and build a strong community while getting issues resolved, and allows contributors to work on real-world projects, collectively fostering a sustainable ecosystem in the long run.
//           </p>
//         }
//         note={
//           <div>
//             <h3 className="font-['Raleway'] text-[26px] font-semibold text-[#415674] md:text-[30px]">
//               Onboarding Sprints
//             </h3>
//             <p className="mt-3 font-['Nunito_Sans'] text-[18px] italic leading-[1.8] text-[#415674] md:text-[20px]">
//               For organizations newly joining the C4GT ecosystem, we run
//               dedicated onboarding sprints. A contributor from our community is
//               assigned to solve a low-complexity issue, demonstrating how C4GT
//               workflows operate and showcasing the quality and collaboration
//               standards our contributors bring.
//             </p>
//           </div>
//         }
//       />

//       {/* Open Community Benefits */}
//       <BenefitSection items={openCommunityBenefits} columns={1} />

//       {/* C4GT Hubs */}
//       <SplitSection
//         title="C4GT Hubs"
//         image="/downloaded-images/2026_01_c4gt_hub.jpeg"
//         imageAlt="C4GT Hubs"
//         reverse
//         body={
//           <>
//             <p className="font-['Nunito_Sans'] text-[18px] leading-[1.75] text-[#415674] md:text-[20px]">
//               C4GT Hubs is a multi-year initiative curated by RCTS, IIIT
//               Hyderabad, designed to build a deep and sustainable tech talent
//               pipeline from Tier 2 and Tier 3 engineering institutions.
//             </p>

//             <p className="font-['Nunito_Sans'] text-[18px] leading-[1.75] text-[#415674] md:text-[20px]">
//               Following a hub-and-spoke model where IIIT Hyderabad serves as the
//               anchor hub and partner colleges act as regional spokes, students
//               are engaged from their 2nd to 4th year through structured learning
//               in AI/ML, full-stack development, open-source practices, and
//               real-world problem solving. The program culminates in a six-month,
//               paid capstone internship with Tech-for-Good organizations,
//               creating a clear pathway from learning to meaningful employment.
//             </p>
//           </>
//         }
//         note={
//           <p className="font-['Nunito_Sans'] text-[18px] italic leading-[1.8] text-[#415674] md:text-[20px]">
//             <span className="font-semibold">Note:</span> C4GT Hubs is a restricted
//             pathway, open exclusively to students from partner colleges within
//             the hub network.
//           </p>
//         }
//       />
//     </div>
//   );
// }

import React from "react";
import { Button } from "@/components/ui/button";
import PageHeroBanner from "../../PageHeroBanner";

/* =========================
   THEME TOKENS (closer to live page)
========================= */
const COLORS = {
  primary: "#880163",
  primaryHover: "#6d014f",
  gold: "#BE9C06",
  heading: "#1B2336",
  body: "#415674",
  sectionBg: "#F6F6F6",
};

/* =========================
   SIMPLE CUSTOM SVG ICONS
========================= */

function IconMessageCommunity() {
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
      <rect x="6" y="8" width="26" height="20" rx="4" />
      <path d="M12 34l8-6h12" />
      <path d="M14 15h10M14 21h14" />
      <rect x="36" y="12" width="22" height="16" rx="3" />
      <path d="M48 32l6-4" />
      <circle cx="24" cy="44" r="7" />
      <circle cx="40" cy="44" r="7" />
      <path d="M14 58c1.5-5 6-8 10-8s8.5 3 10 8" />
      <path d="M30 58c1.5-5 6-8 10-8s8.5 3 10 8" />
    </svg>
  );
}

function IconInnovationHand() {
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
      <path d="M42 6c4 0 7 3 7 7s-3 7-7 7-7-3-7-7 3-7 7-7z" />
      <path d="M42 20v8" />
      <path d="M38 24h8" />
      <path d="M12 38l10-4c2-1 5-1 7 0l7 3c2 1 2 4 0 5l-5 2" />
      <path d="M12 38v12" />
      <path d="M12 50l8 4h14c2 0 4-.5 5.5-1.5L54 43c2-1.5 2.5-4.5 1-6.5-1.5-2-4.5-2.5-6.5-1L38 42" />
    </svg>
  );
}

function IconCodeBrackets() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-10 w-10 md:h-11 md:w-11"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M24 14L10 32l14 18" />
      <path d="M40 14l14 18-14 18" />
    </svg>
  );
}

function IconCommunityGroup() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-10 w-10 md:h-11 md:w-11"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="20" cy="24" r="7" />
      <circle cx="32" cy="18" r="7" />
      <circle cx="44" cy="24" r="7" />
      <path d="M8 48c1.5-7 6.5-11 12-11s10.5 4 12 11" />
      <path d="M20 50c1.5-8 6.5-12 12-12s10.5 4 12 12" />
      <path d="M32 48c1.5-7 6.5-11 12-11s10.5 4 12 11" />
      <path d="M6 8h14v10H6zM44 8h14v10H44zM13 18v5M51 18v5" />
    </svg>
  );
}

function IconVisibilityGroup() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-10 w-10 md:h-11 md:w-11"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="30" r="7" />
      <circle cx="32" cy="24" r="7" />
      <circle cx="46" cy="30" r="7" />
      <path d="M6 52c1.5-7 6-10 12-10s10.5 3 12 10" />
      <path d="M20 54c1.5-8 6.5-11 12-11s10.5 3 12 11" />
      <path d="M34 52c1.5-7 6-10 12-10s10.5 3 12 10" />
      <path d="M32 8v6M24 12l-3-3M40 12l3-3" />
    </svg>
  );
}

function IconGrowthDoc() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-10 w-10 md:h-11 md:w-11"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 8h24l12 12v36H14z" />
      <path d="M38 8v12h12" />
      <path d="M22 30h14M22 38h10" />
      <path d="M22 54V44h6v10" />
      <path d="M32 54V36h6v18" />
      <path d="M42 54V28h6v26" />
      <circle cx="28" cy="20" r="7" />
      <path d="M28 13v7h5" />
    </svg>
  );
}

/* =========================
   REUSABLE WRAPPERS
========================= */

function SectionContainer({ children, className = "" }) {
  return (
    <section className={`w-full ${className}`}>
      <div className="mx-auto w-full max-w-[1110px] px-4 sm:px-6 lg:px-6">
        {children}
      </div>
    </section>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="font-['Raleway'] text-[28px] sm:text-[30px] md:text-[34px] font-semibold leading-[1.22] tracking-[-0.01em] text-[#1B2336]">
      {children}
    </h2>
  );
}

function BodyText({ children, className = "" }) {
  return (
    <p
      className={`font-['Nunito_Sans'] text-[16px] md:text-[16px] font-normal leading-[1.75] tracking-[0] text-[#415674] ${className}`}
    >
      {children}
    </p>
  );
}

function SplitSection({
  title,
  body,
  image,
  imageAlt,
  reverse = false,
  note,
}) {
  return (
    <SectionContainer className="bg-white py-10 md:py-14">
      <div
        className={`grid grid-cols-1 items-start gap-8 md:gap-10 lg:gap-12 ${
          reverse ? "lg:grid-cols-[1fr_1fr]" : "lg:grid-cols-[1fr_1fr]"
        }`}
      >
        {!reverse && (
          <div className="space-y-4 md:space-y-5">
            <SectionTitle>{title}</SectionTitle>
            <div className="space-y-3">{body}</div>
          </div>
        )}

        <div className={`${reverse ? "lg:order-1" : ""}`}>
          <img
            src={image}
            alt={imageAlt}
            className="w-full rounded-[6px] object-cover"
          />
        </div>

        {reverse && (
          <div className="space-y-4 md:space-y-5 lg:order-2">
            <SectionTitle>{title}</SectionTitle>
            <div className="space-y-3">{body}</div>
          </div>
        )}
      </div>

      {note ? <div className="mt-6 md:mt-8">{note}</div> : null}
    </SectionContainer>
  );
}

function BenefitCard({ icon, text, fullWidth = false }) {
  return (
    <div
      className={`flex items-center gap-4 rounded-[16px] border-2 border-[#BE9C06] bg-white px-4 py-4 md:px-5 md:py-4 ${
        fullWidth ? "w-full" : "min-h-[88px]"
      }`}
    >
      <div className="shrink-0 text-[#880163]">{icon}</div>
      <p className="font-['Raleway'] text-[16px] md:text-[18px] font-semibold leading-[1.35] text-[#1B2336]">
        {text}
      </p>
    </div>
  );
}

function BenefitSection({ items, columns = 2 }) {
  return (
    <SectionContainer className="bg-white py-3 md:py-5">
      <div className="rounded-[16px] bg-[#F6F6F6] px-4 py-4 md:px-5 md:py-5">
        {/* Header */}
        <div className="mx-auto mb-5 overflow-hidden rounded-[16px] bg-[#880163] text-center">
          <div className="px-5 py-4">
            <h3 className="font-['Raleway'] text-[22px] sm:text-[24px] md:text-[30px] font-semibold leading-[1.2] text-white">
              What Organizations get
            </h3>
            <p className="mt-1 font-['Nunito_Sans'] text-[12px] sm:text-[13px] md:text-[14px] font-semibold leading-[1.4] text-white">
              NGOs | NPOs | IDPGs | Tech-for-good orgs
            </p>
          </div>
        </div>

        {columns === 2 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-5 md:gap-y-4">
            {items.map((item, idx) => (
              <BenefitCard key={idx} icon={item.icon} text={item.text} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item, idx) => (
              <BenefitCard
                key={idx}
                icon={item.icon}
                text={item.text}
                fullWidth
              />
            ))}
          </div>
        )}
      </div>
    </SectionContainer>
  );
}

/* =========================
   PAGE DATA
========================= */

const dmpBenefits = [
  {
    icon: <IconMessageCommunity />,
    text: "Structured Project delivery | 3 months",
  },
  {
    icon: <IconInnovationHand />,
    text: "Fresh Talent & Innovation Pipeline",
  },
  {
    icon: <IconCodeBrackets />,
    text: "Access to Skilled Student Contributors",
  },
  {
    icon: <IconCommunityGroup />,
    text: "Leverage Community-driven contributions",
  },
];

const openCommunityBenefits = [
  {
    icon: <IconCommunityGroup />,
    text: "Reliable community contributions for low-complexity issues and enhancements",
  },
  {
    icon: <IconVisibilityGroup />,
    text: "Increase product visibility within a growing ecosystem",
  },
  {
    icon: <IconGrowthDoc />,
    text: "Sustained maintenance and growth through long-term contributor engagement",
  },
];

/* =========================
   MAIN COMPONENT
========================= */

export default function OrganizationsHowToJoinSections() {
  return (
    <div className="w-full bg-white font-['Nunito_Sans']">
      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&family=Raleway:wght@600;700;800&display=swap');
      `}</style>

      <PageHeroBanner title="How to Join" currentPage="How to Join" />

      {/* CTA */}
      <SectionContainer className="bg-white pt-8 md:pt-10">
        <div className="max-w-[950px]">
          <div className="mb-6 md:mb-8">
            <Button className="h-auto rounded-md bg-[#880163] px-6 py-3.5 font-['Nunito_Sans'] text-[15px] font-semibold text-white shadow-none hover:bg-[#6d014f] md:px-7 md:text-[16px]">
              <a
                href="https://github.com/Code4GovTech/C4GT/wiki/How-to-participate-as-an-organisation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                New to C4GT? Let&apos;s Get You Started
              </a>
            </Button>
          </div>
        </div>
      </SectionContainer>

      {/* Dedicated Mentoring Program */}
      <SplitSection
        title="Dedicated Mentoring Program"
        image="/downloaded-images/2025_04_DSC01393-1024x683.jpg"
        imageAlt="Dedicated Mentoring Program meeting"
        body={
          <BodyText>
            The <strong>Dedicated Mentoring Program (DMP)</strong> enables
            students and early-career professionals to work on live, open-source
            projects with tech-for-good organizations. Through a{" "}
            <strong>structured 3 month, 1:1 mentorship model</strong>,
            contributors engage deeply with real-world challenges across domains
            such as livelihoods, education, health, urban governance and other
            domains.
          </BodyText>
        }
      />

      {/* IFP */}
      {/* <SectionContainer className="bg-white py-2 md:py-4">
        <div className="max-w-[950px] space-y-4">
          <SectionTitle>IFP</SectionTitle>

          <BodyText>
            The C4GT Impact Fellowship Program enables organisations to engage a
            pre-trained, industry-ready talent pool to advance their priority
            tech-for-good initiatives. Designed as a structured, 5-month
            full-time engagement, the fellowship provides organisations with
            skilled interns trained in AI/ML, full-stack development, and
            open-source practices, supported throughout by RCTS IIIT Hyderabad.
          </BodyText>

          <BodyText>
            With clear scoping, regular reviews, and dedicated mentorship,
            organisations gain reliable execution capacity, fresh perspectives,
            and long-term contributors who can strengthen the development of
            high-impact digital solutions.
          </BodyText>
        </div>
      </SectionContainer> */}

      {/* DMP / IFP Benefits */}
      <BenefitSection items={dmpBenefits} columns={2} />

      {/* Open Community */}
      <SplitSection
        title="Open Community"
        image="/downloaded-images/2026_01_WhatsApp-Image-2026-01-27-at-5.10.53-PM-1024x682.jpeg"
        imageAlt="Open Community"
        body={
          <>
            <BodyText>
              The C4GT Open Community enables year-round collaboration between
              partner organizations and contributors, fostering organic
              engagement beyond structured programs. Organizations can post
              low-complexity tasks and feature requests, which are taken up by a
              skilled and motivated contributor community.
            </BodyText>

            <BodyText>
              This model enables organizations to engage and build a strong
              community while getting issues resolved, and allows contributors to
              work on real-world projects, collectively fostering a sustainable
              ecosystem in the long run.
            </BodyText>
          </>
        }
        note={
          <div className="max-w-[950px]">
            <h3 className="font-['Raleway'] text-[22px] md:text-[26px] font-semibold leading-[1.25] text-[#1B2336]">
              Onboarding Sprints
            </h3>
            <BodyText className="mt-3 italic">
              For organizations newly joining the C4GT ecosystem, we run
              dedicated onboarding sprints. A contributor from our community is
              assigned to solve a low-complexity issue, demonstrating how C4GT
              workflows operate and showcasing the quality and collaboration
              standards our contributors bring.
            </BodyText>
          </div>
        }
      />

      {/* Open Community Benefits */}
      <BenefitSection items={openCommunityBenefits} columns={1} />

      {/* OnBoarding */}
      {/* <SectionContainer className="bg-white py-7 md:py-9">
        <div className="max-w-[950px] space-y-4">
          <SectionTitle>OnBoarding</SectionTitle>
          <BodyText>
            We run onboarding sprints for new partner organizations, where they
            can post low-complexity tickets on our Open Community table. We then
            match these tasks with contributors from our existing community and
            ensure they are resolved. This helps organizations experience the
            quality and reliability of our contributor network firsthand and
            encourages deeper engagement with us going forward.
          </BodyText>
        </div>
      </SectionContainer> */}

      {/* C4GT Hubs */}
      <SplitSection
        title="C4GT Hubs"
        image="/downloaded-images/2026_01_c4gt_hub.jpeg"
        imageAlt="C4GT Hubs"
        reverse
        body={
          <>
            <BodyText>
              C4GT Hubs is a multi-year initiative curated by RCTS, IIIT
              Hyderabad, designed to build a deep and sustainable tech talent
              pipeline from Tier 2 and Tier 3 engineering institutions.
            </BodyText>

            <BodyText>
              Following a hub-and-spoke model where IIIT Hyderabad serves as the
              anchor hub and partner colleges act as regional spokes, students
              are engaged from their 2nd to 4th year through structured learning
              in AI/ML, full-stack development, open-source practices, and
              real-world problem solving. The program culminates in a six-month,
              paid capstone internship with Tech-for-Good organizations,
              creating a clear pathway from learning to meaningful employment.
            </BodyText>
          </>
        }
        note={
          <BodyText className="max-w-[950px] italic">
            <span className="font-semibold">Note:</span> C4GT Hubs is a
            restricted pathway, open exclusively to students from partner
            colleges within the hub network.
          </BodyText>
        }
      />
    </div>
  );
}