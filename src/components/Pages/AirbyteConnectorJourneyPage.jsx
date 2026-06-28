import BlogHero from "@/components/blog/BlogHero";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogSection from "@/components/blog/BlogSection";
import ShareSection from "@/components/blog/ShareSection";

export default function AirbyteConnectorJourneyPage() {
  return (
    <>
      <BlogHero
        title="From Project Selection to Building an Airbyte Connector: My Ongoing Journey with C4GT 2023"
        image="/downloaded-images/airbyte.png"
        author="Aviraj Gour"
        category="DMP 2023"
        likes={164}
      />

      <BlogLayout>
        <div className="space-y-10">
          <BlogSection
            paragraphs={[
              "Hey everyone, I am Aviraj Gour, a 3rd year student Mathematics and computing at NIT, Hamirpur. Today, I am excited to share with you my journey of working on an exciting project as a part of C4GT 2023. Let me take you through my exciting journey of seizing this incredible opportunity, starting from choosing the project to crafting a proposal, and sharing my experiences so far.",

              "Excited by the program vision, I started by exploring the project available in the C4GT 2023 program. With over 100+ projects from 30+ organisations, options were abundant. So all the projects were listed on GitHub, on the basis of my skill set I started marking projects, and ended up marking more than 15 projects. Then I again went through all the projects and started understanding them. I came across 2–3 projects that really interested me and felt like the projects I wanted to work on. After investing additional effort and conducting thorough research, I ultimately made the decision to work on the Airbyte connector for the Avni project under the DevDataPlatform.",

              "After selecting the project, I started interacting with the DevDataPlatform/Tech4Dev community. I began by introducing myself and then started working on the project's basic details. Siddhant, my project mentor, has been an invaluable source of support continuously. He introduced me to the Avni platform and has been there whenever I needed assistance. We have regular meetups to discuss the project, and he consistently ensures that I am making progress and offers guidance along the way.",
            ]}
          />

          <BlogSection
            title="About project :"
            paragraphs={[
              "The goal is to develop a source connector for Avni, enabling NGOs using Avni to utilize Airbyte for their data management requirements.",

              "The source connector for Avni will enable Avni users to extract data from Avni’s databases or APIs and replicate it into Airbyte’s standardized data format. This integration will provide NGOs with the flexibility to connect Avni’s data with a wide range of destinations, including databases, data warehouses, and analytics platforms supported by Airbyte.",
            ]}
          />

          <BlogSection
            title="My progress:"
            paragraphs={[
              "I started with exploring the Avni platform. Siddhant introduced me to the Avni channel and I asked my doubts there and requested help whenever needed. Avni is an open-source platform for field service and data collection. I started with creating forms and eventually became familiar with the Avni platform.",

              "With a solid understanding of Avni, I then turned my attention to Airbyte, an open-source data integration platform. Airbyte simplifies the process of collecting, transforming, and loading data from multiple sources to various destinations.",

              "Then I started building the connector. After exploring both the Avni and Airbyte platforms, I decided to build the Airbyte connector for Avni using the Python SDK. Till now I have implemented the subject stream functionality. In Avni, a subject represents an entity for which data is collected. This could be a patient in a healthcare system or a student in an educational institution. Pulling subject information from Avni and transforming it into a format compatible with Airbyte was the primary objective of this implementation.",

              "One of the hurdles I encountered was figuring out the authentication process for the Avni API. Since the Avni API utilizes AWS Cognito for authentication, the traditional Airbyte token authenticator method wouldn't work. I spent considerable time grappling with this challenge, trying to find a solution that would allow me to authenticate the API. I thoroughly examined the core code of the Airbyte token authenticator. To my surprise, I discovered that the method I had been using was actually deprecated. However, even after exploring the new method, I found that it didn't offer a viable solution for my specific needs. And at last finally came up with a solution by overriding the existing method.",

              "The major lesson I learned from this experience is that sometimes the solution can be simple, but finding it can be challenging. It taught me the importance of perseverance and exploring different approaches as an integral part of the problem-solving process.",
            ]}
          />

          <BlogSection
            title="What next :"
            paragraphs={[
              "Moving forward, my next steps involve implementing additional streams to ensure seamless usability for Avni users. This will be followed by incorporating incremental sync functionality, writing comprehensive unit tests, and documenting the entire process to enhance the connector’s reliability and accessibility.",

              "I want to thank Siddhant for providing me with this opportunity, as well as his ongoing suggestions and efforts to keep things flawless.",
            ]}
          />

          <ShareSection />
        </div>
      </BlogLayout>
    </>
  );
}