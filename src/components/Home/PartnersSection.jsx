import * as React from "react"
import iitd from "../../assets/partners/iitd.png"
import iitm from "../../assets/partners/iitm.png"
import iiitd from "../../assets/partners/iiitd.png"
import nsut from "../../assets/partners/nsut.png"
import gwu from "../../assets/partners/gwu.png"
import github from "../../assets/partners/github.png"
import dpga from "../../assets/partners/dpga.png"
import nha from "../../assets/partners/nha.png"
import mifos from "../../assets/partners/mifos.png"
import mosip from "../../assets/partners/mosip.png"



const academicPartners = [
  {
    name: "IIT Delhi",
    src: iitd
  },
  {
    name: "IIT Madras",
    src: iitm
  },
  {
    name: "IIIT Delhi",
    src: iiitd
  },
  {
    name: "NSUT",
    src: nsut
  },
  {
    name: "George Washington University",
    src: gwu
  }
]

const ecosystemPartners = [
  {
    name: "GitHub",
    src: github
  },
  {
    name: "Digital Public Goods",
    src: dpga
  },
  {
    name: "National Health Authority",
    src: nha
  },
  {
    name: "Mifos",
    src: mifos
  },
  {
    name: "MOSIP",
    src: mosip
  }
]



// Reusable logo component (Grayscale removed, sizes tuned to match screenshot)
function PartnerLogo({ name, src }) {
  return (
    <div className="flex h-[75px] w-[140px] shrink-0 items-center justify-center p-2 transition-transform duration-300 hover:-translate-y-1 sm:h-[85px] sm:w-[150px]">
      <img 
        src={src} 
        alt={name} 
        className="max-h-full max-w-full object-contain"
        loading="lazy"
      />
    </div>
  )
}

export function PartnersSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto max-w-[1240px] px-6 lg:px-8">
        
        {/* Main Header & Description */}
        <div className="mx-auto mb-16 max-w-[1000px] text-center">
          <h2 className="mb-6 text-[32px] font-bold uppercase tracking-wide text-[#880163] md:text-[38px]">
            C4GT PARTNERS COLLECTIVE
          </h2>
          <p className="text-[17px] leading-[1.7] text-[#415674]">
            C4GT collaborates with leading academic institutions and global ecosystem organizations to strengthen the digital public goods (DPG) and tech-for-good ecosystem. Our partners bring technical expertise, community networks, research capabilities, and open-source leadership to advance DPG, DPI, and tech-for-good initiatives. Together, they convene quarterly to guide strategy and ensure alignment with evolving sector needs.
          </p>
        </div>

        {/* 2-Column Layout for Academic & Ecosystem Partners */}
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-10">
          
          {/* --- ACADEMIC PARTNERS (Left Column) --- */}
          <div className="flex-1">
            <h4 className="mb-8 text-center text-[24px] font-semibold text-[#415674]">
              Academic Partners
            </h4>
            {/* Flex wrap to automatically create the 3-top, 2-bottom centered layout */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {academicPartners.map((partner, index) => (
                <PartnerLogo key={`academic-${index}`} {...partner} />
              ))}
            </div>
          </div>

          {/* --- ECOSYSTEM PARTNERS (Right Column) --- */}
          <div className="flex-1">
            <h4 className="mb-8 text-center text-[24px] font-semibold text-[#415674]">
              Ecosystem Partners
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {ecosystemPartners.map((partner, index) => (
                <PartnerLogo key={`eco-${index}`} {...partner} />
              ))}
            </div>
          </div>

        </div>


      </div>
    </section>
  )
}