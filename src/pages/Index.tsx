import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import WhoWeAre from "@/components/WhoWeAre";
import Experience from "@/components/Experience";
import Network from "@/components/Network";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <Hero />
    <div className="section-divider" />
    <Services />
    <div className="section-divider" />
    <WhyUs />
    <div className="section-divider" />
    <WhoWeAre />
    <div className="section-divider" />
    <Experience />
    <div className="section-divider" />
    <Network />
    <div className="section-divider" />
    <Contact />
    <Footer />
  </>
);

export default Index;
