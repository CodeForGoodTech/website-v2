import BlogHero from "@/components/blog/BlogHero";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogSection from "@/components/blog/BlogSection";
import ShareSection from "@/components/blog/ShareSection";

export default function ButIfYouTrySometimesPage() {
  return (
    <>
      <BlogHero
        title="But If You Try Sometimes"
        image="/downloaded-images/2024_03_14-2-1024x684.png"
        author="Vishisht Makkar"
        category="DMP 2023"
        likes={171}
      />

      <BlogLayout>
        <div className="space-y-16">

<BlogSection
  paragraphs={[
    "You can’t always get what you want",
    "But if you try sometime you’ll find",
    "You get what you need",
    "– The Rolling Stones – You Can’t Always Get What You Want",
  ]}
/>

<BlogSection
  paragraphs={[
    "My name is Vishisht Makkar and I am currently an undergraduate student at BTech+MTech/MS, JNU.",
    "These lyrics are kind of what I’d use to describe my C4GT journey so far.",
    "Let me explain.",
  ]}
/>

<BlogSection
  title="How It All Started"
  paragraphs={[
    "It was just a few days from the original C4GT deadline to submit a proposal. I had practically glossed over this program before. What changed was that, while browsing the C4GT website, I realised there were some projects in Elixir.",
    "Now, I had previously worked with Elixir a little bit, as part of the eYantra Competition by IITB, but that was 2 years ago. Also, I had my end semester exams soon. And the time-table was horrid – no study leaves for the harder exams.",
    "Well, what did I have going for me? Only that not a lot of people knew Elixir. My familiarity with it meant that I was ready to put in any effort required to revise and learn without getting intimidated.",
    "As for the exams, well, there was always – next sem fodenge. I joke about it now, but I’d like to think I took a calculated risk.",
  ]}
/>

<BlogSection
  title="Discovering Glific"
  paragraphs={[
    "I checked out the Glific projects and they seemed interesting. Now hopeful, I joined the Glific Discord server and introduced myself.",
    "I got to know that there were daily standups at 10pm IST conducted by Lobo in which the interested students interacted, shared their progress and cleared their doubts.",
    "It wasn’t competitive or anything, but more so an effort to get the students up to speed with Elixir and provide them with any help they needed.",
  ]}
/>

<BlogSection
  title="My First Standup"
  paragraphs={[
    "Cue to my first standup: I was nervous but I had prepared well (or so I thought at the time). I had got myself a book on LiveView, which was required for the project I was interested in, and followed along with the first chapter. I had also revised Elixir a little bit.",
    "Not a good start, but it was whatever I could manage with whatever time I had.",
    "Upon joining the meet, I was asked to go first and present my screen and share what I know. And here is where things went horribly: I was asked some basic questions to see where I’m at but I messed them up.",
    "I was really disappointed after this meeting. I had diverted time away during exams to prepare for this, but I did it so hurriedly that I forgot the importance of a strong foundation. Would I really be able to make it in?",
  ]}
/>

<BlogSection
  title="Determination And Persistence"
  paragraphs={[
    "However, I was determined. I like challenges. I had to make it somehow. I had to play catch-up.",
    "I had to do what the others were doing and practice on Exercism. And that’s what I did.",
    "During and right before the exam week, any amount of time spent away from studying seems significant. And yet, I spent an actually significant amount of time everyday doing problems on Exercism.",
    "I attended stand ups everyday. Lobo provided feedback on what I could improve on and what specifically I should focus on.",
    "The standups got better than the first, but still, things were never rosy. The exam stress did not help either. It was always easy to abandon the thought of getting in.",
    "But the doubt-clearing sessions and the encouragement from Lobo was also a huge factor in what kept me going.",
  ]}
/>

<BlogSection
  title="The Interview"
  paragraphs={[
    "I was shortlisted for the interview and managed to prepare well enough in whatever was expected of me. And it went really well.",
    "I had now done whatever was in my control.",
    "The exams were also over exactly when the interview was over. There was a strange sense of relief.",
  ]}
/>

<BlogSection
  title="The Result"
  paragraphs={[
    "I was playing carrom with my family when the results came out on the Glific discord channel.",
    "They let us know which names they’re going to submit to the C4GT program, and I did not get in.",
    "Well, sort of.",
    "They announced those names, but notified that since they only have limited slots for the C4GT program, they can’t select everybody, but they would be selecting some students under their own organisation and offer us similar offers.",
    "And it was under this bracket that I got selected.",
    "They announced that for them, there will be no distinction between the names officially given and those selected otherwise. And there hasn’t. Not in behaviour, and not in the offer.",
  ]}
/>

<BlogSection
  title="Finding Purpose"
  paragraphs={[
    "Initially, I had only looked at C4GT for how good of an opportunity it was for me to grow, but I was lucky to have ended up at an organisation which focuses on the social impact it has.",
    "Because it aligns with my personal career aspiration of trying to find a balance between Tech, which I love, and being able to have some tangible social impact.",
    "Till now, I have contributed a few hundred lines to the Glific backend, with guidance from my mentor and Glific’s backend developer, Akhilesh, who has provided me with the exactly right combination of help and challenge.",
  ]}
/>

<img
  src="/downloaded-images/2024_03_14-2-1024x684.png"
  alt="Udaipur Sprint"
  className="w-full rounded-xl shadow-md"
/>

<BlogSection
  paragraphs={[
    "I’m currently writing this blog overlooking the beautiful Aravali range in Udaipur, where the entire Tech4Dev team (of which Glific is a part) has gathered for a sprint, along with the NGOs that use our product.",
    "The idea is to have offline interactions with them to learn about what we could improve, and also for the different Tech4Dev teams to interact with each other.",
    "It has been really exciting to be here and learn from people with such diverse and rich backgrounds – different NGO folks, senior Tech4Dev team, and of course, our Glific team.",
    "There is an immense sense of openness and generosity with which everybody is sharing their knowledge and experiences.",
  ]}
/>

<BlogSection
  title="Gratitude"
  paragraphs={[
    "To be flown out to be a part of this amazing culture of collaboration and drive to use technology for social impact has been a privilege and a learning experience that I don’t think I’ll ever be able to forget, or show enough thanks for.",
  ]}
/>

<BlogSection
  title="Lessons Learned"
  paragraphs={[
    "Apply yourself. Have the grit to keep going after disappointment.",
    "Value consistency over perfection.",
    "Take calculated risks.",
  ]}
/>
          <ShareSection />
        </div>
      </BlogLayout>
    </>
  );
}