import ServicePageLayout, { Section } from "@/components/ServicePageLayout";

export default function DolbyAtmosExplained() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Is Dolby Atmos and Do You Need It in Your Home Theater?",
    author: { "@type": "Person", name: "Kelly Zauber" },
    publisher: {
      "@type": "Organization",
      name: "KZ Audio & Video",
      telephone: "+1-210-981-4098",
    },
    description:
      "Dolby Atmos explained in plain English — what it is, what it requires, and whether it's worth it for your San Antonio home theater.",
  };

  return (
    <ServicePageLayout
      metaTitle="What Is Dolby Atmos and Do You Need It? | KZ Audio & Video San Antonio"
      metaDescription="Dolby Atmos explained — overhead sound channels, 5.1.2 vs 7.1.4 setups, what content supports it, and whether it's worth it for your home theater."
      h1="What Is Dolby Atmos and Do You Need It in Your Home Theater?"
      heroSubtitle="Atmos is the biggest leap in home sound in 20 years — and it's also misunderstood. Here's what it actually does, what it takes to run it, and whether it's worth it for your room."
      jsonLd={jsonLd}
      faqs={[
        {
          q: "Can I add Atmos to an existing system?",
          a: "Sometimes. If you already have a capable receiver and the ceiling allows for speakers or in-ceiling cutouts, yes. If your receiver is more than five or six years old, you'll probably need to replace it. We'll assess in a free consultation.",
        },
        {
          q: "Does Atmos work with a soundbar?",
          a: "Technically some soundbars advertise Atmos via 'upfiring' drivers that bounce sound off the ceiling. It's better than nothing, but it's not the same as real overhead speakers. For a real Atmos experience, you need actual ceiling channels.",
        },
        {
          q: "Is Atmos worth it for a living room?",
          a: "Depends on the ceiling and the layout. Flat 9-foot ceilings over a defined seating area — yes, it's great. Vaulted ceilings over an open great room — it gets tricky. We design each room on its own merits.",
        },
      ]}
    >
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-4 text-foreground">What Atmos Actually Is</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            For 30 years, home surround sound has been about left, right, center, rear, and a subwoofer. Sound moved around you horizontally — the helicopter flew left to right. That's 5.1 surround. It's fine, but everything is happening on one flat plane at ear level.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            Dolby Atmos adds <strong className="text-foreground">height</strong>. Speakers in the ceiling. Sound objects that can move in three dimensions around you — not just side to side, but up and down. The helicopter doesn't fly left to right anymore. It flies over your head.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            Technically, Atmos is object-based audio. Instead of mixing sound into fixed channels, sound designers place individual objects (a bullet, a voice, a raindrop) in 3D space, and the receiver figures out which speakers to drive to put each object where it belongs. That's why Atmos scales from a simple 5.1.2 setup to a full Dolby commercial cinema — same content, different speaker count.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">What It Takes to Run It</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            The format for Atmos configurations is "X.Y.Z" where X is floor-level speakers, Y is subs, and Z is overhead channels.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            <strong className="text-foreground">Minimum:</strong> 5.1.2 — five floor-level speakers, one sub, two ceiling speakers. This is the entry point and it's genuinely impressive.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            <strong className="text-foreground">Ideal for a dedicated theater:</strong> 7.1.4 — seven floor-level speakers (adding side surrounds), one sub (or more — we often spec two), and four ceiling speakers in a rectangular pattern over the seating. This is where Atmos really shows off.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            You also need an Atmos-capable AV receiver (anything current from Denon, Marantz, Integra, Yamaha, etc.) and Atmos content.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">What Content Supports It</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            A lot, now. Netflix has Atmos on most originals. Apple TV+ is fully Atmos. Disney+ has Atmos on most first-party content. 4K Blu-rays almost always include an Atmos track. Many streaming concerts and live events are mixed in Atmos now too.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            In 2026, if you've got a 4K streamer or a 4K Blu-ray player, you're not going to run out of Atmos content.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">The First Time I Heard It Properly</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            I remember the first time I calibrated a proper 7.1.4 Atmos theater. We were testing with a thunderstorm scene — rain falling, distant thunder, the storm building overhead. And when the first clap of thunder cracked <em>above</em> me, I ducked. Involuntarily. My brain was so convinced there was weather in the room that my body reacted.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            That's the difference. Traditional surround sound is a wall of sound around you. Atmos is <em>atmosphere</em> — and that's not a coincidence of naming.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">Is It Worth It?</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            <strong className="text-foreground">For a dedicated theater — absolutely.</strong> If you're building or remodeling a dedicated room, Atmos is the standard now. Anything less is a compromise you'll regret.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            <strong className="text-foreground">For a living room — it depends.</strong> Ceiling height, layout, seating position, and whether you can put real speakers in the ceiling all matter. On a flat 9-foot ceiling with a defined seating area, it's great. On a 20-foot vaulted great room, it gets more complex — and sometimes the right call is a well-designed 5.1 or 7.1 instead of a compromised Atmos setup.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            That's the kind of judgment call we make during a consultation. Sometimes yes, sometimes no — but always with a reason.
          </p>

          <div className="mt-10 p-6 bg-secondary rounded-lg border border-border">
            <p className="text-lg font-semibold text-foreground mb-2">Want Atmos in your theater?</p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Call <a href="tel:2109814098" className="text-primary font-semibold">(210) 981-4098</a>. Free consultation, honest advice on whether it's the right fit for your room.
            </p>
          </div>
        </div>
      </Section>
    </ServicePageLayout>
  );
}
