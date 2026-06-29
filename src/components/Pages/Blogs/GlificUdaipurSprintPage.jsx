import BlogHero from "@/components/blog/BlogHero";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogSection from "@/components/blog/BlogSection";
import ShareSection from "@/components/blog/ShareSection";
import gmeetup from "@/assets/blogs/glific-team-meetup.png";
import monsoonPalace from "@/assets/blogs/udaipurpalace.png";
import cityPalace from "@/assets/blogs/monsoon.png";

export default function GlificUdaipurSprintPage() {
  return (
    <>
      <BlogHero
        title="Glific Mobile Application Udaipur Sprint"
        image="/downloaded-images/2024_03_19-1170x725.webp"
        author="Vishal Kumar Yadav"
        category="DMP 2023"
        likes={0}
      />

      <BlogLayout>
        <div className="space-y-16">
          <BlogSection
            paragraphs={[
              '“Failure is not the opposite of success, it’s part of success.” — Arianna Huffington',
              "Hello, I am Vishal Kumar Yadav, a Final Year student pursuing my B.Tech in Electrical Engineering from IIT Jodhpur. The above quote is not only true for my C4GT journey but also for my journey as an aspiring software developer.",
              "I struggled for more than a year to get an internship, both on-campus and off-campus. Around early May, I heard about C4GT from my friend Aaditya, who highly motivated me to participate in the program and contribute to projects.",
            ]}
          />

          <BlogSection
            title="Discovering Glific"
            paragraphs={[
              "While exploring projects, I came across a React Native project. Given my background in mobile development and previous experience building Flutter applications, I was excited to explore a new framework.",
              "I started contributing to the Glific Mobile Application and submitted several pull requests.",
              "During the proposal-writing process, I learned more about Glific’s mission and how it helps NGOs working in the social sector. The impact of the platform immediately impressed me.",
              "Glific is an open-source communication platform built on top of the WhatsApp Business API. Organizations can build chatbot-driven experiences using predefined flows that automate communication and engagement with beneficiaries.",
            ]}
          />

          <BlogSection
            title="An Unexpected Opportunity"
            paragraphs={[
              "Although I wrote a detailed proposal, I was not selected for the C4GT program.",
              "Fortunately, my mentor informed me that they could accommodate one more intern through Tech4Dev. The opportunity was unexpected, but it reinforced my belief that some of the best things in life arrive when you least expect them.",
              "Along with Aman, I continued working on the mobile application with the goal of releasing Version 0.1 during the upcoming Tech4Dev Sprint in Udaipur.",
            ]}
          />

          <img
            src={gmeetup}
            alt="Glific Team Meetup"
            className="w-full rounded-xl shadow-md"
          />

          <BlogSection
            title="The Udaipur Sprint"
            paragraphs={[
              "The sprint was a week-long meetup held in the beautiful City of Lakes, Udaipur.",
              "I was excited to finally meet my mentors and fellow contributors whom I had previously only seen in online meetings.",
              "My goals were simple: connect with as many people as possible and enjoy the experience. Thankfully, I managed to do both.",
              "From the very first day, I interacted with contributors across multiple projects and learned about their experiences, viewpoints, and work in the social impact ecosystem.",
            ]}
          />

          <BlogSection
            title="Learning from NGOs"
            paragraphs={[
              "One of the most valuable parts of the sprint was interacting directly with NGOs and understanding how technology is being used to solve real-world problems.",
              "We learned about Aajeevika Bureau, a non-profit organization focused on skill training, legal education, and helping workers recover unpaid wages.",
              "The organization also operates Labour Line, a service dedicated to supporting workers facing employment-related challenges.",
            ]}
          />

          <BlogSection
            title="AI and Glific"
            paragraphs={[
              "Another fascinating session featured TAP (The Apprentice Project).",
              "Their WhatsApp chatbot, TAP Buddy, helps students develop socio-emotional skills through co-curricular learning activities.",
              "By integrating GPT-powered responses into the platform, they were able to provide contextual support and help students resolve doubts directly within the chatbot experience.",
            ]}
          />

          <img
            src={cityPalace}
            alt="City Palace Udaipur"
            className="w-full rounded-xl shadow-md"
          />

          <BlogSection
            title="Exploring Udaipur"
            paragraphs={[
              "Apart from the sessions and workshops, the sprint also included memorable outings.",
              "We went on an early morning walk searching for the entrance to the Monsoon Palace. Although we didn't find it that day, the walk itself was enjoyable.",
              "Later, we visited the City Palace, where a guide introduced us to its history, architecture, and cultural significance.",
              "The palace museum houses remarkable collections of weapons, musical instruments, and paintings that showcase Udaipur's rich heritage.",
            ]}
          />

          <img
            src={monsoonPalace}
            alt="Monsoon Palace"
            className="w-full rounded-xl shadow-md"
          />

          <BlogSection
            title="Reflections"
            paragraphs={[
              "On the final day, we finally made it to the Monsoon Palace. The panoramic view from the top of the hill was breathtaking.",
              "We captured countless photos, enjoyed the cool breeze, and reflected on an unforgettable week.",
              "The Udaipur Sprint gave me much more than technical experience. It allowed me to build meaningful relationships, understand the impact of Digital Public Goods, and witness firsthand how technology can empower communities.",
              "It remains one of the most memorable experiences of my open-source journey.",
            ]}
          />

          <ShareSection />
        </div>
      </BlogLayout>
    </>
  );
}