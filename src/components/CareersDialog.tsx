import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, FileText, CheckCircle, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface CareersDialogProps {
  open: boolean;
  onClose: () => void;
}

const CareersDialog = ({ open, onClose }: CareersDialogProps) => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState<"info" | "apply">("info");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    currentRole: "",
    message: "",
  });

  const handleClose = () => {
    setStep("info");
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const maxSize = 10 * 1024 * 1024;
      if (file.size > maxSize) {
        toast({ title: "File too large", description: "Please upload a file under 10MB.", variant: "destructive" });
        return;
      }
      setCvFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      formData.name && `Name: ${formData.name}`,
      formData.email && `Email: ${formData.email}`,
      formData.phone && `Phone: ${formData.phone}`,
      formData.currentRole && `Current Role: ${formData.currentRole}`,
      formData.experience && `Experience: ${formData.experience} years`,
      formData.message && `Cover Note:\n${formData.message}`,
      "\n(Please attach your CV to this email)",
    ].filter(Boolean).join("\n");

    const mailto = `mailto:Careers@nextdigitsai.com?subject=${encodeURIComponent("Solicited Application")}&body=${encodeURIComponent(body)}`;
    window.open(mailto, "_blank");

    toast({ title: "Email client opened!", description: "Please attach your CV and send the email." });
    setCvFile(null);
    setFormData({ name: "", email: "", phone: "", experience: "", currentRole: "", message: "" });
    setStep("info");
    onClose();
  };

  const update = (field: string, value: string) => setFormData((p) => ({ ...p, [field]: value }));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className={`w-full ${step === "info" ? "max-w-md" : "max-w-lg"} max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card p-6 md:p-8 shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-2xl font-bold">
                {step === "info" ? "Careers" : "Solicited Application"}
              </h2>
              <button
                onClick={handleClose}
                className="rounded-full p-1.5 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {step === "info" ? (
              <div className="text-center space-y-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                  <Briefcase size={28} className="text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <p className="text-foreground font-medium">No open positions at the moment</p>
                  <p className="text-sm text-muted-foreground">
                    We don't have any vacancies right now, but we're always on the lookout for talented individuals. Would you like to submit a solicited application?
                  </p>
                </div>
                <div className="flex gap-3 justify-center">
                  <Button variant="outline" onClick={handleClose}>
                    No, thanks
                  </Button>
                  <Button onClick={() => setStep("apply")}>
                    Yes, apply now
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* CV Upload */}
                <div>
                  <Label className="mb-2 block">Upload your CV *</Label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full rounded-xl border-2 border-dashed border-border hover:border-primary/50 bg-muted/30 p-6 transition-colors text-center"
                  >
                    {cvFile ? (
                      <div className="flex items-center justify-center gap-2 text-primary">
                        <CheckCircle size={20} />
                        <span className="text-sm font-medium">{cvFile.name}</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-muted-foreground">
                        <Upload size={24} />
                        <span className="text-sm">Click to upload PDF, DOC, or DOCX</span>
                      </div>
                    )}
                  </button>
                </div>

                <p className="text-xs text-muted-foreground">The fields below are optional but help us review your application faster.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="mb-1.5 block">Full Name</Label>
                    <Input id="name" placeholder="John Doe" value={formData.name} onChange={(e) => update("name", e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="email" className="mb-1.5 block">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => update("email", e.target.value)} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="mb-1.5 block">Phone</Label>
                    <Input id="phone" placeholder="+1 234 567 890" value={formData.phone} onChange={(e) => update("phone", e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="currentRole" className="mb-1.5 block">Current Role</Label>
                    <Input id="currentRole" placeholder="Software Engineer" value={formData.currentRole} onChange={(e) => update("currentRole", e.target.value)} />
                  </div>
                </div>

                <div>
                  <Label htmlFor="experience" className="mb-1.5 block">Years of Experience</Label>
                  <Input id="experience" placeholder="e.g. 5" value={formData.experience} onChange={(e) => update("experience", e.target.value)} />
                </div>

                <div>
                  <Label htmlFor="message" className="mb-1.5 block">Cover Note</Label>
                  <Textarea id="message" placeholder="Tell us why you'd like to join NextDigits..." rows={3} value={formData.message} onChange={(e) => update("message", e.target.value)} />
                </div>

                <Button type="submit" className="w-full glow-sm" size="lg">
                  <FileText size={18} className="mr-2" /> Submit Application
                </Button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CareersDialog;
