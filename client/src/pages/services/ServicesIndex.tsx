import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServicePageLayout from "@/components/ServicePageLayout";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    href: "/services/home-theater-installation",
    title: "Home Theater Installation",
    description:
      "Reference-grade dedicated theaters and media rooms — 4K laser projection, Dolby Atmos, and one-button Control4/JoshAI automation.",
    price: "$15K – $80K+",
  },
  {
    href: "/services/av-repair",
    title: "AV Repair & Home Theater Rescue",
    description:
      "Your AV system stopped working — we fix that. Dead receivers, HDMI handshake issues, and 10–20 year old system rescues.",
    price: "$150 diagnosis",
  },
  {
    href: "/services/surround-sound",
    title: "Surround Sound Installation",
    description:
      "5.1, 7.1, 5.1.2 and 7.1.4 Dolby Atmos systems. Klipsch, Sonance, and SVS — placed and calibrated for your room.",
    price: "$5K – $20K+",
  },
  {
    href: "/services/smart-home-automation",
    title: "Smart Home Automation",
    description:
      "Control4, JoshAI, and Lutron. AV, lighting, shades, and climate unified into one-button (or one-voice-command) control.",
    price: "$8K – $75K+",
  },
  {
    href: "/services/tv-mounting",
    title: "TV Mounting",
    description:
      "Flat, tilting, full-motion, and over-fireplace installs. Fully concealed wiring on drywall, brick, stone, and concrete.",
    price: "$250 – $750+",
  },
  {
    href: "/services/outdoor-home-theater",
    title: "Outdoor Home Theater",
    description:
      "Poolside projection, weatherproof outdoor TVs, and Sonance landscape speakers — engineered for Texas heat and humidity.",
    price: "$8K – $40K+",
  },
  {
    href: "/services/home-audio",
    title: "Whole Home Audio",
    description:
      "Sonos, in-ceiling, and in-wall architectural audio. Music in every room, one app, calibrated zone by zone.",
    price: "$4.5K – $40K+",
  },
];

export default function ServicesIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "KZ Audio & Video",
    description:
      "Custom home theater, smart home automation, surround sound, and AV repair in San Antonio since 2001.",
    telephone: "+1-210-981-4098",
    areaServed: "San Antonio, TX",
  };

  return (
    <ServicePageLayout
      metaTitle="AV & Home Theater Services San Antonio TX | KZ Audio & Video"
      metaDescription="KZ Audio & Video services — home theater, smart home automation, surround sound, outdoor AV, TV mounting, whole-home audio, and AV repair across San Antonio."
      h1="AV & Smart Home Services in San Antonio"
      heroSubtitle="Seven focused services. 25+ years of custom AV installation in San Antonio and the Texas Hill Country. Free consultations. Honest pricing. No subcontractors."
      jsonLd={jsonLd}
      faqs={[
        {
          q: "Which service do I need?",
          a: "If you're building new or renovating, start with Home Theater Installation or Smart Home Automation — we'll scope everything from there. If an existing system broke, AV Repair is the right door. If you just need a TV mounted, start there and we'll layer in more only if you want it.",
        },
        {
          q: "Do you combine services in one project?",
          a: "Almost always. A typical KZ project includes home theater, whole-home audio, smart home control, and outdoor AV — all engineered to work as one system. Most of our clients hire us once and never call another AV contractor again.",
        },
        {
          q: "Why KZ Audio & Video?",
          a: "25+ years in San Antonio. 500+ installations. Dealer-authorized for Control4, JoshAI, Klipsch, Sonance, and Lutron. No subcontractors — the technicians who build your system are the same people who answer your call five years later.",
        },
      ]}
    >
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Services</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
            Every system we build — new theater, repair, outdoor patio, whole-home audio — is designed, wired, and calibrated by our own team. Pick the service that fits, or call us and we'll help you scope it.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((s) => (
              <Card key={s.href} className="p-6 border border-border hover:shadow-lg transition flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-foreground">{s.title}</h3>
                <p className="text-sm font-semibold text-primary mb-3">{s.price}</p>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{s.description}</p>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full">
                  <Link href={s.href}>
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
