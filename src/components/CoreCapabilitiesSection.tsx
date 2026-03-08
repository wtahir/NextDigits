import { motion } from "framer-motion";
import { FileSearch, Sparkles, Database, MessageSquareText, TrendingUp, BarChart3 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const capabilities = [
  { icon: FileSearch, label: "Intelligent Document Processing" },
  { icon: Sparkles, label: "Generative AI & LLM Integration" },
  { icon: Database, label: "RAG-based Knowledge Systems" },
  { icon: MessageSquareText, label: "AI Assistants & Chatbots" },
  { icon: TrendingUp, label: "Predictive & Risk Models" },
  { icon: BarChart3, label: "Sentiment & Text Analytics" },
];

const CoreCapabilitiesSection = () => (
  <SectionWrapper
    id="capabilities"
    title="Core Capabilities"
    subtitle="Purpose-built AI capabilities that transform how your organisation processes information and makes decisions."
  >
    <div className="max-w-4xl mx-auto">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {capabilities.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center gap-3 gradient-border rounded-xl p-4"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <item.icon size={20} className="text-primary" />
            </div>
            <span className="text-sm font-medium">{item.label}</span>
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
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Outcome</p>
        <p className="text-xl font-heading font-semibold gradient-text">
          Smarter operations. Data-driven decisions. Enhanced customer experience.
        </p>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default CoreCapabilitiesSection;
