import { motion } from "framer-motion";
import { Target, ShieldCheck, Zap, Users } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const reasons = [
  {
    icon: Target,
    title: "Production-First Mindset",
    description:
      "We skip the proof-of-concept treadmill. Every solution is architected for scale, security, and real-world reliability from day one.",
  },
  {
    icon: ShieldCheck,
    title: "Regulated Industry Expertise",
    description:
      "Deep experience in insurance, financial services, and healthcare means we understand compliance, audit trails, and data governance natively.",
  },
  {
    icon: Zap,
    title: "Faster Time-to-Value",
    description:
      "Our blend of AI, automation, and low-code platforms lets us deliver working systems in weeks, not quarters.",
  },
  {
    icon: Users,
    title: "Human-in-the-Loop by Design",
    description:
      "We deploy AI with oversight and safety controls so your team stays in command while benefiting from autonomous task execution.",
  },
];

const AboutSection = () => (
  <SectionWrapper
    id="about"
    title="About Us"
    subtitle="We are a specialised AI and intelligent automation consultancy focused on turning document-heavy, compliance-sensitive processes into reliable, auditable digital workflows. We build AI systems that read documents, extract key information, and automate complex workflows."
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
          Our mission is to design and build practical AI solutions that help organizations automate complex work, unlock the value of their data, and operate more intelligently. We accelerate time-to-value by delivering production grade AI that: converts documents into reliable data, automates end-to-end business workflows, and deploys LLM-powered AI solutions.
        </p>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12 text-center"
      >
        <h3 className="font-heading text-xl font-semibold mb-4">Why Choose Us</h3>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          We combine deep technical expertise with a pragmatic delivery approach that prioritises measurable outcomes.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="gradient-border rounded-2xl p-6 text-left"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
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
