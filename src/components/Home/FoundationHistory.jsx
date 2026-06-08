import * as React from "react"

function CountUp({ end, suffix = "+", label }) {
  const [count, setCount] = React.useState(0)
  const [started, setStarted] = React.useState(false)
  const ref = React.useRef(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true)
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  React.useEffect(() => {
    if (!started) return

    let start = 0
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment

      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [started, end])

  return (
    <div ref={ref} className="flex-1 text-center">
      <div className="mb-2 text-[48px] font-extrabold leading-none text-[#BE9C06] md:text-[48px] sm:text-[40px]">
        {count}
        {suffix}
      </div>
      <div className="mx-auto max-w-[200px] text-[15px] font-medium leading-[1.4] text-[#6B7280]">
        {label}
      </div>
    </div>
  )
}

export function FoundationHistory() {
  const stats = [
    { value: 30000, label: "Intrested Developers and Mentors" },
    { value: 70, label: "Participating Organizations" },
    { value: 800, label: "Successfully Delivered Projects" },
  ]

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="mx-auto max-w-[1100px]">
          {/* Heading */}
          <h2 className="mb-8 text-[28px] font-bold uppercase tracking-[0.5px] text-[#3C4B64] md:text-[28px] sm:text-[24px]">
            FOUNDATION AND HISTORY
          </h2>

          {/* Text */}
          <div className="text-[#6B7280]">
            <p className="mb-6 text-[16px] leading-[1.8]">
              C4GT was piloted in 2022 with the Dedicated Mentoring Program (DMP) where 13
              contributors — selected via a rigorous evaluation process — worked on 9 projects
              mapped to DPGs under the guidance of selected mentors for a period of 2-3 months.
              In 2023, DMP was scaled to 103 projects and contributors, 87 mentors and 21
              organizations. By 2025, DMP had stabilized to 100+ projects from 40+ organizations
              including 10+ global organizations with a successful completion of 70+ projects.
            </p>

            <p className="mb-6 text-[16px] leading-[1.8]">
              This interaction became organic and scaled further with the Open Community Program,
              where organizations and interested contributors can work together on the projects
              throughout the year. To foster diversity and inclusivity, SheCodes upskills and
              handholds women developers to help kickstart the open-source journeys. To further
              expand and diversify the talent pipeline – particularly from Tier 2 and Tier 3
              institutions – C4GT Hubs have been conceptualized. These hubs provide students with
              structured upskilling in AI/ML and full-stack development through course work,
              supported by workshops, mentorship, and projects.
            </p>

            <p className="mb-[60px] text-[16px] leading-[1.8]">
              Through these initiatives, in the period of 2022-2025, C4GT Community has grown to
              30,000+ members, who have helped contribute to ~800 projects across 70+ tech-for-good
              organizations.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex flex-col gap-8 border-t border-[#F3F4F6] pt-10 md:flex-row md:justify-around md:gap-10">
            {stats.map((stat, i) => (
              <CountUp key={i} end={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}