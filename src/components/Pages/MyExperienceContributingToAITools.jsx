import BlogHero from "@/components/blog/BlogHero";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogSection from "@/components/blog/BlogSection";
import ShareSection from "@/components/blog/ShareSection";
import bg from "@/assets/blogs/bg.png";


export default function MyExperienceContributingToAITools() {
  return (
   <>
      <BlogHero
        title="My Experience Contributing to AI Tools"
        image={bg}
        author="Contributor"
        category="DMP 2023"
        likes={0}
      />

      <BlogLayout>
        <div className="space-y-16">
          <BlogSection
            paragraphs={[
              "AI-Tools is a Digital Public Good created as part of the Samagra initiative.",
              "AI-Tools is an Open Source Project comprising a collection of tools aimed at quickly building and deploying Machine Learning (ML) models for various use cases.",
              "Essentially, it helps abstract the deployment operations layer and allows for a pure ML development experience.",
              "In the next couple of posts, I will be talking about my learnings, thoughts, and observations as a contributor to the C4GT Program.",
            ]}
          />

          <BlogSection
            title="Weekly Contributions"
            paragraphs={[
              "Week – 0 : A Code Odyssey",
              "Week – 1 : Mission Multi Image",
              "Week – 2 :",
            ]}
          />

          <ShareSection />
        </div>
      </BlogLayout>
    </>
  );
}