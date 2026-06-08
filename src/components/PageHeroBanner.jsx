import React from "react";
import { ChevronRight } from "lucide-react";
import herobg from "../assets/hero-banner.png";

const DEFAULT_BG = herobg;

const PageHeroBanner = ({
  title = "Workshops",
  currentPage = "Workshops",
  backgroundImage = DEFAULT_BG,
  showBreadcrumb = true,
}) => {
  return (
    <div className="w-full">
      {/* Local fonts only inside component */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;600;700;800&family=Nunito+Sans:wght@400;500;600;700;800&display=swap');

        .phb-heading {
          font-family: "Raleway", sans-serif;
        }

        .phb-body {
          font-family: "Nunito Sans", sans-serif;
        }
      `}</style>

      {/* HERO */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          height: "180px",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* lighter purple overlay like original */}
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(109, 0, 88, 0.34)",
          }}
        />

        {/* Title container */}
        <div className="relative z-10 mx-auto h-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
  <div className="flex h-full items-center">
    <h5
      className="m-0 font-['Raleway'] font-semibold text-white"
      style={{
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "44px",
        lineHeight: "52px",
        color: "#FFFFFF",
        letterSpacing: "0px",
      }}
    >
      {title}
    </h5>
  </div>
</div>
      </section>

      {/* BREADCRUMB BAR */}
      {showBreadcrumb && (
        <section
          className="w-full border-b"
          style={{
            backgroundColor: "#f5f5f5",
            borderColor: "#e9e9e9",
          }}
        >
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="flex h-[72px] items-center gap-2">
              <span
                className="phb-body font-bold text-[#1b2336]"
                style={{
                  fontSize: "18px",
                  lineHeight: "30px",
                }}
              >
                Home
              </span>

              <ChevronRight
                size={18}
                strokeWidth={2.5}
                className="text-[#8b96a8] shrink-0"
              />

              <span
                className="phb-body font-bold"
                style={{
                  color: "#880163",
                  fontSize: "18px",
                  lineHeight: "30px",
                }}
              >
                {currentPage}
              </span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default PageHeroBanner;