import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "What we do", href: "#services" },
  { label: "Why us", href: "#why-us" },
  { label: "Who we are", href: "#team" },
  { label: "Experience", href: "#experience" },
  { label: "Network", href: "#network" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        <a href="#" className="text-xl font-bold text-foreground tracking-tight">
          KNP Advisory
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button variant="accent" size="sm" asChild>
            <a href="https://calendar.app.google/ucm1X1bTqKcT3j3i6" target="_blank" rel="noopener noreferrer">Book intro call</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-b border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button variant="accent" size="sm" className="mt-2 w-full" asChild>
            <a href="https://calendar.app.google/ucm1X1bTqKcT3j3i6" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Book intro call</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
