import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TrainingsSection from "@/components/TrainingsSection";

import AutomationSection from "@/components/AutomationSection";
import InsuranceSection from "@/components/InsuranceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TrainingsSection />
        
        <AutomationSection />
        <InsuranceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
