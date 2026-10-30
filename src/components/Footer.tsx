import { useState } from "react";
import CareersDialog from "@/components/CareersDialog";
import logo from "@/assets/nextdigits-logo.png";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#insurance" },
  { label: "Careers", href: "#careers" },
  { label: "Contact Us", href: "#contact" },
];
const Footer = () => {
  const [careersOpen, setCareersOpen] = useState(false);

  const handleScrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollTo = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="#" onClick={handleScrollToTop}>
              <img src={logo} alt="NextDigits" className="object-contain brightness-110 contrast-110 drop-shadow-[0_0_8px_hsl(var(--primary)/0.3)]" style={{ mixBlendMode: 'lighten', width: '240px', margin: '-30px 0' }} />
            </a>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navLinks.map((link) =>
                link.label === "Careers" ? (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => setCareersOpen(true)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={(e) => handleScrollTo(e, link.href)}
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} NextDigits. All rights reserved.
              {" "}Owned by Azimi FZE LLC.
            </p>
          </div>
        </div>
      </footer>
      <CareersDialog open={careersOpen} onClose={() => setCareersOpen(false)} />
    </>
  );
};

export default Footer;
