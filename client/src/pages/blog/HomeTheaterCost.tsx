import { Card } from "@/components/ui/card";
import ServicePageLayout, { Section } from "@/components/ServicePageLayout";

export default function HomeTheaterCost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Much Does a Home Theater Cost in San Antonio? (2026 Guide)",
    author: { "@type": "Person", name: "Kelly Zauber" },
    publisher: {
      "@type": "Organization",
      name: "KZ Audio & Video",
      telephone: "+1-210-981-4098",
    },
    datePublished: "2026-01-15",
    description:
      "Honest pricing for home theater installation in San Antonio — media rooms from $8K, dedicated theaters $20K–$50K, premium builds $50K–$80K.",
  };

  return (
    <ServicePageLayout
      metaTitle="How Much Does a Home Theater Cost in San Antonio? (2026 Guide) | KZ Audio & Video"
      metaDescription="Three tiers of home theater pricing in San Antonio for 2026 — media room $8K–$15K, dedicated theater $20K–$50K, premium $50K–$80K. What drives cost and what cheap installs actually cost."
      h1="How Much Does a Home Theater Cost in San Antonio? (2026 Guide)"
      heroSubtitle="Three tiers. Honest numbers. What you actually get at each price — and what cheap installs really cost once you factor in the callbacks."
      jsonLd={jsonLd}
      faqs={[
        {
          q: "Why can't you just give me one number?",
          a: "Because a 70-inch TV with a soundbar is not the same project as a 150-inch laser projector with Dolby Atmos and Control4. Honest pricing means honest ranges that match what you're actually building.",
        },
        {
          q: "What's included in a KZ quote?",
          a: "Everything. Equipment, labor, wiring, racks, terminations, programming, calibration, and training. The number we give you up front is the number you pay — no change orders for anything we should have caught on day one.",
        },
        {
          q: "Can I start smaller and add later?",
          a: "Yes, and we design that way when it's the right answer. A properly pre-wired room can start as a $10K media room and grow into a $50K theater without tearing anything out. That's one of the advantages of having us involved early.",
        },
      ]}
    >
      <Section>
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            "How much does a home theater cost?" is the number one question we get. The honest answer is "it depends" — but that's not useful, so here are real numbers from the jobs we actually build in San Antonio, updated for 2026.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            There are three broad tiers. Most of our clients fall cleanly into one of them once they describe what they want the room to do.
          </p>
        </div>
      </Section>

      <Section title="The Three Tiers" variant="secondary">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 border border-border">
            <p className="text-sm font-semibold text-primary mb-2">MEDIA ROOM</p>
            <p className="text-3xl font-bold mb-3">$8K – $15K</p>
            <p className="text-muted-foreground leading-relaxed">
              Premium 85"+ TV or entry-level projector, 5.1 or 5.1.2 Dolby Atmos surround, a basic smart-control hub, and clean concealed wiring. Right for family rooms, bonus rooms, and multi-purpose great rooms.
            </p>
          </Card>
          <Card className="p-6 border-2 border-primary">
            <p className="text-sm font-semibold text-primary mb-2">DEDICATED THEATER</p>
            <p className="text-3xl font-bold mb-3">$20K – $50K</p>
            <p className="text-muted-foreground leading-relaxed">
              4K laser projector, motorized cinemascope screen, 7.1.4 Dolby Atmos with ceiling speakers, acoustic treatment, and Control4 one-button operation. Right for the room that was <em>designed</em> to be a theater.
            </p>
          </Card>
          <Card className="p-6 border border-border">
            <p className="text-sm font-semibold text-primary mb-2">PREMIUM</p>
            <p className="text-3xl font-bold mb-3">$50K – $80K+</p>
            <p className="text-muted-foreground leading-relaxed">
              Reference JVC laser, custom Sonance Invisible or Klipsch THX, Savant or JoshAI voice control, full home integration across lighting, shades, HVAC, and climate. No compromises.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="What Actually Drives Cost">
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-muted-foreground leading-relaxed text-lg">
            <strong className="text-foreground">Room size.</strong> A 20-foot-wide room needs more speakers, more power, and a bigger screen or projector than a 12-foot room. Physics, not marketing.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            <strong className="text-foreground">Projector vs. TV.</strong> A top-shelf 85" TV runs $3K–$5K. A 4K laser projector, motorized screen, and the mount to install them cleanly runs $10K–$25K+. Both can be beautiful — the budget decides.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            <strong className="text-foreground">Dolby Atmos ceiling speakers.</strong> Adding two ceiling channels (5.1.2) is a few thousand. Adding four (7.1.4) with full acoustic treatment is a significant step up — and a significant bump in immersion.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            <strong className="text-foreground">Control system.</strong> A basic Harmony-style remote is a few hundred bucks. A full Control4 hub is a few thousand. Full JoshAI with voice control layered on top runs higher. Complexity costs.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            <strong className="text-foreground">Custom millwork.</strong> Built-in cabinetry, riser platforms, acoustic panels, custom lighting coves — beautiful, but material and labor add up fast.
          </p>
        </div>
      </Section>

      <Section title="What Cheap Installs Actually Cost" variant="secondary">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            The cheapest bid almost always becomes the most expensive install. Here's what we see when clients call us to rescue a job that was done cheap the first time:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed text-lg">
            <li><strong className="text-foreground">Callbacks.</strong> Equipment that never worked right. HDMI handshake failures. Speakers that rattle. You pay twice.</li>
            <li><strong className="text-foreground">Re-wiring.</strong> Wires pulled through the wrong path. Not enough runs. Unlabeled terminations. The next installer has to tear out and redo.</li>
            <li><strong className="text-foreground">Compatibility problems.</strong> Equipment from different brands that don't play well together because nobody designed the system — just bought the parts.</li>
            <li><strong className="text-foreground">No documentation.</strong> When something breaks, nobody knows what's in the walls. Service calls are slow and expensive.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed text-lg mt-4">
            A cheap $8K install that has to be redone becomes a $20K install. We've cleaned up enough of them to know.
          </p>
        </div>
      </Section>

      <Section title="Why Honest Pricing Matters">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            My philosophy after 25 years: <strong className="text-foreground">no surprises.</strong> You get a full written quote before we touch a wall. Every line item. Every piece of equipment. Every labor hour. The number on page one is the number you pay on the final invoice.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            If something comes up mid-job that we missed — that's on us, not on you. If <em>you</em> change scope, we quote the change in writing and you approve it before we do anything. That's how it should work, and it's not how it usually works in this industry.
          </p>
          <div className="mt-8 p-6 bg-secondary rounded-lg border border-border">
            <p className="text-lg font-semibold text-foreground mb-2">Ready for an honest quote?</p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Call <a href="tel:2109814098" className="text-primary font-semibold">(210) 981-4098</a>. Free consultation. Free written quote. No pressure.
            </p>
          </div>
        </div>
      </Section>
    </ServicePageLayout>
  );
}
