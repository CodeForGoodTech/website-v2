import BlogHero from "@/components/blog/BlogHero";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogSection from "@/components/blog/BlogSection";
import ShareSection from "@/components/blog/ShareSection";
import bg from "@/assets/blogs/bg.png";
import { Button } from "@/components/ui/button";
import ticketflow from "@/assets/blogs/ticketflow.png"
import { Video } from "lucide-react";



function C4GTJourneyBlog() {
  return (
    <>
      <BlogHero
        title="0 to 11k Lines of Code: My Journey with C4GT"
        author="Anmol Agarwal"
        category="DMP 2023"
        date="March 13, 2024"
        image="/downloaded-images/2024_03_12-2-1024x647.png"
      />

   <BlogLayout>
  <div className="space-y-16">

    <img
      src="/downloaded-images/2024_03_12-2-1024x647.png"
      alt="Contribution Graph"
      className="w-full rounded-xl shadow-md"
    />

    <BlogSection
      paragraphs={[
        "A few months ago, I came across a unique opportunity to join the ranks of the 2nd Cohort in the Code for GovTech (C4GT) program. C4GT, India's pioneering annual coding initiative, is dedicated to fostering a community capable of developing and enriching global Digital Public Goods.",
        "I consider myself fortunate to have secured a place among 103 projects associated with 34+ different products, marking an exciting journey ahead.",
        "I got a chance to work with Sunbird RC. I was really fascinated by its codebase design. It took me a month to understand but it was really helpful.",
        "Let's come to my project now."
      ]}
    />

    <BlogSection
      title="Starter Pack for Location Master"
      paragraphs={[
        "The Starter Pack for Location Master project was conceived with a vital objective: to create a comprehensive database of Indian locations, ranging from villages and districts to states and PIN codes.",
        "This initiative aimed to address the recurrent challenge faced by numerous projects—reinventing the wheel when it came to sourcing location data from trusted authorities such as the Post Office or the Local Government Directory (LGD)."
      ]}
    />

    <Button asChild variant="link" className="p-0 text-lg">
      <a
        href="ISSUE_TICKET_URL"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Issue Ticket
      </a>
    </Button>

    <BlogSection
      title="Architecture & Contributions"
      paragraphs={[
        "The architecture was designed as a complete project including frontend, backend, and database layers.",
        "I mainly worked on the backend side, creating a Node.js layer on top of the Sunbird RC backend which currently integrates PostgreSQL, Registry services, and Elasticsearch."
      ]}
    />

    <img
      src={ticketflow}
      alt="Location Registry Architecture"
      className="w-full rounded-xl shadow-md"
    />

    <BlogSection
      title="Schema Design"
      paragraphs={[
        "I created the schemas and configuration layer that powers the registry.",
        "The main part is the logic and approach for considering all the edge cases and optimizing the product."
      ]}
    />

    <pre className="overflow-x-auto rounded-xl bg-slate-950 p-6 text-sm text-slate-100">
{`{
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "object",
  "properties": {
    "SourceConfig": {
      "$ref": "#/definitions/SourceConfig"
    }
  },
  "required": ["SourceConfig"],
  "title": "SourceConfig",
  "definitions": {
    "SourceConfig": {
      "type": "object",
      "uniqueIndexFields": ["source"],
      "properties": {
        "source": {
          "type": "string"
        },
        "entityFileMap": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/EntityFileMap"
          }
        },
        "hierarchy": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": ["source", "entityFileMap"]
    },
    "EntityFileMap": {
      "type": "object",
      "properties": {
        "entity": {
          "type": "string"
        },
        "keyMap": {
          "type": "object",
          "properties": {
            "code": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "higherHierarchy": {
              "type": "string"
            }
          },
          "required": ["code", "name", "higherHierarchy"]
        }
      },
      "required": []
    }
  }
}`}
    </pre>

    <BlogSection
      title="Demo"
      paragraphs={[
        "Here is the demo video showcasing the functionality of the location registry platform."
      ]}
    />

    <div className="overflow-hidden rounded-xl shadow-md">
  <iframe
    className="w-full aspect-video"
    src="https://www.youtube.com/embed/dA8JYu5gJho"
    title="Location Registry Demo"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>

    <BlogSection
      title="Looking Ahead"
      paragraphs={[
        "I'm determined to take this project to the production stage and further optimize it.",
        "My vision includes generating valuable value propositions and use cases centered around this location registry.",
        "Imagine someone wanting to register their location and create a unique address for that specific place effortlessly.",
        "Beyond that, there's a multitude of exciting ideas that can be built on top of this project, opening doors to endless possibilities."
      ]}
    />

    <BlogSection
      title="Explore the Code"
      paragraphs={[
        "The source code for the project is publicly available on GitHub."
      ]}
    />

    <Button asChild variant="link" className="p-0 text-lg">
      <a
        href="https://github.com/anmode/demo-location-registry"
        target="_blank"
        rel="noopener noreferrer"
      >
        Explore the Code!
      </a>
    </Button>

    <ShareSection />
  </div>
</BlogLayout>
    </>
  );
}

export default C4GTJourneyBlog;