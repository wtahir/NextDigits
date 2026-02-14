import { motion } from "framer-motion";
import { Shield, Bot, FileSearch, Receipt, CreditCard, FileCheck } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const solutions = [
  { icon: Shield, title: "Guidewire", description: "Expert implementation and integration of the Guidewire platform." },
  { icon: Bot, title: "AI-based Claims Automation", description: "Automate claims processing with intelligent AI workflows." },
  { icon: FileSearch, title: "Document Understanding", description: "Extract and process insurance documents with AI-powered OCR and NLP." },
];

const processes = [
  { icon: Receipt, label: "Claims" },
  { icon: CreditCard, label: "Billing" },
  { icon: FileCheck, label: "Policy" },
];

const InsuranceSection = () => (
  <SectionWrapper
    id="insurance"
    title="Industry Expertise — Insurance"
    subtitle="Deep domain expertise in insurance technology and process automation."
  >
    <div className="max-w-5xl mx-auto space-y-12">
      {/* Solutions */}
      <div className="grid sm:grid-cols-3 gap-6">
        {solutions.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="gradient-border rounded-xl p-6 text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <s.icon size={24} className="text-accent" />
            </div>
            <h3 className="font-heading font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Processes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="font-heading text-xl font-semibold mb-6 text-muted-foreground">Process Areas</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {processes.map((p) => (
            <div
              key={p.label}
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-muted/30 text-foreground"
            >
              <p.icon size={18} className="text-accent" />
              <span className="font-medium">{p.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default InsuranceSection;
