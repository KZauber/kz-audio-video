import { Card } from "@/components/ui/card";
import ServicePageLayout, { FeatureGrid, Section } from "@/components/ServicePageLayout";

export default function HomeAudio() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Whole Home Audio",
    provider: { "@type": "LocalBusiness", name: "KZ Audio & Video", telephone: "+1-210-981-4098" },
    areaServed: "San Antonio, TX",
    description:
      "Whole-home audio installation in San Antonio — Sonos and architectural in-ceiling speakers. Music in every room, controlled from one app.",
  };

  return (
    <ServicePageLayout
      metaTitle="Whole Home Audio San Antonio TX | KZ Audio & Video"
      metaDescription="Whole-home audio installation in San Antonio — Sonos, in-ceiling, and in-wall architectural speakers. Music everywhere, one app. 25+ years experience."
      h1="Whole Home Audio San Antonio TX"
      heroSubtitle="Music in every room, controlled from one app. From a four-zone Sonos system to estate-scale in-ceiling architecture — we design, wire, and tune it so every room sounds like it was designed for music."
      jsonLd={jsonLd}
      faqs={[
        {
          q: "What's the difference between Sonos and architectural in-ceiling audio?",
          a: "Sonos is wireless and self-contained — best for retrofit homes, additions, or owners who love the Sonos app. Architectural in-ceiling speakers are invisible and premium-sounding, but they require wire runs and an amplifier. Many whole-home systems combine both.",
        },
        {
          q: "Can I add whole-home audio to an existing home without ripping up walls?",
          a: "Yes. Sonos wireless speakers and Sonos Amp with in-ceiling speakers fished through existing attics and closets cover most homes beautifully. We've retrofitted whole-home audio into San Antonio homes of every vintage.",
        },
        {
          q: "How many zones should I plan for?",
          a: "We typically recommend: kitchen, great room, primary bedroom, outdoor patio, and a couple of secondary zones. Four to eight zones covers most homes. Estate projects often run 12–20 independently controlled zones.",
        },
        {
          q: "Does it integrate with my smart home?",
          a: "Yes. Sonos integrates natively with Control4 and JoshAI, so music zones appear in your whole-home automation alongside lighting and AV. Voice control (\"Josh, play jazz in the kitchen\") is fully supported.",
        },
        {
          q: "What's a realistic budget?",
          a: "A four-zone Sonos system with in-ceiling speakers typically runs $4,500–$9,000 installed. Whole-home architectural audio with 8–12 zones and amplifier racks usually lands $15,000–$40,000+. We publish these ranges because you deserve to know.",
        },
      ]}
    >
      <Section
        title="What Whole-Home Audio Actually Means"
        intro="Music follows you from the kitchen to the patio to the primary bedroom, all from one app — and each zone sounds like it was tuned for its room, because it was."
      >
        <FeatureGrid
          items={[
            {
              title: "Every Room, Independently",
              description:
                "Jazz in the kitchen, kids' playlist in the game room, a podcast on the patio — all at the same time, all from one interface.",
            },
            {
              title: "One App, One Control Experience",
              description:
                "Sonos, Control4, or JoshAI — whichever fits your home best. No juggling four different Bluetooth pairings.",
            },
            {
              title: "Streaming Services Native",
              description:
                "Apple Music, Spotify, Tidal, Amazon Music, Pandora, and AirPlay 2 — built in, not bolted on. No separate streaming box required.",
            },
            {
              title: "Tuned to Each Room",
              description:
                "Hard-surface kitchens, carpeted bedrooms, and open great rooms all sound different. We calibrate each zone so everything is balanced.",
            },
          ]}
        />
      </Section>

      <Section title="Sonos Integration" variant="secondary">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Sonos remains the category-defining wireless audio platform — expandable, reliable, and easy enough that a houseguest can figure it out in thirty seconds. We design Sonos systems around your house, not just around the boxes:
          </p>
          <ul className="space-y-3 text-lg text-muted-foreground list-disc pl-6">
            <li>Sonos Amp driving architectural in-ceiling speakers for invisible rooms</li>
            <li>Era 100 and Era 300 standalone speakers where shelf placement makes sense</li>
            <li>Sonos Arc soundbars integrated with the TV and the whole-home system</li>
            <li>Outdoor Sonos-powered landscape zones on covered patios</li>
            <li>Native integration with Control4 and JoshAI for one-app control</li>
          </ul>
        </div>
      </Section>

      <Section title="In-Ceiling & In-Wall Speakers">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 border border-border">
            <h3 className="text-xl font-bold mb-3">Invisible Installation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Round or square grilles painted to match the ceiling. Sonance Invisible Series speakers that actually disappear behind paintable grille-less drywall. No speakers on stands. No boxes on bookshelves.
            </p>
          </Card>
          <Card className="p-6 border border-border">
            <h3 className="text-xl font-bold mb-3">Premium Sound</h3>
            <p className="text-muted-foreground leading-relaxed">
              Sonance and Klipsch architectural speakers sound like much larger bookshelf speakers — wide dispersion, clear voice reproduction, and real bass when paired with an in-wall or hidden subwoofer.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Pricing" variant="secondary">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 border border-border">
            <p className="text-sm font-semibold text-primary mb-2">FOUR-ZONE SONOS</p>
            <p className="text-3xl font-bold mb-3">$4.5K – $9K</p>
            <p className="text-muted-foreground leading-relaxed">Four rooms with in-ceiling speakers driven by Sonos Amps. Great retrofit.</p>
          </Card>
          <Card className="p-6 border-2 border-primary">
            <p className="text-sm font-semibold text-primary mb-2">WHOLE-HOME ARCHITECTURAL</p>
            <p className="text-3xl font-bold mb-3">$15K – $40K</p>
            <p className="text-muted-foreground leading-relaxed">8–12 zones, rack-mounted amplification, architectural speakers, full calibration.</p>
          </Card>
          <Card className="p-6 border border-border">
            <p className="text-sm font-semibold text-primary mb-2">ESTATE</p>
            <p className="text-3xl font-bold mb-3">$40K+</p>
            <p className="text-muted-foreground leading-relaxed">16+ zones, Sonance Invisible Series, keypads, whole-home control integration.</p>
          </Card>
        </div>
      </Section>
    </ServicePageLayout>
  );
}
