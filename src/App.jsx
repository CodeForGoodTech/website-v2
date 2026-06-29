import { BrowserRouter, Routes, Route } from "react-router-dom"
import DMP from "./components/Pages/Initiatives/DMP"
import Homepage from "./components/Pages/Homepage"
import { SiteHeader } from "./components/Home/Header"
import FooterSection from "./components/Home/Footer"
import C4GTHubs from "./components/Pages/Initiatives/C4GTHubs"
import OpenCommunityProjects from "./components/Pages/Initiatives/community"
import PageHeroBanner from "./components/PageHeroBanner"
import WorkshopsContent from "./components/Pages/Initiatives/Workshops"
import CampusLeadersProgram from "./components/Pages/Initiatives/CampusLeadersProgram"
import DMP2025ImpactReportMain from "./components/Pages/Initiatives/DMP2025"
import DMP2024ImpactReport from "./components/Pages/Initiatives/DMP2024"
import HowToJoinPage from "./components/Pages/About/HowToJoin"
import ContributorsIntroSection from "./components/Pages/About/contributor"
import AngelMentors from "./components/Pages/About/AngelMentors"
import ProductDirectory from "./components/Pages/ReportsAndResources/ProductDirectory"
import DPGReport2025 from "./components/Pages/ReportsAndResources/DPGReport2025"
import EventsPage from "./components/Pages/ReportsAndResources/EventsPage"
import BlogsPage from "./components/Pages/Blogs/BlogsPage"
import ContactUs from "./components/Pages/About/ContactUs"
import DMP2026 from "./components/Pages/Initiatives/DMP2026"
import GitHubAppProofDashboard from "./components/external/githubapp"
import WarpSQLPage from "./components/Pages/Blogs/WarpSQL"
import MyExperienceContributingToAITools from "./components/Pages/Blogs/MyExperienceContributingToAITools"
import GlificSprintPage from "./components/Pages/Blogs/GlificSprintPage"
import GlificUdaipurSprintPage from "./components/Pages/Blogs/GlificUdaipurSprintPage"
import ExploringNewHorizonsPage from "./components/Pages/Blogs/ExploringNewHorizonsPage"
import ButIfYouTrySometimesPage from "./components/Pages/Blogs/ButIfYouTrySometimesPage"
import TurboRepoMonorepoPage from "./components/Pages/Blogs/TurboRepoMonorepoPage"
import C4GTHalfwayCheckpointPage from "./components/Pages/Blogs/C4GTHalfwayCheckpointPage"
import C4GTJourneyBlog from "./components/Pages/Blogs/C4GTJourneyBlog"
import AirbyteConnectorJourneyPage from "./components/Pages/Blogs/AirbyteConnectorJourneyPage"
import BecknProtocolContributorPage from "./components/Pages/Blogs/BecknProtocolContributorPage"
import UnlockingOpportunitiesPage from "./components/Pages/Blogs/UnlockingOpportunitiesPage"
import DMP2024ProjectsPage from "./components/Pages/Initiatives/dmp2024projects"
import DMP2024Detailed from "./components/Pages/Initiatives/DMP2024Detailed"
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background font-sans">
        <SiteHeader />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dedicated-mentoring-program" element={<DMP />} />
          <Route path="/dmp-2025" element={<DMP2025ImpactReportMain />} />
          <Route path="/dmp-2024" element={<DMP2024ImpactReport />} />
          <Route path="/dedicated-mentoring-program-2024-all-projects" element={<DMP2024ProjectsPage />} />
          <Route path="/hub" element={<C4GTHubs />} />
          <Route path="/open-community" element={<OpenCommunityProjects />} />
          <Route path="/workshops" element={<WorkshopsContent />} />
          <Route path="/campus-leaders" element={<CampusLeadersProgram />} />
          <Route path="/how-to-join" element={<HowToJoinPage />} />
          <Route path="/organisations" element={<ContributorsIntroSection />} />
          <Route path="/contributors" element={<ContributorsIntroSection />} />
          <Route path="/angel_mentors" element={<AngelMentors />} />
          <Route path="/product-directory" element={<ProductDirectory />} />
          <Route path="/dpg-score" element={<DPGReport2025 />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/dmp-2026" element={<DMP2026/>} />
          <Route path="/github" element ={<GitHubAppProofDashboard/>} />
          <Route path="/c4gt-2023-warpsql" element={<WarpSQLPage />} />
          <Route path="/my-experience-contributing-to-ai-tools" element={<MyExperienceContributingToAITools />} />
          <Route path="/my-experience-of-sprint-and-working-with-glific-teams" element={<GlificSprintPage />} />
          <Route path="/glific-mobile-application-udaipur-sprint" element={<GlificUdaipurSprintPage />} />
          <Route path="/exploring-new-horizons-my-journey-with-glific-and-c4gt" element={<ExploringNewHorizonsPage />} />
          <Route path="/but-if-you-try-sometimes" element={<ButIfYouTrySometimesPage />} />
          <Route path="/turbo-repo-monorepo" element={<TurboRepoMonorepoPage />} />
          <Route path="/c4gt-halfway-checkpoint-celebrating-progress-and-growth" element={<C4GTHalfwayCheckpointPage />} />
          <Route path="/0-to-11k-lines-of-code-my-journey-with-c4gt" element={<C4GTJourneyBlog />} />
          <Route path="/from-project-selection-to-building-an-airbyte-connector-my-ongoing-journey-with-c4gt-2023" element={<AirbyteConnectorJourneyPage />} />
          <Route path="/my-journey-as-a-beckn-protocol-contributor/" element={<BecknProtocolContributorPage />} />
          <Route path="/unlocking-opportunities-my-new-journey-as-a-c4gt-contributor/" element={<UnlockingOpportunitiesPage />} />
          <Route
  path="/dmp2024/:slug"
  element={<DMP2024Detailed />}
/>
          <Route path="*" element={<Homepage />} />
        </Routes>

        <FooterSection />
      </div>
    </BrowserRouter>
  )
}

export default App