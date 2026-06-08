import React, { useState } from "react";
import { FaLinkedinIn, FaYoutube, FaGithub, FaDiscord } from "react-icons/fa";
import logo from "../../assets/logo.png";

const footerMenu = [
  {
    label: "Home",
    href: "https://codeforgoodtech.in/",
  },
  {
    label: "Initiatives",
    href: "https://codeforgoodtech.in/",
    children: [
      {
        label: "Dedicated Mentoring Program",
        href: "https://codeforgoodtech.in/dedicated-mentoring-program/",
      },
      {
        label: "C4GT Hub",
        href: "https://codeforgoodtech.in/c4gt-hub/",
      },
    ],
  },
  {
    label: "Community",
    href: "https://codeforgoodtech.in/",
    children: [
      {
        label: "Open Community",
        href: "https://codeforgoodtech.in/open-community/",
      },
      {
        label: "Campus Leaders Program",
        href: "https://codeforgoodtech.in/campus-leaders-program/",
      },
    ],
  },
  {
    label: "Knowledge Assets",
    href: "https://codeforgoodtech.in/knowledge-assets/",
    children: [
      {
        label: "Product Directory",
        href: "https://codeforgoodtech.in/product-directory/",
      },
      {
        label: "DPG SCoRe 2025",
        href: "https://codeforgoodtech.in/dpg-score-2025/",
      },
      {
        label: "Events",
        href: "https://codeforgoodtech.in/events/",
      },
      {
        label: "Blogs",
        href: "https://codeforgoodtech.in/blogs/",
      },
    ],
  },
  {
    label: "Connect",
    href: "https://codeforgoodtech.in/",
    children: [
      {
        label: "How to Join",
        href: "https://codeforgoodtech.in/how-to-join/",
      },
      {
        label: "Contributors",
        href: "https://codeforgoodtech.in/contributors/",
      },
      {
        label: "Angel Mentors",
        href: "https://codeforgoodtech.in/angel-mentors/",
      },
      {
        label: "Contact Us",
        href: "https://codeforgoodtech.in/contact-us/",
      },
    ],
  },
];

const socialLinks = [
  {
    icon: FaLinkedinIn,
    href: "https://in.linkedin.com/company/code-for-govtech",
    label: "LinkedIn",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@codeforgoodtech",
    label: "YouTube",
  },
  {
    icon: FaGithub,
    href: "https://github.com/Code4GovTech/C4GT",
    label: "GitHub",
  },
  {
    icon: FaDiscord,
    href: "https://bit.ly/c4gtdiscord1",
    label: "Discord",
  },
];

function FooterMenuItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-[14px] leading-[1.7] text-[#5c6f8c] transition-colors duration-200 hover:text-[#93006c]"
        style={{ fontFamily: '"Nunito Sans", sans-serif' }}
      >
        {item.label}
      </a>

      {item.children?.length > 0 && open && (
        <div className="absolute left-0 top-full z-50 mt-3 min-w-[220px] rounded-none border border-[#ececec] bg-white px-4 py-3 shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
          <ul className="space-y-3">
            {item.children.map((child, index) => (
              <li key={index}>
                <a
                  href={child.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[14px] leading-[1.5] text-[#5c6f8c] transition-colors duration-200 hover:text-[#93006c]"
                  style={{ fontFamily: '"Nunito Sans", sans-serif' }}
                >
                  {child.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[#f7f7f7] text-[#415674]">
      {/* curved top area like original */}
      <div className="relative overflow-hidden bg-[#efefef] h-[120px]">
        <div className="absolute left-1/2 top-[55px] h-[220px] w-[140%] -translate-x-1/2 rounded-[50%] bg-[#f7f7f7]" />
      </div>

      {/* content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-[1280px] px-6 pb-10 pt-10 lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-[1.6fr_0.8fr_0.9fr] md:gap-x-20">
            {/* LEFT */}
            <div>
              <a
                href="https://codeforgoodtech.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src={logo}
                  alt="Code for Good Tech"
                  className="h-[90px] w-[166px] object-contain"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://codeforgoodtech.in/wp-content/uploads/2024/03/cropped-C4GT-Logo-01-1.png";
                  }}
                />
              </a>

              <p
                className="mt-8 max-w-[420px] text-[14px] leading-[2.0] text-[#5c6f8c]"
                style={{ fontFamily: '"Nunito Sans", sans-serif' }}
              >
                Code for Good Tech (C4GT) is an ecosystem initiative with a mission
                to enable inspired pathways that foster meaningful and participatory
                contributions to Digital Tech available publicly for Good.
              </p>

              <div className="mt-8 flex items-center gap-4">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#cfd6e2] bg-white text-[#1b2336] transition-all duration-200 hover:border-[#93006c] hover:bg-[#93006c] hover:text-white"
                    >
                      <Icon className="text-[14px]" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* MIDDLE */}
            <div>
              <h4
                className="mb-7 text-[15px] font-bold uppercase tracking-[1px] text-[#1b2336]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Quick Links
              </h4>

              <ul className="space-y-4">
                {footerMenu.map((item, index) => (
                  <FooterMenuItem key={index} item={item} />
                ))}
              </ul>
            </div>

            {/* RIGHT */}
            <div>
              <h4
                className="mb-7 text-[15px] font-bold uppercase tracking-[1px] text-[#1b2336]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Contact Us
              </h4>

              <a
                href="mailto:c4gt@iiit.ac.in"
                className="text-[14px] text-[#5c6f8c] transition-colors duration-200 hover:text-[#93006c]"
                style={{ fontFamily: '"Nunito Sans", sans-serif' }}
              >
                c4gt@iiit.ac.in
              </a>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="border-t border-[#e8eaf0] py-5">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            <p
              className="text-center text-[13px] text-[#9ca3af]"
              style={{ fontFamily: '"Nunito Sans", sans-serif' }}
            >
              Copyright © 2026 | All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}