import { Card } from "@/components/ui/card";
import ServicePageLayout, { FeatureGrid, Section } from "@/components/ServicePageLayout";

export default function TVMounting() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "TV Mounting",
    provider: { "@type": "LocalBusiness", name: "KZ Audio & Video", telephone: "+1-210-981-4098" },
    areaServed: "San Antonio, TX",
    description:
      "Professional TV mounting in San Antonio — flat, tilting, full-motion, and over-fireplace installs with fully concealed wiring. Any wall type.",
  };

  return (
    <ServicePageLayout
      metaTitle="TV Mounting San Antonio TX | KZ Audio & Video"
      metaDescription="Professional TV mounting in San Antonio — flat, tilting, full-motion, over-fireplace. Fully concealed wiring, any wall type. 25+ years. Free quotes."
      h1="Professional TV Mounting San Antonio TX"
      heroSubtitle={`Straight, level, and with every cable hidden inside the wall. We mount TVs from 55" to 100"+ on drywall, brick, stone, and concrete — including over-fireplace installs done right.`}
      jsonLd={jsonLd}
      faqs={[
        {
          q: "Can I mount my TV over the fireplace?",
          a: "Usually yes, but the details matter. Heat, mantle depth, and viewing angle are all factors. We measure the temperature above your firebox, recommend tilting mounts when appropriate, and always advise when a different location would give you a better long-term result.",
        },
        {
          q: "Can you hide the cables completely?",
          a: "Yes. For drywall we run HDMI, power, and low-voltage through the wall to a concealed outlet — no visible cords. For brick, stone, or concrete we use surface raceways matched to the wall finish, or in-wall conduit on pre-drywall projects.",
        },
        {
          q: "What kind of mount should I get?",
          a: "Flat mounts are ideal when viewing angle is straight-on and the wall is the right height. Tilting mounts help when the TV is above eye level (common over fireplaces). Full-motion mounts are best for corner installs or rooms with multiple seating angles.",
        },
        {
          q: "Do you service brick, stone, and concrete walls?",
          a: "Yes. We mount on every common Texas wall finish — brick fireplaces, stone accent walls, concrete block outdoor patios, and standard drywall. Each needs different anchors and tools, and we carry them all.",
        },
        {
          q: "How much does TV mounting cost?",
          a: "Straight drywall mounts with concealed wiring typically run $250–$450 depending on TV size. Over-fireplace, brick, and stone installs start at $450. Outdoor and large-format (85\"+) installs are quoted on-site.",
        },
      ]}
    >
      <Section
        title="Our Mounting Services"
        intro="We mount every style, on every wall type, with every cable hidden."
      >
        <FeatureGrid
          items={[
            {
              title: "Flat Mounts",
              description:
                "Slim, low-profile mounts that sit the TV flush against the wall. Ideal when the TV is at proper viewing height.",
            },
            {
              title: "Tilting Mounts",
              description:
                "Angle the screen downward for higher installs — over fireplaces, above consoles, or in family rooms with raised seating.",
            },
            {
              title: "Full-Motion Mounts",
              description:
                "Articulating arms that extend, swivel, and tilt. Best for corner installs or rooms with multiple viewing angles.",
            },
            {
              title: "Above Fireplace",
              description:
                "Done properly — heat-checked, with a tilting mount and in-wall wiring. We'll also tell you honestly when it isn't the right spot.",
            },
          ]}
        />
      </Section>

      <Section title="Hidden Wiring — No Cords Showing" variant="secondary">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            A TV mount without hidden wiring is a half-finished job. Every KZ install includes proper cable concealment — HDMI, power, streaming, and control runs routed inside the wall to a recessed outlet behind the TV. When we leave, you see the television. You don't see the system that powers it.
          </p>
          <ul className="space-y-3 text-lg text-muted-foreground list-disc pl-6">
            <li>Power relocation kits used to keep installation code-compliant</li>
            <li>HDMI and low-voltage run through the wall, not outside it</li>
            <li>Recessed wall plates so nothing protrudes behind the screen</li>
            <li>Every install vacuumed and finished before we leave the house</li>
          </ul>
        </div>
      </Section>

      <Section title="Any Wall Type">
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { label: "Drywall", description: "Most common residential wall — fully concealed wiring standard." },
            { label: "Brick", description: "Fireplaces and accent walls — masonry anchors rated to the TV weight." },
            { label: "Stone", description: "Stacked stone and Texas limestone — specialty anchors and careful drilling." },
            { label: "Concrete", description: "Outdoor patios and block walls — hammer-drilled, concrete-anchored, sealed." },
          ].map((w) => (
            <Card key={w.label} className="p-6 border border-border text-center">
              <h3 className="text-xl font-bold mb-2 text-foreground">{w.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{w.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Pricing" variant="secondary">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 border border-border">
            <p className="text-sm font-semibold text-primary mb-2">STANDARD DRYWALL</p>
            <p className="text-3xl font-bold mb-3">$250 – $450</p>
            <p className="text-muted-foreground leading-relaxed">Flat or tilting mount, concealed HDMI and power, up to 85".</p>
          </Card>
          <Card className="p-6 border-2 border-primary">
            <p className="text-sm font-semibold text-primary mb-2">FIREPLACE / MASONRY</p>
            <p className="text-3xl font-bold mb-3">$450 – $750</p>
            <p className="text-muted-foreground leading-relaxed">Brick or stone installs, heat-rated tilting mount, proper anchoring.</p>
          </Card>
          <Card className="p-6 border border-border">
            <p className="text-sm font-semibold text-primary mb-2">LARGE FORMAT / OUTDOOR</p>
            <p className="text-3xl font-bold mb-3">Quoted On-Site</p>
            <p className="text-muted-foreground leading-relaxed">85"+ flat panels, outdoor TVs, articulating patio installs.</p>
          </Card>
        </div>
      </Section>
    </ServicePageLayout>
  );
}
