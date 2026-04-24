import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { useEffect, type ReactNode } from "react";
import SiteFooter from "./SiteFooter";
import SiteHeader, { PHONE_NUMBER, PHONE_TEL } from "./SiteHeader";

export const DEFAULT_SERVICE_AREAS = [
  "San Antonio",
  "Stone Oak",
  "Boerne",
  "New Braunfels",
  "Bulverde",
  "Alamo Heights",
  "Fair Oaks Ranch",
  "Helotes",
  "The Dominion",
];

export type FAQ = { q: string; a: string };

type Props = {
  metaTitle: string;
  metaDescription?: string;
  eyebrow?: string;
  h1: string;
  heroSubtitle: string;
  heroImage?: string;
  children: ReactNode;
  faqs: FAQ[];
  serviceAreas?: string[];
  jsonLd?: object | object[];
};

export default function ServicePageLayout({
  metaTitle,
  metaDescription,
  eyebrow = "SAN ANTONIO · SINCE 2001 · 25+ YEARS EXPERIENCE",
  h1,
  heroSubtitle,
  heroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663392461276/3c6eAFYT8Fn8BKKqtPYpos/hero-home-theater-bYz4VmVyqX6SPbzde9DQhD.webp",
  children,
  faqs,
  serviceAreas = DEFAULT_SERVICE_AREAS,
  jsonLd,
}: Props) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = metaTitle;

    let metaDescTag: HTMLMetaElement | null = null;
    if (metaDescription) {
      metaDescTag = document.querySelector('meta[name="description"]');
      const created = !metaDescTag;
      if (!metaDescTag) {
        metaDescTag = document.createElement("meta");
        metaDescTag.name = "description";
        document.head.appendChild(metaDescTag);
      }
      const prevDesc = metaDescTag.content;
      metaDescTag.content = metaDescription;
      return () => {
        document.title = previousTitle;
        if (metaDescTag) {
          if (created) metaDescTag.remove();
          else metaDescTag.content = prevDesc;
        }
      };
    }

    return () => {
      document.title = previousTitle;
    };
  }, [metaTitle, metaDescription]);

  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <div className="min-h-screen bg-white">
      {jsonLdArray.map((obj, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}

      <SiteHeader />

      {/* Hero */}
      <section
        className="relative py-24 md:py-32 text-white overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 max-w-3xl">
          <p className="text-primary text-sm font-semibold mb-4">{eyebrow}</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{h1}</h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">{heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
              <a href={PHONE_TEL}>
                <Phone className="w-5 h-5 mr-2" />
                Call {PHONE_NUMBER}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent"
            >
              <a href="/#contact">Book Free Consultation</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Page-specific content */}
      {children}

      {/* Service Areas */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Service Areas</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Proudly serving San Antonio and the surrounding Texas Hill Country communities.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="bg-white p-4 rounded-lg border border-border text-center font-semibold text-foreground"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <Card className="p-2 md:p-6 border border-border">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left font-semibold text-base md:text-lg">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-foreground text-white">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Free consultations. Honest pricing. No subcontractors. 25+ years of custom AV installation in San Antonio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
              <a href={PHONE_TEL}>
                <Phone className="w-5 h-5 mr-2" />
                Call {PHONE_NUMBER}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent"
            >
              <a href="/#contact">Book Free Consultation</a>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

// Reusable section primitives for page content
export function Section({
  title,
  intro,
  children,
  variant = "white",
  id,
}: {
  title?: string;
  intro?: string;
  children: ReactNode;
  variant?: "white" | "secondary";
  id?: string;
}) {
  const bg = variant === "secondary" ? "bg-secondary" : "bg-white";
  return (
    <section id={id} className={`py-20 ${bg}`}>
      <div className="container">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{title}</h2>
        )}
        {intro && (
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export function FeatureGrid({
  items,
  columns = 2,
}: {
  items: { title: string; description: string }[];
  columns?: 2 | 3 | 4;
}) {
  const colClass =
    columns === 4
      ? "md:grid-cols-4"
      : columns === 3
      ? "md:grid-cols-3"
      : "md:grid-cols-2";
  return (
    <div className={`grid ${colClass} gap-6 max-w-5xl mx-auto`}>
      {items.map((item, idx) => (
        <Card key={idx} className="p-6 border border-border">
          <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
        </Card>
      ))}
    </div>
  );
}

export function ProcessSteps({ steps }: { steps: { title: string; description: string }[] }) {
  return (
    <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {steps.map((step, idx) => (
        <div key={idx} className="text-center">
          <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
            {idx + 1}
          </div>
          <h3 className="text-lg font-bold mb-2 text-foreground">{step.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
