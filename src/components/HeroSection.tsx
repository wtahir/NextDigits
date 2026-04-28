import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-option-3.jpg";

const HeroSection = () => (
  <section className="relative min-h-[86vh] flex items-center justify-center hero-gradient overflow-hidden border-b border-border">
    <img
      src={heroImage}
      alt="AI agent overlooking a technological landscape"
      className="absolute right-0 top-0 h-full w-[48%] object-cover opacity-18 grayscale hidden lg:block"
    />
    <div className="absolute right-0 top-0 hidden h-full w-[52%] lg:block bg-gradient-to-r from-background via-background/75 to-background/20" />
    <div className="absolute inset-y-0 left-0 w-2 bg-primary" />
    <div className="absolute inset-0 pointer-events-none opacity-55 [background-image:linear-gradient(hsl(var(--border)/0.65)_1px,transparent_1px)] [background-size:100%_88px]" />
    <div className="absolute bottom-10 right-[8%] hidden lg:block h-48 w-48 border border-primary/25" />

    <div className="container mx-auto px-4 pt-28 pb-16 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 border-l-4 border-primary bg-card px-4 py-2 text-primary text-sm font-semibold mb-8 shadow-sm"
        >
          <Sparkles size={16} />
          AI Consultancy · Business Optimization · Innovation
        </motion.div>

        <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-8 max-w-5xl tracking-normal">
          Transform Your Business with{" "}
          <span className="gradient-text">AI-Driven Intelligent Automation</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Button size="lg" className="glow-sm text-base px-8" asChild>
            <a href="mailto:Info@nextdigitsai.com">
              Schedule a Consultation <ArrowRight size={18} className="ml-2" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 bg-card" asChild>
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
