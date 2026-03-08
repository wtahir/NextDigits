import { motion } from "framer-motion";
import {
  Settings,
  Code,
  Bot,
  AppWindow,
  Search,
  Rocket,
  TestTube,
  Network,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const capabilities = [
  { icon: Settings, title: "Business Process Management / Process Improvement" },
  { icon: Bot, title: "RPA & AI" },
  { icon: AppWindow, title: "Low Code / Appian" },
  { icon: Search, title: "Business Analysis" },
  { icon: Rocket, title: "Agile / AI Product & Project Management" },
  { icon: TestTube, title: "Test Management" },
  { icon: Network, title: "Solution Architecture" },
];

const AutomationSection = () => (
  <SectionWrapper
    id="automation"
    title="Intelligent Automation Services"
    subtitle="End-to-end automation capabilities that modernize your operations, from process discovery to scalable implementation."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {capabilities.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.07 }}
          className="gradient-border rounded-xl p-6 flex flex-col items-center text-center"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <item.icon size={22} className="text-primary" />
          </div>
          <h3 className="font-heading text-sm font-semibold leading-snug">
            {item.title}
          </h3>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default AutomationSection;
