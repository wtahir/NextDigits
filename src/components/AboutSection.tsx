import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const AboutSection = () => (
  <SectionWrapper
    id="about"
    title="About us"
    subtitle="We are a specialised AI and intelligent automation consultancy focused on turning document-heavy, compliance-sensitive processes into reliable, auditable digital workflows. We build AI systems that read documents, extract key information, and automate complex workflows. Our agentic AI autonomously plans and executes goal‑driven tasks, deployed with human oversight and safety controls."
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

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
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
