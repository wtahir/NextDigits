import { motion } from "framer-motion";
import { BrainCircuit, MessageSquare, Cpu, Database, Lightbulb } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const offerings = [
  {
    icon: BrainCircuit,
    title: "Intelligent Data Processing",
    description:
      "Utilize cutting-edge technologies to transform raw data into actionable insights. From sentiment analysis to text classification, we help you unlock the full potential of your data for informed decision-making.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing (NLP) Solutions",
    description:
      "Leverage our NLP capabilities to automate language tasks, including translation, summarization, and entity recognition. Enhance communication, improve customer engagement, and expand your global reach.",
  },
  {
    icon: Cpu,
    title: "AI Model Development & Optimization",
    description:
      "Our team designs and optimizes AI models tailored to your specific needs. Whether it's integrating AI into existing systems or developing scalable machine learning pipelines, we ensure peak performance and efficiency.",
  },
  {
    icon: Database,
    title: "Comprehensive Data Management",
    description:
      "Streamline your data operations with automated reporting, document digitization, and clustering solutions. Improve accessibility, reduce manual efforts, and enhance data-driven strategies.",
  },
  {
    icon: Lightbulb,
    title: "Strategic AI Consulting",
    description:
      "Partner with us for strategic insights and AI-driven solutions that align with your business goals. From prompt engineering to model evaluation, we provide guidance to maximize your AI investments.",
  },
];

const ServicesSection = () => (
  <SectionWrapper
    id="services"
    title="AI Consultancy Solutions"
    subtitle="At NextDigits, we specialize in delivering advanced AI solutions that empower businesses to innovate and excel. Our expertise spans several key areas designed to enhance your operations and drive growth."
  >
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {offerings.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.1 }}
          className="gradient-border rounded-xl p-8 flex flex-col"
        >
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
            <item.icon size={24} className="text-accent" />
          </div>
          <h3 className="font-heading text-lg font-semibold mb-3">{item.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ServicesSection;
