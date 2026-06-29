// // import * as React from "react"
// // import { Download } from "lucide-react"
// // import PageHeroBanner from "../../PageHeroBanner"
// // const carouselImages = [
// //   {
// //     src: "/downloaded-images/2025_12_IMG_20251215_164108-e1772432128222.jpg",
// //     alt: "DPG Dialogues Event Image 1",
// //   },
// //   {
// //     src: "/downloaded-images/2024_10_Screenshot-2024-10-06-at-6.18.08_PM.png",
// //     alt: "DPG Dialogues Event Image 2",
// //   },
// //   {
// //     src: "/downloaded-images/2024_10_DSC02307-scaled-e1772431889136.jpg",
// //     alt: "DPG Dialogues Event Image 3",
// //   },
// // ]

// // export default function DPGReportsSection() {
// //   const [currentIndex, setCurrentIndex] = React.useState(0)

// //   React.useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
// //     }, 3200)

// //     return () => clearInterval(interval)
// //   }, [])

// //   return (
// //     <div>
// //         <PageHeroBanner title="DPG Reports" currentPage="DPG Reports" />
// //     <section className="w-full bg-[#efefef]">
// //       {/* =========================
// //           TOP AUTO CAROUSEL
// //       ========================== */}
// //       <div className="w-full py-8 md:py-10 lg:py-12">
// //         <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-12">
// //           <div className="relative overflow-hidden rounded-none bg-transparent">
// //             <div
// //               className="flex transition-transform duration-700 ease-in-out"
// //               style={{
// //                 transform: `translateX(-${currentIndex * 100}%)`,
// //               }}
// //             >
// //               {carouselImages.map((image, index) => (
// //                 <div key={index} className="min-w-full">
// //                   <div className="mx-auto w-full max-w-[1280px]">
// //                     <div className="overflow-hidden bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
// //                       <div className="relative aspect-[16/7] w-full bg-[#f7f7f7]">
// //                         <img
// //                           src={image.src}
// //                           alt={image.alt}
// //                           className="h-full w-full object-cover"
// //                           loading={index === 0 ? "eager" : "lazy"}
// //                         />
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Dots */}
// //             <div className="mt-5 flex justify-center gap-2">
// //               {carouselImages.map((_, index) => (
// //                 <button
// //                   key={index}
// //                   onClick={() => setCurrentIndex(index)}
// //                   aria-label={`Go to slide ${index + 1}`}
// //                   className={`h-2.5 rounded-full transition-all duration-300 ${
// //                     currentIndex === index
// //                       ? "w-8 bg-[#880163]"
// //                       : "w-2.5 bg-[#880163]/35 hover:bg-[#880163]/60"
// //                   }`}
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* =========================
// //           DOWNLOAD REPORTS SECTION
// //       ========================== */}
// //       <div className="w-full pb-14 pt-4 md:pb-20 md:pt-6 lg:pb-24 lg:pt-8">
// //         <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-12">
// //           {/* Top row */}
// //           <div className="mb-10 grid grid-cols-1 gap-5 md:mb-14 md:grid-cols-[1.1fr_1fr_1fr] md:gap-8 lg:mb-16 lg:gap-10">
// //             {/* Heading */}
// //             <div className="flex items-center justify-center md:justify-start">
// //               <h2
// //                 className="
// //                   text-center md:text-left
// //                   font-semibold uppercase
// //                   tracking-[-0.02em]
// //                   text-[#880163]
// //                   text-[28px] leading-[1.1]
// //                   md:text-[34px]
// //                   lg:text-[40px]
// //                 "
// //                 style={{
// //                   fontFamily: "Raleway, sans-serif",
// //                 }}
// //               >
// //                 DOWNLOAD THE REPORTS
// //               </h2>
// //             </div>

// //             {/* 2025 button */}
// //             <a
// //               href="https://drive.google.com/file/d/1dMzsYGFMnjPWtdMCrcJCJZuZwsY-Yy7Z/view?usp=drive_link"
// //               target="_blank"
// //               rel="noreferrer"
// //               className="
// //                 flex h-[62px] md:h-[68px] lg:h-[72px]
// //                 items-center justify-center
// //                 bg-[#97006b]
// //                 px-5 md:px-6
// //                 text-white
// //                 shadow-[0_12px_30px_rgba(0,0,0,0.08)]
// //                 transition-all duration-300
// //                 hover:bg-[#7f0059]
// //               "
// //             >
// //               <span
// //                 className="flex items-center text-[18px] font-bold uppercase tracking-[0.02em] md:text-[22px] lg:text-[24px]"
// //                 style={{ fontFamily: "Raleway, sans-serif" }}
// //               >
// //                 2025 Report <Download className="ml-2 h-5 w-5 md:h-6 md:w-6" />
// //               </span>
// //             </a>

// //             {/* 2024 button */}
// //             <a
// //               href="https://drive.google.com/file/d/1zAiXMRIHRQJRUXar7PMzrwcIY1OMk_U2/view?usp=sharing"
// //               target="_blank"
// //               rel="noreferrer"
// //               className="
// //                 flex h-[62px] md:h-[68px] lg:h-[72px]
// //                 items-center justify-center
// //                 bg-[#97006b]
// //                 px-5 md:px-6
// //                 text-white
// //                 shadow-[0_12px_30px_rgba(0,0,0,0.08)]
// //                 transition-all duration-300
// //                 hover:bg-[#7f0059]
// //               "
// //             >
// //               <span
// //                 className="flex items-center text-[18px] font-bold uppercase tracking-[0.02em] md:text-[22px] lg:text-[24px]"
// //                 style={{ fontFamily: "Raleway, sans-serif" }}
// //               >
// //                 2024 Report <Download className="ml-2 h-5 w-5 md:h-6 md:w-6" />
// //               </span>
// //             </a>
// //           </div>

// //           {/* Bottom row */}
// //           <div className="grid grid-cols-1 items-start gap-8 md:gap-10 lg:grid-cols-[1.06fr_1fr] lg:gap-12 xl:gap-16">
// //             {/* Left image */}
// //             <div className="w-full">
// //               <img
// //                 src="/downloaded-images/2026_03_WhatsApp-Image-2026-02-17-at-1.58.31-PM.jpeg"
// //                 alt="DPG Score 2025 Report"
// //                 className="h-auto w-full object-contain"
// //                 loading="lazy"
// //               />
// //             </div>

// //             {/* Right content */}
// //             <div className="flex h-full flex-col justify-center">
// //               <div
// //                 className="
// //                   space-y-7
// //                   text-[#4f6684]
// //                   text-[18px] leading-[1.75]
// //                   md:text-[20px] md:leading-[1.8]
// //                   lg:text-[19px] lg:leading-[1.9]
// //                   xl:text-[20px]
// //                 "
// //                 style={{
// //                   fontFamily: "Nunito Sans, sans-serif",
// //                 }}
// //               >
// //                 <p>
// //                   The transformation driven by Digital Public Infrastructure
// //                   (DPI) is revolutionizing public service delivery through
// //                   systems for identity, payments, and data exchange. Digital
// //                   Public Goods (DPGs) often serve as the open-source building
// //                   blocks that power this DPI. However, the long-term
// //                   sustainability and widespread adoption of DPGs rely heavily on
// //                   healthy, vibrant, and engaged developer communities to ensure
// //                   quality, foster innovation, and increase transparency.
// //                 </p>

// //                 <p>
// //                   Launched in 2024, DPG SCoRe provides a holistic overview of
// //                   community building across DPGs and Tech for Good, offering
// //                   insights from product owners and contributors. The second
// //                   edition, in partnership with the Digital Public Goods Alliance
// //                   (DPGA), maintains these objectives while focusing exclusively
// //                   on DPGs. It identifies community management best practices
// //                   through case studies and introduces a new section on DPG
// //                   adoption strategies.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //     </div>
// //   )
// // }


// import * as React from "react"
// import { Download } from "lucide-react"
// import PageHeroBanner from "../../PageHeroBanner"

// const carouselImages = [
//   {
//     src: "/downloaded-images/2025_12_IMG_20251215_164108-e1772432128222.jpg",
//     alt: "DPG Dialogues Event Image 1",
//   },
//   {
//     src: "/downloaded-images/2024_10_Screenshot-2024-10-06-at-6.18.08_PM.png",
//     alt: "DPG Dialogues Event Image 2",
//   },
//   {
//     src: "/downloaded-images/2024_10_DSC02307-scaled-e1772431889136.jpg",
//     alt: "DPG Dialogues Event Image 3",
//   },
// ]

// export default function DPGReportsSection() {
//   const [currentIndex, setCurrentIndex] = React.useState(0)

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
//     }, 3200)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div>
//       <PageHeroBanner title="DPG Reports" currentPage="DPG Reports" />

//       <section className="w-full bg-[#efefef]">
//         {/* =========================
//             TOP AUTO CAROUSEL
//         ========================== */}
//         <div className="w-full py-6 md:py-8 lg:py-10">
//           <div className="mx-auto w-full max-w-[1280px] px-4 md:px-6 lg:px-8">
//             <div className="relative overflow-hidden bg-transparent">
//               <div
//                 className="flex transition-transform duration-700 ease-in-out"
//                 style={{
//                   transform: `translateX(-${currentIndex * 100}%)`,
//                 }}
//               >
//                 {carouselImages.map((image, index) => (
//                   <div key={index} className="min-w-full">
//                     <div className="mx-auto w-full">
//                       <div className="overflow-hidden bg-white shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
//                         <div className="relative aspect-[16/6.4] w-full bg-[#f7f7f7]">
//                           <img
//                             src={image.src}
//                             alt={image.alt}
//                             className="h-full w-full object-cover"
//                             loading={index === 0 ? "eager" : "lazy"}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Dots */}
//               <div className="mt-4 flex justify-center gap-2">
//                 {carouselImages.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentIndex(index)}
//                     aria-label={`Go to slide ${index + 1}`}
//                     className={`h-2 rounded-full transition-all duration-300 ${
//                       currentIndex === index
//                         ? "w-7 bg-[#880163]"
//                         : "w-2 bg-[#880163]/35 hover:bg-[#880163]/60"
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* =========================
//             DOWNLOAD REPORTS SECTION
//         ========================== */}
//         <div className="w-full pb-14 pt-2 md:pb-16 md:pt-4 lg:pb-20 lg:pt-6">
//           <div className="mx-auto w-full max-w-[1280px] px-4 md:px-6 lg:px-8">
//             {/* Top row */}
//             <div className="mb-8 grid grid-cols-1 gap-4 md:mb-10 md:grid-cols-[0.95fr_1fr_1fr] md:gap-8 lg:mb-12 lg:gap-10">
//               {/* Heading */}
//               <div className="flex items-center justify-center md:justify-start">
//                 <h2
//                   className="
//                     text-center md:text-left
//                     uppercase
//                     text-[#880163]
//                     text-[20px] leading-[1]
//                     md:text-[22px]
//                     lg:text-[24px]
//                   "
//                   style={{
//                     fontFamily: "Raleway, sans-serif",
//                     fontWeight: 600,
//                   }}
//                 >
//                   DOWNLOAD THE REPORTS
//                 </h2>
//               </div>

//               {/* 2025 button */}
//               <a
//                 href="https://drive.google.com/file/d/1dMzsYGFMnjPWtdMCrcJCJZuZwsY-Yy7Z/view?usp=drive_link"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="
//                   flex h-[52px] md:h-[58px] lg:h-[62px]
//                   items-center justify-center
//                   bg-[#97006b]
//                   px-4 md:px-6
//                   text-white
//                   shadow-none
//                   transition-all duration-300
//                   hover:bg-[#7f0059]
//                 "
//               >
//                 <span
//                   className="flex items-center text-[16px] font-[700] uppercase md:text-[18px] lg:text-[20px]"
//                   style={{ fontFamily: "Raleway, sans-serif" }}
//                 >
//                   2025 REPORT
//                   <Download className="ml-2 h-4 w-4 md:h-5 md:w-5" />
//                 </span>
//               </a>

//               {/* 2024 button */}
//               <a
//                 href="https://drive.google.com/file/d/1zAiXMRIHRQJRUXar7PMzrwcIY1OMk_U2/view?usp=sharing"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="
//                   flex h-[52px] md:h-[58px] lg:h-[62px]
//                   items-center justify-center
//                   bg-[#97006b]
//                   px-4 md:px-6
//                   text-white
//                   shadow-none
//                   transition-all duration-300
//                   hover:bg-[#7f0059]
//                 "
//               >
//                 <span
//                   className="flex items-center text-[16px] font-[700] uppercase md:text-[18px] lg:text-[20px]"
//                   style={{ fontFamily: "Raleway, sans-serif" }}
//                 >
//                   2024 REPORT
//                   <Download className="ml-2 h-4 w-4 md:h-5 md:w-5" />
//                 </span>
//               </a>
//             </div>

//             {/* Bottom row */}
//             <div className="grid grid-cols-1 items-center gap-6 md:gap-8 lg:grid-cols-[1.02fr_1fr] lg:gap-8 xl:gap-10">
//               {/* Left image */}
//               <div className="w-full">
//                 <img
//                   src="/downloaded-images/2026_03_WhatsApp-Image-2026-02-17-at-1.58.31-PM.jpeg"
//                   alt="DPG Score 2025 Report"
//                   className="h-auto w-full object-contain"
//                   loading="lazy"
//                 />
//               </div>

//               {/* Right content */}
//               <div className="flex h-full flex-col justify-center">
//                 <div
//                   className="
//                     space-y-6
//                     text-[#415674]
//                     text-[16px] leading-[1.75]
//                     md:text-[17px]
//                     lg:text-[18px] lg:leading-[1.67]
//                   "
//                   style={{
//                     fontFamily: "'Nunito Sans', sans-serif",
//                     fontWeight: 400,
//                   }}
//                 >
//                   <p>
//                     The transformation driven by Digital Public Infrastructure
//                     (DPI) is revolutionizing public service delivery through
//                     systems for identity, payments, and data exchange. Digital
//                     Public Goods (DPGs) often serve as the open-source building
//                     blocks that power this DPI. However, the long-term
//                     sustainability and widespread adoption of DPGs rely heavily
//                     on healthy, vibrant, and engaged developer communities to
//                     ensure quality, foster innovation, and increase
//                     transparency.
//                   </p>

//                   <p>
//                     Launched in 2024, DPG SCoRe provides a holistic overview of
//                     community building across DPGs and Tech for Good, offering
//                     insights from product owners and contributors. The second
//                     edition, in partnership with the Digital Public Goods
//                     Alliance (DPGA), maintains these objectives while focusing
//                     exclusively on DPGs. It identifies community management best
//                     practices through case studies and introduces a new section
//                     on DPG adoption strategies.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }


import * as React from "react"
import { Download, Play, X } from "lucide-react"
import PageHeroBanner from "../../PageHeroBanner"

const carouselImages = [
  {
    src: "/downloaded-images/2025_12_IMG_20251215_164108-e1772432128222.jpg",
    alt: "DPG Dialogues Event Image 1",
  },
  {
    src: "/downloaded-images/2024_10_Screenshot-2024-10-06-at-6.18.08_PM.png",
    alt: "DPG Dialogues Event Image 2",
  },
  {
    src: "/downloaded-images/2024_10_DSC02307-scaled-e1772431889136.jpg",
    alt: "DPG Dialogues Event Image 3",
  },
]

export default function DPGReportsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isVideoOpen, setIsVideoOpen] = React.useState(false)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
    }, 3200)

    return () => clearInterval(interval)
  }, [])

  // optional: close modal on ESC
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsVideoOpen(false)
    }

    if (isVideoOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isVideoOpen])

  return (
    <div>
      <PageHeroBanner title="DPG Reports" currentPage="DPG Reports" />

      <section className="w-full bg-[#efefef]">
        {/* =========================
            TOP AUTO CAROUSEL
        ========================== */}
        <div className="w-full py-6 md:py-8 lg:py-10">
          <div className="mx-auto w-full max-w-[1280px] px-4 md:px-6 lg:px-8">
            <div className="relative overflow-hidden bg-transparent">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {carouselImages.map((image, index) => (
                  <div key={index} className="min-w-full">
                    <div className="mx-auto w-full">
                      <div className="overflow-hidden bg-white shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
                        <div className="relative aspect-[16/6.4] w-full bg-[#f7f7f7]">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="h-full w-full object-cover"
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dots */}
              <div className="mt-4 flex justify-center gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? "w-7 bg-[#880163]"
                        : "w-2 bg-[#880163]/35 hover:bg-[#880163]/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            DOWNLOAD REPORTS SECTION
        ========================== */}
        <div className="w-full pb-14 pt-2 md:pb-16 md:pt-4 lg:pb-20 lg:pt-6">
          <div className="mx-auto w-full max-w-[1280px] px-4 md:px-6 lg:px-8">
            {/* Top row */}
            <div className="mb-8 grid grid-cols-1 gap-4 md:mb-10 md:grid-cols-[0.95fr_1fr_1fr] md:gap-8 lg:mb-12 lg:gap-10">
              {/* Heading */}
              <div className="flex items-center justify-center md:justify-start">
                <h2
                  className="
                    text-center md:text-left
                    uppercase
                    text-[#880163]
                    text-[20px] leading-[1]
                    md:text-[22px]
                    lg:text-[24px]
                  "
                  style={{
                    fontFamily: "Raleway, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  DOWNLOAD THE REPORTS
                </h2>
              </div>

              {/* 2025 button */}
              <a
                href="https://drive.google.com/file/d/1dMzsYGFMnjPWtdMCrcJCJZuZwsY-Yy7Z/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="
                  flex h-[52px] md:h-[58px] lg:h-[62px]
                  items-center justify-center
                  bg-[#97006b]
                  px-4 md:px-6
                  text-white
                  shadow-none
                  transition-all duration-300
                  hover:bg-[#7f0059]
                "
              >
                <span
                  className="flex items-center text-[16px] font-[700] uppercase md:text-[18px] lg:text-[20px]"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  2025 REPORT
                  <Download className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </span>
              </a>

              {/* 2024 button */}
              <a
                href="https://drive.google.com/file/d/1zAiXMRIHRQJRUXar7PMzrwcIY1OMk_U2/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="
                  flex h-[52px] md:h-[58px] lg:h-[62px]
                  items-center justify-center
                  bg-[#97006b]
                  px-4 md:px-6
                  text-white
                  shadow-none
                  transition-all duration-300
                  hover:bg-[#7f0059]
                "
              >
                <span
                  className="flex items-center text-[16px] font-[700] uppercase md:text-[18px] lg:text-[20px]"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  2024 REPORT
                  <Download className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </span>
              </a>
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-1 items-center gap-6 md:gap-8 lg:grid-cols-[1.02fr_1fr] lg:gap-8 xl:gap-10">
              {/* Left image with play overlay */}
              <div className="w-full">
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  aria-label="Play DPG Dialogues video"
                  className="group relative block w-full overflow-hidden rounded-[6px] focus:outline-none"
                >
                  <img
                    src="/downloaded-images/2026_03_WhatsApp-Image-2026-02-17-at-1.58.31-PM.jpeg"
                    alt="DPG Score 2025 Report"
                    className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                    loading="lazy"
                  />

                  {/* subtle dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

                  {/* play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="
                        flex h-[58px] w-[58px] items-center justify-center
                        rounded-full bg-white/92
                        shadow-[0_8px_24px_rgba(0,0,0,0.18)]
                        transition-transform duration-300 group-hover:scale-110
                      "
                    >
                      <Play
                        className="ml-[3px] h-7 w-7 fill-[#880163] text-[#880163]"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                </button>
              </div>

              {/* Right content */}
              <div className="flex h-full flex-col justify-center">
                <div
                  className="
                    space-y-6
                    text-[#415674]
                    text-[16px] leading-[1.75]
                    md:text-[17px]
                    lg:text-[18px] lg:leading-[1.67]
                  "
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  <p>
                    The transformation driven by Digital Public Infrastructure
                    (DPI) is revolutionizing public service delivery through
                    systems for identity, payments, and data exchange. Digital
                    Public Goods (DPGs) often serve as the open-source building
                    blocks that power this DPI. However, the long-term
                    sustainability and widespread adoption of DPGs rely heavily
                    on healthy, vibrant, and engaged developer communities to
                    ensure quality, foster innovation, and increase
                    transparency.
                  </p>

                  <p>
                    Launched in 2024, DPG SCoRe provides a holistic overview of
                    community building across DPGs and Tech for Good, offering
                    insights from product owners and contributors. The second
                    edition, in partnership with the Digital Public Goods
                    Alliance (DPGA), maintains these objectives while focusing
                    exclusively on DPGs. It identifies community management best
                    practices through case studies and introduces a new section
                    on DPG adoption strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          VIDEO MODAL
      ========================== */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4 py-6"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-[1000px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* close button */}
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close video"
              className="
                absolute -top-12 right-0 z-10
                flex h-10 w-10 items-center justify-center
                rounded-full bg-white text-[#2A3342]
                shadow-md transition-opacity hover:opacity-90
              "
            >
              <X className="h-5 w-5" />
            </button>

            {/* responsive video */}
            <div className="relative w-full overflow-hidden rounded-[10px] bg-black shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/ROEihwaLJUs?autoplay=1&rel=0&controls=1&mute=0"
                  title="DPG Dialogues Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}