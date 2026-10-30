import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-option-3.jpg";

const HeroSection = () => (
  <section className="relative min-h-[92vh] flex items-center justify-center hero-gradient overflow-hidden border-b border-border">
    <img
      src={heroImage}
      alt="AI agent overlooking a technological landscape"
      className="absolute inset-0 h-full w-full object-cover opacity-45"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-background/20" />
    <div className="absolute inset-0 pointer-events-none opacity-30 [background-image:linear-gradient(hsl(var(--foreground)/0.06)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.06)_1px,transparent_1px)] [background-size:64px_64px]" />
    <div className="absolute left-0 top-0 h-full w-1/2 pointer-events-none border-r border-primary/10" />

    <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-md border border-primary/35 bg-card/70 px-4 py-2 text-primary text-sm font-medium mb-8 backdrop-blur-md"
        >
          <Sparkles size={16} />
          AI Consultancy · Business Optimization · Innovation
        </motion.div>

        <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-10 max-w-5xl mx-auto">
          Transform Your Business with{" "}
          <span className="gradient-text">AI-Driven Intelligent Automation</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="glow-sm text-base px-8" asChild>
            <a href="mailto:Info@nextdigitsai.com">
              Schedule a Consultation <ArrowRight size={18} className="ml-2" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 bg-background/40 backdrop-blur-md" asChild>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Explore Our Services <ArrowRight size={18} className="ml-2" />
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
