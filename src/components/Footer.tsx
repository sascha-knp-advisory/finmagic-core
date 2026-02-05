import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© 2026 KNP Advisory</p>
      <div className="flex items-center gap-6">
        <Link to="/imprint" className="hover:text-foreground transition-colors">Imprint</Link>
        <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
        <a
          href="https://www.linkedin.com/company/knp-advisory"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-foreground transition-colors"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </div>
      <p>Berlin, Germany</p>
    </div>
  </footer>
);

export default Footer;
