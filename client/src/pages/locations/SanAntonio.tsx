import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServicePageLayout, {
  FeatureGrid,
  Section,
} from "@/components/ServicePageLayout";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const NEIGHBORHOODS = [
  "Stone Oak",
  "The Dominion",
  "Alamo Heights",
  "Hollywood Park",
  "Terrell Hills",
  "Shavano Park",
];

const SERVICES = [
  { href: "/services/home-theater-installation", label: "Home Theater Installation" },
  { href: "/services/av-repair", label: "AV Repair & Home Theater Rescue" },
  { href: "/services/surround-sound", label: "Surround Sound Installation" },
  { href: "/services/smart-home-automation", label: "Smart Home Automation" },
  { href: "/services/tv-mounting", label: "TV Mounting" },
  { href: "/services/outdoor-home-theater", label: "Outdoor Home Theater" },
  { href: "/services/home-audio", label: "Whole Home Audio" },
];

export default function SanAntonio() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "KZ Audio & Video",
    description:
      "Custom home theater installation and smart home automation in San Antonio, TX since 2001.",
    telephone: "+1-210-981-4098",
    areaServed: {
      "@type": "City",
      name: "San Antonio, TX",
    },
    priceRange: "$$$",
  };

  return (
    <ServicePageLayout
      metaTitle="Home Theater Installation San Antonio TX | KZ Audio & Video"
      metaDescription="Custom home theater installation in San Antonio TX. KZ Audio & Video — 25+ years serving Stone Oak, The Dominion, Alamo Heights & the Hill Country. Call (210) 981-4098."
      h1="Custom Home Theater Installation in San Antonio, TX"
      heroSubtitle="25+ years of custom home theater, surround sound, and smart home installation across San Antonio — from Stone Oak to Alamo Heights to the Hill Country. Locally owned. No subcontractors."
      jsonLd={jsonLd}
      faqs={[
        {
          q: "How long has KZ Audio & Video been in San Antonio?",
          a: "Since 2001 — 25+ years. Kelly Zauber started the company locally and we've completed 500+ installations across San Antonio and the surrounding Hill Country. Same phone number, same local team.",
        },
        {
          q: "Which San Antonio neighborhoods do you serve?",
          a: "All of them. We work regularly in Stone Oak, The Dominion, Alamo Heights, Hollywood Park, Terrell Hills, Shavano Park, Olmos Park, and every neighborhood in between. If you're inside Loop 1604 or within 45 minutes of it, we're there.",
        },
        {
          q: "Do you use subcontractors?",
          a: "No. Every wire pulled, every speaker placed, every system programmed — it's all our W-2 team. That's why the systems we installed fifteen years ago still work, and why our clients call us back when they remodel.",
        },
        {
          q: "Do you work with San Antonio custom home builders?",
          a: "Yes. We partner with custom home builders across San Antonio and get involved at the pre-drywall stage so wiring, conduit, and speaker boxes are planned properly from day one.",
        },
      ]}
    >
      <Section
        title="San Antonio's Local AV Team Since 2001"
        intro="KZ Audio & Video has been installing custom home theater, smart home automation, and whole-home audio across San Antonio for 25+ years. We're local. We answer the phone. The technician who built your system five years ago is still the one who picks up when something needs attention."
      >
        <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed text-lg">
          San Antonio is where this company started and where we still do 90% of our work. We know the homes — the older stone construction in Alamo Heights, the sprawling new builds in Stone Oak, the custom estates in The Dominion, the Hill Country acreage north of 1604. Each of those comes with different wiring realities, different acoustics, and different expectations. That's the difference between a local installer and a franchise.
        </p>
      </Section>

      <Section title="Neighborhoods We Serve" variant="secondary">
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
          Most of our San Antonio work happens in these neighborhoods — though if you're elsewhere in the city, we're still there.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {NEIGHBORHOODS.map((n) => (
            <div
              key={n}
              className="bg-white p-4 rounded-lg border border-border text-center font-semibold text-foreground"
            >
              {n}
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto mt-10 grid md:grid-cols-2 gap-6">
          <Card className="p-6 border border-border">
            <h3 className="text-xl font-bold mb-3 text-foreground">Stone Oak & North San Antonio</h3>
            <p className="text-muted-foreground leading-relaxed">
              Large-footprint homes with dedicated media rooms, big backyard entertaining spaces, and the budget for reference-grade systems. A big share of our Dolby Atmos and Control4 builds happen here.
            </p>
          </Card>
          <Card className="p-6 border border-border">
            <h3 className="text-xl font-bold mb-3 text-foreground">The Dominion & Shavano Park</h3>
            <p className="text-muted-foreground leading-relaxed">
              Estate-level custom homes — often new construction — with whole-home automation, full Lutron lighting, and JoshAI voice control integrated across every room.
            </p>
          </Card>
          <Card className="p-6 border border-border">
            <h3 className="text-xl font-bold mb-3 text-foreground">Alamo Heights & Terrell Hills</h3>
            <p className="text-muted-foreground leading-relaxed">
              Older homes with stone walls, plaster, and limited chase space. We specialize in the clean, concealed wiring that makes retrofits look like they were there from day one.
            </p>
          </Card>
          <Card className="p-6 border border-border">
            <h3 className="text-xl font-bold mb-3 text-foreground">Hollywood Park & Surrounding</h3>
            <p className="text-muted-foreground leading-relaxed">
              Established neighborhoods where AV repair and system rescue are as common as new installs. If you've got a 10-year-old theater that stopped working, we fix that.
            </p>
          </Card>
        </div>
      </Section>

      <Section
        title="Services in San Antonio"
        intro="Seven focused services — every one of them engineered by the same local team."
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

      <Section title="Why San Antonio Homeowners Choose KZ" variant="secondary">
        <FeatureGrid
          items={[
            {
              title: "Local Since 2001",
              description:
                "Same local phone number for 25+ years. Kelly Zauber founded KZ in San Antonio, and we've stayed here — same team, same office, same reputation we built one install at a time.",
            },
            {
              title: "No Subcontractors — Ever",
              description:
                "Every wire, every speaker, every setting is done by our in-house W-2 team. That's why the work still looks clean ten years later when we come back for an upgrade.",
            },
            {
              title: "We Know San Antonio Homes",
              description:
                "Stone construction in Alamo Heights. Multi-story new builds in Stone Oak. The Dominion estates. We've wired them all and we know what each one needs.",
            },
            {
              title: "Dealer-Authorized Brands",
              description:
                "Control4, JoshAI, Klipsch Reference Premiere, Sonance, Lutron — brands that aren't sold through big-box retailers. Our clients get equipment Best Buy doesn't carry.",
            },
          ]}
          columns={2}
        />
      </Section>
    </ServicePageLayout>
  );
}
