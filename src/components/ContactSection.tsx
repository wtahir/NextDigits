import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center gradient-border rounded-2xl p-10 md:p-14"
      >
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Mail size={32} className="text-primary" />
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Ready to <span className="gradient-text">Transform</span> Your Business?
        </h2>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          Let's discuss how NextDigits can help you leverage AI and automation to drive growth and efficiency.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="glow-sm text-base px-8" asChild>
            <a href="mailto:contact@nextdigits.com">
              Schedule a Consultation <ArrowRight size={18} className="ml-2" />
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-6">contact@nextdigits.com</p>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
