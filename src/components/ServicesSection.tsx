import {
  MessageSquare, Tag, User, Globe, FileText, Search,
  FolderOpen, BarChart3, Sparkles, Database, ScanLine,
  TestTube, Wand2
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import ServiceCard from "./ServiceCard";

const services = [
  { icon: MessageSquare, title: "Sentiment Analysis", description: "Understand customer emotions and opinions from text data at scale." },
  { icon: Tag, title: "Text Classification", description: "Automatically categorize documents and content with precision." },
  { icon: User, title: "Named Entity Recognition", description: "Extract people, organizations, and key entities from unstructured text." },
  { icon: Globe, title: "Language Translation", description: "AI-powered translation and localization for global reach." },
  { icon: FileText, title: "Text Summarization", description: "Condense lengthy documents into concise, actionable summaries." },
  { icon: Search, title: "Keyword Extraction & SEO", description: "Identify key terms to optimize content strategy and discoverability." },
  { icon: FolderOpen, title: "Document Clustering", description: "Organize large document sets into meaningful groups automatically." },
  { icon: BarChart3, title: "Automated Report Generation", description: "Generate insights-rich reports from raw data automatically." },
  { icon: Sparkles, title: "Advanced Text Analytics", description: "Deep analysis of text data for trends, patterns, and anomalies." },
  { icon: Database, title: "Data Cleaning for NLP", description: "Prepare and preprocess data for optimal NLP model performance." },
  { icon: ScanLine, title: "OCR Optimization", description: "Extract and digitize text from images and scanned documents." },
  { icon: TestTube, title: "AI Model Evaluation", description: "Assess and optimize AI model performance and accuracy." },
  { icon: Wand2, title: "Prompt Engineering", description: "Design effective prompts for maximum LLM output quality." },
];

const ServicesSection = () => (
  <SectionWrapper
    id="services"
    title="AI & Data Science Services"
    subtitle="End-to-end AI and NLP solutions tailored to your business needs."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
      {services.map((s, i) => (
        <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} index={i} />
      ))}
    </div>
  </SectionWrapper>
);

export default ServicesSection;
