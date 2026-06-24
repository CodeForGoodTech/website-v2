import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import PageHeroBanner from "../PageHeroBanner";

const ContactIntroOnly = () => {
  const socialLinks = [
    {
      icon: <FaLinkedinIn className="h-[30px] w-[30px]" />,
      href: "https://www.linkedin.com/company/code-for-govtech/",
      label: "LinkedIn",
      bg: "bg-[#0A66C2]",
    },
    {
      icon: <IoLogoYoutube className="h-[34px] w-[34px]" />,
      href: "https://www.youtube.com/@codeforgoodtech",
      label: "YouTube",
      bg: "bg-[#FF0000]",
    },
    {
      icon: <FaGithub className="h-[30px] w-[30px]" />,
      href: "https://github.com/Code4GovTech/C4GT",
      label: "GitHub",
      bg: "bg-[#333333]",
    },
    {
      icon: <MdOutlineMail className="h-[32px] w-[32px]" />,
      href: "mailto:c4gt@iiit.ac.in",
      label: "Email",
      bg: "bg-[#F44336]",
    },
  ];

  return (
    <div>
      <PageHeroBanner title="Contact Us" currentPage="Contact Us" />

      <section className="w-full bg-[#efefef] py-10 md:py-12 lg:py-14">
        <div className="mx-auto w-full max-w-[1240px] px-4 md:px-8 lg:px-10">
          <div className="max-w-[860px]">
            {/* Top text */}
            <div
              className="space-y-2 text-[#415674]"
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 400,
              }}
            >
              <p className="text-[18px] leading-[30px]">
                Join the C4GT ecosystem and build technology that solves
                real-world, population-scale challenges.
              </p>
              <p className="text-[18px] leading-[30px]">
                Collaborate with us and drive meaningful Tech-for-Good impact.
              </p>
            </div>

            {/* Social icons */}
            <div className="mt-8 flex flex-wrap gap-5">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className={`
                    ${social.bg}
                    flex h-[70px] w-[70px] md:h-[72px] md:w-[72px]
                    items-center justify-center
                    rounded-[10px] text-white
                    shadow-none transition-opacity duration-200 hover:opacity-90
                  `}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Bottom text */}
            <p
              className="mt-8 text-[18px] leading-[30px] text-[#415674]"
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 400,
              }}
            >
              Connect with us and start your journey today.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactIntroOnly;