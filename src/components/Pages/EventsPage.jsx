import React from "react";
import PageHeroBanner from "../PageHeroBanner";

const EventsPage = () => {
  return (
    <div>
      <PageHeroBanner title="Events" currentPage="Events" />

      <main className="w-full bg-[#efefef] px-4 py-10 md:px-8 md:py-12 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-[1240px]">
          {/* Main Section */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10 xl:gap-14">
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center">
              <h2
                className="text-[30px] leading-[1.2] text-[#880163] md:text-[33px] lg:text-[36px]"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 600,
                }}
              >
                DPG Dialogues
              </h2>

              <div
                className="mt-7 space-y-6 text-[16px] leading-[1.8] text-[#415674] md:text-[17px] lg:text-[18px] lg:leading-[1.67]"
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                <p>
                  DPG Dialogues is India’s flagship conference at the intersection of
                  technology, policy, and social impact. It brings together coders,
                  builders, policymakers, and global leaders to showcase how Digital
                  Public Goods (DPGs) and Digital Public Infrastructure (DPI) can
                  drive inclusive and sustainable transformation.
                </p>
              </div>

              {/* GOLD BUTTON */}
              <div className="mt-10">
                <a
                  href="https://dpgdialogues.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex h-[52px] min-w-[190px] items-center justify-center
                    bg-[#880163] px-8
                    text-[16px] text-white
                    shadow-[0_6px_16px_rgba(0,0,0,0.14)]
                    transition hover:opacity-95
                    md:h-[56px] md:min-w-[210px] md:px-10 md:text-[17px]
                  "
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  DPG 2025
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex items-center justify-center">
              <img
                src="/downloaded-images/2026_03_DPG-D-Logo.png"
                alt="DPG Dialogues Logo"
                className="h-auto w-full max-w-[520px] object-contain lg:max-w-[560px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventsPage;