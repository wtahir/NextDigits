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

const WhyChooseUsSection = () => (
  <SectionWrapper
    id="why-us"
    title="Why Choose Us"
    subtitle="We combine deep technical expertise with a pragmatic delivery approach that prioritises measurable outcomes."
  >
    <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {reasons.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="gradient-border rounded-2xl p-6"
        >
          <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <item.icon size={22} className="text-primary" />
          </div>
          <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default WhyChooseUsSection;
