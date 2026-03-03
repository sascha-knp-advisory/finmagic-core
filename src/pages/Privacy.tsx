import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const EmailImage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 14" className="inline" style={{ height: "0.9em", verticalAlign: "-0.15em" }}>
    <text x="0" y="11.5" fill="currentColor" fontSize="16" fontFamily="DM Sans, system-ui, sans-serif">info@knp-advisory.com</text>
  </svg>
);

const Privacy = () => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="container mx-auto px-4 md:px-8 py-16 max-w-2xl">
      <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10">
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>

      <h1 className="text-4xl font-bold mb-2">Datenschutzerklärung</h1>
      <p className="text-muted-foreground mb-8">Stand: März 2026</p>

      <div className="space-y-8 text-muted-foreground leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">1. Verantwortlicher</h2>
          <p>Koenig Advisory UG (haftungsbeschränkt)</p>
          <p>HRB 223755, Amtsgericht Charlottenburg</p>
          <p>Berlin, Deutschland</p>
          <p className="mt-2">E-Mail: <EmailImage /></p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">2. Welche Daten wir erheben</h2>
          <p className="mb-2">Wenn Sie unser Kontaktformular nutzen, erheben wir:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Name, E-Mail-Adresse</li>
            <li>Unternehmen (optional)</li>
            <li>Finanzierungsphase (optional)</li>
            <li>Ihre Nachricht</li>
          </ul>
          <p className="mt-3 mb-2">Beim Besuch unserer Website werden automatisch erhoben:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>IP-Adresse (anonymisiert durch den Hoster)</li>
            <li>Zeitpunkt des Zugriffs</li>
            <li>Aufgerufene Seiten</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">3. Zweck der Datenverarbeitung</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 text-foreground">Zweck</th>
                  <th className="text-left py-2 text-foreground">Rechtsgrundlage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Beantwortung Ihrer Kontaktanfrage</td>
                  <td className="py-2">Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Bereitstellung der Website</td>
                  <td className="py-2">Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">4. Empfänger und Auftragsverarbeiter</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 text-foreground">Dienstleister</th>
                  <th className="text-left py-2 pr-4 text-foreground">Zweck</th>
                  <th className="text-left py-2 text-foreground">Standort</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Netlify (Netlify Inc., USA)</td>
                  <td className="py-2 pr-4">Website-Hosting, Formulardaten</td>
                  <td className="py-2">USA*</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Google Workspace (Google Ireland Ltd.)</td>
                  <td className="py-2 pr-4">E-Mail-Versand</td>
                  <td className="py-2">EU/USA*</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2">*Für US-Anbieter gelten die EU-Standardvertragsklauseln (SCCs) gemäß Art. 46 DSGVO.</p>
          <p className="mt-2">Eine Weitergabe an sonstige Dritte erfolgt nicht.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">5. Speicherdauer</h2>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Kontaktanfragen: 24 Monate nach letztem Kontakt</li>
            <li>Kundendaten bei Vertragsschluss: Gemäß gesetzlicher Aufbewahrungsfristen (bis zu 10 Jahre)</li>
            <li>Auf Wunsch: Sofortige Löschung (siehe Ihre Rechte)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">6. Ihre Rechte</h2>
          <p className="mb-2">Sie haben jederzeit das Recht auf:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          </ul>
          <p className="mt-3">Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter: <EmailImage /></p>
          <p className="mt-3">Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren:</p>
          <p className="mt-1">
            Berliner Beauftragte für Datenschutz und Informationsfreiheit<br />
            Alt-Moabit 59-61, 10555 Berlin<br />
            mailbox@datenschutz-berlin.de
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">7. Sicherheit</h2>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Verschlüsselte Datenübertragung (TLS/SSL)</li>
            <li>Zugriffsbeschränkungen auf Need-to-know-Basis</li>
            <li>Regelmäßige Sicherheitsupdates unserer Systeme</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">8. Cookies</h2>
          <p>Diese Website verwendet keine Cookies und kein Tracking.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">9. Änderungen</h2>
          <p>Diese Datenschutzerklärung kann bei Bedarf aktualisiert werden. Die aktuelle Version finden Sie stets auf dieser Seite.</p>
        </section>

      </div>

      {/* English version */}
      <hr className="my-12 border-border" />

      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-muted-foreground mb-8">Last updated: March 2026</p>

      <div className="space-y-8 text-muted-foreground leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">1. Controller</h2>
          <p>Koenig Advisory UG (haftungsbeschränkt)</p>
          <p>HRB 223755, District Court Charlottenburg</p>
          <p>Berlin, Germany</p>
          <p className="mt-2">Email: <EmailImage /></p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">2. Data We Collect</h2>
          <p className="mb-2">When you use our contact form, we collect:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Name, email address</li>
            <li>Company (optional)</li>
            <li>Funding stage (optional)</li>
            <li>Your message</li>
          </ul>
          <p className="mt-3 mb-2">When visiting our website, the following is collected automatically:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>IP address (anonymized by the host)</li>
            <li>Time of access</li>
            <li>Pages visited</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">3. Purpose of Processing</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 text-foreground">Purpose</th>
                  <th className="text-left py-2 text-foreground">Legal Basis</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Responding to your contact inquiry</td>
                  <td className="py-2">Art. 6(1)(b) GDPR (pre-contractual measures)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Providing the website</td>
                  <td className="py-2">Art. 6(1)(f) GDPR (legitimate interest)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">4. Recipients and Processors</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 text-foreground">Provider</th>
                  <th className="text-left py-2 pr-4 text-foreground">Purpose</th>
                  <th className="text-left py-2 text-foreground">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Netlify (Netlify Inc., USA)</td>
                  <td className="py-2 pr-4">Website hosting, form data</td>
                  <td className="py-2">USA*</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Google Workspace (Google Ireland Ltd.)</td>
                  <td className="py-2 pr-4">Email delivery</td>
                  <td className="py-2">EU/USA*</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2">*For US providers, EU Standard Contractual Clauses (SCCs) apply pursuant to Art. 46 GDPR.</p>
          <p className="mt-2">We do not share your data with any other third parties.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">5. Retention Period</h2>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Contact inquiries: 24 months after last contact</li>
            <li>Customer data after contract: According to statutory retention periods (up to 10 years)</li>
            <li>Upon request: Immediate deletion (see Your Rights)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">6. Your Rights</h2>
          <p className="mb-2">You have the right at any time to:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Access your stored data (Art. 15 GDPR)</li>
            <li>Rectification of inaccurate data (Art. 16 GDPR)</li>
            <li>Erasure of your data (Art. 17 GDPR)</li>
            <li>Restriction of processing (Art. 18 GDPR)</li>
            <li>Data portability (Art. 20 GDPR)</li>
            <li>Object to processing (Art. 21 GDPR)</li>
          </ul>
          <p className="mt-3">To exercise your rights, contact us at: <EmailImage /></p>
          <p className="mt-3">You also have the right to lodge a complaint with a data protection supervisory authority.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">7. Security</h2>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Encrypted data transmission (TLS/SSL)</li>
            <li>Access restrictions on a need-to-know basis</li>
            <li>Regular security updates of our systems</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">8. Cookies</h2>
          <p>This website does not use cookies or tracking.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">9. Changes</h2>
          <p>This privacy policy may be updated as needed. The current version can always be found on this page.</p>
        </section>

      </div>
    </div>
  </div>
);

export default Privacy;
