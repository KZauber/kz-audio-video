import { Card } from "@/components/ui/card";
import ServicePageLayout, { FeatureGrid, Section } from "@/components/ServicePageLayout";

export default function SmartHomeAutomation() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Smart Home Automation",
    provider: { "@type": "LocalBusiness", name: "KZ Audio & Video", telephone: "+1-210-981-4098" },
    areaServed: "San Antonio, TX",
    description:
      "Control4, JoshAI, and Lutron smart home integration in San Antonio. Unified control of AV, lighting, shades, and climate from one app, remote, or voice command.",
  };

  return (
    <ServicePageLayout
      metaTitle="Smart Home Automation San Antonio TX | KZ Audio & Video"
      metaDescription="Control4, JoshAI, and Lutron dealer in San Antonio. Unify AV, lighting, shades, and climate into one-button control. 25+ years installing luxury automation."
      h1="Smart Home Automation San Antonio TX"
      heroSubtitle="One app, one remote, or your voice. We integrate AV, lighting, shades, and climate into a single system that actually feels effortless — the way luxury automation is supposed to work."
      jsonLd={jsonLd}
      faqs={[
        {
          q: "What's the difference between Control4 and JoshAI?",
          a: "Control4 is the established gold standard for home automation — mature, reliable, deep integration with AV. JoshAI is the new voice-first luxury platform where you simply speak what you want (\"Josh, movie time\") and the house responds. They're often installed together: Control4 as the engine, JoshAI as the voice layer.",
        },
        {
          q: "Do I need to replace all my existing devices?",
          a: "Usually not. We integrate with most existing receivers, streaming devices, TVs, thermostats, and security systems. The goal is one unified control experience, not a rip-and-replace.",
        },
        {
          q: "Can I control my home remotely?",
          a: "Yes. Control4 and JoshAI both support secure remote access via mobile app — arm security, adjust climate, check who rang the doorbell, and close shades from anywhere.",
        },
        {
          q: "How much does smart home automation cost?",
          a: "An entry Control4 hub with AV and lighting integration starts around $8,000–$12,000. Full-home automation with Lutron shades and JoshAI voice control typically runs $25,000–$75,000+. We price everything in writing before any work begins.",
        },
        {
          q: "Is it reliable long-term?",
          a: "Only when installed by a certified dealer. We're authorized for Control4, JoshAI, and Lutron, which means proper system architecture, firmware support, and a named service relationship — not a hobbyist setup cobbled together from Amazon.",
        },
      ]}
    >
      <Section
        title="What We Automate"
        intro="A true smart home isn't a pile of apps — it's one system. We integrate the systems that matter."
      >
        <FeatureGrid
          items={[
            {
              title: "Audio & Video",
              description:
                "Every TV, speaker, and streaming source in the house, controlled from one interface. Multi-room audio that actually follows you from room to room.",
            },
            {
              title: "Lighting (Lutron)",
              description:
                "Lutron RadioRA or HomeWorks — from simple scene control to whole-house keypad systems. Dimmers that always set the mood you picked, not whatever anyone last touched.",
            },
            {
              title: "Motorized Shades",
              description:
                "Lutron shades that lower at sunset, protect your art from UV, or drop with the theater lights. Quiet, fast, and available in hundreds of fabrics.",
            },
            {
              title: "Climate Integration",
              description:
                "Ecobee, Honeywell, or native HVAC integration. Climate follows your schedule, your occupancy, and your scenes — cooler when the theater's running, warmer when the sun drops.",
            },
          ]}
        />
      </Section>

      <Section title="Platforms We Install" variant="secondary">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 border border-border">
            <p className="text-sm font-semibold text-primary mb-2">GOLD STANDARD</p>
            <h3 className="text-2xl font-bold mb-3">Control4</h3>
            <p className="text-muted-foreground leading-relaxed">
              The most mature dealer-only automation platform in North America. Deep AV integration, rock-solid reliability, and a clean app your family will actually use.
            </p>
          </Card>
          <Card className="p-6 border-2 border-primary">
            <p className="text-sm font-semibold text-primary mb-2">VOICE-FIRST LUXURY</p>
            <h3 className="text-2xl font-bold mb-3">JoshAI</h3>
            <p className="text-muted-foreground leading-relaxed">
              The only voice assistant designed for luxury smart homes. Private, local-first, and brilliantly conversational. "Josh, good night" — and the house responds.
            </p>
          </Card>
          <Card className="p-6 border border-border">
            <p className="text-sm font-semibold text-primary mb-2">LIGHTING & SHADES</p>
            <h3 className="text-2xl font-bold mb-3">Lutron</h3>
            <p className="text-muted-foreground leading-relaxed">
              The category-defining brand for dimming, keypads, and motorized shades. Integrates natively with Control4 and JoshAI for whole-house scenes.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="One-Button Control — What It Actually Means">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 border-2 border-primary">
            <p className="text-sm font-semibold text-primary mb-2">EXAMPLE: MOVIE MODE</p>
            <h3 className="text-2xl font-bold mb-4">Press one button. Here's what happens:</h3>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li>Overhead lights fade from 100% to 10% over six seconds</li>
              <li>Accent sconces dim to 25% for step-lighting</li>
              <li>Motorized screen drops from the ceiling</li>
              <li>Projector warms up and switches to the right input</li>
              <li>Dolby Atmos receiver powers on to the calibrated movie preset</li>
              <li>Motorized shades close for full light control</li>
              <li>HVAC adjusts one degree cooler for two hours</li>
            </ul>
            <p className="text-lg font-semibold text-foreground mt-6">
              That's what one button is supposed to do — and why smart homes are worth installing correctly.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Pricing" variant="secondary">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 border border-border">
            <p className="text-sm font-semibold text-primary mb-2">ENTRY CONTROL4</p>
            <p className="text-3xl font-bold mb-3">$8K – $12K</p>
            <p className="text-muted-foreground leading-relaxed">Core hub, AV integration, lighting scenes for main living areas, app-based control.</p>
          </Card>
          <Card className="p-6 border-2 border-primary">
            <p className="text-sm font-semibold text-primary mb-2">FULL-HOME AUTOMATION</p>
            <p className="text-3xl font-bold mb-3">$25K – $75K</p>
            <p className="text-muted-foreground leading-relaxed">Whole-house Lutron, motorized shades, Control4 or JoshAI, keypads throughout.</p>
          </Card>
          <Card className="p-6 border border-border">
            <p className="text-sm font-semibold text-primary mb-2">FLAGSHIP</p>
            <p className="text-3xl font-bold mb-3">$75K+</p>
            <p className="text-muted-foreground leading-relaxed">Estate-scale installations with redundant networks, JoshAI voice, and deep third-party integration.</p>
          </Card>
        </div>
      </Section>
    </ServicePageLayout>
  );
}
