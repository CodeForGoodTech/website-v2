import BlogHero from "@/components/blog/BlogHero";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogSection from "@/components/blog/BlogSection";
import ShareSection from "@/components/blog/ShareSection";
import bg from "@/assets/blogs/bg.png";
import horizon from "@/assets/blogs/horizon.png";
import glifictour from "@/assets/blogs/glifictour.png";
import sprint from "@/assets/blogs/sprint.png";
export default function ExploringNewHorizonsPage() {
  return (
    <>
      <BlogHero
        title="Exploring New Horizons My Journey With Glific And C4GT"
        image={bg}
        author="Aashi Jain"
        category="DMP 2023"
        likes={186}
      />

      <BlogLayout>
        <div className="space-y-16">
          <img src={horizon } alt="Glific Sprint" className="mx-auto" />

          <BlogSection
            paragraphs={[
             " Introduction:",

"During our chat at the Udaipur sprint, Vishal, one of the C4GT interns, shared an insightful perspective: “Most of the good things come unexpectedly…” This statement deeply resonated with me as I reflected on my remarkable experience with Glific and the C4GT program. Let me introduce myself – I’m Darshan Jain, a Computer Science student from Sardar Patel Institute of Technology, Mumbai.",
              "How I met Glific?",
              "It all began with an email from Unstop about the C4GT program, an open-source initiative where Digital Public Good organizations list problem statements and contributors build solutions.",
              "As a technology enthusiast, I saw this as a perfect opportunity to become part of the open-source ecosystem and work on projects that create meaningful social impact.",
              "Among the many projects available, Glific immediately caught my attention because of its mission to empower NGOs through WhatsApp-based communication platforms.",
            ]}
          />

          <BlogSection
            title="Taking the Leap into Elixir"
            paragraphs={[
              "There was one challenge: I had no prior experience with Elixir, the language used by Glific's backend.",
              "Despite the uncertainty, curiosity pushed me to set up the project, join the Glific Discord server, and begin exploring the codebase.",
              "What initially felt intimidating soon became an exciting learning journey filled with experimentation, debugging, and discovery.",
            ]}
          />

          <img
            src={glifictour }
            alt="Glific Community"
            className="w-full rounded-xl shadow-md"
          />

          <BlogSection
            title="Learning Through Contributions"
            paragraphs={[
              "My first task was setting up both the frontend and backend repositories. As a Windows user at the time, this was not always straightforward.",
              "With support from mentors and the contributor community, I successfully configured the development environment and started contributing.",
              "I submitted pull requests that improved project documentation and helped future contributors avoid the same setup challenges I encountered.",
            ]}
          />

          <BlogSection
            title="Discovering Open Source Collaboration"
            paragraphs={[
              "The most valuable lesson was understanding how open-source communities collaborate.",
              "Mentors were approachable, discussions were constructive, and every contribution, no matter how small, was appreciated.",
              "The experience taught me how to communicate effectively, review code, and contribute to a large production-grade project.",
            ]}
          />

          <img
            src={sprint}
            alt="C4GT Sprint"
            className="w-full rounded-xl shadow-md"
          />

          <BlogSection
            title="The Sprint Experience"
            paragraphs={[
              "The sprint provided an opportunity to meet fellow contributors, mentors, and project maintainers.",
              "Working alongside passionate people from different backgrounds broadened my perspective on technology and its role in creating social impact.",
              "The interactions helped me understand the larger ecosystem behind Digital Public Goods and the communities that sustain them.",
            ]}
          />

          <BlogSection
            title="Building for Impact"
            paragraphs={[
              "As my understanding of Glific deepened, I became increasingly aware of the challenges NGOs face and how technology can help address them.",
              "The project exposed me to real-world engineering decisions, scalability concerns, and the importance of building solutions that are both reliable and accessible.",
              "We also explored future possibilities, including abstraction layers and integrations that could simplify onboarding for organizations using the platform.",
            ]}
          />

          <BlogSection
            title="Conclusion"
            paragraphs={[
              "My journey with Glific and the C4GT program has been an extraordinary adventure that expanded my horizons and transformed my perspective.",
              "From learning Elixir and contributing to an open-source codebase to collaborating with mentors and participating in the sprint, every step brought valuable lessons.",
              "The experience reinforced my belief that growth often happens outside our comfort zones.",
              "As I continue this journey, I look forward to new challenges, new opportunities, and contributing to technology that creates meaningful impact.",
            ]}
          />

          <ShareSection />
        </div>
      </BlogLayout>
    </>
  );
}