import { BrowserRouter, Routes, Route } from "react-router-dom"
import DMP from "./components/Pages/DMP"
import Homepage from "./components/Pages/Homepage"
import { SiteHeader } from "./components/Home/Header"
import FooterSection from "./components/Home/Footer"
import C4GTHubs from "./components/Pages/C4GTHubs"
import OpenCommunityProjects from "./components/Pages/community"
import PageHeroBanner from "./components/PageHeroBanner"
import WorkshopsContent from "./components/Pages/Workshops"
import CampusLeadersProgram from "./components/Pages/CampusLeadersProgram"
import DMP2025ImpactReportMain from "./components/Pages/DMP2025"
import DMP2024ImpactReport from "./components/Pages/DMP2024"
import HowToJoinPage from "./components/Pages/HowToJoin"
import ContributorsIntroSection from "./components/Pages/contributor"
import AngelMentors from "./components/Pages/AngelMentors"
import ProductDirectory from "./components/Pages/ProductDirectory"
import DPGReport2025 from "./components/Pages/DPGReport2025"
import EventsPage from "./components/Pages/EventsPage"
import BlogsPage from "./components/Pages/BlogsPage"
import ContactUs from "./components/Pages/ContactUs"
import DMP2026 from "./components/Pages/DMP2026"
import GitHubAppProofDashboard from "./components/external/githubapp"
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

          <Route path="*" element={<Homepage />} />
        </Routes>

        <FooterSection />
      </div>
    </BrowserRouter>
  )
}

export default App