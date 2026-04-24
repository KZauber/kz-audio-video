import { Card } from "@/components/ui/card";
import ServicePageLayout, { FeatureGrid, Section } from "@/components/ServicePageLayout";

export default function SurroundSound() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Surround Sound Installation",
    provider: { "@type": "LocalBusiness", name: "KZ Audio & Video", telephone: "+1-210-981-4098" },
    areaServed: "San Antonio, TX",
    description:
      "Professional surround sound installation in San Antonio — 5.1, 7.1, and Dolby Atmos systems from Klipsch, Sonance, and SVS. Calibrated to your room.",
  };

  return (
    <ServicePageLayout
      metaTitle="Surround Sound Installation San Antonio TX | KZ Audio & Video"
      metaDescription="Expert surround sound installation in San Antonio — 5.1, 7.1, 5.1.2 and 7.1.4 Dolby Atmos systems. Klipsch, Sonance, SVS. Calibrated by specialists. 25+ years."
      h1="Surround Sound Installation San Antonio TX"
      heroSubtitle="From a first 5.1 upgrade to a full 7.1.4 Dolby Atmos immersion rig — we design, install, and calibrate surround sound systems that actually sound the way they're supposed to."
      jsonLd={jsonLd}
      faqs={[
        {
          q: "What's the difference between 5.1, 7.1, and Atmos?",
          a: "The numbers describe speaker count: five main speakers + one subwoofer, seven + one, and so on. Atmos adds overhead or up-firing height channels (the \".2\" or \".4\") for a true three-dimensional soundfield. More channels means more precise placement of sounds — a helicopter can fly across your ceiling.",
        },
        {
          q: "Do I need in-wall or in-ceiling speakers?",
          a: "Not required, but it's often the best result for aesthetics and performance. We install Sonance and Klipsch architectural speakers that disappear into the ceiling or wall without compromising sound quality.",
        },
        {
          q: "How important is calibration?",
          a: "Critical. Uncalibrated systems often sound worse than entry-level soundbars. We measure your room and set crossover points, distances, levels, and EQ so every speaker is pulling its weight.",
        },
        {
          q: "Can surround sound work in an open floor plan?",
          a: "Yes, with planning. We've done great-room Atmos systems across the Hill Country where the seating area is the acoustic center. Speaker placement and subwoofer positioning matter more than having four walls.",
        },
        {
          q: "What's a realistic budget?",
          a: "Quality surround sound starts around $5,000 installed for a clean 5.1, climbs to $15,000+ for 7.1.4 Atmos in architectural speakers with proper calibration and subwoofer array. We publish this range because you deserve to know up front.",
        },
      ]}
    >
      <Section
        title="System Types"
        intro="We design surround systems to match the room, the seating, and how you'll actually listen."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              label: "5.1",
              title: "Entry Surround",
              description: "Five speakers, one subwoofer. A real step up from TV audio — clear dialog, proper bass, discrete rear channels.",
            },
            {
              label: "7.1",
              title: "Enhanced Surround",
              description: "Adds rear-surround channels for larger rooms and second rows of seating. Noticeable improvement in movie immersion.",
            },
            {
              label: "5.1.2",
              title: "Dolby Atmos",
              description: "Adds two overhead or up-firing height channels. The first step into object-based audio. Great for most media rooms.",
            },
            {
              label: "7.1.4",
              title: "Full Atmos Immersion",
              description: "The reference experience. Four overhead channels plus full 7.1 base layer. Cinema-grade precision in your home.",
            },
          ].map((tier) => (
            <Card key={tier.label} className="p-6 border border-border">
              <p className="text-3xl font-bold text-primary mb-2">{tier.label}</p>
              <h3 className="text-lg font-bold mb-2 text-foreground">{tier.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{tier.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="What Makes Great Sound" variant="secondary">
        <FeatureGrid
          items={[
            {
              title: "Proper Speaker Placement",
              description:
                "Angles, distances, and heights are not guesses. We follow Dolby and THX reference positioning — and adjust for your actual room — so imaging and dialog are locked in.",
            },
            {
              title: "Room Acoustics",
              description:
                "Hard floors, glass walls, and open ceilings ruin surround. We assess the room and recommend acoustic treatment where it matters — often invisible, always targeted.",
            },
            {
              title: "Professional Calibration",
              description:
                "We calibrate with measurement microphones and pro software — not the shortcut auto-EQ built into the receiver. The result is a system that sounds the way the mix engineer intended.",
            },
          ]}
          columns={3}
        />
      </Section>

      <Section title="Our Brands">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 border border-border text-center">
            <h3 className="text-2xl font-bold mb-3">Klipsch</h3>
            <p className="text-muted-foreground leading-relaxed">
              Reference Premiere — our workhorse. Dynamic, efficient, world-class dialog clarity. Great in Texas-scale great rooms.
            </p>
          </Card>
          <Card className="p-6 border border-border text-center">
            <h3 className="text-2xl font-bold mb-3">Sonance</h3>
            <p className="text-muted-foreground leading-relaxed">
              The gold standard for in-wall and invisible architectural speakers. Disappear into the room. Flawless for modern interiors.
            </p>
          </Card>
          <Card className="p-6 border border-border text-center">
            <h3 className="text-2xl font-bold mb-3">SVS Subwoofers</h3>
            <p className="text-muted-foreground leading-relaxed">
              Reference-grade bass. Sealed or ported. Single sub for most rooms, dual-subwoofer arrays for dedicated theaters.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Pricing" variant="secondary">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 border border-border">
            <p className="text-sm font-semibold text-primary mb-2">5.1 SYSTEM</p>
            <p className="text-3xl font-bold mb-3">$5K – $8K</p>
            <p className="text-muted-foreground leading-relaxed">Installed, wired, and calibrated. Klipsch Reference or in-wall architectural.</p>
          </Card>
          <Card className="p-6 border-2 border-primary">
            <p className="text-sm font-semibold text-primary mb-2">7.1.4 ATMOS</p>
            <p className="text-3xl font-bold mb-3">$10K – $15K</p>
            <p className="text-muted-foreground leading-relaxed">Full Dolby Atmos with overheads, SVS subwoofer, professional calibration.</p>
          </Card>
          <Card className="p-6 border border-border">
            <p className="text-sm font-semibold text-primary mb-2">REFERENCE</p>
            <p className="text-3xl font-bold mb-3">$20K+</p>
            <p className="text-muted-foreground leading-relaxed">Sonance Invisible Series, dual-sub arrays, acoustic treatment, dedicated amplification.</p>
          </Card>
        </div>
      </Section>
    </ServicePageLayout>
  );
}
