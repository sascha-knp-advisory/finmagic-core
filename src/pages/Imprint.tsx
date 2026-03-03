import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const EmailImage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 14" className="inline" style={{ height: "0.9em", verticalAlign: "-0.15em" }}>
    <text x="0" y="11.5" fill="currentColor" fontSize="16" fontFamily="DM Sans, system-ui, sans-serif">info@knp-advisory.com</text>
  </svg>
);

const AddressImage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 60" className="h-[3.75rem] block">
    <text x="0" y="15" fill="currentColor" fontSize="14" fontFamily="DM Sans, system-ui, sans-serif">
      Koenig Advisory UG (haftungsbeschränkt)
    </text>
    <text x="0" y="35" fill="currentColor" fontSize="14" fontFamily="DM Sans, system-ui, sans-serif">
      Immanuelkirchstraße 29a
    </text>
    <text x="0" y="55" fill="currentColor" fontSize="14" fontFamily="DM Sans, system-ui, sans-serif">
      10405 Berlin, Germany
    </text>
  </svg>
);

const Imprint = () => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="container mx-auto px-4 md:px-8 py-16 max-w-2xl">
      <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10">
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>

      <h1 className="text-4xl font-bold mb-8">Legal Notice (Impressum)</h1>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <div>
          <AddressImage />
        </div>

        <div>
          <p className="font-semibold text-foreground">Managing Director</p>
          <p>Markus König</p>
        </div>

        <div>
          <p className="font-semibold text-foreground">Commercial Register</p>
          <p>Amtsgericht Berlin (Charlottenburg)</p>
          <p>HRB 223755</p>
        </div>

        <div>
          <p className="font-semibold text-foreground">Contact</p>
          <p>Email: <EmailImage /></p>
          <p>Or via our <Link to="/#contact" className="text-foreground underline hover:no-underline">contact form</Link>.</p>
        </div>

        <div>
          <p className="font-semibold text-foreground">Responsible for content (§ 18(2) MStV)</p>
          <p>Markus König, address as above.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Imprint;
