import BlogHero from "@/components/blog/BlogHero";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogSection from "@/components/blog/BlogSection";
import ShareSection from "@/components/blog/ShareSection";
import bg from "@/assets/blogs/bg.png";
import glific from "@/assets/blogs/glific.png";
import glific2 from "@/assets/blogs/glific2.png";
export default function GlificSprintPage() {
  return (
    <>
      <BlogHero
        title="My Experience Of Sprint And Working With Glific Teams"
        image={bg}
        author="Nishant Mainwal"
        category="DMP 2023"
        likes={196}
      />

      <BlogLayout>
        <div className="space-y-16">
          <BlogSection
            paragraphs={[
              "Greetings! I am Nishant Mainwal, currently an intern at Glific, an open-source two-way WhatsApp communication platform that facilitates seamless communication between NGOs and their beneficiaries.",
              "I am excited to share my journey thus far working with the Glific team. This opportunity came to me through C4GT (Code for GovTech), a platform that allows individuals to work on open-source projects.",
            ]}
          />

          <BlogSection
            title="Weeks 1 and 2: An Amazing Start"
            paragraphs={[
              "I embarked on my journey with Glific two weeks ago, and it has been an incredible experience so far.",
              "The first few days involved setting up the codebase on my local environment. Fortunately, I had a supportive mentor who guided me through the process and addressed any queries or issues I encountered.",
              "Every morning, the entire team, including interns and mentors, would have a standup meeting where we could discuss our progress, ask questions, and receive guidance from our mentors.",
            ]}
          />

          <BlogSection
            title="Learning New Skills and Their Importance"
            paragraphs={[
              "One of the highlights of working at Glific is the opportunity to learn new skills and understand their significance in the project.",
              "As Glific is designed for NGOs, there are specific technologies and tools that are utilized for its development.",
              "Through hands-on experience and mentorship, I am gaining insights into the practical application of these technologies and understanding why they are chosen for the project.",
            ]}
          />

          <BlogSection
            title="Engaging with NGOs in Sprints"
            paragraphs={[
              "To ensure Glific caters to the needs of NGOs effectively, the team conducts sprints, during which we collaborate with representatives from various NGOs.",
              "These sprints serve as a platform for the NGOs to share their experiences, challenges they face, and the features they would like to see in Glific.",
              "Participating in these sprints has been an eye-opening experience as we get to meet incredible people who are making a difference through their organizations.",
              "Their guidance and firsthand insights have been invaluable in shaping our development process.",
            ]}
          />
          <img src={glific} alt="Glific Sprint" className="mx-auto" />

          <BlogSection
            title="Reflections"
            paragraphs={[
              "Working with the Glific team has been an enriching experience.",
              "The supportive environment, constant learning, and the opportunity to collaborate with NGOs have made this internship truly special.",
              "I am excited about the coming weeks and the contributions I can make to Glific's mission of enabling effective communication for NGOs.",
              "If you're interested in open-source projects and the intersection of technology and social impact, I highly recommend exploring opportunities like C4GT and getting involved in projects like Glific.",
            ]}
          />
          <img src={glific2} alt="Glific Sprint" className="mx-auto" />

          <ShareSection />
        </div>
      </BlogLayout>
    </>
  );
}