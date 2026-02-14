import { Cpu, TestTube, Zap, GitBranch } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import ServiceCard from "./ServiceCard";

const items = [
  { icon: Cpu, title: "AI Model / LLM Integration", description: "Seamlessly integrate AI models into your existing tech stack." },
  { icon: TestTube, title: "AI Model / LLM Evaluations", description: "Benchmark and evaluate model performance against your KPIs." },
  { icon: Zap, title: "AI Model / LLM Optimization", description: "Fine-tune and optimize models for speed, cost, and accuracy." },
  { icon: GitBranch, title: "Scalable Pipelines", description: "Build production-grade ML pipelines that scale with your business." },
];

const ArchitectureSection = () => (
  <SectionWrapper
    id="architecture"
    title="AI Solution Architecture"
    subtitle="Enterprise-grade AI architecture designed for reliability and scale."
  >
    <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {items.map((item, i) => (
        <ServiceCard key={item.title} icon={item.icon} title={item.title} description={item.description} index={i} />
      ))}
    </div>
  </SectionWrapper>
);

export default ArchitectureSection;
