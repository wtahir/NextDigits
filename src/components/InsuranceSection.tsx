import { motion } from "framer-motion";
import { Shield, Cpu, FileSearch, ClipboardList, Receipt, FileText, AlertTriangle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const solutions = [
  {
    icon: Shield,
    title: "Guidewire",
    description:
      "Implementation, configuration, and integration of Guidewire ClaimCenter, PolicyCenter, and BillingCenter — helping insurers modernise their core platform with best-practice workflows.",
  },
  {
    icon: Cpu,
    title: "AI-based Claims Automation",
    description:
      "Accelerate claims handling with AI that triages submissions, extracts loss details from unstructured documents, and routes claims to the right adjuster — reducing cycle times and operational costs.",
  },
  {
    icon: FileSearch,
    title: "Document Understanding",
    description:
      "Turn policy documents, medical reports, and correspondence into structured data using intelligent document processing — enabling straight-through processing and faster decision-making.",
  },
];

const processes = [
  {
    icon: ClipboardList,
    title: "Claims",
    description:
      "End-to-end claims lifecycle management — from first notice of loss through investigation, reserving, and settlement — powered by automation and real-time analytics.",
  },
  {
    icon: Receipt,
    title: "Billing",
    description:
      "Streamlined premium billing, payment processing, and reconciliation workflows that improve cash flow, reduce errors, and enhance the policyholder experience.",
  },
  {
    icon: FileText,
    title: "Policy",
    description:
      "Automated policy administration covering quoting, binding, endorsements, and renewals — ensuring accuracy, compliance, and a seamless experience for agents and customers.",
  },
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
              <h4 className="font-heading text-sm font-semibold mb-2">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
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
              <h4 className="font-heading text-sm font-semibold mb-2">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  </SectionWrapper>
);

export default InsuranceSection;
