import { Card } from "@/components/ui/card";
import ServicePageLayout, { FeatureGrid, Section } from "@/components/ServicePageLayout";

export default function AVRepair() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AV Repair & Home Theater Rescue",
    provider: { "@type": "LocalBusiness", name: "KZ Audio & Video", telephone: "+1-210-981-4098" },
    areaServed: "San Antonio, TX",
    description:
      "Expert AV repair and home theater rescue in San Antonio. We diagnose and fix dead receivers, HDMI handshake issues, and re-engineer outdated control systems. $150 diagnosis.",
    offers: { "@type": "Offer", priceRange: "$150 - $3,000" },
  };

  return (
    <ServicePageLayout
      metaTitle="AV Repair San Antonio TX | Home Theater Repair | KZ Audio & Video"
      metaDescription="San Antonio's home theater repair experts. We fix dead receivers, HDMI handshake issues, and rescue 10–20 year old systems. $150 diagnosis. 25+ years experience."
      h1="Your AV System Stopped Working. We Fix That."
      heroSubtitle="Dead receiver? HDMI handshake nightmare? Spaghetti wiring behind the rack? We've been rescuing San Antonio AV systems for 25 years — including systems we didn't install."
      jsonLd={jsonLd}
      faqs={[
        {
          q: "Is it worth repairing an older home theater?",
          a: "Usually, yes. Many 10–15 year old systems have one failed component (often the AV receiver or a dead IR repeater) while the speakers, wiring, and projector are still excellent. Replacing the failed link is dramatically cheaper than a full rebuild.",
        },
        {
          q: "How quickly can you come out?",
          a: "Most service calls in the San Antonio metro are scheduled within 2–5 business days. Emergency calls for clients with existing service agreements are typically same-day or next-day.",
        },
        {
          q: "Do you work on systems you didn't install?",
          a: "Absolutely. A significant portion of our repair work is on orphaned systems — original installer is out of business, unreachable, or the homeowner just bought the house and nothing works. We diagnose, document, and fix.",
        },
        {
          q: "What does a diagnosis cost?",
          a: "A diagnosis is a flat $150 in the San Antonio metro. That covers an on-site visit, full system assessment, and a written repair plan with honest pricing. If you approve the repair, the diagnostic fee applies toward the work.",
        },
      ]}
    >
      <Section
        title="What We Repair"
        intro="If it's an audio/video or control system and it stopped doing what it used to do, we've seen it before."
      >
        <FeatureGrid
          items={[
            {
              title: "Dead Receivers & Amplifiers",
              description:
                "Denon, Marantz, Yamaha, Integra — we diagnose failed AVRs and either repair, replace, or re-spec based on what your speakers actually need.",
            },
            {
              title: "HDMI Handshake Issues",
              description:
                "The #1 call we get. Black screen, flicker, no 4K, lost audio. Usually a bad cable, a bad input, or a firmware mismatch — we know exactly where to look.",
            },
            {
              title: "Spaghetti Wiring Cleanup",
              description:
                "Racks that look like a nest. We pull it all apart, terminate properly, label every line, and document the system so service calls are never guesswork again.",
            },
            {
              title: "Outdated Systems",
              description:
                "IR-controlled gear, composite video, 1080i projectors. We modernize with 4K, HDMI-CEC or proper control, and streaming sources your family will actually use.",
            },
            {
              title: "Control System Reprogramming",
              description:
                "Control4, URC, RTI — programming left over from a previous installer. We re-write it from scratch when needed so buttons do what they say they do.",
            },
            {
              title: "Replacement with Upgrade Path",
              description:
                "When a component is past repair, we spec the replacement so it integrates cleanly today and leaves a migration path for what comes next.",
            },
          ]}
          columns={3}
        />
      </Section>

      <Section title="The AV Rescue — Our Signature Service" variant="secondary">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            The AV Rescue is how KZ Audio & Video has rebuilt dozens of 10–20 year old home systems across San Antonio. We don't rip it all out. We rescue what's still excellent — usually the speakers, wiring, and structural work — and rebuild the brain of the system around it.
          </p>
          <ul className="space-y-3 text-lg text-muted-foreground mb-6 list-disc pl-6">
            <li>Full audit of every component, cable, and source</li>
            <li>Remove obsolete gear (composite-era switchers, dead IR hubs, yellowed universal remotes)</li>
            <li>Re-wire properly — neat, labeled, serviceable</li>
            <li>Modernize control with Control4 or JoshAI so the family actually uses it</li>
            <li>Written documentation on what's in the rack and how it's configured</li>
          </ul>
          <p className="text-lg font-semibold text-foreground">
            The result: a system that feels brand-new, for a fraction of a full rebuild.
          </p>
        </div>
      </Section>

      <Section title="Why Systems Fail">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 border border-border">
            <p className="text-sm font-semibold text-primary mb-2">#1 CAUSE</p>
            <h3 className="text-xl font-bold mb-3">HDMI Handshake Incompatibility</h3>
            <p className="text-muted-foreground leading-relaxed">
              4K TVs, HDR sources, and older receivers renegotiate signals differently. A single mismatch anywhere in the chain takes the whole system down.
            </p>
          </Card>
          <Card className="p-6 border border-border">
            <p className="text-sm font-semibold text-primary mb-2">#2 CAUSE</p>
            <h3 className="text-xl font-bold mb-3">Dead IR Repeaters & Hubs</h3>
            <p className="text-muted-foreground leading-relaxed">
              Hidden cabinets full of gear relied on IR flashers. Ten years later the emitters fail silently and nothing responds to the remote.
            </p>
          </Card>
          <Card className="p-6 border border-border">
            <p className="text-sm font-semibold text-primary mb-2">#3 CAUSE</p>
            <h3 className="text-xl font-bold mb-3">Bad Original Programming</h3>
            <p className="text-muted-foreground leading-relaxed">
              Systems programmed in a hurry. Macros that never worked. Buttons that do the wrong thing. We rewrite it properly.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Pricing" variant="secondary">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 border border-border">
            <p className="text-sm font-semibold text-primary mb-2">DIAGNOSIS</p>
            <p className="text-3xl font-bold mb-3">$150 flat</p>
            <p className="text-muted-foreground leading-relaxed">
              On-site assessment of the full system, written repair plan with honest pricing. Applied to repair cost if you proceed.
            </p>
          </Card>
          <Card className="p-6 border-2 border-primary">
            <p className="text-sm font-semibold text-primary mb-2">TYPICAL REPAIR / RESCUE</p>
            <p className="text-3xl font-bold mb-3">$500 – $3,000</p>
            <p className="text-muted-foreground leading-relaxed">
              Covers most single-component repairs and mid-size AV rescues. Larger rebuilds with new receivers, control, or wiring are quoted transparently.
            </p>
          </Card>
        </div>
      </Section>
    </ServicePageLayout>
  );
}
