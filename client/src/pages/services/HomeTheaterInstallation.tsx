import { Card } from "@/components/ui/card";
import ServicePageLayout, {
  FeatureGrid,
  ProcessSteps,
  Section,
} from "@/components/ServicePageLayout";

export default function HomeTheaterInstallation() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "KZ Audio & Video",
      description:
        "Custom home theater installation specialists serving San Antonio and the Texas Hill Country since 2001.",
      telephone: "+1-210-981-4098",
      areaServed: [
        "San Antonio",
        "Stone Oak",
        "Boerne",
        "New Braunfels",
        "Bulverde",
        "Alamo Heights",
        "Fair Oaks Ranch",
        "Helotes",
        "The Dominion",
      ],
      priceRange: "$$$",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Home Theater Installation",
      provider: { "@type": "LocalBusiness", name: "KZ Audio & Video" },
      areaServed: "San Antonio, TX",
      description:
        "Custom home theater design and installation including 4K laser projectors, Dolby Atmos surround, and one-button Control4/JoshAI automation.",
      offers: { "@type": "Offer", priceRange: "$15,000 - $80,000" },
    },
  ];

  return (
    <ServicePageLayout
      metaTitle="Home Theater Installation San Antonio TX | KZ Audio & Video"
      metaDescription="San Antonio's custom home theater specialists. 4K laser projection, Dolby Atmos, and one-button Control4/JoshAI automation. 25+ years. Free consultations."
      h1="San Antonio's Custom Home Theater Specialists"
      heroSubtitle="Reference-grade home theaters — 4K laser projection, Dolby Atmos immersive sound, and one-button control. Designed, installed, and calibrated by a team that's been doing this since 2001."
      jsonLd={jsonLd}
      faqs={[
        {
          q: "Do I need a dedicated room for a home theater?",
          a: "Not necessarily. We design reference-grade dedicated theaters when clients have the space, but we also build stunning media rooms and multi-purpose great rooms. The right acoustic design, lighting, and seating position matters more than having a closed-off room.",
        },
        {
          q: "How long does a home theater installation take?",
          a: "A typical custom theater takes 2–4 weeks from design approval to final calibration. New-construction projects are scheduled around your builder's timeline. Simpler media room builds can be completed in a few days.",
        },
        {
          q: "What brands do you use?",
          a: "We're dealer-authorized for Control4, JoshAI, Klipsch Reference Premiere, Sonance, SVS, JVC, Sony, and Lutron — brands that are not sold through big-box retailers. This gives our clients access to equipment and firmware support the general public can't buy.",
        },
        {
          q: "Can you work with my builder?",
          a: "Yes. We collaborate with custom home builders and remodelers across San Antonio, Boerne, The Dominion, and Stone Oak. We prefer to be involved at the pre-drywall stage so wiring, speaker boxes, and conduit are planned properly.",
        },
        {
          q: "Do you service what you install?",
          a: "Always. Every install includes a post-install walkthrough, system training, and ongoing support. We maintain documentation on every system we build so service calls are fast and accurate.",
        },
      ]}
    >
      <Section
        title="What's Included"
        intro="Every KZ Audio & Video home theater is engineered end-to-end — video, sound, control, and the wiring you'll never see."
      >
        <FeatureGrid
          items={[
            {
              title: "4K Laser Projection",
              description:
                "JVC and Sony 4K laser projectors with motorized cinemascope screens. True cinema scale — 120 to 180 inches — at reference brightness and contrast.",
            },
            {
              title: "Dolby Atmos Surround",
              description:
                "Object-based immersive audio from Klipsch Reference Premiere, Sonance architectural speakers, and SVS subwoofers. Calibrated to your room.",
            },
            {
              title: "Control4 / JoshAI One-Button Control",
              description:
                "Press \"Movie Night\" — lights dim, screen drops, projector warms up, Atmos fires. One app, one remote, or your voice. Nothing fiddly.",
            },
            {
              title: "Clean, Concealed Wiring",
              description:
                "In-wall conduit, labeled racks, tidy terminations. When we leave, you'll see the room — not the system that runs it.",
            },
          ]}
        />
      </Section>

      <Section title="Our Process" variant="secondary">
        <ProcessSteps
          steps={[
            {
              title: "Free Consultation",
              description: "We visit your home, listen to how you'll actually use the space, and answer every question.",
            },
            {
              title: "Custom Design",
              description: "Room layout, equipment spec, wiring plan, and honest written pricing — no surprises later.",
            },
            {
              title: "Professional Install",
              description: "Our W-2 team. No subcontractors. No shortcuts. Every wire labeled, every setting documented.",
            },
            {
              title: "Training & Support",
              description: "A hands-on walkthrough with your family, plus ongoing service backed by 25+ years in business.",
            },
          ]}
        />
      </Section>

      <Section
        title="Honest Pricing"
        intro="Custom home theaters from KZ Audio & Video typically range from $15,000 to $80,000+. We publish the range up front because you deserve to know before you pick up the phone."
      >
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 border border-border">
            <p className="text-sm font-semibold text-primary mb-2">ENTRY CUSTOM</p>
            <p className="text-3xl font-bold mb-3">$15K – $25K</p>
            <p className="text-muted-foreground leading-relaxed">
              Premium media room — 85"+ display or mid-tier projector, 5.1.2 Atmos, Control4 mini hub, concealed wiring.
            </p>
          </Card>
          <Card className="p-6 border-2 border-primary">
            <p className="text-sm font-semibold text-primary mb-2">DEDICATED THEATER</p>
            <p className="text-3xl font-bold mb-3">$25K – $50K</p>
            <p className="text-muted-foreground leading-relaxed">
              4K laser projection, cinemascope screen, 7.1.4 Atmos, acoustic treatment, tiered seating integration.
            </p>
          </Card>
          <Card className="p-6 border border-border">
            <p className="text-sm font-semibold text-primary mb-2">FLAGSHIP</p>
            <p className="text-3xl font-bold mb-3">$50K – $80K+</p>
            <p className="text-muted-foreground leading-relaxed">
              Reference JVC laser, Sonance Invisible Series or Klipsch THX, JoshAI voice control, full lighting & shading automation.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Why KZ Audio & Video" variant="secondary">
        <FeatureGrid
          items={[
            {
              title: "25+ Years in San Antonio",
              description: "Since 2001. 500+ installs. A local phone number that gets answered by the people who built your system.",
            },
            {
              title: "No Subcontractors",
              description: "Every wire you never see was pulled by our W-2 team. That's why our systems still work ten years later.",
            },
            {
              title: "Dealer-Only Brands",
              description: "Control4, JoshAI, Klipsch Reference Premiere, Sonance, JVC, Sony, Lutron — equipment Best Buy doesn't sell.",
            },
            {
              title: "We Stand Behind the Work",
              description: "Documented systems. Named technicians. A support line that rings the same office, not a call center.",
            },
          ]}
          columns={2}
        />
      </Section>
    </ServicePageLayout>
  );
}
