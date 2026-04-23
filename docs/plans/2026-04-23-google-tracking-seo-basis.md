# Google Tracking + SEO Basis — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** GTM + GA4 + Search Console + Cookie-Consent-Banner + Sitemap + Structured Data für knp-advisory.com einrichten

**Architecture:** Google Tag Manager (GTM) als Container für alle Tags. GA4 wird über GTM gesteuert, feuert erst nach Cookie-Consent (Google Consent Mode v2). Consent-Banner als leichtgewichtige React-Komponente (kein externes SDK). Sitemap als statische XML. Structured Data als JSON-LD im `<head>`.

**Tech Stack:** GTM (Script-Tag), GA4 (via GTM), React (Consent-Banner-Komponente), JSON-LD, XML Sitemap

**Voraussetzungen (Sascha muss in Browser erledigen):**
- GTM-Konto erstellen unter tagmanager.google.com → Container-ID notieren (GTM-XXXXXXX)
- GA4-Property erstellen unter analytics.google.com → Measurement-ID notieren (G-XXXXXXXXXX)
- Search Console Property für knp-advisory.com verifizieren (nach Task 3)

---

### Task 1: GTM Container-Code in index.html einbauen

**Files:**
- Modify: `index.html`

**Kontext:** GTM besteht aus zwei Snippets — eines im `<head>` (so früh wie möglich), eines direkt nach `<body>`. Wir nutzen Platzhalter `GTM-XXXXXXX` die Sascha mit seiner echten Container-ID ersetzt.

**Step 1: GTM-Snippets einfügen**

In `index.html`, im `<head>` nach dem `<meta charset>` Tag:

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

Direkt nach `<body>`:

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager -->
```

**Step 2: Google Consent Mode v2 Default-Config hinzufügen**

VOR dem GTM-Script im `<head>` (muss vor GTM laden):

```html
<!-- Google Consent Mode v2 — defaults to denied -->
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'wait_for_update': 500
});
</script>
```

**Step 3: Verifizieren**

Run: `cd /Users/saschanoack/repos/finmagic-core && npm run build`
Expected: Build erfolgreich, keine Fehler

**Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add GTM container + Consent Mode v2 defaults"
```

---

### Task 2: Cookie-Consent-Banner (React-Komponente)

**Files:**
- Create: `src/components/CookieConsent.tsx`
- Modify: `src/App.tsx`

**Kontext:** Leichtgewichtiger Banner unten am Screen. Speichert Einwilligung in localStorage. Bei Akzeptanz wird `gtag('consent', 'update', ...)` aufgerufen. Kein externes Cookie-Consent-SDK nötig für diesen simplen Use Case.

**Step 1: CookieConsent-Komponente erstellen**

```tsx
// src/components/CookieConsent.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(Object.fromEntries(args.map((a, i) => [i, a])));
}

const CONSENT_KEY = "knp-cookie-consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "granted") {
      updateConsent(true);
    } else if (!stored) {
      setVisible(true);
    }
  }, []);

  const updateConsent = (granted: boolean) => {
    const value = granted ? "granted" : "denied";
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "consent_update",
      analytics_storage: value,
    });

    // Google Consent Mode v2 update
    function gtagPush(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    gtagPush("consent", "update", {
      analytics_storage: value,
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
    });
  };

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "granted");
    updateConsent(true);
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "denied");
    updateConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur border-t border-border shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          We use cookies to analyze website traffic and optimize your experience.{" "}
          <Link to="/privacy" className="underline hover:text-foreground">
            Privacy Policy
          </Link>
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm rounded-md border border-border hover:bg-accent transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
```

**Step 2: CookieConsent in App.tsx einbinden**

Import hinzufügen und Komponente vor `</BrowserRouter>` platzieren:

```tsx
import CookieConsent from "./components/CookieConsent";

// In der App-Komponente, innerhalb BrowserRouter:
<CookieConsent />
```

**Step 3: Verifizieren**

Run: `cd /Users/saschanoack/repos/finmagic-core && npm run build`
Expected: Build erfolgreich

**Step 4: Commit**

```bash
git add src/components/CookieConsent.tsx src/App.tsx
git commit -m "feat: add GDPR cookie consent banner with Consent Mode v2"
```

---

### Task 3: Search Console Verification Meta-Tag

**Files:**
- Modify: `index.html`

**Kontext:** Google Search Console bietet mehrere Verifizierungsmethoden. Meta-Tag ist die einfachste für SPAs. Sascha bekommt den Tag-Inhalt wenn er die Property in Search Console anlegt.

**Step 1: Verification-Tag einfügen**

Im `<head>` von `index.html`, nach den bestehenden Meta-Tags:

```html
<!-- Google Search Console -->
<meta name="google-site-verification" content="VERIFICATION_CODE_HERE" />
```

Sascha ersetzt `VERIFICATION_CODE_HERE` mit dem Code aus der Search Console.

**Step 2: Commit**

```bash
git add index.html
git commit -m "feat: add Google Search Console verification meta tag"
```

---

### Task 4: Sitemap.xml erstellen

**Files:**
- Create: `public/sitemap.xml`
- Modify: `public/robots.txt`

**Kontext:** Statische Sitemap reicht — die Website hat nur 3 Seiten. `lastmod` auf heutiges Datum.

**Step 1: sitemap.xml erstellen**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://knp-advisory.com/</loc>
    <lastmod>2026-04-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://knp-advisory.com/imprint</loc>
    <lastmod>2026-04-23</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://knp-advisory.com/privacy</loc>
    <lastmod>2026-04-23</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
```

**Step 2: robots.txt um Sitemap-Verweis ergänzen**

Am Ende von `public/robots.txt` hinzufügen:

```
Sitemap: https://knp-advisory.com/sitemap.xml
```

**Step 3: Commit**

```bash
git add public/sitemap.xml public/robots.txt
git commit -m "feat: add sitemap.xml and reference in robots.txt"
```

---

### Task 5: Structured Data (JSON-LD)

**Files:**
- Modify: `index.html`

**Kontext:** JSON-LD Schema für Organization + ProfessionalService. Hilft Google, KNP als Unternehmen zu erkennen und in Knowledge Panels / Rich Results anzuzeigen. Auch wichtig für GEO (Generative Engine Optimization).

**Step 1: JSON-LD im head einfügen**

Im `<head>` von `index.html`, vor `</head>`:

```html
<!-- Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "KNP Advisory",
  "description": "AI-powered finance operations and CFO support for startups and SMEs. Built for speed, accuracy, and scale.",
  "url": "https://knp-advisory.com",
  "logo": "https://knp-advisory.com/og-image.png",
  "image": "https://knp-advisory.com/og-image.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Berlin",
    "addressCountry": "DE"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 52.52,
      "longitude": 13.405
    },
    "geoRadius": "50000"
  },
  "serviceType": ["CFO Support", "Finance Operations", "AI Automation", "Bookkeeping"],
  "knowsAbout": ["Finance Automation", "n8n", "AI-powered Finance", "Startup CFO", "DATEV"],
  "sameAs": [
    "https://www.linkedin.com/company/knp-advisory/"
  ]
}
</script>
```

**Step 2: Verifizieren**

Run: `cd /Users/saschanoack/repos/finmagic-core && npm run build`
Expected: Build erfolgreich

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add JSON-LD structured data (ProfessionalService)"
```

---

### Task 6: Datenschutzerklärung updaten

**Files:**
- Modify: `src/pages/Privacy.tsx`

**Kontext:** GA4 muss als Auftragsverarbeiter in die Datenschutzerklärung. Der Cookies-Abschnitt muss aktualisiert werden. Betrifft sowohl die deutsche als auch die englische Version.

**Step 1: Google Analytics in Auftragsverarbeiter-Tabelle ergänzen**

Neue Zeile in beiden Tabellen (DE + EN) unter den Netlify-Eintrag:

**Deutsch:**
```
Google Analytics (Google Ireland Ltd.) | Website-Analyse | EU/USA*
```

**English:**
```
Google Analytics (Google Ireland Ltd.) | Website analytics | EU/USA*
```

**Step 2: Cookies-Abschnitt aktualisieren**

**Deutsch (Abschnitt 8):**
```
Diese Website verwendet Google Analytics zur Analyse der Website-Nutzung.
Google Analytics setzt Cookies nur nach Ihrer ausdrücklichen Einwilligung
(Cookie-Banner). Ohne Einwilligung werden keine personenbezogenen Daten
erhoben. Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie Ihre
Browser-Cookies löschen.
```

**English (Section 8):**
```
This website uses Google Analytics for website usage analysis.
Google Analytics only sets cookies after your explicit consent
(cookie banner). Without consent, no personal data is collected.
You can revoke your consent at any time by clearing your browser cookies.
```

**Step 3: Zwecktabelle erweitern**

Neue Zeile in der Zwecktabelle:

**Deutsch:**
```
Website-Analyse (nur mit Einwilligung) | Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
```

**English:**
```
Website analytics (consent only) | Art. 6(1)(a) GDPR (consent)
```

**Step 4: Commit**

```bash
git add src/pages/Privacy.tsx
git commit -m "feat: update privacy policy for Google Analytics + cookie consent"
```

---

### Task 7: Deploy + Verifizieren

**Step 1: Alle Änderungen pushen**

```bash
git push origin main
```

Netlify baut automatisch.

**Step 2: Sascha — manuelle Schritte nach Deploy**

1. **GTM:** Unter tagmanager.google.com Container erstellen → Container-ID (GTM-XXXXXXX) in `index.html` ersetzen, committen, pushen
2. **GA4:** Unter analytics.google.com Property "KNP Advisory" erstellen → Measurement-ID (G-XXXXXXXXXX) → in GTM als "Google Analytics: GA4 Configuration" Tag anlegen, Trigger "All Pages"
3. **Search Console:** Unter search.google.com/search-console Property hinzufügen → Verification-Code in `index.html` ersetzen, committen, pushen → in Search Console "Verify" klicken
4. **Search Console:** Sitemap einreichen → Sitemaps → `https://knp-advisory.com/sitemap.xml`
5. **Structured Data testen:** https://search.google.com/test/rich-results → URL eingeben

---

## Zusammenfassung der Reihenfolge

| # | Task | Wer | Dauer |
|---|------|-----|-------|
| 1 | GTM + Consent Mode in index.html | CC | 5 min |
| 2 | Cookie-Consent-Banner (React) | CC | 10 min |
| 3 | Search Console Meta-Tag | CC | 2 min |
| 4 | Sitemap + robots.txt Update | CC | 5 min |
| 5 | Structured Data (JSON-LD) | CC | 5 min |
| 6 | Privacy Page updaten | CC | 10 min |
| 7 | Deploy + Google-Dienste einrichten | Sascha | 20 min |

**Gesamtdauer Code:** ~35 min | **Sascha-Anteil:** ~20 min (Browser-Einrichtung)
