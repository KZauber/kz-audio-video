import { Card } from "@/components/ui/card";
import ServicePageLayout, { FeatureGrid, Section } from "@/components/ServicePageLayout";

export default function OutdoorHomeTheater() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Outdoor Home Theater Installation",
    provider: { "@type": "LocalBusiness", name: "KZ Audio & Video", telephone: "+1-210-981-4098" },
    areaServed: "San Antonio, TX",
    description:
      "Custom outdoor home theater installation in San Antonio — weatherproof TVs, projection, motorized screens, and Sonance outdoor speakers. Spec'd for Texas weather.",
  };

  return (
    <ServicePageLayout
      metaTitle="Outdoor Home Theater San Antonio TX | KZ Audio & Video"
      metaDescription="Outdoor home theater installation in San Antonio — weatherproof projection, outdoor TVs, and Sonance landscape speakers. Engineered for Texas heat & humidity."
      h1="Outdoor Home Theater Installation San Antonio TX"
      heroSubtitle="Poolside projection on a motorized screen. A Séura outdoor TV under the pergola. Sonance landscape speakers tuned to the patio. Built for Texas heat, humidity, and sun."
      jsonLd={jsonLd}
      faqs={[
        {
          q: "Can I just put a regular TV outside?",
          a: "No — and we strongly discourage it. Indoor TVs fail quickly in Texas heat and humidity, and the warranty is voided the moment it's installed outside. True outdoor TVs (Séura, SunBriteTV, Samsung Terrace) are built for direct exposure.",
        },
        {
          q: "Projection vs. outdoor TV — which is better?",
          a: "Depends on the space. Covered patios with limited ambient light are great for outdoor TVs. Pool areas and open yards favor motorized projection — huge image, nothing permanent on the wall, and it disappears when you're done.",
        },
        {
          q: "Do outdoor speakers sound any good?",
          a: "Modern Sonance landscape systems sound excellent. They're buried or bollard-mounted around the patio with a matching subwoofer, calibrated for even coverage — no one spot is too loud or too quiet.",
        },
        {
          q: "How do you handle Texas weather?",
          a: "Every outdoor component we spec is rated for direct sun, rain, and humidity swings. We install with proper drainage, UV-stable wiring, and surge protection. Control hardware stays inside and gets weatherproof remote repeaters outdoors.",
        },
        {
          q: "What does an outdoor setup cost?",
          a: "Covered-patio outdoor TV systems with speakers typically run $8,000–$15,000. Pool-area projection with motorized screen, weatherproof projector, and landscape audio usually lands $20,000–$40,000. We price everything in writing before we start.",
        },
      ]}
    >
      <Section
        title="Outdoor Setups We Build"
        intro="We design outdoor AV around how your family actually uses the yard."
      >
        <FeatureGrid
          items={[
            {
              title: "Pool & Patio Projection",
              description:
                "Motorized outdoor screen drops at sunset. Weatherproof 4K laser projection fills a huge image without a permanent eyesore on the wall. Rolls away when you're done.",
            },
            {
              title: "Outdoor TVs",
              description:
                "Séura, SunBriteTV, and Samsung Terrace — engineered for direct exposure, readable in sunlight, and rated for Texas summers.",
            },
            {
              title: "Weatherproof Landscape Speakers",
              description:
                "Sonance Landscape Series — in-ground satellites and buried subwoofers. Even coverage across the patio. No \"hot spot\" at the back door.",
            },
          ]}
          columns={3}
        />
      </Section>

      <Section title="Equipment Built for Outdoor Living" variant="secondary">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 border border-border">
            <h3 className="text-xl font-bold mb-3">Weatherproof Projectors</h3>
            <p className="text-muted-foreground leading-relaxed">
              4K laser outdoor-rated projection housed in ventilated weatherproof enclosures. Dust-sealed, humidity-tolerant, and thermally managed for Texas summers.
            </p>
          </Card>
          <Card className="p-6 border border-border">
            <h3 className="text-xl font-bold mb-3">Motorized Outdoor Screens</h3>
            <p className="text-muted-foreground leading-relaxed">
              Tensioned, weatherproof screens that retract into a protective housing. Disappear when not in use. Up to 160" diagonal for true outdoor cinema.
            </p>
          </Card>
          <Card className="p-6 border border-border">
            <h3 className="text-xl font-bold mb-3">Sonance Outdoor Speakers</h3>
            <p className="text-muted-foreground leading-relaxed">
              Landscape and Patio Series speakers — UV-stable, sealed cabinets, buried subwoofers. Engineered specifically for year-round outdoor installation.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="San Antonio Climate Considerations">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Texas weather is brutal on AV gear. Heat above 100°F, sudden rain, high humidity, and direct UV will destroy anything not rated for it. We've spent 25 years learning which components actually survive a San Antonio summer — and which marketing claims don't hold up past the second year.
          </p>
          <ul className="space-y-3 text-lg text-muted-foreground list-disc pl-6">
            <li>Every outdoor component rated for direct sun and rain</li>
            <li>UV-stable, direct-burial wiring for landscape runs</li>
            <li>Whole-system surge protection — lightning is a real Texas risk</li>
            <li>Proper drainage and ventilation on every enclosure we build</li>
            <li>Control hardware stays indoors; weatherproof repeaters extend outdoors</li>
          </ul>
        </div>
      </Section>

      <Section title="Pricing" variant="secondary">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 border border-border">
            <p className="text-sm font-semibold text-primary mb-2">COVERED PATIO TV</p>
            <p className="text-3xl font-bold mb-3">$8K – $15K</p>
            <p className="text-muted-foreground leading-relaxed">Outdoor TV, Sonance patio speakers, weatherproof receiver, concealed wiring.</p>
          </Card>
          <Card className="p-6 border-2 border-primary">
            <p className="text-sm font-semibold text-primary mb-2">POOL PROJECTION</p>
            <p className="text-3xl font-bold mb-3">$20K – $40K</p>
            <p className="text-muted-foreground leading-relaxed">Motorized screen, weatherproof 4K laser, landscape audio, full control integration.</p>
          </Card>
          <Card className="p-6 border border-border">
            <p className="text-sm font-semibold text-primary mb-2">ESTATE OUTDOOR</p>
            <p className="text-3xl font-bold mb-3">$40K+</p>
            <p className="text-muted-foreground leading-relaxed">Multi-zone outdoor entertainment — TVs, projection, landscape audio zones, integrated lighting.</p>
          </Card>
        </div>
      </Section>
    </ServicePageLayout>
  );
}
