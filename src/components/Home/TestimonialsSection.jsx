import React, { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";
import t1 from "../../assets/testimonials/t1.png";
import t2 from "../../assets/testimonials/t2.png";
import t3 from "../../assets/testimonials/t3.png";
import t4 from "../../assets/testimonials/t4.png";
import t5 from "../../assets/testimonials/t5.png";
import t6 from "../../assets/testimonials/t6.png";

const testimonials = [
  {
    name: "Ravi Prakash",
    role: "Head of Architecture and Technology Ecosystem, FIDE | C4GT Supermentor",
    quote:
      "Initiatives like C4GT will greatly help DPG and DPI builders to accelerate the pace at which they are trying to enable a particular ecosystem.",
    cardImage: t1,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0",
  },
  {
    name: "Ashwin Date",
    role: "Co-founder & CTO, Tekdi | C4GT Supermentor",
    quote:
      "A significant outcome of programs like C4GT is that they push the organizations to think how they can start getting open source contributions, creating value for the contributors at the same time.",
    cardImage: t2,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0",
  },
  {
    name: "Vijayashree Urs",
    role: "CTO, ShikshaLokam | C4GT Supermentor",
    quote:
      "C4GT has become synonymous with collaboration and co-creation. It has provided an excellent opportunity for knowledge sharing, mentoring, learning and leveraging the talent pool to co-create DPGs.",
    cardImage: t3,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0",
  },
  {
    name: "Amar Tumballi",
    role: "Co-Founder, VP - Engineering, Dhiway | C4GT Mentor",
    quote:
      "C4GT is a great platform to accelerate the growth of DPGs and for contributors to start working on population scale projects.",
    cardImage: t4,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0",
  },
  {
    name: "Manika Jain",
    role: "Delhi Technological University | C4GT Contributor",
    quote:
      "I used to put myself in a box and learn from a restricted environment. But C4GT changed that for me, and I would cherish that for the rest of my life!",
    cardImage: t5,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0",
  },
  {
    name: "Rishit Gupta",
    role: "Kalinga Institute of Industrial Technology, Bhubaneswar | C4GT Contributor",
    quote:
      "Code for Good Tech has been a transformational chapter in my professional life. To say I am thrilled to be a part of it would be an understatement.",
    cardImage: t6,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const intervalRef = useRef(null);

  const active = testimonials[activeIndex];

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      triggerNextSlide();
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const triggerNextSlide = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 350);
  };

  const goToSlide = (index) => {
    if (index === activeIndex) return;
    setIsAnimating(true);

    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, 350);

    startAutoPlay();
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        closeVideoModal();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const openVideoModal = () => {
    setSelectedVideo(active.videoUrl);
    setIsModalOpen(true);
    stopAutoPlay();
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    setSelectedVideo("");
    startAutoPlay();
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#f4f4f6] py-[64px] lg:py-[72px]">
        {/* Grid background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(27,35,54,0.025) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(27,35,54,0.025) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-8">
          <div
            className="grid items-center gap-[42px] lg:grid-cols-[520px_minmax(0,1fr)]"
            onMouseEnter={stopAutoPlay}
            onMouseLeave={startAutoPlay}
          >
            {/* LEFT SIDE */}
            <div className="flex flex-col">
              <button
                onClick={openVideoModal}
                type="button"
                className="group relative block w-full overflow-hidden rounded-[18px] text-left"
                aria-label="Play testimonial video"
              >
                <div className="relative w-full overflow-hidden rounded-[18px]">
                  <img
                    src={active.cardImage}
                    alt={active.name}
                    className={`block w-full rounded-[18px] object-cover transition-all duration-500 ease-in-out ${
                      isAnimating
                        ? "-translate-x-8 opacity-0"
                        : "translate-x-0 opacity-100"
                    }`}
                    onError={(e) => {
                      e.currentTarget.src =
                        "/downloaded-images/2024_03_Untitled-presentation-1.jpg";
                    }}
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute left-1/2 top-1/2 flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[4px] border-white/70 bg-white/75 shadow-[0_8px_20px_rgba(0,0,0,0.10)] transition group-hover:scale-105">
                    <Play className="ml-1 h-6 w-6 fill-[#d2d6dc] text-[#d2d6dc]" />
                  </div>
                </div>
              </button>

              {/* NO ARROWS NOW */}
            </div>

            {/* RIGHT SIDE */}
            <div className="relative max-w-[640px]">
              <p
                className="mb-3 text-[18px] font-semibold uppercase tracking-[0.12em] text-[#93006c]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                TESTIMONIALS
              </p>

              <h2
                className="text-[46px] font-bold leading-[1.02] tracking-[-0.03em] text-[#1d2538] lg:text-[58px]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Community Speaks
              </h2>

              {/* Opening Quote */}
              <span
                className="pointer-events-none absolute left-[-18px] top-[68px] hidden select-none text-[108px] font-bold leading-none text-[#dbb7d1]/45 xl:block"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                “
              </span>

              <blockquote
                className={`relative z-10 mt-6 max-w-[620px] min-h-[132px] text-[18px] italic font-normal leading-[1.75] text-[#4b6485] lg:text-[19px] transition-all duration-500 ${
                  isAnimating ? "-translate-x-6 opacity-0" : "translate-x-0 opacity-100"
                }`}
                style={{ fontFamily: '"Nunito Sans", sans-serif' }}
              >
                “{active.quote}”
              </blockquote>

              <h3
                className={`mt-7 text-[34px] font-bold leading-[1.05] tracking-[-0.02em] text-[#1d2538] lg:text-[40px] transition-all duration-500 ${
                  isAnimating ? "-translate-x-6 opacity-0" : "translate-x-0 opacity-100"
                }`}
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                {active.name}
              </h3>

              <p
                className={`mt-3 max-w-[620px] text-[16px] font-medium leading-[1.45] text-[#93006c] lg:text-[17px] transition-all duration-500 ${
                  isAnimating ? "-translate-x-6 opacity-0" : "translate-x-0 opacity-100"
                }`}
                style={{ fontFamily: '"Nunito Sans", sans-serif' }}
              >
                {active.role}
              </p>

              {/* Dots remain */}
              <div className="mt-6 flex items-center gap-2.5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    type="button"
                    className={`transition-all duration-300 ${
                      index === activeIndex
                        ? "h-[12px] w-[42px] rounded-full bg-[#93006c]"
                        : "h-[12px] w-[12px] rounded-full bg-[#d7b3cb]"
                    }`}
                  />
                ))}
              </div>

              {/* Closing Quote */}
              <span
                className="pointer-events-none absolute bottom-[10px] right-[-14px] hidden select-none text-[108px] font-bold leading-none text-[#dbb7d1]/45 xl:block"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                ”
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 px-4 py-6"
          onClick={closeVideoModal}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-[20px] bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideoModal}
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black transition hover:bg-white"
              aria-label="Close video modal"
              type="button"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="aspect-video w-full">
              <iframe
                src={selectedVideo}
                title="Testimonial Video"
                className="h-full w-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}