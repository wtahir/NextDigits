import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CoreCapabilitiesSection from "@/components/CoreCapabilitiesSection";
import ServicesSection from "@/components/ServicesSection";
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
        <WhyChooseUsSection />
        <ServicesSection />
        <AutomationSection />
        <InsuranceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
