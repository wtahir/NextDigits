import { motion } from "framer-motion";
import {
  Settings,
  Bot,
  AppWindow,
  Search,
  Rocket,
  TestTube,
  Network,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const capabilities = [
  {
    icon: Settings,
    title: "Business Process Management / Process Improvement",
    description:
      "We map, analyse, and redesign your workflows to eliminate bottlenecks, reduce waste, and establish continuous-improvement frameworks that keep operations running at peak efficiency.",
  },
  {
    icon: Bot,
    title: "RPA & AI",
    description:
      "Combine robotic process automation with AI to handle high-volume, rule-based tasks while intelligently adapting to exceptions — freeing your team for higher-value work.",
  },
  {
    icon: AppWindow,
    title: "Low Code / Appian",
    description:
      "Rapidly build and deploy enterprise-grade applications on the Appian platform, accelerating digital transformation without the overhead of traditional custom development.",
  },
  {
    icon: Search,
    title: "Business Analysis",
    description:
      "Our analysts bridge the gap between business stakeholders and technology teams, translating requirements into clear specifications that drive successful delivery.",
  },
  {
    icon: Rocket,
    title: "Agile / AI Product & Project Management",
    description:
      "We apply agile methodologies tailored for AI initiatives — managing iterative experimentation, data pipelines, and model lifecycles to deliver measurable outcomes on schedule.",
  },
  {
    icon: TestTube,
    title: "Test Management",
    description:
      "Structured test strategies covering functional, regression, and UAT testing ensure every automation goes live with confidence and minimal production risk.",
  },
  {
    icon: Network,
    title: "Solution Architecture",
    description:
      "Our architects design scalable, secure, and integration-ready blueprints that align automation and AI initiatives with your existing enterprise technology landscape.",
  },
];

const AutomationSection = () => (
  <SectionWrapper
    id="automation"
    title="Intelligent Automation Services"
    subtitle="End-to-end automation capabilities that modernize your operations, from process discovery to scalable implementation."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
      {capabilities.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.07 }}
          className={`gradient-border rounded-md p-6 flex flex-col text-left ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
        >
          <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
            <item.icon size={22} className="text-primary" />
          </div>
          <h3 className="font-heading text-sm font-semibold leading-snug mb-2">
            {item.title}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default AutomationSection;
