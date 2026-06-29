// import React from "react";
// import PageHeroBanner from "../../PageHeroBanner";
// const whoCanBecome = [
//   {
//     title: "College Students",
//     icon: "/downloaded-images/2025_03_Screenshot-2025-03-20-at-5.49.13_PM.png",
//   },
//   {
//     title: "Working Professionals",
//     icon: "/downloaded-images/2025_03_Screenshot-2025-03-20-at-5.49.29_PM.png",
//   },
//   {
//     title: "Tech Enthusiasts",
//     icon: "/downloaded-images/2025_03_Screenshot-2025-03-20-at-5.49.57_PM.png",
//   },
// ];

// const whyBecome = [
//   {
//     title: "Unique Mentorship Opportunity",
//     desc: "Work closely with open-source contributors and guide them on the assigned projects.",
//     icon: "/downloaded-images/2025_03_Screenshot-2025-03-20-at-5.44.04_PM.png",
//   },
//   {
//     title: "Enable Tech-for-Good Projects",
//     desc: "Address population-scale challenges and make a lasting societal impact.",
//     icon: "/downloaded-images/2025_03_Screenshot-2025-03-20-at-5.44.41_PM.png",
//   },
//   {
//     title: "Community of Changemakers",
//     desc: "Be a part of an exclusive community and connect with like-minded leaders.",
//     icon: "/downloaded-images/2025_04_Screenshot-2025-04-03-at-3.33.36_PM.png",
//   },
// ];

// const responsibilities = [
//   {
//     title: "1. Onboarding & Project Scoping",
//     desc: "Mentors will dedicate 3-4 hours weekly to understand project details and collaborate with DPG/DPI organizations to further define contributor projects and objectives.",
//     icon: "/downloaded-images/2025_04_Screenshot-2025-04-03-at-3.50.14_PM.png",
//   },
//   {
//     title: "2. Pre-coding & Evaluation Period",
//     desc: "During the pre-coding period, mentors will spend 2–3 hours weekly addressing contributor queries and invest 1–2 hours per applicant over a month for interviews, assignments, and evaluations.",
//     icon: "/downloaded-images/2025_04_Screenshot-2025-04-03-at-3.51.27_PM.png",
//   },
//   {
//     title: "3. Project Setup & Coding Period",
//     desc: "After contributor selection, a 3-day Bootcamp will be conducted, followed by the official inauguration of the program, leading into the 3-month coding phase. Mentors will engage 1–2 hours weekly per project with the contributors to guide them.",
//     icon: "/downloaded-images/2025_04_Screenshot-2025-04-03-at-3.50.51_PM.png",
//   },
// ];

// const AngelMentors = () => {
//   return (
//     <div
//       className="w-full bg-[#f8f9fa] text-[#415674]"
//       style={{ fontFamily: "'Nunito Sans', sans-serif" }}
//     >
//               <PageHeroBanner title="Angel Mentors" currentPage="Angel Mentors" />
//       {/* MAIN WRAPPER */}
//       <main className="w-full">
//         {/* =========================
//             INTRO SECTION
//         ========================= */}
//         <section className="px-4 pt-8 md:pt-10 lg:pt-12">
//   <div className="mx-auto max-w-[1220px]">
//     <h2
//       className="mb-6 text-center text-[28px] leading-[1.2] tracking-[-0.2px] text-[#415674] md:mb-8 md:text-left md:text-[32px] lg:text-[36px]"
//       style={{
//         fontFamily: "'Raleway', sans-serif",
//         fontWeight: 600,
//       }}
//     >
//       Empowering change, one contribution at a time
//     </h2>

//     <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-5">
//       {/* LEFT IMAGE */}
//       <div className="relative">
//         <img
//           src="/downloaded-images/2025_04_DSC01393-1024x683.jpg"
//           alt="Angel Mentors"
//           className="w-full max-w-[600px] rounded-[12px] object-cover md:max-w-[640px] lg:max-w-[620px]"
//         />
//       </div>

//       {/* RIGHT TEXT */}
//       <div className="relative flex flex-col justify-start">
//         <div
//           className="space-y-7 text-[15px] leading-[1.85] text-[#415674] md:text-[16px] lg:text-[18px]"
//           style={{
//             fontFamily: "'Proxima Nova', 'Nunito Sans', sans-serif",
//             fontWeight: 400,
//           }}
//         >
//           <p>
//             Volunteer as an Angel Mentor with C4GT and help shape high-impact
//             Tech-for-Good projects across DPGs, DPIs, and other partner
//             organizations.
//           </p>

//           <p>
//             Since 2022, C4GT has enabled selected students and working
//             professionals to contribute to critical, population-scale open-source
//             and DPG projects in collaboration with partner organizations through
//             various initiatives, including its flagship Dedicated Mentoring
//             Program (DMP). As an Angel Mentor, you will guide contributors,
//             share your expertise, and help advance impactful Tech-for-Good
//             solutions and strengthening India’s open-source ecosystem for public
//             good.
//           </p>
//         </div>

//         {/* Decorative gold circle lines */}
//         <div className="pointer-events-none absolute bottom-[-10px] right-0 hidden translate-x-4 translate-y-2 lg:block">
//           <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full opacity-100">
//             {Array.from({ length: 10 }).map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute left-[-18%] w-[145%] rounded-full border-t-[2px] border-[#BE9C06]"
//                 style={{
//                   top: `${10 + i * 9}px`,
//                   transform: "rotate(-34deg)",
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* CTA BUTTONS */}
//     <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row md:mt-10 lg:mt-8">
//       <a
//         href="https://docs.google.com/forms/d/e/1FAIpQLSeG9_fLmaajH6pWqZEwfgAyOWE6Se2YibVcH26CtxWwZJRL8g/viewform"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="min-w-[265px] rounded-[3px] bg-[#98006A] px-7 py-[10px] text-center text-[14px] font-[400] text-white shadow-none transition hover:opacity-95"
//         style={{ fontFamily: "'Proxima Nova', 'Nunito Sans', sans-serif" }}
//       >
//         Applications Open, Apply Now
//       </a>

//       <a
//         href="https://codeforgoodtech.in/dedicated-mentoring-program-2025-impact-report/"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="min-w-[215px] rounded-[3px] bg-[#98006A] px-7 py-[10px] text-center text-[14px] font-[400] text-white shadow-none transition hover:opacity-95"
//         style={{ fontFamily: "'Proxima Nova', 'Nunito Sans', sans-serif" }}
//       >
//         DMP 2025 Projects List
//       </a>

//       <a
//         href="https://codeforgoodtech.in/dedicated-mentoring-program-2024-impact-report/"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="min-w-[215px] rounded-[3px] bg-[#98006A] px-7 py-[10px] text-center text-[14px] font-[400] text-white shadow-none transition hover:opacity-95"
//         style={{ fontFamily: "'Proxima Nova', 'Nunito Sans', sans-serif" }}
//       >
//         DMP 2024 Projects List
//       </a>
//     </div>
//   </div>
// </section>

//         {/* =========================
//             WHO CAN BECOME
//         ========================= */}
//         {/* <section className="px-4 pt-12 md:pt-14 lg:pt-16">
//   <div className="mx-auto max-w-[1220px]">
//     <h2
//       className="text-center text-[34px] leading-[1.2] text-[#415674] md:text-[48px] lg:text-[58px]"
//       style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}
//     >
//       Who can become an Angel Mentor?
//     </h2>

//     <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 md:mt-12 md:grid-cols-3 lg:mt-14">
//       {whoCanBecome.map((item) => (
//         <div key={item.title} className="text-center">
//           <div className="flex justify-center">
//             <img
//               src={item.icon}
//               alt={item.title}
//               className="h-[72px] w-auto object-contain md:h-[84px] lg:h-[92px]"
//               onError={(e) => {
//                 e.currentTarget.style.display = "none";
//               }}
//             />
//           </div>

//           <h3
//             className="mt-5 text-[22px] leading-[1.25] text-[#880163] md:text-[24px] lg:text-[28px]"
//             style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}
//           >
//             {item.title}
//           </h3>
//         </div>
//       ))}
//     </div>
//   </div>
// </section> */}

//         {/* =========================
//             WHY BECOME
//         ========================= */}
//         {/* <section className="px-4 pt-24 md:pt-28 lg:pt-32">
//           <div className="mx-auto max-w-[1200px]">
//             <h2
//               className="text-center text-[34px] md:text-[48px] lg:text-[58px] font-[700] leading-[1.2] text-[#415674]"
//               style={{ fontFamily: "'Raleway', sans-serif" }}
//             >
//               Why become an Angel Mentor?
//             </h2>

//             <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-y-14 gap-x-10">
//               {whyBecome.map((item) => (
//                 <div key={item.title} className="text-center">
//                   <div className="flex justify-center">
//                     <img
//                       src={item.icon}
//                       alt={item.title}
//                       className="h-[92px] md:h-[100px] w-auto object-contain"
//                       onError={(e) => {
//                         e.currentTarget.style.display = "none";
//                       }}
//                     />
//                   </div>

//                   <h3
//                     className="mt-8 text-[24px] md:text-[26px] font-[700] leading-[1.45] text-[#880163]"
//                     style={{ fontFamily: "'Raleway', sans-serif" }}
//                   >
//                     {item.title}
//                   </h3>

//                   <p className="mx-auto mt-4 max-w-[330px] text-[18px] md:text-[18px] leading-[1.7] text-[#415674]">
//                     {item.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section> */}

//         {/* =========================
//             ROLES & RESPONSIBILITIES
//         ========================= */}
//       <section className="px-4 pt-8 md:pt-10 lg:pt-12">
//   <div className="mx-auto max-w-[1220px]">
//     <h2
//       className="text-center text-[28px] leading-[1.33] text-[#415674] md:text-[31px] lg:text-[34px]"
//       style={{
//         fontFamily: "'Gotham', 'Montserrat', 'Nunito Sans', sans-serif",
//         fontWeight: 600,
//       }}
//     >
//       Who can become an Angel Mentor?
//     </h2>

//     <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 md:mt-12 md:grid-cols-3 lg:mt-14">
//       {whoCanBecome.map((item) => (
//         <div key={item.title} className="text-center">
//           <div className="flex justify-center">
//             <img
//               src={item.icon}
//               alt={item.title}
//               className="h-[72px] w-auto object-contain md:h-[82px] lg:h-[90px]"
//               onError={(e) => {
//                 e.currentTarget.style.display = "none";
//               }}
//             />
//           </div>

//           <h3
//             className="mt-5 text-[22px] leading-[1.25] text-[#880163] md:text-[24px] lg:text-[26px]"
//             style={{
//               fontFamily: "'Gotham', 'Montserrat', 'Nunito Sans', sans-serif",
//               fontWeight: 600,
//             }}
//           >
//             {item.title}
//           </h3>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

       

//         {/* =========================
//             HOW CAN THEY JOIN
//         ========================= */}
//        <section className="px-4 pt-12 md:pt-14 lg:pt-16">
//   <div className="mx-auto max-w-[1220px]">
//     <h2
//       className="text-center text-[28px] leading-[1.33] text-[#415674] md:text-[31px] lg:text-[34px]"
//       style={{
//         fontFamily: "'Gotham', 'Montserrat', 'Nunito Sans', sans-serif",
//         fontWeight: 600,
//       }}
//     >
//       Why become an Angel Mentor?
//     </h2>

//     <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 md:mt-12 md:grid-cols-3 lg:mt-14">
//       {whyBecome.map((item) => (
//         <div key={item.title} className="text-center">
//           <div className="flex justify-center">
//             <img
//               src={item.icon}
//               alt={item.title}
//               className="h-[76px] w-auto object-contain md:h-[88px] lg:h-[96px]"
//               onError={(e) => {
//                 e.currentTarget.style.display = "none";
//               }}
//             />
//           </div>

//           <h3
//             className="mt-5 text-[20px] leading-[1.35] text-[#880163] md:text-[22px] lg:text-[24px]"
//             style={{
//               fontFamily: "'Gotham', 'Montserrat', 'Nunito Sans', sans-serif",
//               fontWeight: 600,
//             }}
//           >
//             {item.title}
//           </h3>

//           <p
//             className="mx-auto mt-3 max-w-[320px] text-[15px] leading-[1.75] text-[#415674] md:text-[16px] lg:text-[18px]"
//             style={{
//               fontFamily: "'Proxima Nova', 'Nunito Sans', sans-serif",
//               fontWeight: 400,
//             }}
//           >
//             {item.desc}
//           </p>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>



//         {/* =========================
//             TESTIMONIALS
//         ========================= */}
//         <section className="px-4 pt-20 md:pt-24 lg:pt-28 pb-20 md:pb-24">
//           <div className="mx-auto max-w-[1200px]">
//             <h2
//               className="text-center text-[34px] md:text-[48px] lg:text-[58px] font-[700] leading-[1.2] text-[#415674]"
//               style={{ fontFamily: "'Raleway', sans-serif" }}
//             >
//               Testimonials
//             </h2>

//             {/* EXACT VISUAL STYLE BOX */}
//             <div className="mt-8 md:mt-10 rounded-none bg-[#f4f4f4] px-4 md:px-8 lg:px-10 py-6 md:py-8">
//               <h3
//                 className="text-[30px] md:text-[42px] lg:text-[56px] font-[700] leading-[1.15] text-[#1b2336]"
//                 style={{ fontFamily: "'Raleway', sans-serif" }}
//               >
//                 Hear from the Contributors
//               </h3>

//               {/* EMBED / cropped to match screenshot */}
//               <div className="relative mt-6 md:mt-8 w-full overflow-hidden bg-transparent">
//                 <div className="relative h-[360px] sm:h-[420px] md:h-[500px] lg:h-[560px] xl:h-[620px] w-full">
//                   <iframe
//                     src="https://pl-app.iiit.ac.in/rcts/c4gt/angel-testimonials"
//                     title="Angel Mentor Testimonials"
//                     loading="lazy"
//                     scrolling="no"
//                     className="
//                       absolute left-0 border-0 w-full
//                       top-[-95px] h-[760px]
//                       sm:top-[-100px] sm:h-[820px]
//                       md:top-[-110px] md:h-[900px]
//                       lg:top-[-120px] lg:h-[980px]
//                       xl:top-[-130px] xl:h-[1040px]
//                     "
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* BACK TO TOP BUTTON (matches screenshot feel) */}
//       <button
//         type="button"
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         className="fixed bottom-5 right-5 z-50 flex h-[52px] w-[52px] items-center justify-center rounded-[6px] bg-[#880163] text-white shadow-[0_6px_16px_rgba(0,0,0,0.2)] hover:opacity-95"
//         aria-label="Back to top"
//       >
//         <span className="text-[28px] leading-none">↑</span>
//       </button>
//     </div>
//   );
// };

// export default AngelMentors;

import React from "react";
import PageHeroBanner from "../../PageHeroBanner";

const whoCanBecome = [
  {
    title: "College Students",
    icon: "/downloaded-images/2025_03_Screenshot-2025-03-20-at-5.49.13_PM.png",
  },
  {
    title: "Working Professionals",
    icon: "/downloaded-images/2025_03_Screenshot-2025-03-20-at-5.49.29_PM.png",
  },
  {
    title: "Tech Enthusiasts",
    icon: "/downloaded-images/2025_03_Screenshot-2025-03-20-at-5.49.57_PM.png",
  },
];

const whyBecome = [
  {
    title: "Unique Mentorship Opportunity",
    desc: "Work closely with open-source contributors and guide them on the assigned projects.",
    icon: "/downloaded-images/2025_03_Screenshot-2025-03-20-at-5.44.04_PM.png",
  },
  {
    title: "Enable Tech-for-Good Projects",
    desc: "Address population-scale challenges and make a lasting societal impact.",
    icon: "/downloaded-images/2025_03_Screenshot-2025-03-20-at-5.44.41_PM.png",
  },
  {
    title: "Community of Changemakers",
    desc: "Be a part of an exclusive community and connect with like-minded leaders.",
    icon: "/downloaded-images/2025_04_Screenshot-2025-04-03-at-3.33.36_PM.png",
  },
];

const responsibilities = [
  {
    title: "1. Onboarding & Project Scoping",
    desc: "Mentors will dedicate 3-4 hours weekly to understand project details and collaborate with DPG/DPI organizations to further define contributor projects and objectives.",
    icon: "/downloaded-images/2025_04_Screenshot-2025-04-03-at-3.50.14_PM.png",
  },
  {
    title: "2. Pre-coding & Evaluation Period",
    desc: "During the pre-coding period, mentors will spend 2–3 hours weekly addressing contributor queries and invest 1–2 hours per applicant over a month for interviews, assignments, and evaluations.",
    icon: "/downloaded-images/2025_04_Screenshot-2025-04-03-at-3.51.27_PM.png",
  },
  {
    title: "3. Project Setup & Coding Period",
    desc: "After contributor selection, a 3-day Bootcamp will be conducted, followed by the official inauguration of the program, leading into the 3-month coding phase. Mentors will engage 1–2 hours weekly per project with the contributors to guide them.",
    icon: "/downloaded-images/2025_04_Screenshot-2025-04-03-at-3.50.51_PM.png",
  },
];

const AngelMentors = () => {
  return (
    <div
      className="w-full bg-[#f8f9fa] text-[#415674]"
      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
    >
      <PageHeroBanner title="Angel Mentors" currentPage="Angel Mentors" />

      <main className="w-full">
        {/* =========================
            INTRO SECTION
        ========================= */}
        <section className="px-4 pt-8 md:pt-10 lg:pt-12">
          <div className="mx-auto max-w-[1220px]">
            <h2
              className="mb-6 text-center text-[28px] leading-[1.2] tracking-[-0.2px] text-[#415674] md:mb-8 md:text-left md:text-[32px] lg:text-[36px]"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
              }}
            >
              Empowering change, one contribution at a time
            </h2>

            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-5">
              {/* LEFT IMAGE */}
              <div className="relative">
                <img
                  src="/downloaded-images/2025_04_DSC01393-1024x683.jpg"
                  alt="Angel Mentors"
                  className="w-full max-w-[600px] rounded-[12px] object-cover md:max-w-[640px] lg:max-w-[620px]"
                />
              </div>

              {/* RIGHT TEXT */}
              <div className="relative flex flex-col justify-start">
                <div
                  className="space-y-7 text-[15px] leading-[1.85] text-[#415674] md:text-[16px] lg:text-[18px]"
                  style={{
                    fontFamily: "'Proxima Nova', 'Nunito Sans', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  <p>
                    Volunteer as an Angel Mentor with C4GT and help shape
                    high-impact Tech-for-Good projects across DPGs, DPIs, and
                    other partner organizations.
                  </p>

                  <p>
                    Since 2022, C4GT has enabled selected students and working
                    professionals to contribute to critical, population-scale
                    open-source and DPG projects in collaboration with partner
                    organizations through various initiatives, including its
                    flagship Dedicated Mentoring Program (DMP). As an Angel
                    Mentor, you will guide contributors, share your expertise,
                    and help advance impactful Tech-for-Good solutions and
                    strengthening India’s open-source ecosystem for public good.
                  </p>
                </div>

                {/* Decorative gold circle lines */}
                <div className="pointer-events-none absolute bottom-[-10px] right-0 hidden translate-x-4 translate-y-2 lg:block">
                  <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full opacity-100">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute left-[-18%] w-[145%] rounded-full border-t-[2px] border-[#BE9C06]"
                        style={{
                          top: `${10 + i * 9}px`,
                          transform: "rotate(-34deg)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row md:mt-10 lg:mt-8">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeG9_fLmaajH6pWqZEwfgAyOWE6Se2YibVcH26CtxWwZJRL8g/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[265px] rounded-[3px] bg-[#98006A] px-7 py-[10px] text-center text-[14px] font-[400] text-white shadow-none transition hover:opacity-95"
                style={{ fontFamily: "'Proxima Nova', 'Nunito Sans', sans-serif" }}
              >
                Applications Open, Apply Now
              </a>

              <a
                href="https://codeforgoodtech.in/dedicated-mentoring-program-2025-impact-report/"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[215px] rounded-[3px] bg-[#98006A] px-7 py-[10px] text-center text-[14px] font-[400] text-white shadow-none transition hover:opacity-95"
                style={{ fontFamily: "'Proxima Nova', 'Nunito Sans', sans-serif" }}
              >
                DMP 2025 Projects List
              </a>

              <a
                href="https://codeforgoodtech.in/dedicated-mentoring-program-2024-impact-report/"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[215px] rounded-[3px] bg-[#98006A] px-7 py-[10px] text-center text-[14px] font-[400] text-white shadow-none transition hover:opacity-95"
                style={{ fontFamily: "'Proxima Nova', 'Nunito Sans', sans-serif" }}
              >
                DMP 2024 Projects List
              </a>
            </div>
          </div>
        </section>

        {/* =========================
            WHO CAN BECOME
        ========================= */}
        <section className="px-4 pt-12 md:pt-14 lg:pt-16">
          <div className="mx-auto max-w-[1220px]">
            <h2
              className="text-center text-[28px] leading-[1.33] text-[#415674] md:text-[31px] lg:text-[34px]"
              style={{
                fontFamily: "'Gotham', 'Montserrat', 'Nunito Sans', sans-serif",
                fontWeight: 600,
              }}
            >
              Who can become an Angel Mentor?
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 md:mt-12 md:grid-cols-3 lg:mt-14">
              {whoCanBecome.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="flex justify-center">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-[72px] w-auto object-contain md:h-[82px] lg:h-[90px]"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <h3
                    className="mt-5 text-[22px] leading-[1.25] text-[#880163] md:text-[24px] lg:text-[26px]"
                    style={{
                      fontFamily:
                        "'Gotham', 'Montserrat', 'Nunito Sans', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            WHY BECOME
        ========================= */}
        <section className="px-4 pt-12 md:pt-14 lg:pt-16">
          <div className="mx-auto max-w-[1220px]">
            <h2
              className="text-center text-[28px] leading-[1.33] text-[#415674] md:text-[31px] lg:text-[34px]"
              style={{
                fontFamily: "'Gotham', 'Montserrat', 'Nunito Sans', sans-serif",
                fontWeight: 600,
              }}
            >
              Why become an Angel Mentor?
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 md:mt-12 md:grid-cols-3 lg:mt-14">
              {whyBecome.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="flex justify-center">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-[76px] w-auto object-contain md:h-[88px] lg:h-[96px]"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <h3
                    className="mt-5 text-[20px] leading-[1.35] text-[#880163] md:text-[22px] lg:text-[24px]"
                    style={{
                      fontFamily:
                        "'Gotham', 'Montserrat', 'Nunito Sans', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="mx-auto mt-3 max-w-[320px] text-[15px] leading-[1.75] text-[#415674] md:text-[16px] lg:text-[18px]"
                    style={{
                      fontFamily: "'Proxima Nova', 'Nunito Sans', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            ROLES & RESPONSIBILITIES
        ========================= */}
        <section className="px-4 pt-12 md:pt-14 lg:pt-16">
          <div className="mx-auto max-w-[1280px]">
            <h2
              className="text-center text-[28px] leading-[1.33] text-[#415674] md:text-[31px] lg:text-[34px]"
              style={{
                fontFamily: "'Gotham', 'Montserrat', 'Nunito Sans', sans-serif",
                fontWeight: 600,
              }}
            >
              Roles & Responsibilities of an Angel Mentor
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 md:mt-12 md:grid-cols-3 lg:mt-14 lg:gap-x-8">
              {responsibilities.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="flex justify-center">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-[78px] w-auto object-contain md:h-[90px] lg:h-[102px]"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <h3
                    className="mx-auto mt-6 max-w-[360px] text-[20px] leading-[1.65] text-[#880163] md:text-[22px] lg:text-[24px]"
                    style={{
                      fontFamily:
                        "'Gotham', 'Montserrat', 'Nunito Sans', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="mx-auto mt-4 max-w-[360px] text-[15px] leading-[1.75] text-[#415674] md:text-[16px] lg:text-[18px]"
                    style={{
                      fontFamily: "'Proxima Nova', 'Nunito Sans', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* =========================
    HOW CAN THEY JOIN
========================= */}
<section className="px-4 pt-12 md:pt-14 lg:pt-16">
  <div className="mx-auto max-w-[1220px]">
    <h2
      className="text-center text-[28px] leading-[1.33] text-[#415674] md:text-[31px] lg:text-[34px]"
      style={{
        fontFamily: "'Gotham', 'Montserrat', 'Nunito Sans', sans-serif",
        fontWeight: 600,
      }}
    >
      How can they join?
    </h2>

    <p
      className="mx-auto mt-6 max-w-[1180px] text-center text-[15px] leading-[1.8] text-[#415674] md:mt-8 md:text-[16px] lg:text-[18px]"
      style={{
        fontFamily: "'Proxima Nova', 'Nunito Sans', sans-serif",
        fontWeight: 400,
      }}
    >
      Fill out the form by clicking Apply Now, and the C4GT team will reach out
      to you regarding the next steps!
    </p>

    <div className="mt-8 flex justify-center md:mt-10">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeG9_fLmaajH6pWqZEwfgAyOWE6Se2YibVcH26CtxWwZJRL8g/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-w-[280px] items-center justify-center rounded-[4px] bg-[#98006A] px-10 py-[12px] text-center text-[18px] leading-none text-white shadow-[0_6px_14px_rgba(0,0,0,0.22)] transition hover:opacity-95 md:min-w-[340px] md:px-14 md:py-[14px] md:text-[20px] lg:min-w-[340px] lg:text-[22px]"
        style={{
          fontFamily: "'Proxima Nova', 'Nunito Sans', sans-serif",
          fontWeight: 400,
        }}
      >
        Apply Now!
      </a>
    </div>
  </div>
</section>

        {/* =========================
            TESTIMONIALS
        ========================= */}
        <section className="px-4 pb-20 pt-10 md:pb-24 md:pt-12 lg:pt-14">
  <div className="mx-auto max-w-[1220px]">
    <h2
      className="text-center text-[28px] leading-[1.33] text-[#415674] md:text-[31px] lg:text-[34px]"
      style={{
        fontFamily: "'Gotham', 'Montserrat', 'Nunito Sans', sans-serif",
        fontWeight: 600,
      }}
    >
      Testimonials
    </h2>

    <div className="mt-6 bg-[#f4f4f4] px-4 py-5 md:mt-8 md:px-8 md:py-6 lg:px-10 lg:py-8">
      <h3
        className="text-[26px] leading-[1.15] text-[#1b2336] md:text-[34px] lg:text-[42px]"
        style={{
          fontFamily: "'Raleway', sans-serif",
          fontWeight: 700,
        }}
      >
        Hear from the Contributors
      </h3>

      <div className="relative mt-5 w-full overflow-hidden bg-transparent md:mt-6">
        <div className="relative h-[300px] w-full sm:h-[360px] md:h-[430px] lg:h-[500px] xl:h-[540px]">
          <iframe
            src="https://pl-app.iiit.ac.in/rcts/c4gt/angel-testimonials"
            title="Angel Mentor Testimonials"
            loading="lazy"
            scrolling="no"
            className="
              absolute left-0 w-full border-0
              top-[-78px] h-[650px]
              sm:top-[-82px] sm:h-[700px]
              md:top-[-92px] md:h-[780px]
              lg:top-[-100px] lg:h-[860px]
              xl:top-[-110px] xl:h-[920px]
            "
          />
        </div>
      </div>
    </div>
  </div>
</section>
      </main>

      {/* BACK TO TOP BUTTON */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 z-50 flex h-[52px] w-[52px] items-center justify-center rounded-[6px] bg-[#880163] text-white shadow-[0_6px_16px_rgba(0,0,0,0.2)] hover:opacity-95"
        aria-label="Back to top"
      >
        <span className="text-[28px] leading-none">↑</span>
      </button>
    </div>
  );
};

export default AngelMentors;