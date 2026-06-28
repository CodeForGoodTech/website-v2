import BlogHero from "@/components/blog/BlogHero";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogSection from "@/components/blog/BlogSection";
import ShareSection from "@/components/blog/ShareSection";

export default function UnlockingOpportunitiesPage() {
  return (
    <>
      <BlogHero
        title="Unlocking Opportunities: My New Journey as a C4GT Contributor"
        image="/downloaded-images/2024_03_4-1-1170x725.png"
        author="Pranshu Jain"
        category="DMP 2023"
      />

      <BlogLayout>
        <div className="space-y-10">
          <BlogSection
            title="Introduction:"
            paragraphs={[
              "In this article, I am excited to share my recent selection as a contributor for C4GT’23, a prestigious mentoring program aimed at fostering the development of Digital Public Goods (DPGs) in India.",
              "Having received numerous inquiries about the selection process, I am here to provide a detailed account of my experience and offer valuable insights to aspiring contributors.",
              "Join me as I unravel the application process, the benefits of becoming a C4GT contributor, and my journey with the Sunbird ED project.",
            ]}
          />

          <BlogSection
            title="What is Code for GovTech(C4GT)?"
            paragraphs={[
              "India’s digital landscape has witnessed remarkable growth in recent years, with the launch of groundbreaking initiatives like Namma Yatri. In line with this trend, Code for GovTech (C4GT) has emerged as India’s pioneering mentoring program dedicated to building a community that contributes to global DPGs.",
              "This program aims to solve population-scale governance challenges by providing opportunities to work on live open-source projects and offering one-on-one mentoring from experienced tech professionals.",
            ]}
          />

          <BlogSection
            title="1. The Perks of Being a C4GT Contributor"
            paragraphs={[
              "Becoming a C4GT contributor opens doors to a multitude of benefits. Participants receive hands-on experience working on impactful projects targeted at addressing governance challenges.",
              "Additionally, contributors enjoy the guidance of expert mentors and receive a stipend of approximately 1 Lakh INR for the duration of the program.",
              "There is also the potential for post-program opportunities such as Pre-Placement Offers (PPOs) and Pre-Placement Interviews (PPIs), which can significantly enhance one’s career prospects.",
            ]}
          />

          <BlogSection
            title="2. The Application Process: A Step-by-Step Guide"
            paragraphs={[
              "To apply for C4GT, interested individuals must register on the Unstop platform, which served as the platform for announcing the program in 2023.",
              "Registration requires providing basic personal details. After registration, applicants are required to submit their proposals within a specified timeframe.",
              "During this period, communication with mentors is crucial to refine and seek feedback on the proposals. Discord channels dedicated to each project facilitate these interactions.",
              "Open-source contributions to C4GT projects are also encouraged and can be highlighted in the proposal.",
              "Finally, the proposal is submitted as a PDF following the naming format mentioned on the C4GT website.",
            ]}
          />

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">
              3. Tips and Insights: Crafting a Winning Proposal
            </h2>

            <p className="text-lg leading-8 text-gray-700">
              Writing a compelling proposal is key to securing a spot as a C4GT contributor.
              To enhance your chances of success, consider the following tips:
            </p>

            <ul className="list-none space-y-3 text-lg leading-8 text-gray-700">
              <li>
                – Present a thorough understanding of the project and demonstrate
                your ability to build and architect the proposed solution.
              </li>
              <li>
                – Clearly outline your proposed approach and timeline, showcasing
                your preparedness to execute the project.
              </li>
              <li>
                – Avoid copying basic definitions from external sources, as
                mentors can easily recognize such content. Instead, focus on
                original and in-depth insights.
              </li>
            </ul>
          </section>

          <BlogSection
            title="Why did I choose Sunbird ED?"
            paragraphs={[
              "Understanding the Sunbird ED is a powerful tool designed to facilitate seamless exploration and retrieval of educational resources within the Sunbird platform.",
              "It serves as a gateway for learners, enabling them to navigate through a vast repository of digital content with ease.",
              "By leveraging advanced search algorithms, personalized recommendations, and intuitive interfaces, the widget empowers users to discover relevant and engaging learning materials tailored to their unique needs and preferences.",
            ]}
          />

          <BlogSection
            title="Conclusion"
            paragraphs={[
              "Being selected as a contributor for the C4GT program is a great honor and a significant stepping stone towards personal and professional growth. My selection for the Sunbird ED-Search/Discovery widget project has provided me with a unique opportunity to contribute to a crucial aspect of educational technology.",
              "",
              "I would like to express my gratitude for this opportunity and extend my appreciation to the mentors and organizers behind C4GT. I look forward to collaborating with them and fellow contributors to create impactful solutions in the field of Digital Public Goods.",
              "",
              "To learn more about my journey and stay updated on my progress, feel free to connect with me on LinkedIn and GitHub. And Don’t forget to register in C4GT!!!",
              "Seya, Have a nice day 😇",
            ]}
          />

          <ShareSection />
        </div>
      </BlogLayout>
    </>
  );
}