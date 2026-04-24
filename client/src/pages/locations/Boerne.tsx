import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServicePageLayout, {
  FeatureGrid,
  Section,
} from "@/components/ServicePageLayout";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const AREAS = ["Boerne", "Fair Oaks Ranch", "Comfort", "Kendall County"];

const SERVICES = [
  { href: "/services/home-theater-installation", label: "Home Theater Installation" },
  { href: "/services/av-repair", label: "AV Repair & Home Theater Rescue" },
  { href: "/services/surround-sound", label: "Surround Sound Installation" },
  { href: "/services/smart-home-automation", label: "Smart Home Automation" },
  { href: "/services/tv-mounting", label: "TV Mounting" },
  { href: "/services/outdoor-home-theater", label: "Outdoor Home Theater" },
  { href: "/services/home-audio", label: "Whole Home Audio" },
];

export default function Boerne() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "KZ Audio & Video",
    description:
      "Custom home theater installation in Boerne TX and the Texas Hill Country. 25+ years experience.",
    telephone: "+1-210-981-4098",
    areaServed: {
      "@type": "City",
      name: "Boerne, TX",
    },
    priceRange: "$$$",
  };

  return (
    <ServicePageLayout
      metaTitle="Home Theater Installation Boerne TX | KZ Audio & Video"
      metaDescription="Custom home theater installation in Boerne TX and the Texas Hill Country. KZ Audio & Video — 25+ years experience. Call (210) 981-4098 for a free consultation."
      h1="Custom Home Theater Installation in Boerne, TX"
      heroSubtitle="Hill Country luxury homes deserve an AV team that understands high ceilings, open floor plans, and outdoor living. 25+ years of custom installs across Boerne, Fair Oaks Ranch, and Kendall County."
      jsonLd={jsonLd}
      faqs={[
        {
          q: "Do you regularly work in Boerne and Kendall County?",
          a: "Yes — Boerne and the surrounding Hill Country is one of our busiest service areas. We work in Boerne, Fair Oaks Ranch, Comfort, and across Kendall County weekly. Many of our projects come through referrals from local custom home builders.",
        },
        {
          q: "Can you work with our custom home builder?",
          a: "Yes. Hill Country new construction is a big share of our work. We prefer to be involved at the pre-drywall stage so conduit, in-wall speaker boxes, and projector wiring are planned with the builder — not added on top later.",
        },
        {
          q: "Do Hill Country homes need special considerations?",
          a: "Absolutely. High ceilings change acoustics and speaker placement. Stone and metal roofing changes wireless signal behavior. Outdoor patios, pool areas, and casitas need weatherproof gear rated for Texas summers. We design for those realities — not a generic spec sheet.",
        },
        {
          q: "How far outside Boerne do you service?",
          a: "We routinely work as far north as Comfort and west into Kendall County. If you're in the Boerne area and unsure whether we cover your spot, call — the answer is usually yes.",
        },
      ]}
    >
      <Section
        title="Hill Country Homes Deserve Hill Country AV"
        intro="Boerne has seen a building boom of custom luxury homes over the last decade, and we've been on dozens of those jobs from pre-drywall through final calibration. Hill Country homes are not San Antonio tract homes."
      >
        <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed text-lg">
          High ceilings. Open floor plans. Stone and timber construction. Outdoor kitchens, pool-side living, and casitas. Those are great for how you live — and terrible if your AV installer is working off a template. Speaker placement in a 20-foot vaulted great room is not the same problem as a flat-ceilinged tract home. Mesh-routing around stone-and-steel construction is a skill you learn over decades. We've been designing systems for exactly these homes for 25 years.
        </p>
      </Section>

      <Section title="Areas We Serve" variant="secondary">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {AREAS.map((a) => (
            <div
              key={a}
              className="bg-white p-4 rounded-lg border border-border text-center font-semibold text-foreground"
            >
              {a}
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Services in Boerne & the Hill Country"
        intro="The same seven services we offer across San Antonio — engineered for Hill Country homes."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SERVICES.map((s) => (
            <Card key={s.href} className="p-6 border border-border hover:shadow-lg transition flex flex-col">
              <h3 className="text-lg font-bold mb-4 text-foreground flex-1">{s.label}</h3>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full">
                <Link href={s.href}>
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Why KZ for Boerne Homes" variant="secondary">
        <FeatureGrid
          items={[
            {
              title: "We Know Hill Country Homes",
              description:
                "High ceilings, stone walls, open great rooms, dedicated media rooms, poolside patios, casitas. We've built AV for every variation of the Hill Country custom home.",
            },
            {
              title: "Outdoor Theater Specialists",
              description:
                "Pool-side projection, weatherproof 4K TVs, Sonance landscape speakers designed for Texas heat and humidity. Your backyard can be the best room in the house.",
            },
            {
              title: "Builder-Friendly",
              description:
                "We work with Boerne's custom home builders at pre-drywall to pre-wire conduit, speaker boxes, and projector mounts — no retrofits, no compromises, no surprises.",
            },
            {
              title: "Whole-Home Automation",
              description:
                "Control4 and JoshAI across the main house, guest house, outdoor areas, pool, and garage — one app, one voice interface, one system that actually works together.",
            },
          ]}
          columns={2}
        />
      </Section>
    </ServicePageLayout>
  );
}
