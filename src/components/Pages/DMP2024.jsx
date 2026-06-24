import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHeroBanner from '../PageHeroBanner';
export default function DMP2024ImpactReport() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const completedProjects = [
    {
      title: "Retraining and caching pipelines for improved bot retrieval",
      author: "Contributor - Renuka B",
      bg: "https://codeforgoodtech.in/wp-content/uploads/2024/02/Tekdi-1.png",
      link: "https://codeforgoodtech.in/completed-project/sunbird-virtual-assistant/"
    },
    {
      title: "AI-powered chat interface for iGOT Karmayogi",
      author: "Contributor - Mansi Dwivedi",
      bg: "https://codeforgoodtech.in/wp-content/uploads/2024/10/MeitY_logo.png",
      link: "https://codeforgoodtech.in/completed-project/igot-karmayogi/"
    },
    {
      title: "Reliable Public Transport Information Chatbot",
      author: "Contributor - Kompal Layal",
      bg: "https://codeforgoodtech.in/wp-content/uploads/2024/02/SamagraX-scaled.webp",
      link: "https://codeforgoodtech.in/completed-project/jan-sahaiyak/"
    },
    {
      title: "Miniaturising Bhashini's ASR model",
      author: "Contributor - Aryan Sharma",
      bg: "https://codeforgoodtech.in/wp-content/uploads/2024/10/Bhashini_logo.webp",
      link: "https://codeforgoodtech.in/completed-project/nipun-lakshya-app/"
    },
    {
      title: "Seamless Patient Details Lookup through Facial Recognition",
      author: "Contributor - Thejas Raja Elandassery",
      bg: "https://codeforgoodtech.in/wp-content/uploads/2024/10/Piramal_Swasthya_logo.jpg",
      link: "https://codeforgoodtech.in/completed-project/amrit-mobile/"
    }
  ];

  const testimonials = [
    {
      text: "India will depend on young talent as found in the C4GT program to build Good Tech products to run the digital infrastructure in the country for a billion people.",
      name: "Pramod Varma",
      title: "Chief Architect, Aadhar & IndiaStack",
      img: "/downloaded-images/2024_10_1-1.png"
    },
    {
      text: "It was a great experience working with the C4GT team. This program not only helps students to know about contributing on production code, but also helps code-maintainers in increasing their commitment teaching newer contributors & creating a community from it.",
      name: "Shree Vatsa N",
      title: "DMP 2024 Mentor, Dhiway",
      img: "/downloaded-images/2024_10_2.png"
    },
    {
      text: "Our overall experience was fantastic, educative, productive and ensured everything we had hoped for. The impact we were able to create was not just an educational & technical impact but also the ecosystem impact & wider adoption impact.",
      name: "Manu Sheel Gupta",
      title: "DMP 2024 Mentor, SEETA",
      img: "/downloaded-images/2024_10_3.png"
    },
    {
      text: "Because of resource constrains, we are not able to explore some projects. Through C4GT we are able to build for more use cases through quality contributors.",
      name: "Kavita K",
      title: "DMP 2024 Mentor, ConveGenius",
      img: "/downloaded-images/2024_10_4.png"
    },
    {
      text: "I would strongly urge anyone who is interested in DMP to take part as it will not only sharpen your technical skills but also put you in contact with a community that will really help you in the long run.",
      name: "Vandit Tyagi",
      title: "DMP 2024 Contributor, Belongg",
      img: "/downloaded-images/2024_10_5.png"
    },
    {
      text: "DMP gave me industrial level experience and helped me level-up my technical skills. I got a lot of recognition for my work from Mojaloop. However, the biggest takeaway for me is that I want to continue working in the social impact sector & continue helping others.",
      name: "Shuchita Prakash",
      title: "DMP 2024 Contributor, Mojaloop",
      img: "/downloaded-images/2024_10_6.png"
    }
  ];

  const codingLogos = [
    "Mifos_Initiative_logo.webp", "PlanetRead_logo-e1730096605747.jpeg", "a2i_logo.png", "Tattle_logo.png", 
    "Zenysis_Technologies_logo.jpg", "UNICEF_logo.png", "Open_Function_logo.png", "PolicyEngine_logo.png", 
    "Avanti_Fellows_logo.jpg", "FIDE_logo.jpg", "Reap_benefit_logo-removebg-preview.png", "samanvay-v2.png", 
    "Shikshalokam_logo.png", "Swasth_Alliance_logo.png", "Project_Tech4Dev_logo-scaled.webp", "Piramal_Swasthya_logo.jpg", 
    "Arghyam_logo.png", "Belongg_logo.png", "IDinsight_logo.jpg", "Haqdarshak_logo.png", "Sugarlabs_logo.png", 
    "Tekdi_logo.png", "SamagraX_logo.png", "National-Health-Authority-.webp", "EKStep_Logo.png", "Blockster_Labs_logo.png", 
    "Protean_logo.webp", "Bhashini_logo.webp", "Mojaloop_logo.png", "eGov_logo.png", "Zendalona_logo.jpeg", 
    "SDM_Varansi_logo.png", "MeitY_logo.png", "Convegenius_logo.png", "Dhiway.webp"
  ];

  const designLogos = [
    "Win_over_cancer_logo.jpg", "SamagraX_logo.png", "Protean_logo.webp", "Dimagi_logo.webp", "Tattle_logo.png", 
    "Reap_benefit_logo-removebg-preview.png", "Shikshalokam_logo.png", "Cranberry_fit_logo.webp", "Armman_logo.png", 
    "thoughtworks_logo.jpg", "Digital_green_logo.webp"
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div>
                      <PageHeroBanner title="Dedicated Mentoring Program 2024 – Impact Report" currentPage="Dedicated Mentoring Program 2024 – Impact Report" />

    <main className="max-w-[1200px] mx-auto px-4 py-[50px] font-sans text-[#415674] leading-[1.667]">
      
      {/* Video & Intro Section */}
      <section className="mb-[60px] flex flex-col items-center justify-center">
        <div className="w-full max-w-[800px] aspect-video relative mb-[30px] rounded-lg overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
          <iframe 
            src="https://www.youtube.com/embed/HtkpJCMDEbM?autoplay=0&mute=1&loop=1&controls=1" 
            title="DMP 2024 Video"
            className="w-full h-full border-none"
            allowFullScreen
          />
        </div>
        <div className="max-w-[1000px] text-[18px]">
          <p className="mb-4">
            Since 2022, <strong><span className="text-[#880263]">Code for Good Tech (C4GT)’s Dedicated Mentoring Program (DMP)</span></strong> has empowered students and working professionals to contribute to critical open-source tech projects that have population-scale impact. Over three months, contributors work with Digital Public Good (DPG) and Tech for Good organizations, receiving 1:1 mentorship from industry experts from these organizations or from “Angel Mentors” who are volunteers from the C4GT community.
          </p>
          <p>
            DMP offers a unique chance to dive into real-world projects, gain insights from ecosystem leaders, and grow through peer learning, making it a transformative journey for aspiring tech innovators.
          </p>
        </div>
      </section>

      {/* Completed Projects Horizontal Scroll */}
      <section className="mb-[60px]">
        <div className="flex overflow-x-auto gap-[15px] pb-[20px] snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {completedProjects.map((project, idx) => (
            <a 
              key={idx} 
              href={project.link} 
              target="_blank" 
              rel="noreferrer"
              className="relative w-[280px] md:w-[350px] h-[350px] shrink-0 snap-center rounded-[16px] overflow-hidden bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-100 flex items-end p-5 transition-transform hover:-translate-y-1"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%), url(${project.bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="relative z-10 text-white w-full">
                <h3 className="text-[#BE9C06] text-[18px] font-bold leading-tight mb-[10px]">{project.title}</h3>
                <p className="text-[14px] opacity-90 m-0">{project.author}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* View All Projects Button */}
      <section className="flex justify-center mb-16">
        <a 
          href="/dedicated-mentoring-program-2024-all-projects/"
          className="inline-flex items-center justify-center gap-2 bg-[#880163] text-white font-medium text-[15px] px-[24px] py-[12px] rounded-full hover:bg-[#880163]/90 transition-colors"
        >
          <ArrowRight size={18} />
          View All Projects
        </a>
      </section>

      {/* 3x2 Hover-reveal Stats Grid */}
      <section className="mb-[100px] max-w-[1000px] mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          
          {/* Stat 1: Organizations */}
          <div className="relative group flex items-center gap-5 cursor-default">
            <div className="w-[60px] h-[60px] shrink-0 flex items-center justify-center rounded-lg bg-[#C3395B]/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 90 90" fill="none">
                <rect width="90" height="90" fill="#C3395B" fillOpacity="0.21"></rect>
                <path d="M67.5 56.25H60V63.75H67.5M67.5 41.25H60V48.75H67.5M75 71.25H45V63.75H52.5V56.25H45V48.75H52.5V41.25H45V33.75H75M37.5 26.25H30V18.75H37.5M37.5 41.25H30V33.75H37.5M37.5 56.25H30V48.75H37.5M37.5 71.25H30V63.75H37.5M22.5 26.25H15V18.75H22.5M22.5 41.25H15V33.75H22.5M22.5 56.25H15V48.75H22.5M22.5 71.25H15V63.75H22.5M45 26.25V11.25H7.5V78.75H82.5V26.25H45Z" fill="#C3395B" fillOpacity="0.95"></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[#C3395B] text-[36px] font-semibold leading-none mb-1">42</span>
              <span className="text-[#1b2336] text-[15px] font-medium leading-none">Organizations</span>
            </div>
            {/* Hover Popover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max min-w-[280px] bg-[#FFF6D9] rounded-full px-6 py-3 shadow-[0_4px_15px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex gap-6 items-center justify-center pointer-events-none">
              <div className="flex flex-col items-center"><span className="text-[#C3395B] font-bold text-[18px]">70</span><span className="text-[12px] text-[#1b2336]">Products</span></div>
              <div className="flex flex-col items-center"><span className="text-[#C3395B] font-bold text-[18px]">10+</span><span className="text-[12px] text-[#1b2336]">Domains</span></div>
              <div className="flex flex-col items-center"><span className="text-[#C3395B] font-bold text-[18px]">7</span><span className="text-[12px] text-[#1b2336]">Countries</span></div>
            </div>
          </div>

          {/* Stat 2: Proposals Received */}
          <div className="relative group flex items-center gap-5 cursor-default">
            <div className="w-[60px] h-[60px] shrink-0 flex items-center justify-center rounded-lg bg-[#C3395B]/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 60 59" fill="none">
                <path opacity="0.2" d="M54.5922 6.47266H12.3297C9.41207 6.47266 7.04688 9.37037 7.04688 12.9449V51.7782C7.04688 55.3527 9.41207 58.2504 12.3297 58.2504H54.5922C57.5098 58.2504 59.875 55.3527 59.875 51.7782V12.9449C59.875 9.37037 57.5098 6.47266 54.5922 6.47266Z" fill="#C3395B" fillOpacity="0.95"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M51.0704 0H1.76411C1.29708 0 0.849181 0.227298 0.518941 0.63189C0.188701 1.03648 0.00317383 1.58523 0.00317383 2.15741V49.6204C0.00317383 50.1926 0.188701 50.7413 0.518941 51.1459C0.849181 51.5505 1.29708 51.7778 1.76411 51.7778H51.0704C51.5374 51.7778 51.9853 51.5505 52.3155 51.1459C52.6458 50.7413 52.8313 50.1926 52.8313 49.6204V2.15741C52.8313 1.58523 52.6458 1.03648 52.3155 0.63189C51.9853 0.227298 51.5374 0 51.0704 0ZM3.52505 47.463V4.31482H49.3094V47.463H3.52505Z" fill="#C3395B" fillOpacity="0.95"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M52.2114 3.79704L27.3998 29.6859C27.0804 30.0196 26.6742 30.2025 26.2545 30.2017C25.8348 30.2009 25.4291 30.0165 25.1105 29.6816L0.612362 3.79273C0.339652 3.50523 0.145362 3.12229 0.0556388 2.69544C-0.0340845 2.26858 -0.0149364 1.81831 0.110506 1.40519C0.235949 0.99207 0.461666 0.635939 0.757285 0.384716C1.0529 0.133493 1.40424 -0.000766843 1.76402 3.29475e-06H51.0703C51.43 0.000849781 51.7808 0.13662 52.0756 0.389053C52.3705 0.641487 52.5951 0.998476 52.7194 1.41201C52.8437 1.82554 52.8616 2.27577 52.7708 2.70216C52.68 3.12855 52.4847 3.51064 52.2114 3.79704ZM46.2876 4.31482H6.50094L26.2657 25.2028L46.2876 4.31482Z" fill="#C3395B" fillOpacity="0.95"></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[#C3395B] text-[36px] font-semibold leading-none mb-1">2,634</span>
              <span className="text-[#1b2336] text-[15px] font-medium leading-none">Proposals Received</span>
            </div>
            {/* Hover Popover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max min-w-[280px] bg-[#FFF6D9] rounded-full px-6 py-3 shadow-[0_4px_15px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex gap-6 items-center justify-center pointer-events-none">
              <div className="flex flex-col items-center"><span className="text-[#C3395B] font-bold text-[18px]">19</span><span className="text-[12px] text-[#1b2336]">States</span></div>
              <div className="flex flex-col items-center"><span className="text-[#C3395B] font-bold text-[18px]">94</span><span className="text-[12px] text-[#1b2336]">College Students</span></div>
              <div className="flex flex-col items-center"><span className="text-[#C3395B] font-bold text-[18px]">9</span><span className="text-[12px] text-[#1b2336]">Professionals</span></div>
            </div>
          </div>

          {/* Stat 3: Contributors */}
          <div className="relative group flex items-center gap-5 cursor-default">
            <div className="w-[60px] h-[60px] shrink-0 flex items-center justify-center rounded-lg bg-[#C3395B]/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 76 72" fill="none">
                <rect width="76" height="72" fill="#C3395B" fillOpacity="0.21"></rect>
                <path d="M55.4167 36C60.0359 36 64.4659 37.7384 67.7322 40.8327C70.9984 43.9271 72.8334 48.1239 72.8334 52.5C72.8334 56.8761 70.9984 61.0729 67.7322 64.1673C64.4659 67.2616 60.0359 69 55.4167 69C50.7975 69 46.3675 67.2616 43.1013 64.1673C39.835 61.0729 38 56.8761 38 52.5C38 48.1239 39.835 43.9271 43.1013 40.8327C46.3675 37.7384 50.7975 36 55.4167 36ZM55.4167 42L55.1317 42.021C54.8153 42.0758 54.5241 42.2205 54.2967 42.4359C54.0693 42.6514 53.9165 42.9273 53.8587 43.227L53.8334 43.5V51H45.9104L45.6254 51.024C45.309 51.0788 45.0177 51.2235 44.7903 51.4389C44.5629 51.6544 44.4102 51.9303 44.3524 52.23L44.327 52.5L44.3524 52.77C44.4102 53.0697 44.5629 53.3456 44.7903 53.5611C45.0177 53.7765 45.309 53.9212 45.6254 53.976L45.9104 54H53.8334V61.509L53.8587 61.779C53.9165 62.0787 54.0693 62.3546 54.2967 62.5701C54.5241 62.7855 54.8153 62.9302 55.1317 62.985L55.4167 63.009L55.7017 62.985C56.0181 62.9302 56.3093 62.7855 56.5367 62.5701C56.7641 62.3546 56.9169 62.0787 56.9747 61.779L57 61.509V54L64.9294 54.003L65.2144 53.979C65.5307 53.9242 65.822 53.7795 66.0494 53.5641C66.2768 53.3486 66.4296 53.0727 66.4874 52.773L66.5127 52.503L66.4874 52.233C66.4294 51.9329 66.2761 51.6566 66.0481 51.4412C65.8201 51.2257 65.5282 51.0812 65.2112 51.027L64.9262 51.003H57V43.503L56.9747 43.233C56.9175 42.9327 56.765 42.6561 56.5375 42.4401C56.3101 42.2241 56.0185 42.0789 55.7017 42.024L55.4167 42ZM45.1377 30C46.3913 30.0002 47.6226 30.3138 48.7073 30.909C49.7921 31.5042 50.6919 32.36 51.3159 33.39C48.0416 34.0221 44.9789 35.3997 42.3922 37.4038C39.8056 39.408 37.7726 41.9784 36.469 44.8933C35.1653 47.8081 34.6301 50.9798 34.9095 54.1344C35.189 57.289 36.2747 60.3318 38.0729 63L38.0095 62.997C36.1377 62.9974 34.2841 62.6484 32.5546 61.9699C30.8251 61.2915 29.2537 60.2969 27.9301 59.0429C26.6065 57.789 25.5566 56.3003 24.8405 54.6618C24.1243 53.0234 23.756 51.2673 23.7564 49.494V36.75C23.7564 34.9598 24.507 33.2429 25.8432 31.977C27.1794 30.7112 28.9917 30 30.8814 30H45.1377ZM23.4524 30C21.7756 31.653 20.7695 33.8143 20.6119 36.102L20.5897 36.75V49.497C20.5897 52.038 21.1945 54.444 22.2775 56.592C21.2304 56.862 20.1379 56.998 19 57C17.3364 57 15.689 56.6895 14.152 56.0863C12.615 55.483 11.2185 54.5988 10.0422 53.4842C8.86599 52.3696 7.93303 51.0464 7.29666 49.5901C6.66028 48.1339 6.33296 46.5731 6.33337 44.997V36.75C6.33315 35.0396 7.01831 33.3929 8.25038 32.1427C9.48244 30.8925 11.1695 30.1321 12.9707 30.015L13.4584 30H23.4524ZM62.5417 30C64.4314 30 66.2436 30.7112 67.5798 31.977C68.916 33.2429 69.6667 34.9598 69.6667 36.75V38.43C65.8378 34.9406 60.7296 32.9941 55.4167 33L54.6472 33.015C54.1532 31.8977 53.447 30.8758 52.5635 30H62.5417ZM58.5834 12C60.683 12 62.6966 12.7902 64.1813 14.1967C65.666 15.6032 66.5 17.5109 66.5 19.5C66.5 21.4891 65.666 23.3968 64.1813 24.8033C62.6966 26.2098 60.683 27 58.5834 27C56.4837 27 54.4701 26.2098 52.9854 24.8033C51.5008 23.3968 50.6667 21.4891 50.6667 19.5C50.6667 17.5109 51.5008 15.6032 52.9854 14.1967C54.4701 12.7902 56.4837 12 58.5834 12ZM38 9C40.5196 9 42.936 9.94821 44.7176 11.636C46.4992 13.3239 47.5 15.6131 47.5 18C47.5 20.3869 46.4992 22.6761 44.7176 24.364C42.936 26.0518 40.5196 27 38 27C35.4805 27 33.0641 26.0518 31.2825 24.364C29.5009 22.6761 28.5 20.3869 28.5 18C28.5 15.6131 29.5009 13.3239 31.2825 11.636C33.0641 9.94821 35.4805 9 38 9ZM17.4167 12C19.5163 12 21.53 12.7902 23.0146 14.1967C24.4993 15.6032 25.3334 17.5109 25.3334 19.5C25.3334 21.4891 24.4993 23.3968 23.0146 24.8033C21.53 26.2098 19.5163 27 17.4167 27C15.3171 27 13.3034 26.2098 11.8188 24.8033C10.3341 23.3968 9.50004 21.4891 9.50004 19.5C9.50004 17.5109 10.3341 15.6032 11.8188 14.1967C13.3034 12.7902 15.3171 12 17.4167 12Z" fill="#C3395B" fillOpacity="0.95"></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[#C3395B] text-[36px] font-semibold leading-none mb-1">103</span>
              <span className="text-[#1b2336] text-[15px] font-medium leading-none">Contributors</span>
            </div>
            {/* Hover Popover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max min-w-[280px] bg-[#FFF6D9] rounded-full px-6 py-3 shadow-[0_4px_15px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex gap-6 items-center justify-center pointer-events-none">
              <div className="flex flex-col items-center"><span className="text-[#C3395B] font-bold text-[18px]">19</span><span className="text-[12px] text-[#1b2336]">States</span></div>
              <div className="flex flex-col items-center"><span className="text-[#C3395B] font-bold text-[18px]">94</span><span className="text-[12px] text-[#1b2336]">College Students</span></div>
              <div className="flex flex-col items-center"><span className="text-[#C3395B] font-bold text-[18px]">9</span><span className="text-[12px] text-[#1b2336]">Working Professionals</span></div>
            </div>
          </div>

          {/* Stat 4: Mentors */}
          <div className="relative group flex items-center gap-5 cursor-default">
            <div className="w-[60px] h-[60px] shrink-0 flex items-center justify-center rounded-lg bg-[#C3395B]/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 78 67" fill="none">
                <rect width="78" height="67" fill="#C3395B" fillOpacity="0.21"></rect>
                <path d="M33.0586 47.7964C34.709 48.5162 36.1943 49.3995 37.5146 50.4463C38.835 51.4932 39.9775 52.6709 40.9424 53.9795C41.9072 55.2881 42.6309 56.684 43.1133 58.167C43.5957 59.6501 43.8496 61.1986 43.875 62.8125H39C39 61.0896 38.6191 59.4647 37.8574 57.938C37.0957 56.4113 36.0547 55.0809 34.7344 53.9468C33.4141 52.8127 31.8525 51.9076 30.0498 51.2315C28.2471 50.5554 26.3555 50.2282 24.375 50.25C22.3438 50.25 20.4521 50.5772 18.7002 51.2315C16.9482 51.8858 15.3994 52.78 14.0537 53.9141C12.708 55.0482 11.6543 56.3895 10.8926 57.938C10.1309 59.4865 9.75 61.1114 9.75 62.8125H4.875C4.875 61.2204 5.12891 59.6828 5.63672 58.1998C6.14453 56.7167 6.86816 55.3208 7.80762 54.0123C8.74707 52.7037 9.87695 51.5259 11.1973 50.479C12.5176 49.4322 14.0156 48.538 15.6914 47.7964C13.8125 46.5969 12.3525 45.1138 11.3115 43.3472C10.2705 41.5806 9.75 39.6941 9.75 37.6875C9.75 35.9646 10.1309 34.3397 10.8926 32.813C11.6543 31.2863 12.6953 29.9559 14.0156 28.8218C15.3359 27.6877 16.8848 26.7826 18.6621 26.1065C20.4395 25.4304 22.3438 25.1032 24.375 25.125C26.7109 25.125 28.9072 25.5721 30.9639 26.4664C33.0205 27.3606 34.7471 28.6146 36.1436 30.2286C37.1084 28.5928 38.3398 27.1316 39.8379 25.8448C41.3359 24.558 43.0371 23.5002 44.9414 22.6714C43.0625 21.4719 41.6025 19.9888 40.5615 18.2222C39.5205 16.4556 39 14.5691 39 12.5625C39 10.8396 39.3809 9.21473 40.1426 7.68803C40.9043 6.16134 41.9453 4.83094 43.2656 3.69682C44.5859 2.56271 46.1348 1.6576 47.9121 0.981491C49.6895 0.305384 51.5938 -0.0217641 53.625 4.57764e-05C55.6309 4.57764e-05 57.5225 0.327194 59.2998 0.981491C61.0771 1.63579 62.626 2.52999 63.9463 3.66411C65.2666 4.79822 66.3203 6.13953 67.1074 7.68803C67.8945 9.23654 68.2754 10.8614 68.25 12.5625C68.25 14.5691 67.7295 16.4556 66.6885 18.2222C65.6475 19.9888 64.1875 21.4719 62.3086 22.6714C63.959 23.3912 65.4443 24.2745 66.7646 25.3213C68.085 26.3682 69.2275 27.5459 70.1924 28.8545C71.1572 30.1631 71.8809 31.559 72.3633 33.042C72.8457 34.5251 73.0996 36.0736 73.125 37.6875H68.25C68.25 35.9646 67.8691 34.3397 67.1074 32.813C66.3457 31.2863 65.3047 29.9559 63.9844 28.8218C62.6641 27.6877 61.1025 26.7826 59.2998 26.1065C57.4971 25.4304 55.6055 25.1032 53.625 25.125C51.5938 25.125 49.7021 25.4522 47.9502 26.1065C46.1982 26.7608 44.6494 27.655 43.3037 28.7891C41.958 29.9232 40.9043 31.2645 40.1426 32.813C39.3809 34.3615 39 35.9864 39 37.6875C39 39.6941 38.4795 41.5806 37.4385 43.3472C36.3975 45.1138 34.9375 46.5969 33.0586 47.7964ZM43.875 12.5625C43.875 13.7185 44.1289 14.7981 44.6367 15.8013C45.1445 16.8046 45.8428 17.6988 46.7314 18.4839C47.6201 19.2691 48.6484 19.8689 49.8164 20.2832C50.9844 20.6976 52.2539 20.9157 53.625 20.9375C54.9707 20.9375 56.2275 20.7194 57.3955 20.2832C58.5635 19.8471 59.6045 19.2473 60.5186 18.4839C61.4326 17.7206 62.1309 16.8373 62.6133 15.834C63.0957 14.8308 63.3496 13.7403 63.375 12.5625C63.375 11.4066 63.1211 10.327 62.6133 9.32378C62.1055 8.32052 61.4072 7.42632 60.5186 6.64116C59.6299 5.856 58.6016 5.25623 57.4336 4.84184C56.2656 4.42745 54.9961 4.20936 53.625 4.18755C52.2793 4.18755 51.0225 4.40564 49.8545 4.84184C48.6865 5.27804 47.6455 5.87781 46.7314 6.64116C45.8174 7.40451 45.1191 8.28781 44.6367 9.29106C44.1543 10.2943 43.9004 11.3848 43.875 12.5625ZM14.625 37.6875C14.625 38.8435 14.8789 39.9231 15.3867 40.9263C15.8945 41.9296 16.5928 42.8238 17.4814 43.6089C18.3701 44.3941 19.3984 44.9939 20.5664 45.4082C21.7344 45.8226 23.0039 46.0407 24.375 46.0625C25.7207 46.0625 26.9775 45.8444 28.1455 45.4082C29.3135 44.972 30.3545 44.3723 31.2686 43.6089C32.1826 42.8456 32.8809 41.9623 33.3633 40.959C33.8457 39.9558 34.0996 38.8653 34.125 37.6875C34.125 36.5316 33.8711 35.452 33.3633 34.4488C32.8555 33.4455 32.1572 32.5513 31.2686 31.7662C30.3799 30.981 29.3516 30.3812 28.1836 29.9668C27.0156 29.5525 25.7461 29.3344 24.375 29.3125C23.0293 29.3125 21.7725 29.5306 20.6045 29.9668C19.4365 30.403 18.3955 31.0028 17.4814 31.7662C16.5674 32.5295 15.8691 33.4128 15.3867 34.4161C14.9043 35.4193 14.6504 36.5098 14.625 37.6875ZM71.9062 67L60.9375 59.6392L49.9688 67L54.3867 55.2227L43.875 48.1563H57.0146L60.9375 37.6875L64.8604 48.1563H78L67.4883 55.2227L71.9062 67Z" fill="#C3395B" fillOpacity="0.95"></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[#C3395B] text-[36px] font-semibold leading-none mb-1">62</span>
              <span className="text-[#1b2336] text-[15px] font-medium leading-none">Mentors</span>
            </div>
            {/* Hover Popover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max min-w-[240px] bg-[#FFF6D9] rounded-full px-6 py-3 shadow-[0_4px_15px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex gap-6 items-center justify-center pointer-events-none">
              <div className="flex flex-col items-center"><span className="text-[#C3395B] font-bold text-[18px]">19</span><span className="text-[12px] text-[#1b2336]">Angel Mentors</span></div>
              <div className="flex flex-col items-center"><span className="text-[#C3395B] font-bold text-[18px]">1400+</span><span className="text-[12px] text-[#1b2336]">Hours of Mentoring</span></div>
            </div>
          </div>

          {/* Stat 5: Production Ready Projects */}
          <div className="relative group flex items-center gap-5 cursor-default">
            <div className="w-[60px] h-[60px] shrink-0 flex items-center justify-center rounded-lg bg-[#C3395B]/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 80 72" fill="none">
                <mask id="mask0_333_851" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="81" height="72">
                  <path d="M6.75 69.2486H73.25C74.5098 69.2486 75.718 68.8944 76.6088 68.2638C77.4996 67.6332 78 66.778 78 65.8862V18.8122H54.25V2H6.75C5.49022 2 4.28204 2.35425 3.39124 2.98483C2.50045 3.61541 2 4.47066 2 5.36243V65.8862C2 66.778 2.50045 67.6332 3.39124 68.2638C4.28204 68.8944 5.49022 69.2486 6.75 69.2486Z" fill="#555555" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M54.25 2L78 18.8122M47.125 35.6243L59 44.0304L47.125 52.4365M32.875 35.6243L21 44.0304L32.875 52.4365" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                </mask>
                <g mask="url(#mask0_333_851)"><path d="M-17 -4.72461H97V75.9737H-17V-4.72461Z" fill="#C3395B" fillOpacity="0.95"></path></g>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[#C3395B] text-[36px] font-semibold leading-none mb-1">90</span>
              <span className="text-[#1b2336] text-[15px] font-medium leading-none">Production Ready Projects</span>
            </div>
            {/* Hover Popover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max min-w-[280px] bg-[#FFF6D9] rounded-full px-6 py-3 shadow-[0_4px_15px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex gap-6 items-center justify-center pointer-events-none">
              <div className="flex flex-col items-center"><span className="text-[#C3395B] font-bold text-[18px]">80</span><span className="text-[12px] text-[#1b2336]">Coding Projects</span></div>
              <div className="flex flex-col items-center"><span className="text-[#C3395B] font-bold text-[18px]">25k+</span><span className="text-[12px] text-[#1b2336]">Hours of Coding</span></div>
              <div className="flex flex-col items-center"><span className="text-[#C3395B] font-bold text-[18px]">10</span><span className="text-[12px] text-[#1b2336]">Design Projects</span></div>
            </div>
          </div>

          {/* Stat 6: Maintainer Ready Contributors */}
          <div className="relative group flex items-center gap-5 cursor-default">
            <div className="w-[60px] h-[60px] shrink-0 flex items-center justify-center rounded-lg bg-[#C3395B]/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 93 80" fill="none">
                <rect width="93" height="80" fill="#C3395B" fillOpacity="0.21"></rect>
                <path d="M79.9219 8.75H13.0781C11.4706 8.75 10.1719 9.86719 10.1719 11.25V68.75C10.1719 70.1328 11.4706 71.25 13.0781 71.25H79.9219C81.5294 71.25 82.8281 70.1328 82.8281 68.75V11.25C82.8281 9.86719 81.5294 8.75 79.9219 8.75ZM46.5999 40.4766L29.1624 53.0547C28.6901 53.3984 27.9727 53.1094 27.9727 52.5781V47.6797C27.9727 47.5 28.0726 47.3203 28.236 47.2031L38.2081 40L28.236 32.7969C28.1526 32.7402 28.0854 32.6677 28.0397 32.585C27.994 32.5024 27.9711 32.4118 27.9727 32.3203V27.4219C27.9727 26.8906 28.6901 26.6016 29.1624 26.9453L46.5999 39.5156C46.9541 39.7656 46.9541 40.2266 46.5999 40.4766ZM65.0273 52.5781C65.0273 52.9219 64.7186 53.2031 64.3462 53.2031H47.5444C47.1721 53.2031 46.8633 52.9219 46.8633 52.5781V48.8281C46.8633 48.4844 47.1721 48.2031 47.5444 48.2031H64.3462C64.7186 48.2031 65.0273 48.4844 65.0273 48.8281V52.5781Z" fill="#C3395B" fillOpacity="0.95"></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[#C3395B] text-[36px] font-semibold leading-none mb-1">60+</span>
              <span className="text-[#1b2336] text-[15px] font-medium leading-none">Maintainer Ready Contributors</span>
            </div>
            {/* Hover Popover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max max-w-[250px] bg-[#FFF6D9] rounded-full px-6 py-4 shadow-[0_4px_15px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center text-center pointer-events-none">
              <span className="text-[13px] text-[#1b2336] font-medium leading-snug">Coding contributors picked out to become maintainers of their products</span>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-[100px] relative max-w-[1000px] mx-auto px-4 md:px-0">
        <div className="flex items-center justify-between">
          <button 
            onClick={prevTestimonial}
            className="w-12 h-12 flex items-center justify-center rounded bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-10 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="text-black" />
          </button>
          
          <div className="flex-1 px-8 md:px-12 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <img 
              src={testimonials[currentTestimonial].img} 
              alt={testimonials[currentTestimonial].name} 
              className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] object-cover rounded-[16px] grayscale shrink-0 shadow-sm"
            />
            <div className="flex flex-col items-center md:items-center text-center justify-center flex-1">
              <p className="text-[#880163] text-[18px] md:text-[22px] font-bold leading-[1.6] mb-6 max-w-[800px]">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="text-[#880163] text-[16px] font-bold italic mb-1">
                {testimonials[currentTestimonial].name}
              </p>
              <p className="text-[#415674] text-[14px] italic">
                {testimonials[currentTestimonial].title}
              </p>
            </div>
          </div>

          <button 
            onClick={nextTestimonial}
            className="w-12 h-12 flex items-center justify-center rounded bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-10 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="text-black" />
          </button>
        </div>
      </section>

      {/* Partners section */}
      <section className="mb-[60px]">
        <h2 className="text-[36px] font-bold text-[#1b2336] text-center mb-12">Partner Organizations for DMP 2024</h2>
        
        <div className="mb-12">
          <h3 className="text-[28px] font-bold text-[#1b2336] mb-8 text-center md:text-left border-l-4 border-[#880163] pl-4 inline-block md:block mx-auto md:mx-0">Coding Track</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center px-4">
            {codingLogos.map((logo, idx) => (
              <div key={idx} className="flex justify-center p-2 items-center h-24">
                <img 
                  src={`/downloaded-images/2024_10_${logo}`} 
                  alt="Partner Logo" 
                  className="max-h-[70px] w-auto object-contain opacity-90 transition-opacity"
                  onError={(e) => {
                    const fallbacks = {
                      'samanvay-v2.png': '2024_02_samanvay-v2.png',
                      'National-Health-Authority-.webp': '2024_02_National-Health-Authority-.webp',
                      'EKStep_Logo.png': '2024_02_EKStep_Logo.png',
                      'Dhiway.webp': '2024_02_Dhiway.webp'
                    };
                    if (fallbacks[logo]) {
                      e.target.src = `/downloaded-images/${fallbacks[logo]}`;
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[28px] font-bold text-[#1b2336] mb-8 text-center md:text-left border-l-4 border-[#880163] pl-4 inline-block md:block mx-auto md:mx-0">Product Usability & Design Track</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center px-4">
            {designLogos.map((logo, idx) => (
              <div key={idx} className="flex justify-center p-2 items-center h-24">
                <img 
                  src={`/downloaded-images/2024_10_${logo}`} 
                  alt="Partner Logo" 
                  className="max-h-[70px] w-auto object-contain opacity-90 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Button */}
      <section className="text-center py-[20px]">
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSd6MYUwi4AT0Nl5KFWUaASPCCw4OcHO4qpd8hHmcHeJQ-Fc8w/viewform"
          className="inline-flex items-center gap-2 bg-[#880163] text-white font-bold text-[16px] px-[32px] py-[15px] rounded-full hover:bg-[#880163]/90 transition-colors"
          target="_blank" rel="noreferrer"
        >
          <span className="text-xl">+</span> Get in early as an Organization for DMP 2025
        </a>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </main>
    </div>
  );
}