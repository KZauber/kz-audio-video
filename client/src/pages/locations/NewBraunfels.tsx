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

export default function NewBraunfels() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "KZ Audio & Video",
    description:
      "Home theater installation and smart home automation in New Braunfels TX. 25+ years experience.",
    telephone: "+1-210-981-4098",
    areaServed: {
      "@type": "City",
      name: "New Braunfels, TX",
    },
    priceRange: "$$$",
  };

  return (
    <ServicePageLayout
      metaTitle="Home Theater Installation New Braunfels TX | KZ Audio & Video"
      metaDescription="Home theater installation in New Braunfels TX. KZ Audio & Video serves the greater New Braunfels area. Call (210) 981-4098 for a free in-home consultation."
      h1="Home Theater Installation in New Braunfels, TX"
      heroSubtitle="New Braunfels is growing fast — and so are the homes. Custom theater, whole-home audio, and smart home automation from a team that's been doing this for 25+ years."
      jsonLd={jsonLd}
      faqs={[
        {
          q: "Do you service New Braunfels regularly?",
          a: "Yes. New Braunfels and Comal County have been a growing service area for us as more custom homes and subdivisions have gone up. We make the drive several times a week.",
        },
        {
          q: "How do you handle new construction in New Braunfels?",
          a: "Same as anywhere — we prefer pre-drywall involvement to plan conduit, speaker boxes, projector mounts, and low-voltage runs with your builder. That gives you a cleaner install and a lower total cost than adding it all after the fact.",
        },
        {
          q: "Can you do outdoor AV for my pool or patio?",
          a: "Yes. Outdoor theaters, weatherproof TVs, and Sonance landscape speakers are some of our most popular New Braunfels projects — outdoor living is a big part of how homes here are designed.",
        },
      ]}
    >
      <Section
        title="New Braunfels — A Growing Community"
        intro="New Braunfels has doubled in size over the last fifteen years, and the homes being built today are bigger and more custom than ever. Dedicated media rooms, outdoor kitchens, pool-side patios, guest casitas — all of it needs an AV team that can design it as one system."
      >
        <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed text-lg">
          A lot of AV installers in this area are new to the business. We're not. KZ Audio & Video has been in San Antonio since 2001, and we've extended our service north and east as New Braunfels has grown. We're comfortable with new construction pre-wire, with whole-home automation, and with outdoor installs that have to survive Hill Country weather.
        </p>
      </Section>

      <Section
        title="Services in New Braunfels"
        variant="secondary"
        intro="Everything we do across San Antonio and the Hill Country, we do in New Braunfels."
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

      <Section title="Why KZ for New Braunfels">
        <FeatureGrid
          items={[
            {
              title: "25+ Years of Experience",
              description:
                "We've been doing this since 2001. New Braunfels AV companies come and go — our phone number hasn't changed in 25 years.",
            },
            {
              title: "No Subcontractors",
              description:
                "Our in-house W-2 team does every part of your install — design, pre-wire, installation, programming, and calibration. That's why our systems still work a decade later.",
            },
            {
              title: "New-Construction Ready",
              description:
                "We work directly with your builder at pre-drywall so your AV, automation, and low-voltage is planned properly the first time — not retrofitted.",
            },
            {
              title: "Full Range of Services",
              description:
                "Theater, surround, whole-home audio, smart automation, outdoor AV, TV mounting, repair. One team, one number, one system when we're done.",
            },
          ]}
          columns={2}
        />
      </Section>
    </ServicePageLayout>
  );
}
