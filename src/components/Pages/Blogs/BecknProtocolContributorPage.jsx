import BlogHero from "@/components/blog/BlogHero";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogSection from "@/components/blog/BlogSection";
import ShareSection from "@/components/blog/ShareSection";
import backdn1 from "@/assets/blogs/backdn1.png";
import backdn2 from "@/assets/blogs/backdn2.png";
export default function BecknProtocolContributorPage() {
  return (
    <>
      <BlogHero
        title="My Journey as a Beckn Protocol Contributor"
        image="/downloaded-images/backdn.png"
        author="Roshan George"
        category="DMP 2023" 
        likes={154}
      />

      <BlogLayout>
         <div className="space-y-10">
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <img
        src={backdn1}
        alt="Beckn Protocol Contributor"
        className="w-full h-72 object-contain rounded-lg shadow-md bg-white"
      />

      <img
        src={backdn2}
        alt="Beckn Protocol Contributor"
        className="w-full h-72 object-contain rounded-lg shadow-md bg-white"
      />
    </div>
        
        
                  <BlogSection
            title="Introduction: My Proposal for the Beckn QR Project"
            paragraphs={[
              "Scan, Shop, and Smile: My proposal for the Beckn QR project aims to create a user-friendly platform that generates various types of interoperable Beckn-compliant QR codes.",
              "Ready for a story?",
              "Suppose a user is walking by a local coffee shop and sees a Beckn-compliant QR code displayed outside. They scan the QR code using a Beckn-aware application on their mobile device. The application recognizes the QR code as a Beckn-compliant code and triggers an API call to the Beckn server.",
              "The Beckn server retrieves information about the coffee shop, such as its name, location, menu, and offers, from the coffee shop's Beckn-enabled system. The application then displays the coffee shop's information, allowing the user to browse through the menu and check out the latest offers.",
              "Suppose the user finds a coffee they like and wants to place an order. They select the coffee, customize it according to their preferences, and confirm their order. The application generates a Beckn-compliant QR code containing the order details and payment information.",
              "The user can then scan the QR code at the coffee shop to confirm their order and pay for it. The coffee shop's Beckn-aware application receives the QR code and triggers an API call to the Beckn server to update the order status and process the payment.",
              "The user can track the status of their order through the Beckn-aware application, which receives updates from the Beckn server. Once the coffee is ready, the coffee shop's Beckn-aware application generates another Beckn-compliant QR code containing the order details.",
              "The user can scan this QR code to pick up their coffee and enjoy it. The user also has the option to leave a rating and review about their experience, which will be stored securely on the blockchain and used to build the coffee shop's reputation.",
            ]}
          />

          <BlogSection
            title="Research: Understanding the Beckn Protocol and Its Use Cases"
            paragraphs={[
              "Nerding Out on QR Codes: Through extensive research on the Beckn Protocol and its use cases, I realized the importance of QR codes in the Beckn ecosystem. They're like the secret handshake of the Beckn community!",
            ]}
          />

          <BlogSection
            title="Brainstorming: Generating Ideas for a QR Code Generator and Scanner"
            paragraphs={[
              "Brainstorming Like a Boss: With QR codes on the brain, I started to brainstorm ideas for a QR code generator and scanner that would seamlessly integrate with the Beckn Protocol.",
              "After several iterations, I came up with a design that would allow users to generate QR codes for various objects and events on a Beckn-enabled network.",
            ]}
          />

          <BlogSection
            title="Conclusion: My Journey as a Beckn Protocol Contributor"
            paragraphs={[
              "From QR Codes to High Fives: My journey as a contributor to the Beckn Protocol has been an exciting and fulfilling experience.",
              "I am proud to have developed a proposal for the Beckn QR project that will enhance the user experience and promote the interoperability of the Beckn ecosystem.",
              "Contributing to an open-source project like the Beckn Protocol is a fun and rewarding experience that allows for innovation and collaboration.",
              "So, join the Beckn community, make a difference, and get ready for some high fives!",
            ]}
          />

          <ShareSection />
        </div>
      </BlogLayout>
    </>
  );
}