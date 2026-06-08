import * as React from "react"
import { useState } from "react"
import mosip from "../../assets/dpg/mosip.png"
import divoc from "../../assets/dpg/divoc.png"
import bekin from "../../assets/dpg/beckin.png"
import subird from "../../assets/dpg/sunbird.png"
import bahmni from "../../assets/dpg/bahmni.png"
import adhaar from "../../assets/dpg/adhaar.png"
import upi from "../../assets/dpg/upi.png"
import nammaYatri from "../../assets/dpg/namma.png"
import diksha from "../../assets/dpg/diksha.png"
import cowin from "../../assets/dpg/cowin.png"

const dpgData = {
  items: [ 
    {
      id: "divoc",
      logoText: "DIVOC",
      imgSrc: divoc,
      subtitle: "Open source platform for large-scale vaccination credentialing",
      body: "DIVOC (Digital Infrastructure for Verifiable Open Credentialing) is a Digital Public Good that enables countries to digitally orchestrate large-scale vaccination and public health programs using open source digital infrastructure. This platform integrates cutting-edge technologies to efficiently track, test, and manage healthcare data during widespread health crises. It offers real-time tracking, optimized testing processes, and insightful data analytics for governments to make informed decisions swiftly. DIVOC was deployed globally during the COVID-19 pandemic.",
    },
    {
      id: "mosip",
      logoText: "MOSIP",
      imgSrc: mosip,
      subtitle: "Open-source mobile biometric authentication platform",
      body: "MOSIP, or the Modular Open Source Identity Platform, is a dynamic solution for governments seeking customizable and secure identity systems. By offering a modular and open-source framework, MOSIP enables the implementation of interoperable identity solutions tailored to specific government requirements.",
    },
    {
      id: "beckn",
      logoText: "beckn",
      imgSrc: bekin,
      subtitle: "Protocol enabling creation of open, peer-to-peer, decentralized networks for economic transactions",
      body: "Beckn is a digital public good, spearheading decentralized and interoperable solutions. Beckn Protocol enables the creation of open, peer-to-peer decentralized networks for pan-sector economic transactions. The protocol can be implemented by platforms, organizations and governments to create integrated digital networks across diverse sectors of e-commerce, mobility, energy, manufacturing and more.",
    },
    {
      id: "sunbird",
      logoText: "sunbird",
      imgSrc: subird,
      subtitle: "Open-source, configurable, extendable, modular, digital public good for learning",
      body: "Sunbird is a set of configurable, extendable, modular building blocks for learning designed for scale as a flexible data infrastructure solution. It is designed to support multiple languages and multiple teaching and learning solutions by providing the building blocks for the development of platforms and learning solutions to suit various use cases, contexts and needs. Sunbird building blocks are being used in diverse areas such as education, health, lifelong learning, among others.",
    },
    {
      id: "bahmni",
      logoText: "Bahmni",
      imgSrc: bahmni,
      subtitle: "Open-source comprehensive electronic medical record system",
      body: "Bahmni is an easy to use, complete, open source Hospital Information System (HIS) and Electronic Medical Record (EMR). Bahmni aims to meet the needs of hospitals in low resource environments by leveraging a tapestry of existing open source products. The information that Bahmni makes accessible helps healthcare providers to improve efficiency and quality of patient care, reduce errors in clinical encounters and advocate for issues related to public health.",
    },
  ],
}

const dpiData = {
  items: [
    {
      id: "aadhaar",
      logoText: "Aadhaar",
      imgSrc: adhaar,
      subtitle: "Biometric identification proof for easy access to government services",
      body: "Aadhaar, a cornerstone of India's digital identity initiative, assigns a unique 12-digit number to residents based on biometric and demographic data. This secure and inclusive system facilitates streamlined access to government and private-sector services, fostering efficiency and inclusivity. It has become integral to various sectors, from financial services to social welfare programs.",
    },
    {
      id: "upi",
      logoText: "UPI",
      imgSrc: upi,
      subtitle: "Real-time payment system enabling seamless transfers",
      body: "UPI, India's Unified Payments Interface, revolutionizes digital transactions by allowing real-time, secure fund transfers between banks via a mobile phone. It has simplified the payment landscape, promoting financial inclusion and digital empowerment for millions across the country. UPI has become the backbone of the digital payments ecosystem, facilitating everything from peer-to-peer transactions to online shopping.",
    },
    {
      id: "namma-yatri",
      logoText: "Namma Yatri",
      imgSrc: nammaYatri,
      subtitle: "A platform facilitating smart public transportation solutions for improved urban mobility.",
      body: "Namma Yatri is a digital public infrastructure that focuses on enhancing urban mobility by providing smart solutions for public transportation. The platform integrates real-time data, route optimization, and user-friendly interfaces to offer commuters efficient and convenient travel experiences within cities. Namma Yatri plays a pivotal role in reducing traffic congestion, promoting sustainable transportation, and improving overall urban quality of life.",
    },
    {
      id: "diksha",
      logoText: "DIKSHA",
      imgSrc: diksha,
      subtitle: "Empowering educators with a centralized platform",
      body: "Built on sunbird, DIKSHA serves as a transformative Digital Public Infrastructure in the education sector, offering a centralized platform for teachers and students. It provides a diverse range of interactive learning resources, including videos, quizzes, and lesson plans, fostering an engaging and inclusive learning environment across diverse educational settings. DIKSHA empowers educators with tools for personalized learning and professional development, contributing to an enriched educational experience.",
    },
    {
      id: "cowin",
      logoText: "CoWin",
      imgSrc: cowin,
      subtitle: "Digital platform for COVID-19 vaccine registration",
      body: "CoWin is a critical digital public infrastructure instrumental in India's vaccination drive against COVID-19. Built using DIVOC, it acts as a comprehensive platform for vaccine distribution, appointment scheduling, and real-time tracking of vaccination data. CoWin plays a pivotal role in ensuring a systematic and transparent approach to the nationwide vaccination effort, contributing to public health and safety.",
    },
  ],
}

function LogoTile({ item, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex h-[75px] w-[85px] shrink-0 items-center justify-center rounded-[12px] bg-white transition-all duration-200 sm:h-[80px] sm:w-[90px] ${
        isActive
          ? "border-2 border-[#8A0E67] shadow-[0_4px_12px_rgba(136,1,99,0.12)]"
          : "border border-[#E5E7EB] hover:border-gray-300 hover:-translate-y-[2px]"
      }`}
    >
      <img
        src={item.imgSrc}
        alt={item.logoText}
        className="max-h-[42px] max-w-[65px] object-contain p-1"
        onError={(e) => {
          e.currentTarget.style.display = "none"
          const fallback = e.currentTarget.nextElementSibling
          if (fallback) fallback.style.display = "block"
        }}
      />
      <span className="hidden px-2 text-center text-[12px] font-bold text-[#1B2336]">
        {item.logoText}
      </span>
    </button>
  )
}

export function DPGSection() {
  const [activeTab, setActiveTab] = useState("dpg")
  const [selectedId, setSelectedId] = useState("divoc")

  const currentData = activeTab === "dpg" ? dpgData : dpiData
  const activeItem =
    currentData.items.find((item) => item.id === selectedId) || currentData.items[0]

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setSelectedId(tab === "dpg" ? "divoc" : "aadhaar")
  }

  return (
    // Background matches the original warm/pinkish white
    <section className="w-full bg-[#FCFAFB] py-16 lg:py-24">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-6 lg:flex-row lg:items-start lg:gap-14 lg:px-8">
        
        {/* LEFT SIDE: Typography sizes reduced and font weights matched to original */}
        <div className="w-full lg:w-[42%] pt-1">
          <span className="mb-4 block text-[20px] font-bold uppercase tracking-[1px] text-[#8A0E67]">
            KNOW MORE ABOUT
          </span>

          <div className="mb-12">
            <h2 className="mb-4 text-[32px] font-bold leading-[1.2] text-[#1B2336]">
              Digital Public Goods
            </h2>
            <p className="text-[15px] leading-[1.7] text-[#4B5563]">
              As defined by the Digital Public Goods Alliance, Digital Public Goods are
              open-source software, data, AI models, standards, and content that adhere to
              privacy standards, other applicable laws, tech best practices, do no harm by
              design, and help attain the Sustainable Development Goals.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-[32px] font-bold leading-[1.2] text-[#1B2336]">
              Digital Public Infrastructure
            </h2>
            <p className="text-[15px] leading-[1.7] text-[#4B5563]">
              The implementation of DPGs, often in conjunction with other building blocks,
              to set up systems that enable essential, society-wide services is called a
              Digital Public Infrastructure.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Card container perfectly mimics original shape and shadow without borders */}
        <div className="w-full lg:w-[58%]">
          <div className="overflow-hidden rounded-[16px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
            
            {/* TABS: Seamlessly connected to the container, exact background colors */}
            <div className="flex w-full">
              <button
                onClick={() => handleTabChange("dpg")}
                className={`flex-1 py-5 px-2 text-center text-[12px] font-bold uppercase tracking-wider transition-colors duration-200 ${
                  activeTab === "dpg"
                    ? "bg-[#BEAEE2] text-white" // The exact soft purple color
                    : "bg-[#F8F9FA] text-[#4B5563] hover:bg-[#F3F4F6]"
                }`}
              >
                DIGITAL PUBLIC GOODS
              </button>

              <button
                onClick={() => handleTabChange("dpi")}
                className={`flex-1 py-5 px-2 text-center text-[12px] font-bold uppercase tracking-wider transition-colors duration-200 ${
                  activeTab === "dpi"
                    ? "bg-[#BEAEE2] text-white" 
                    : "bg-[#F8F9FA] text-[#4B5563] hover:bg-[#F3F4F6]"
                }`}
              >
                DIGITAL PUBLIC INFRASTRUCTURE
              </button>
            </div>

            {/* BODY */}
            <div className="px-8 py-10 md:px-10">
              
              {/* LOGOS */}
              <div className="mb-8 flex flex-wrap gap-4">
                {currentData.items.map((item) => (
                  <LogoTile
                    key={item.id}
                    item={item}
                    isActive={selectedId === item.id}
                    onClick={() => setSelectedId(item.id)}
                  />
                ))}
              </div>

              {/* CONTENT */}
              <div
                key={`${activeTab}-${selectedId}`}
                className="animate-in fade-in slide-in-from-bottom-2 duration-300"
              >
                <h3 className="mb-4 text-[17px] font-bold leading-snug text-[#1B2336]">
                  {activeItem.subtitle}
                </h3>

                <p className="text-[15px] leading-[1.7] text-[#6B7280]">
                  {activeItem.body}
                </p>
              </div>

            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}