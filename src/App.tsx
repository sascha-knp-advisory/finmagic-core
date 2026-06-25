import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";
import SolutionFinder from "./pages/SolutionFinder";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";
import SectionTracker from "./components/SectionTracker";

const queryClient = new QueryClient();

function useHashScroll() {
  useEffect(() => {
    // Don't let the browser restore the previous scroll position on reload —
    // always start at the top unless an explicit deep-link hash is present.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const hash = window.location.hash;
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.slice(1);
    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 150);
        return;
      }
      if (++attempts < 20) setTimeout(tryScroll, 100);
    };
    tryScroll();
  }, []);
}

const App = () => {
  useHashScroll();
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/solution-finder" element={<SolutionFinder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
        <SectionTracker />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
