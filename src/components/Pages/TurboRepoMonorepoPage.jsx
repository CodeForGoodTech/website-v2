import BlogHero from "@/components/blog/BlogHero";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogSection from "@/components/blog/BlogSection";
import ShareSection from "@/components/blog/ShareSection";

export default function TurboRepoMonorepoPage() {
  return (
    <>
      <BlogHero
        title="TurboRepo: The Advent of Monorepo 🪄"
        image="/downloaded-images/2024_03_13-2-1170x725.png"
        author="Rishit"
        category="DMP 2023"
        likes={193}
      />

      <BlogLayout>
        <div className="space-y-16">

          <BlogSection
            title="Table of Contents"
            paragraphs={[
              "🐾 Fingerprinting",
              "🌐 Remote Caching",
              "🤔 Where Did I Use It?"
            ]}
          />

          <BlogSection
            paragraphs={[
              "The use of monorepositories has increased significantly due to growing complexities and interdependencies across multiple applications.",
              "A monorepo is a development strategy where multiple software projects are maintained within a single repository. This approach simplifies dependency management, code sharing, and collaboration between teams.",
              "Instead of managing separate repositories for each application, developers can work from a centralized codebase, improving consistency and reducing duplication."
            ]}
          />

          <BlogSection
            title="What is TurboRepo?"
            paragraphs={[
              "TurboRepo is a high-performance build system created specifically for monorepos. It optimizes build pipelines, reduces redundant work, and improves developer productivity.",
              "By intelligently caching task outputs and understanding dependencies, TurboRepo ensures only necessary tasks are executed during development and deployment."
            ]}
          />

          <BlogSection
            title="🐾 Fingerprinting"
            paragraphs={[
              "Fingerprinting is one of TurboRepo's most powerful optimization mechanisms.",
              "A fingerprint is generated using source files, dependencies, environment variables, configurations, and task definitions.",
              "Whenever a task is executed, TurboRepo checks whether the fingerprint has changed. If it remains unchanged, previously generated outputs can be reused instantly.",
              "This significantly reduces build times and avoids unnecessary computations."
            ]}
          />

          <BlogSection
            title="🌐 Remote Caching"
            paragraphs={[
              "Remote caching allows build artifacts to be shared across team members and CI/CD environments.",
              "Once a build result is generated and stored remotely, other developers can reuse that result without rebuilding the same code.",
              "This leads to faster deployments, reduced infrastructure costs, and a smoother developer experience."
            ]}
          />

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/downloaded-images/2024_03_13-2-1170x725.png"
              alt="TurboRepo Monorepo Architecture"
              className="w-full"
            />
          </div>

          <BlogSection
            title="🤔 Where Did I Use It?"
            paragraphs={[
              "I implemented TurboRepo in a project containing multiple applications and shared packages.",
              "The monorepo setup made dependency management much easier while providing a cleaner development workflow.",
              "By leveraging TurboRepo's caching mechanisms, build and deployment times were reduced significantly.",
              "These optimizations ultimately resulted in more efficient workflows and faster website loading times."
            ]}
          />

          <BlogSection
            title="Key Benefits of TurboRepo"
            paragraphs={[
              "⚡ Faster builds through intelligent caching.",
              "📦 Better dependency management across applications.",
              "🌍 Shared remote cache for teams and CI/CD pipelines.",
              "🧩 Easier code sharing using common packages.",
              "🚀 Improved developer productivity and deployment speed."
            ]}
          />

          <BlogSection
            title="Final Thoughts"
            paragraphs={[
              "TurboRepo is an excellent solution for teams managing multiple applications inside a monorepo.",
              "Its fingerprinting and remote caching features dramatically improve build performance while keeping workflows simple and scalable.",
              "If your project consists of several interconnected applications, TurboRepo is definitely worth exploring.",
              "Hope you found this article useful! ✌🏻"
            ]}
          />

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/YX5yoApjI3M"
              title="TurboRepo Demo and Walkthrough"
              allowFullScreen
            />
          </div>

          <ShareSection />
        </div>
      </BlogLayout>
    </>
  );
}