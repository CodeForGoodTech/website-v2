import * as React from "react"

const partnerLogos = [
  { id: "unicef", url: "/downloaded-images/2024_10_UNICEF_logo.png", alt: "UNICEF" },
  { id: "mifos", url: "/downloaded-images/2025_12_mifos_logo_icon_170951.webp", alt: "Mifos" },
  { id: "bhashini", url: "/downloaded-images/2025_12_Bhashini_new.png", alt: "Bhashini" },
  { id: "mosip", url: "/downloaded-images/2024_01_mosipn-logo.png", alt: "MOSIP" },
  { id: "piramal", url: "/downloaded-images/2025_12_piramal-bg.png", alt: "Piramal" },
  { id: "partner2", url: "/downloaded-images/2024_03_2.png", alt: "Partner 2" },
  { id: "partner3", url: "/downloaded-images/2024_03_3.png", alt: "Partner 3" },
  { id: "partner4", url: "/downloaded-images/2024_03_4.png", alt: "Partner 4" },
  { id: "partner5", url: "/downloaded-images/2024_03_5.png", alt: "Partner 5" },
  { id: "partner6", url: "/downloaded-images/2024_03_6.png", alt: "Partner 6" },
  { id: "partner7", url: "/downloaded-images/2024_03_7.png", alt: "Partner 7" },
]

export function PartnerOrganizations() {
  const repeatedLogos = [...partnerLogos, ...partnerLogos]

  return (
    <>
      <style>
        {`
          @keyframes infinite-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-50% - 20px));
            }
          }

          .partner-carousel-track {
            animation: infinite-scroll 25s linear infinite;
          }

          .partner-carousel-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <section className="overflow-hidden bg-[#F9F2F7] px-5 py-[42px]">
        <div className="mx-auto max-w-[1200px]">
          {/* Header */}
          <div className="mb-7">
            <h2 className="text-left text-[24px] font-bold uppercase leading-none text-[#880163]">
              PARTNER ORGANIZATIONS
            </h2>
          </div>

          {/* Carousel */}
          <div className="relative w-full overflow-hidden">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 z-[2] h-full w-[80px] bg-[linear-gradient(to_right,#F9F2F7_0%,rgba(249,242,247,0)_100%)]" />

            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 z-[2] h-full w-[80px] bg-[linear-gradient(to_left,#F9F2F7_0%,rgba(249,242,247,0)_100%)]" />

            <div className="partner-carousel-track flex h-[72px] w-max items-center gap-10">
              {repeatedLogos.map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="flex h-[72px] w-[190px] shrink-0 items-center justify-center"
                >
                  <div className="flex h-full items-center justify-center">
                    <img
                      src={logo.url}
                      alt={`${logo.alt} logo`}
                      loading="lazy"
                      className="max-h-[58px] max-w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}