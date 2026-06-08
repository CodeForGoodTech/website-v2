import * as React from "react"
import kiran from "../../assets/governance/kiran.png"
import venkatesh from "../../assets/governance/venkatesh.png"
import nithya from "../../assets/governance/nitya.png"
import kamya from "../../assets/governance/kamya.png"
import sayeed from "../../assets/governance/sayeed.png"
import lindsey from "../../assets/governance/lindsey.png"
import rahul from "../../assets/governance/rahul.png"
import ramesh from "../../assets/governance/ramesh.png"
import swetha from "../../assets/governance/swetha.png"
import kriti from "../../assets/governance/kriti.png"
import chakshu from "../../assets/governance/chakshu.png"
import shailiza from "../../assets/governance/shailaza.png"

const advisoryCouncil = [
  {
    name: 'Kiran Gopal Vaska',
    role: 'Additional CEO, National Health Authority (NHA)',
    photo: kiran,
  },
  {
    name: 'Venkatesh Hariharan',
    role: 'India Representative, Open Innovations Network',
    photo: venkatesh,
  },
  {
    name: 'Nithya Ruff',
    role: 'Chair, Board of Directors, Linux Foundation',
    photo: nithya,
  },
  {
    name: 'Kamya Chandra',
    role: 'Co-founder & Chief Strategy Officer, Centre for Digital Public Infrastructure',
    photo: kamya,
  },
  {
    name: 'Sayeed Choudhary',
    role: 'Director, OSPO, Carnegie Mellon University',
    photo: sayeed,
  },
  {
    name: 'Lindsey Crumbaugh',
    role: 'Chief Investment Officer, Co-Develop',
    photo: lindsey,
  },
  {
    name: 'Rahul Kulkarni',
    role: 'Chief Technologist, Samagra Governance',
    photo: rahul,
  },
  {
    name: 'Ramesh Loganathan',
    role: 'Professor, Co-innovation/ Outreach, IIIT Hyderabad',
    photo: ramesh,
  },
  {
    name: 'Swetha Kolluri',
    role: 'Senior Program Officer - Digital Gates Foundation',
    photo: swetha,
  },
]

const governingCouncil = [
  {
    name: 'Kriti Mittal',
    role: 'Associate Director – e-Gov Foundation',
    photo: kriti,
  },
  {
    name: 'Chakshu Gautam',
    role: 'SE 2 Samagra, Founder Flywheel',
    photo: chakshu,
  },
  {
    name: 'Shailiza Mayal',
    role: 'Senior Manager - Samagra | Transforming Governance',
    photo: shailiza,
  },
]

// function CouncilMember({ member }) {
//   return (
//     <div className="flex flex-col items-center p-5 transition-transform duration-300 ease-in-out hover:-translate-y-1.5">
//       {/* Circular Photo */}
//       <div className="mb-[18px] h-[100px] w-[100px] shrink-0 overflow-hidden rounded-full border-[4px] border-[#f0f0f0] bg-[#E5E7EB] md:h-[130px] md:w-[130px]">
//         <img
//           src={member.photo}
//           alt={member.name}
//           className="h-full w-full object-cover object-top"
//           loading="lazy"
//         />
//       </div>

//       {/* Member Name */}
//       <h3 className="mb-1.5 text-[17px] font-bold leading-tight text-[#374151]">
//         {member.name}
//       </h3>

//       {/* Member Role */}
//       <p className="max-w-[230px] text-[13px] leading-relaxed text-[#6B7280]">
//         {member.role}
//       </p>
//     </div>
//   )
// }

function CouncilMember({ member }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-[14px] h-[104px] w-[104px] overflow-hidden rounded-full bg-[#e5e7eb]">
        <img
          src={member.photo}
          alt={member.name}
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
      </div>

      <h3
        className="mb-[2px]"
        style={{
          fontFamily: '"Nunito Sans", sans-serif',
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "40px",
          color: "#415674",
        }}
      >
        {member.name}
      </h3>

      <p
        className="max-w-[300px]"
        style={{
          fontFamily: '"Nunito Sans", sans-serif',
          fontWeight: 400,
          fontSize: "13px",
          lineHeight: "21.67px",
          color: "#415674",
        }}
      >
        {member.role}
      </p>
    </div>
  );
}

export function Governance() {
  return (
  <section
  id="governance"
  className="w-full bg-white pt-[70px] pb-[90px]"
  style={{ fontFamily: '"Nunito Sans", sans-serif' }}
>
  <div className="mx-auto max-w-[1240px] px-[20px] md:px-[30px]">

    {/* Top Pink Heading */}
    <p
      className="mb-[18px] text-center uppercase"
      style={{
        fontFamily: '"Nunito Sans", sans-serif',
        fontWeight: 700,
        fontSize: "30px",
        lineHeight: "30px",
        color: "#880163",
        letterSpacing: "0px",
      }}
    >
      GOVERNANCE STRUCTURE
    </p>

    {/* Advisory Council Heading */}
    <h2
      className="mb-[42px] text-center"
      style={{
        fontFamily: '"Nunito Sans", sans-serif',
        fontWeight: 600,
        fontSize: "30px",
        lineHeight: "30px",
        color: "#415674",
      }}
    >
      Advisory Council
    </h2>

    {/* Advisory Grid */}
    <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-y-[34px] sm:grid-cols-2 md:grid-cols-3 gap-x-[70px]">
      {advisoryCouncil.map((member, i) => (
        <CouncilMember key={i} member={member} />
      ))}
    </div>

    {/* Governing Council Heading */}
    <h2
      className="mt-[70px] mb-[42px] text-center"
      style={{
        fontFamily: '"Nunito Sans", sans-serif',
        fontWeight: 600,
        fontSize: "30px",
        lineHeight: "30px",
        color: "#415674",
      }}
    >
      Governing Council
    </h2>

    {/* Governing Grid */}
    <div className="mx-auto grid max-w-[720px] grid-cols-1 gap-y-[34px] sm:grid-cols-2 md:grid-cols-3 gap-x-[70px]">
      {governingCouncil.map((member, i) => (
        <CouncilMember key={i} member={member} />
      ))}
    </div>

  </div>
</section>
  )
}