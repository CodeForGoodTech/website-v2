import BlogHero from "@/components/blog/BlogHero";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogSection from "@/components/blog/BlogSection";
import ShareSection from "@/components/blog/ShareSection";
import bg from "@/assets/blogs/bg.png";
import midpoint from "@/assets/blogs/midpoint.png";
import architecture from "@/assets/blogs/architecture.png";
import evaluation from "@/assets/blogs/eval.png";
import visualization from "@/assets/blogs/visualization.png";
import contribution from "@/assets/blogs/contribution.png";



export default function C4GTHalfwayCheckpointPage() {
  return (
    <>
      <BlogHero
        title="C4GT Halfway Checkpoint: Celebrating Progress and Growth"
        image={bg}
        author="Vanshika Mishra"
        category="DMP 2023"
      />

      <BlogLayout>
        <div className="space-y-12">

          <p className="text-xl leading-relaxed text-gray-800">
            Hi everyone! Continuing on from my last blog, I got selected in
            C4GT Program and have successfully passed the Mid-Point
            Evaluation! So I will be sharing my one month journey here today.
          </p>

          {/* Midpoint Evaluation Screenshot */}
          <img
            src={midpoint}
            alt="Midpoint Evaluation Result"
            className="w-full rounded-xl shadow-md"
          />

          <BlogSection
            title="PROJECT :- LLMs for Question Answering Part II by iGoT Karmayogi"
            paragraphs={[
              "My C4GT Experience till now has been full of working with new technologies, designing an efficient pipeline and brainstorming on code with my fellow contributor and Mentor.",
              "The C4GT Management Team has been super supportive throughout the month and helped us to easily slide into our new roles. The team helped us a lot by conducting a very helpful bootcamp where we learned Git & GitHub, time management techniques and much more.",
            ]}
          />

          <BlogSection
            title="WEEK 1 :- Charting the Course"
            paragraphs={[
              "We kicked off the first week with a detailed project discussion with our mentor to properly define the milestones to be achieved before mid-point evaluation. Our mentor was very helpful and guided us in the right direction for the project requirements.",
              "We had a brief discussion over Design Documentation of the project. I started deciding which dataset to use for evaluation of LLM Models and made a list of LLM models that can be supported by Hugging Face Transformers.",
            ]}
          />

          {/* Architecture Diagram */}
          <img
            src={architecture}
            alt="Project Architecture"
            className="w-full rounded-xl shadow-md"
          />

          <BlogSection
            title="WEEK 2 :- Scripting Progress"
            paragraphs={[
              "I started working on the evaluation script for finding the best LLM Models for Question Answering Task. My mentor guided me on which evaluation metrics to choose and helped define the structure of our code.",
              "I started working with the evaluation script and generated evaluation results for more than 60+ models.",
            ]}
          />

          {/* Evaluation Results Image */}
          <img
            src={evaluation}
            alt="Evaluation Results"
            className="w-full rounded-xl shadow-md"
          />

          <BlogSection
            title="WEEK 3 :- Visualization and Demo"
            paragraphs={[
              "I started working on a visualization script in Python to visualize the evaluation results for better analysis and documentation purposes.",
              "As mid-point evaluation was approaching, we started working on a demo in LangChain where we could demonstrate the first half of the project, which is the ingestion part and retrieval of top-n documents.",
            ]}
          />
           <img
            src={visualization}
            alt="Project Architecture"
            className="w-full rounded-xl shadow-md"
          />

          <BlogSection
            title="WEEK 4 :- Refining and Looking Ahead"
            paragraphs={[
              "In the final week, we refined our demo, ensuring it worked seamlessly. The demo involved document ingestion, coreferencing, vector database integration, and similarity search.",
              "The retrieved documents were used as context for the LLM, generating answers. While the answers were insightful, there’s room for improvement through LLM fine-tuning.",
              "I concluded the week by creating my mid-point evaluation presentation. My mentor’s feedback was to work on LLM fine-tuning and multiple testing cycles to further configure and improve the pipeline.",
            ]}
          />

          <p className="text-lg leading-relaxed text-gray-800">
            This journey has introduced me to numerous Large Language Models,
            the Hugging Face Library, TensorFlow, and Python functionalities.
            Overall, it has been a valuable experience, and I look forward to
            what the next month will bring.
          </p>

          <section>
            <h2 className="text-3xl font-bold mb-6">
              Tips for Future Contributors
            </h2>

            <ul className="list-disc pl-8 space-y-4 text-lg leading-relaxed text-gray-800">
              <li>
                Don’t be discouraged by the initial complexity of a project.
                Keep faith in your skills and ask for help from fellow
                contributors, mentors, and the C4GT Team whenever needed.
              </li>

              <li>
                Ask as many questions as possible at the beginning of the
                project and establish clear objectives. It can be very
                difficult to correct mistakes later.
              </li>

              <li>
                Establish a clear communication channel with mentors and fellow
                contributors. Maintain meeting notes and share them
                immediately after discussions to avoid miscommunication.
              </li>
            </ul>
          </section>

          {/* Final Screenshot */}
          <img
            src={contribution}
            alt="Community Discussion"
            className="w-full rounded-xl shadow-md"
          />

          <ShareSection />
        </div>
      </BlogLayout>
    </>
  );
}