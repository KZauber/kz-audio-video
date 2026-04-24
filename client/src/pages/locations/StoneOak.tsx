import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServicePageLayout, {
  FeatureGrid,
  Section,
} from "@/components/ServicePageLayout";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const SERVICES = [
  { href: "/services/home-theater-installation", label: "Home Theater Installation" },
  { href: "/services/av-repair", label: "AV Repair & Home Theater Rescue" },
  { href: "/services/surround-sound", label: "Surround Sound Installation" },
  { href: "/services/smart-home-automation", label: "Smart Home Automation" },
  { href: "/services/tv-mounting", label: "TV Mounting" },
  { href: "/services/outdoor-home-theater", label: "Outdoor Home Theater" },
  { href: "/services/home-audio", label: "Whole Home Audio" },
];

export default function StoneOak() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "KZ Audio & Video",
    description:
      "Home theater installation and smart home automation in Stone Oak, San Antonio TX — 25+ years.",
    telephone: "+1-210-981-4098",
    areaServed: {
      "@type": "Place",
      name: "Stone Oak, San Antonio, TX",
    },
    priceRange: "$$$",
  };

  return (
    <ServicePageLayout
      metaTitle="Home Theater Installation Stone Oak TX | KZ Audio & Video"
      metaDescription="Home theater installation in Stone Oak, San Antonio TX. KZ Audio & Video has served Stone Oak homeowners for 25+ years. Call (210) 981-4098."
      h1="Home Theater Installation in Stone Oak, TX"
      heroSubtitle="Stone Oak homes are built for entertainment. Large media rooms, dedicated theater spaces, three-car garages turning into game rooms. We've been designing AV for this neighborhood for 25+ years."
      jsonLd={jsonLd}
      faqs={[
        {
          q: "How often do you work in Stone Oak?",
          a: "Weekly. Stone Oak is one of our top three service areas — dedicated home theaters, whole-home automation, outdoor patios, and upgrades on systems we installed years ago are all regular jobs for us here.",
        },
        {
          q: "Do you handle pre-wire for new construction in Stone Oak?",
          a: "Yes. We partner with several custom home builders working in and around Stone Oak. We come in at pre-drywall to plan conduit, speaker boxes, projector mounts, and low-voltage so everything is ready when drywall closes up.",
        },
        {
          q: "Can you upgrade my existing Stone Oak home theater?",
          a: "Yes — a big share of our Stone Oak work is upgrading 10- to 15-year-old systems. HDMI handshake failures, dead receivers, old 1080p projectors getting replaced with 4K laser. We rescue what's worth saving and replace what's not.",
        },
      ]}
    >
      <Section
        title="One of San Antonio's Premier Neighborhoods"
        intro="Stone Oak has been one of our primary service areas since we opened in 2001. We've wired hundreds of homes here — from the earliest builds along Stone Oak Parkway to the newest gated communities further north."
      >
        <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed text-lg">
          We know the builders. We know the floor plans. We know which streets still have copper phone pre-wire you can repurpose and which ones don't. When you call us about a Stone Oak home, there's a very good chance we've been inside the same model before — or we installed AV in the house three doors down. That's the difference a quarter-century of local work makes.
        </p>
      </Section>

      <Section title="Stone Oak Homes Are Built for Entertainment" variant="secondary">
        <FeatureGrid
          items={[
            {
              title: "Dedicated Media Rooms",
              description:
                "Most Stone Oak homes have a room that was designed to be a theater — tiered seating, no windows, pre-wired for surround. We build those out into reference-grade rooms with 4K laser projection and 7.1.4 Dolby Atmos.",
            },
            {
              title: "Large Great Rooms",
              description:
                "20-foot ceilings, open kitchens, and two-story living areas mean speaker placement, acoustics, and hidden wiring matter more — not less. We design specifically for open-plan homes.",
            },
            {
              title: "Outdoor Living Spaces",
              description:
                "Stone Oak backyards usually include a pool, an outdoor kitchen, and covered patios — all wired for audio and outdoor TVs that actually survive Texas summers.",
            },
            {
              title: "Whole-Home Integration",
              description:
                "A proper Stone Oak build ties the theater, great room, kitchen, primary suite, outdoor patio, and garage into one Control4 or JoshAI system — one app, one remote, one voice command.",
            },
          ]}
          columns={2}
        />
      </Section>

      <Section
        title="Services in Stone Oak"
        intro="The full KZ Audio & Video lineup — available right here in your neighborhood."
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
    </ServicePageLayout>
  );
}
