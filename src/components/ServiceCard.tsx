import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, index }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="group gradient-border rounded-xl p-6 hover:glow-sm transition-all duration-300"
  >
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
      <Icon size={20} className="text-primary" />
    </div>
    <h3 className="font-heading font-semibold text-foreground mb-2">{title}</h3>
    {description && <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>}
  </motion.div>
);

export default ServiceCard;
