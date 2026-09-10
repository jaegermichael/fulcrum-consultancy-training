import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/outfit";
import "./globals.css";
import { Header, Footer, WhatsAppDock } from "@/components/SiteChrome";
import { MotionSystem } from "@/components/MotionSystem";

export const metadata: Metadata = {
  title: { default: "Fulcrum Consultancy & Training", template: "%s | Fulcrum" },
  description: "Practical Excel, Power BI, SQL, accounting and payroll training in Harare and online across Zimbabwe.",
  keywords: ["Excel training Harare", "Power BI training Zimbabwe", "Data analytics training Zimbabwe", "Corporate training Zimbabwe"],
  openGraph: { title: "Fulcrum Consultancy & Training", description: "Practical skills. Real results. Lasting impact.", type: "website", locale: "en_ZW" }
};

const schema = { "@context": "https://schema.org", "@type": "EducationalOrganization", name: "Fulcrum Consultancy & Training", address: { "@type": "PostalAddress", addressLocality: "Harare", addressCountry: "ZW" }, telephone: ["+263778599227", "+263714325378"] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><MotionSystem /><a className="skip-link" href="#main">Skip to content</a><Header />{children}<Footer /><WhatsAppDock /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}
