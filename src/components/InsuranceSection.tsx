import { motion } from "framer-motion";
import { Shield, Cpu, FileSearch, ClipboardList, Receipt, FileText, AlertTriangle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const solutions = [
  { icon: Shield, title: "Guidewire" },
  { icon: Cpu, title: "AI-based Claims Automation" },
  { icon: FileSearch, title: "Document Understanding" },
];

const processes = [
  { icon: ClipboardList, title: "Claims" },
  { icon: Receipt, title: "Billing" },
  { icon: FileText, title: "Policy" },
];

const InsuranceSection = () => (
  <SectionWrapper
    id="insurance"
    title="Industry Expertise — Insurance"
    subtitle="Deep domain knowledge in the insurance sector, combining proven platforms with AI-driven innovation."
  >
    <div className="max-w-5xl mx-auto space-y-12">
      {/* Solutions */}
      <div>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-heading text-xl font-semibold text-center mb-6"
        >
          Solutions
        </motion.h3>
        <div className="grid sm:grid-cols-3 gap-6">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="gradient-border rounded-xl p-6 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <item.icon size={22} className="text-secondary" />
              </div>
              <h4 className="font-heading text-sm font-semibold">{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Processes */}
      <div>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-heading text-xl font-semibold text-center mb-6"
        >
          Processes
        </motion.h3>
        <div className="grid sm:grid-cols-3 gap-6">
          {processes.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="gradient-border rounded-xl p-6 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <item.icon size={22} className="text-accent" />
              </div>
              <h4 className="font-heading text-sm font-semibold">{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  </SectionWrapper>
);

export default InsuranceSection;
