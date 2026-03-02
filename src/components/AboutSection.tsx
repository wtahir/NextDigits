import { motion } from "framer-motion";
import { Brain, Cpu, Blocks, Building2, ShieldCheck } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const expertise = [
  { icon: Brain, label: "Artificial Intelligence" },
  { icon: Cpu, label: "Intelligent Process Automation" },
  { icon: Blocks, label: "Low-Code Platforms (Appian)" },
  { icon: Building2, label: "Enterprise Architecture" },
  { icon: ShieldCheck, label: "Regulated Industry Expertise" },
];

const AboutSection = () => (
  <SectionWrapper
    id="about"
    title="About Us"
    subtitle="We are a specialised AI and Intelligent Automation consultancy helping organisations modernise operations through scalable technology solutions."
  >
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h3 className="font-heading text-xl font-semibold mb-6 text-center">Our expertise combines:</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {expertise.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-3 gradient-border rounded-xl p-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon size={20} className="text-primary" />
              </div>
              <span className="text-sm font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

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
