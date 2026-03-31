import { motion } from "framer-motion";
import { FileSearch, Sparkles, Database, MessageSquareText, BarChart3, Bot } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const capabilities = [
  {
    icon: FileSearch,
    label: "Intelligent Document Processing",
    description:
      "Automatically extract, classify, and validate data from invoices, contracts, claims forms, and other complex documents with high accuracy — eliminating manual data entry.",
  },
  {
    icon: Sparkles,
    label: "Generative AI & LLM Integration",
    description:
      "Harness the power of large language models to draft content, summarise lengthy reports, generate code, and power intelligent search across your enterprise knowledge base.",
  },
  {
    icon: Bot,
    label: "Agentic AI & Autonomous Workflows",
    description:
      "Deploy AI agents that plan, reason, and execute multi-step tasks autonomously — from triaging support tickets to orchestrating end-to-end business processes with minimal human intervention.",
  },
  {
    icon: Database,
    label: "RAG-based Knowledge Systems",
    description:
      "Build retrieval-augmented generation pipelines that ground LLM responses in your proprietary data, delivering accurate, source-cited answers your teams and customers can trust.",
  },
  {
    icon: MessageSquareText,
    label: "AI Assistants & Chatbots",
    description:
      "Create conversational interfaces that understand context, handle complex queries, and integrate with your existing systems to deliver instant, 24/7 support for customers and employees.",
  },
  {
    icon: BarChart3,
    label: "Sentiment & Text Analytics",
    description:
      "Analyse customer feedback, social media, and internal communications at scale to uncover trends, detect emerging issues, and drive data-informed strategic decisions.",
  },
];

const CoreCapabilitiesSection = () => (
  <SectionWrapper
    id="services"
    title="AI Services"
    subtitle="Purpose-built AI capabilities that transform how your organisation processes information and makes decisions."
  >
    <div className="max-w-5xl mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {capabilities.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="gradient-border rounded-xl p-6 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon size={20} className="text-primary" />
              </div>
              <span className="text-sm font-semibold">{item.label}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center gradient-border rounded-2xl p-8"
      >
        <p className="text-sm tracking-widest text-muted-foreground mb-2">Outcome</p>
        <p className="text-xl font-heading font-semibold gradient-text">
          Smarter operations. Data-driven decisions. Enhanced customer experience.
        </p>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default CoreCapabilitiesSection;
