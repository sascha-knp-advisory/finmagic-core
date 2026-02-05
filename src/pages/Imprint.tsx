import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Imprint = () => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="container mx-auto px-4 md:px-8 py-16 max-w-2xl">
      <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10">
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>

      <h1 className="text-4xl font-bold mb-8">Legal Notice (Impressum)</h1>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <div>
          <p className="font-semibold text-foreground">Koenig Advisory UG (haftungsbeschränkt)</p>
          <p>Immanuelkirchstraße 29a</p>
          <p>10405 Berlin, Germany</p>
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
          <p>Phone: +49 152 560 37150</p>
          <p>Email: info@knp-advisory.com</p>
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
