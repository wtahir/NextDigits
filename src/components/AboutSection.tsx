import { motion } from "framer-motion";
import { Brain, Cpu, Blocks } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const expertise = [
  {
    icon: Brain,
    label: "Artificial Intelligence",
    description: "Document understanding, AI models and data pipelines built for production.",
  },
  {
    icon: Cpu,
    label: "Intelligent Process Automation",
    description: "End-to-end workflow orchestration that reduces manual effort.",
  },
  {
    icon: Blocks,
    label: "Low-Code Platforms (Appian)",
    description: "Rapid development and enterprise-grade deployment.",
  },
];

const AboutSection = () => (
  <SectionWrapper
    id="about"
    title="About us"
    subtitle="We are a specialised AI and intelligent automation consultancy focused on turning document-heavy, compliance-sensitive processes into reliable, auditable digital workflows."
  >
    <div className="max-w-4xl mx-auto">
      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h3 className="font-heading text-xl font-semibold mb-4">Our Mission</h3>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          We accelerate time-to-value by delivering production grade AI that: converts documents into reliable data, automates end-to-end business workflows, and deploys LLM-powered AI solutions.
        </p>
      </motion.div>

      {/* Expertise */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mb-12"
      >
        <h3 className="font-heading text-xl font-semibold mb-6 text-center">Our Expertise</h3>
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {expertise.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="gradient-border rounded-xl p-5 text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <item.icon size={20} className="text-primary" />
              </div>
              <span className="text-sm font-semibold block mb-1">{item.label}</span>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center gradient-border rounded-2xl p-8"
      >
        <p className="text-lg text-muted-foreground leading-relaxed">
          We don't build experiments.
        </p>
        <p className="text-xl font-heading font-semibold mt-2 gradient-text">
          We build production-ready systems that deliver ROI.
        </p>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
