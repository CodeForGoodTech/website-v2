import { SiteHeader } from "../Home/Header"
import { HeroSection } from "../Home/Hero"
import { PartnerOrganizations } from "../Home/PartnerOrganizations"
import { FoundationHistory } from "../Home/FoundationHistory"
import { DPGSection } from "../Home/DPGSection"
import { Governance } from "../Home/GovernanceSection"
import { PartnersSection } from "../Home/PartnersSection"
import TestimonialsSection from "../Home/TestimonialsSection"
import FooterSection from "../Home/Footer"



function Homepage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      
      <HeroSection />
      <PartnerOrganizations />
      <FoundationHistory/>
      <DPGSection/>
      <Governance />
      <PartnersSection/>
     <TestimonialsSection/>
     
    </div>
  )
}

export default Homepage