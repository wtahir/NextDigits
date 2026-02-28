const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Trainings", href: "#trainings" },
  { label: "Architecture", href: "#architecture" },
  { label: "Automation", href: "#automation" },
  { label: "Insurance", href: "#insurance" },
  { label: "Careers", href: "#careers" },
  { label: "Contact Us", href: "#contact" },
];

import logo from "@/assets/nextdigits-logo.png";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#">
          <img src={logo} alt="NextDigits" className="object-contain brightness-110 contrast-110 drop-shadow-[0_0_8px_hsl(var(--primary)/0.3)]" style={{ mixBlendMode: 'lighten', width: '240px', margin: '-30px 0' }} />
        </a>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} NextDigits. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
