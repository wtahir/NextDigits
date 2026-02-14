import { Workflow, Code, BrainCircuit, ClipboardList, Users, Blocks } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import ServiceCard from "./ServiceCard";

const items = [
  { icon: Workflow, title: "Business Process Management", description: "Optimize and automate business processes for peak efficiency." },
  { icon: Code, title: "Development (RPA, AI, Low Code)", description: "Custom development using RPA, AI, and low-code platforms like Appian." },
  { icon: BrainCircuit, title: "Business Analysis", description: "Data-driven analysis to identify opportunities and drive strategy." },
  { icon: Users, title: "Agile / AI Product Management", description: "Agile methodologies combined with AI-powered project leadership." },
  { icon: ClipboardList, title: "Test Management", description: "Comprehensive testing strategies for quality assurance at scale." },
  { icon: Blocks, title: "Solution Architecture", description: "Design scalable, robust solutions aligned with business goals." },
];

const AutomationSection = () => (
  <SectionWrapper
    id="automation"
    title="Intelligent Automation Services"
    subtitle="Automate, optimize, and scale your business operations with intelligent solutions."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {items.map((item, i) => (
        <ServiceCard key={item.title} icon={item.icon} title={item.title} description={item.description} index={i} />
      ))}
    </div>
  </SectionWrapper>
);

export default AutomationSection;
