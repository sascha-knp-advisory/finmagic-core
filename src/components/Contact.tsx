import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center">
          Get in touch to build a finance system you can trust.
        </h2>

        {submitted ? (
          <div className="mt-12 text-center">
            <p className="text-xl text-foreground font-semibold">Thank you!</p>
            <p className="mt-2 text-muted-foreground">We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-5">
            <Input placeholder="Name" required className="bg-card border-border text-foreground placeholder:text-muted-foreground" />
            <Input type="email" placeholder="Email" required className="bg-card border-border text-foreground placeholder:text-muted-foreground" />
            <Input placeholder="Company" className="bg-card border-border text-foreground placeholder:text-muted-foreground" />
            <Select>
              <SelectTrigger className="bg-card border-border text-foreground">
                <SelectValue placeholder="Stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pre-seed">Pre-seed</SelectItem>
                <SelectItem value="seed">Seed</SelectItem>
                <SelectItem value="series-a">Series A</SelectItem>
                <SelectItem value="series-b">Series B+</SelectItem>
                <SelectItem value="smb">SMB</SelectItem>
              </SelectContent>
            </Select>
            <Textarea placeholder="Message" rows={4} className="bg-card border-border text-foreground placeholder:text-muted-foreground" />
            <Button variant="accent" size="lg" type="submit" className="w-full text-base">
              Request intro call
            </Button>
          </form>
        )}

        <div className="mt-8 text-center space-y-2">
          <p className="text-muted-foreground text-sm">
            Or book directly:{" "}
            <a href="#contact" className="text-accent hover:underline">Calendar link</a>
          </p>
          <p className="text-muted-foreground text-xs">We reply within 24 hours. No spam.</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
