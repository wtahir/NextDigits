import { motion } from "framer-motion";
import { Brain, Cog, Shield } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const values = [
  {
    icon: Brain,
    title: "AI-Driven Solutions",
    description: "Leverage advanced machine learning and NLP to unlock actionable insights from your data.",
  },
  {
    icon: Cog,
    title: "Process Optimization",
    description: "Streamline operations with intelligent automation and data-driven decision making.",
  },
  {
    icon: Shield,
    title: "Industry Expertise",
    description: "Deep domain knowledge in insurance, finance, and enterprise-scale operations.",
  },
];

const AboutSection = () => (
  <SectionWrapper
    id="about"
    title="What We Do"
    subtitle="NextDigits is an AI consultancy startup helping enterprises harness the power of artificial intelligence to transform their operations and drive measurable results."
  >
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {values.map((v, i) => (
        <motion.div
          key={v.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="text-center gradient-border rounded-2xl p-8"
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <v.icon size={28} className="text-primary" />
          </div>
          <h3 className="font-heading text-xl font-semibold mb-3">{v.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{v.description}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default AboutSection;
