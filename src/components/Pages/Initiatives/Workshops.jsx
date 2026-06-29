import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import PageHeroBanner from "../../PageHeroBanner";

const partnerLogos = [
  {
    src: "/downloaded-images/2025_12_mifos_logo_icon_170951.webp",
    alt: "Mifos",
    className: "h-[52px] md:h-[58px]",
  },
  {
    src: "/downloaded-images/2026_01_Medic_Logo.png",
    alt: "Medic",
    className: "h-[42px] md:h-[48px]",
  },
  {
    src: "/downloaded-images/2025_12_piramal-bg.png",
    alt: "Piramal Swasthya",
    className: "h-[48px] md:h-[56px]",
  },
  {
    src: "/downloaded-images/2026_03_medplat-removebg-preview.png",
    alt: "MEDplat",
    className: "h-[42px] md:h-[50px]",
  },
];

const workshopImages = [
  "/downloaded-images/2026_01_workshop2.jpeg",
  "/downloaded-images/2026_01_workshop3.jpeg",
  "/downloaded-images/2026_01_workshop4.png",
  "/downloaded-images/2026_01_workshop5.png",
  "/downloaded-images/2026_01_workshop6.png",
  "/downloaded-images/2026_01_workshop7.jpeg",
  "/downloaded-images/2026_01_workshop8.png",
  "/downloaded-images/2025_12_WhatsApp-Image-2025-12-23-at-6.12.31-PM.jpeg",
  "/downloaded-images/2025_12_WhatsApp-Image-2025-12-23-at-6.20.04-PM.jpeg",
];

export default function WorkshopsContent() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    const interval = setInterval(() => {
      if (!api) return;
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PageHeroBanner title="Workshops" currentPage="Workshops" />

      {/* Middle Content */}
      <section className="w-full bg-white py-[36px] md:py-[42px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* FIX: bottom aligned on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_590px] gap-[34px] lg:gap-[46px] items-start lg:items-end">
            {/* LEFT TEXT */}
            <div className="max-w-[560px]">
              <h2
                className="text-[#415674] mb-7"
                style={{
                  fontFamily: "Gotham, sans-serif",
                  fontSize: "clamp(34px, 4vw, 34px)",
                  lineHeight: "1.08",
                  fontWeight: 600,
                  letterSpacing: "-0.5px",
                }}
              >
                Workshops
              </h2>

              <div
                className="text-[#415674]"
                style={{
                  fontFamily: '"Nunito Sans", sans-serif',
                  fontSize: "18px",
                  lineHeight: "1.68",
                  fontWeight: 400,
                }}
              >
                <p className="mb-8">
                  We conduct <strong>hands-on workshops</strong> to introduce
                  students and early-career developers to open source, the
                  DPG/DPI ecosystem, and career pathways in tech for social
                  impact.
                </p>

                <p>
                  As part of this, <strong>SheCodes</strong> is a women-focused
                  initiative designed to foster diversity and inclusion by
                  building confidence, skills, and community among aspiring
                  women developers. The quarterly SheCodes workshops are led by
                  women leaders in tech and offer participants foundational
                  exposure to open-source tools and practices, along with guided
                  support for making their first real-world contributions,
                  supported by a strong peer and mentor network that enables
                  continued learning and career progression.
                </p>
              </div>
            </div>

            {/* RIGHT AUTO CAROUSEL - aligned to bottom */}
            <div className="w-full lg:w-[569.98px] flex flex-col justify-end">
              <Carousel
  setApi={setApi}
  opts={{
    align: "start",
    loop: true,
  }}
  className="w-full"
>
  <CarouselContent>
    {workshopImages.map((img, index) => (
      <CarouselItem key={index}>
        <div className="w-full h-[260px] sm:h-[320px] md:h-[350px] lg:h-[370px] bg-white flex items-center justify-center overflow-hidden">
          <img
            src={img}
            alt={`Workshop ${index + 1}`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>

              {/* Dots */}
              <div className="flex justify-center items-center gap-[14px] mt-5">
                {workshopImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => api?.scrollTo(index)}
                    className={`rounded-full transition-all duration-300 ${
                      current === index
                        ? "w-[11px] h-[11px] bg-black"
                        : "w-[11px] h-[11px] bg-[#cfcfcf]"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Strip */}
      <section
        className="w-full py-[30px] md:py-[34px]"
        style={{ backgroundColor: "#f8f1f6" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-8 items-center justify-items-center">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center w-full">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`${logo.className} w-auto object-contain`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}