import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-option-3.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Hero background image */}
    <div className="absolute inset-0">
      <img src={heroImage} alt="AI agent overlooking technological landscape" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/60" />
    </div>

    <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8"
        >
          <Sparkles size={16} />
          AI Consultancy · Business Optimization · Innovation
        </motion.div>

        <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-10">
          Transform Your Business with{" "}
          <span className="gradient-text">AI-Driven Intelligent Automation</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="glow-sm text-base px-8" asChild>
            <a href="mailto:Info@nextdigitsai.com">
              Schedule a Consultation <ArrowRight size={18} className="ml-2" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8" asChild>
            <a href="#services">
              Explore Our Services <ArrowRight size={18} className="ml-2" />
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
