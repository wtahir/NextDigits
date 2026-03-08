import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
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

        <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6">
          Transforming Business Through{" "}
          <span className="gradient-text">AI & Intelligent Automation</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          We build AI systems that read documents, extract key information, and automate complex workflows. Our agentic AI autonomously plans and executes goal‑driven tasks, deployed with human oversight and safety controls.
        </p>

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
