import React from "react";
import { Button } from "@/components/ui/button";
import PageHeroBanner from "../PageHeroBanner";

export default function CampusLeadersProgram() {
  return (
    <div className="bg-white">
      <PageHeroBanner
        title="Campus Leaders Program"
        currentPage="Campus Leaders Program"
      />

      <main className="w-full bg-white">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 font-[Nunito_Sans] text-[#415674]">
          {/* Intro Section */}
         <section className="mb-14 md:mb-16">
  <div className="max-w-[1180px]">
    <h2
      className="mb-6 text-[28px] leading-[1.2] text-[#2A3342] sm:text-[32px] md:text-[36px]"
      style={{
        fontFamily: '"Raleway", sans-serif',
        fontWeight: 600,
        letterSpacing: "-0.02em",
      }}
    >
      Are you passionate about technology that impacts billions of people
      and community building?
    </h2>

    <div className="mb-8">
      <button
        type="button"
        className="
          inline-flex items-center justify-center
          min-h-[46px]
          rounded-[4px]
          bg-[#880163]
          px-[26px] py-[11px]
          text-white
          shadow-[0_6px_14px_rgba(0,0,0,0.18)]
          transition-opacity duration-200 hover:opacity-95
        "
        style={{
          fontFamily: '"Raleway", sans-serif',
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "20px",
        }}
      >
        Applications Closed
      </button>
    </div>

    <div
      className="space-y-6 text-[18px] leading-[30px] text-[#415674]"
      style={{
        fontFamily: '"Nunito Sans", sans-serif',
        fontWeight: 400,
      }}
    >
      <p>We have an exciting opportunity for you!</p>

      <p>
        <strong className="font-[700]">
          Digital Public Infrastructure (DPI)
        </strong>{" "}
        is transforming governance and industries with game-changing
        initiatives like Aadhaar, UPI, CoWIN, Namma Yatri and so on. At the
        core of DPI are{" "}
        <strong className="font-[700]">
          Digital Public Goods (DPGs)
        </strong>
        , such as DIVOC, MOSIP and Beckn, which are open-source tools driving
        these innovations. (Learn more about DPGs &amp; DPI{" "}
        <a
          href="https://digitalpublicgoods.net/DPI-DPG-BB-Definitions.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#880163] underline underline-offset-4 hover:text-[#740154]"
        >
          here
        </a>
        .)
      </p>

      <p>
        At Code for Good Tech (C4GT), we’re dedicated to fostering a community
        of open-source contributors focused on Digital Public Goods and Tech
        for Good.
      </p>

      <p>
        Introducing the Campus Leaders Program (CLP) at C4GT! We’re looking
        for energetic student leaders to grow the C4GT community on college
        campuses. You’ll lead engaging activities and build a vibrant student
        network.
      </p>

      <p>
        Join us and help shape the future of DPGs and DPI.{" "}
        <strong className="font-[700]">Become a campus leader today!</strong>
      </p>
    </div>
  </div>
</section>

          {/* Image 1 */}
          <section className="mb-16">
            <div className="max-w-[1080px]">
              <img
                src="/downloaded-images/2024_07_Screenshot-2024-07-31-at-11.15.42_PM-1024x345.png"
                alt="Campus Leaders Program Overview"
                className="w-full h-auto object-contain rounded-none"
              />
            </div>
          </section>

          {/* How Does It Work */}
          <section className="mb-14">
            <div className="max-w-[1080px]">
              <h2 className="font-[Raleway] text-[#1b2336] text-[30px] sm:text-[34px] md:text-[38px] font-semibold leading-[1.3] tracking-[-0.02em] mb-5">
                How Does It Work?
              </h2>

              <div className="space-y-5 text-[16px] sm:text-[17px] leading-[1.8] text-[#415674]">
                <p>
                  As a Campus Leader, you’ll be part of a 10-month, part-time
                  role, averaging around 15 hours of engagement per month.
                  Here’s what you’ll do:
                </p>

                <div className="space-y-3">
                  <p>
                    – <b>Build a Buzz Around DPGs and Open Source:</b> Drive
                    interest and create excitement about Digital Public Goods
                    (DPGs) and open-source projects on your campus
                  </p>
                  <p>
                    – <b>Organize Cool Events:</b> Set up hackathons, speaker
                    sessions, and other fun activities to get people involved
                  </p>
                  <p>
                    – <b>Create and Share Content:</b> Craft and spread awesome
                    content about DPGs and Tech for good
                  </p>
                  <p>
                    – <b>Get Support:</b> Receive all the tools and guidance you
                    need to rock this role
                  </p>
                </div>

                <p>
                  You’ll have the freedom to bring your own ideas to life while
                  working within the program’s framework.
                </p>

                <p>
                  Your mission? Be a dynamic community builder and make a real
                  impact on your campus!
                </p>
              </div>
            </div>
          </section>

          {/* Application Criteria */}
          <section className="mb-14">
            <div className="max-w-[1080px]">
              <h2 className="font-[Raleway] text-[#1b2336] text-[30px] sm:text-[34px] md:text-[38px] font-semibold leading-[1.3] tracking-[-0.02em] mb-5">
                Application Criteria
              </h2>

              <div className="space-y-5 text-[16px] sm:text-[17px] leading-[1.8] text-[#415674]">
                <div className="space-y-2">
                  <p>
                    <b>Who Can Apply?</b>
                  </p>
                  <p>
                    We’re looking for 2nd or 3rd-year college students who are
                    enthusiastic, passionate and motivated!
                  </p>
                </div>

                <div className="space-y-2">
                  <p>
                    <b>What We’re Looking For:</b>
                  </p>
                  <p>
                    <b>– Basic Coding Skills:</b> Comfortable using GitHub and
                    helping with coding questions
                  </p>
                  <p>
                    <b>– Clear Communication:</b> Good at explaining ideas in a
                    simple and clear way
                  </p>
                  <p>
                    <b>– Event Planning Experience:</b> Some experience
                    organizing events or running campaigns
                  </p>
                  <p>
                    <b>– Marketing Basics:</b> Understanding of basic marketing
                    principles
                  </p>
                  <p>
                    <b>– Strong Network:</b> Ability to make use of your
                    existing connections
                  </p>
                </div>

                <div className="space-y-2">
                  <p>
                    <b>Mindset:</b>
                  </p>
                  <p>
                    <b>– Passion for Open Source:</b> Excited about open-source
                    projects and their potential
                  </p>
                  <p>
                    <b>– Driven to Make an Impact:</b> Eager to make a
                    difference and contribute meaningfully
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Monthly Activities */}
          <section className="mb-14">
            <div className="max-w-[1080px]">
              <h2 className="font-[Raleway] text-[#1b2336] text-[30px] sm:text-[34px] md:text-[38px] font-semibold leading-[1.3] tracking-[-0.02em] mb-5">
                Monthly Activities
              </h2>

              <div className="space-y-5 text-[16px] sm:text-[17px] leading-[1.8] text-[#415674]">
                <p>Here’s what you’ll do each month:</p>

                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <b>Write a Blog Post:</b> Create an insightful draft about
                    C4GT initiatives or open-source topics
                  </li>

                  <li>
                    <b>Pick One of These Activities:</b>
                    <ul className="list-disc pl-6 mt-3 space-y-2">
                      <li>
                        <b>Hackathon:</b> Organize a fun, fast-paced coding
                        event to solve problems and build cool projects
                      </li>
                      <li>
                        <b>Learning Talks:</b> Set up sessions to share and
                        learn new skills with your peers
                      </li>
                      <li>
                        <b>Meetup with C4GT DevRel:</b> Have a chat with the
                        C4GT Developer Relations team for tips and feedback
                      </li>
                      <li>
                        <b>Onboard Contributors:</b> Help bring more people into
                        the C4GT community and get them excited about
                        contributing to DPGs and tech-for-good projects
                      </li>
                    </ul>
                  </li>
                </ol>

                <p>
                  Have fun making an impact with these activities each month!
                </p>
              </div>
            </div>
          </section>

          {/* Rewards & Incentives */}
          <section className="mb-16">
            <div className="max-w-[1080px]">
              <h2 className="font-[Raleway] text-[#1b2336] text-[30px] sm:text-[34px] md:text-[38px] font-semibold leading-[1.3] tracking-[-0.02em] mb-5">
                Rewards & Incentives
              </h2>

              <div className="space-y-5 text-[16px] sm:text-[17px] leading-[1.8] text-[#415674]">
                <p>
                  Get rewarded while making a difference! <br />
                  Here’s what you can look forward to as a Campus Leader:
                </p>

                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <b>Professional Growth:</b> Boost your skills, get hands-on
                    experience, and build your network through exciting
                    open-source projects and collaboration with industry experts
                  </li>

                  <li>
                    <b>Welcome Goodies:</b> Enjoy some cool welcome items when
                    you join us!
                  </li>

                  <li>
                    <b>Free Ticket to DPG Dialogues:</b> Get an invitation to
                    attend{" "}
                    <a
                      href="https://codeforgoodtech.in/initiatives/dpg-dialogues/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#880163] underline underline-offset-4 hover:text-[#740154]"
                    >
                      DPG Dialogues
                    </a>{" "}
                    at no cost
                  </li>

                  <li>
                    <b>Quarterly Swag:</b> If you hit a rating of 4 or higher
                    each quarter, you’ll score some awesome C4GT swag and
                    goodies
                  </li>

                  <li>
                    <b>Campus Leader of the Quarter:</b>
                    <ul className="list-[circle] pl-6 mt-3 space-y-2">
                      <li>
                        Rewards worth ₹ 7500 including cash prize and wearables!
                      </li>
                      <li>
                        1:1 Session with a DPG/DPI Industry Leader: Get
                        professional guidance and insights
                      </li>
                      <li>
                        Community Shoutout: Be recognized publicly as the Campus
                        Leader of the Quarter
                      </li>
                    </ul>
                  </li>

                  <li>
                    <b>Consistent Excellence:</b> If you maintain a rating of 4
                    or higher in at least 2 out of 3 quarters, you’ll receive:
                    <ul className="list-[circle] pl-6 mt-3 space-y-2">
                      <li>Appreciation Certificate: From the C4GT team</li>
                      <li>
                        Letter of Recommendation: To highlight your achievements
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Image 2 */}
          <section className="mb-16">
            <div className="max-w-[1080px]">
              <img
                src="/downloaded-images/2024_08_Screenshot-2024-08-21-at-10.08.39_AM-1024x442.png"
                alt="Campus Leaders Rewards"
                className="w-full h-auto object-contain rounded-none"
              />
            </div>
          </section>

          {/* Outro / Call to Action */}
          <section className="mb-4">
            <div className="max-w-[1080px]">
              <h2 className="font-[Raleway] text-[#1b2336] text-[30px] sm:text-[34px] md:text-[38px] font-semibold leading-[1.3] tracking-[-0.02em] mb-5">
                Ready to Lead and Build your Community?
              </h2>

              <div className="space-y-5 text-[16px] sm:text-[17px] leading-[1.8] text-[#415674]">
                <p>
                  If you’re excited to make an impact and shape the future of
                  open-source Digital Public Goods, apply now to become a C4GT
                  Campus Leader! Dive in and start contributing to a world full
                  of opportunities.
                </p>

                <div className="pt-1">
                  <Button className="bg-[#880163] hover:bg-[#740154] text-white rounded-md px-120 py-3 h-auto text-[15px] sm:text-[16px] font-semibold shadow-none">
                    Applications Closed
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}