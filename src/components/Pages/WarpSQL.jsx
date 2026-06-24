import BlogHero from "@/components/blog/BlogHero";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogSection from "@/components/blog/BlogSection";
import ShareSection from "@/components/blog/ShareSection";
import bg from "@/assets/blogs/bg.png";

export default function WarpSQLPage() {
  return (
    <>
      <BlogHero
        title="C4GT 2023: WarpSQL"
        image={bg}
        author="Piyush Raj"
        category="DMP 2023"
        likes={194}
      />

      <BlogLayout>
        <div className="space-y-16">
          <BlogSection
            title="Table of Contents"
            paragraphs={[
              "The Selection Process",
              "The Close-Knit Community",
              "The Coding Adventure",
              "Beyond C4GT",
              "DGP Dialogues",
              "Community Program",
            ]}
          />

          <BlogSection
            paragraphs={[
              "In this blog post, I'm excited to share my incredible journey with the C4GT 2023 program. Before diving into the details, let's begin with a brief introduction to C4GT.",
              "Code for GovTech (C4GT) is a unique program aimed at creating India's first active open-source community of coders that can build and contribute to global Digital Public Goods.",
            ]}
          />

          <BlogSection
            title="The Selection Process"
            paragraphs={[
              "My journey with C4GT began when a friend introduced me to the program. I started by contributing to the WarpSQL project, resolving open tickets.",
              "As I grew more confident with the project, I decided to submit my project proposal. I was thrilled to be selected as a contributor for the project, and it has been an enriching experience ever since.",
            ]}
          />

          <BlogSection
            title="The Close-Knit Community"
            paragraphs={[
              "One of the standout features of C4GT was the incredible sense of community. The Samagra team, with their unwavering support, played a pivotal role throughout the program.",
              "They organized boot camp sessions that were not only informative but also inspiring. We delved into topics like code quality, project planning, and heard industry experts share their insights on the challenges and innovations behind Digital Public Goods (DPG) and Digital Public Infrastructure (DPI).",
              "What made C4GT truly unique was the tight-knit cohort, which felt like a family. It didn't matter which project you were working on; we were all in this together.",
              "Personally, I had the privilege of getting to know some remarkable people from different projects.",
            ]}
          />

          <BlogSection
            title="The Coding Adventure"
            paragraphs={[
              "My journey with WarpSQL began with a basic understanding of Docker and Linux. During the program, I learned a lot.",
              "I deepened my knowledge in database deployment and management techniques, explored various tools and extensions, and became proficient in using Git and GitHub for project collaboration.",
              "My mentor provided consistent support, helping me overcome challenges and improving my contributions for practical use.",
              "After two months, we successfully implemented Disaster Recovery in WarpSQL #105. If you're interested in the specifics of my weekly contributions, you can check them out in the C4GT milestones. Don't forget to explore other projects as well.",
            ]}
          />

          <BlogSection
            title="Beyond C4GT"
            paragraphs={[
              "While my journey with C4GT was an exhilarating one, there's still plenty of work to be done in WarpSQL.",
              "I plan to keep contributing and learning as I move forward.",
            ]}
          />

          <BlogSection
            title="DGP Dialogues"
            paragraphs={[
              "One of the highlights of my C4GT experience was the opportunity to present at the DGP Dialogues event.",
              "It was a fabulous experience engaging with experts in the DPG space, learning about innovations, and witnessing the impact of our projects.",
              "I highly recommend tuning in to the DGP Dialogues livestream and attending the next event. I'll be there and look forward to meeting you.",
            ]}
          />

          <BlogSection
            title="Community Program"
            paragraphs={[
              "C4GT didn't stop at the two-month mentoring program. They also launched a community program that lists open issues in DPG projects.",
              "You can tackle these issues and earn badges based on your contributions. It's a fantastic opportunity to put your skills into practice, learn new technologies, and connect with like-minded individuals.",
              "My journey with C4GT has been more rewarding than I could have ever imagined. It offered stellar mentorship, incredible people, meaningful projects, and a powerful purpose.",
              "Whether or not you're part of C4GT, I recommend getting involved in DPG programs through the C4GT Community Program.",
              "I can't wait to see what the future brings. Cheers to the future of open source and Digital Public Goods!",
            ]}
          />

          <ShareSection />
        </div>
      </BlogLayout>
    </>
  );
}