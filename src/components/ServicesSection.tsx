import {
  MessageSquare, Tag, User, Globe, FileText, Search,
  FolderOpen, BarChart3, Sparkles, Database, ScanLine,
  TestTube, Wand2, Cpu, Zap, GitBranch
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import ServiceCard from "./ServiceCard";

const services = [
  { icon: MessageSquare, title: "Sentiment Analysis", description: "Extract actionable insights from customer feedback, reviews, and social media at enterprise scale." },
  { icon: Tag, title: "Text Classification", description: "Automate document categorization and content routing with high-accuracy ML models." },
  { icon: User, title: "Named Entity Recognition", description: "Identify and extract key entities—people, organizations, dates—from unstructured data sources." },
  { icon: Globe, title: "Language Translation", description: "Deploy neural machine translation for multilingual content and global market expansion." },
  { icon: FileText, title: "Text Summarization", description: "Transform lengthy reports and documents into concise, decision-ready summaries." },
  { icon: Search, title: "Keyword Extraction & SEO", description: "Surface high-value terms and optimize content discoverability with NLP-driven analysis." },
  { icon: FolderOpen, title: "Document Clustering", description: "Automatically organize and structure large document repositories for faster retrieval." },
  { icon: BarChart3, title: "Automated Reporting", description: "Generate data-driven reports and dashboards from raw datasets with minimal manual effort." },
  { icon: Sparkles, title: "Advanced Text Analytics", description: "Uncover trends, anomalies, and patterns across text corpora using deep learning techniques." },
  { icon: Database, title: "Data Engineering for NLP", description: "Design robust data preprocessing pipelines optimized for NLP model training and inference." },
  { icon: ScanLine, title: "OCR & Document Digitization", description: "Convert scanned documents and images into structured, searchable digital assets." },
  { icon: TestTube, title: "Model Evaluation & Benchmarking", description: "Rigorously assess model performance against business KPIs with standardized evaluation frameworks." },
  { icon: Wand2, title: "Prompt Engineering", description: "Craft and optimize prompts to maximize LLM output quality, consistency, and reliability." },
  { icon: Cpu, title: "AI Model Integration", description: "Seamlessly embed AI and LLM capabilities into your existing technology stack and workflows." },
  { icon: Zap, title: "Model Optimization", description: "Fine-tune models for optimal latency, cost efficiency, and accuracy in production environments." },
  { icon: GitBranch, title: "Scalable ML Pipelines", description: "Architect production-grade machine learning pipelines built for reliability and horizontal scale." },
];

const ServicesSection = () => (
  <SectionWrapper
    id="services"
    title="AI Services"
    subtitle="Enterprise-grade AI and NLP solutions engineered to deliver measurable business impact."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
      {services.map((s, i) => (
        <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} index={i} />
      ))}
    </div>
  </SectionWrapper>
);

export default ServicesSection;
