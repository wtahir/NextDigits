import { Bot, Wand2, Server, Layers } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import ServiceCard from "./ServiceCard";

const trainings = [
  { icon: Bot, title: "Agentic AI", description: "Build autonomous AI agents that reason, plan, and take action." },
  { icon: Wand2, title: "Prompt Engineering", description: "Master the art of crafting effective prompts for LLMs." },
  { icon: Server, title: "LLM Ops", description: "Deploy, monitor, and manage large language models in production." },
  { icon: Layers, title: "RAG Systems", description: "Build retrieval-augmented generation pipelines for grounded AI." },
];

const TrainingsSection = () => (
  <SectionWrapper
    id="trainings"
    title="Trainings"
    subtitle="Upskill your team with hands-on AI and automation training programs."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {trainings.map((t, i) => (
        <ServiceCard key={t.title} icon={t.icon} title={t.title} description={t.description} index={i} />
      ))}
    </div>
  </SectionWrapper>
);

export default TrainingsSection;
