import ServicePageLayout, { Section } from "@/components/ServicePageLayout";

export default function OneButtonTheater() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "One Button Turns On Your Entire Home Theater — Here's How",
    author: { "@type": "Person", name: "Kelly Zauber" },
    publisher: {
      "@type": "Organization",
      name: "KZ Audio & Video",
      telephone: "+1-210-981-4098",
    },
    description:
      "Control4, JoshAI, and Lutron turn a home theater into a one-button experience — lights dim, screen drops, projector powers on, movie starts. Here's how it works.",
  };

  return (
    <ServicePageLayout
      metaTitle="One Button Turns On Your Entire Home Theater | KZ Audio & Video"
      metaDescription="One-button home theater control — press 'Movie Night' and lights dim, screen drops, projector powers on, Atmos kicks in. How Control4, JoshAI, and Lutron make it happen."
      h1="One Button Turns On Your Entire Home Theater — Here's How"
      heroSubtitle="Most home theaters require three remotes, specific button sequences, and constant troubleshooting. The right system replaces all of that with one button — or one phrase."
      jsonLd={jsonLd}
      faqs={[
        {
          q: "Can I retrofit one-button control to an existing theater?",
          a: "Usually yes. If your existing equipment has reasonable control ports (IR, IP, or serial), a Control4 or URC hub can wrap around what you already have. We'll evaluate in a free consultation.",
        },
        {
          q: "What's the difference between Control4 and JoshAI?",
          a: "Control4 is a mature, button-and-touchscreen-first platform — reliable, beautiful interfaces, massive dealer network. JoshAI is voice-first — you talk to your house in natural language. Many of our clients run both; they complement each other.",
        },
        {
          q: "Why can't I just buy this at Best Buy?",
          a: "The professional-grade systems (Control4, JoshAI, Lutron RadioRA, Savant) are dealer-only. You can't buy the hardware online, and even if you could, the programming is where the magic lives — and that takes a trained installer.",
        },
      ]}
    >
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-4 text-foreground">The Problem</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            Most home theaters require a small ceremony to start a movie. Grab the TV remote. Turn on the TV. Find the receiver remote. Turn on the receiver, switch to the right HDMI input, set the audio mode. Find the streaming remote. Launch the app. Dim the lights manually. Close the shades. Forget which remote does what three times along the way.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            I've walked into homes where nobody watches movies anymore because it's <em>too annoying to start one</em>. That's not a theater. That's a very expensive shrine.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">What One-Button Control Actually Means</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            You press one button. Or you say one phrase — "start movie night." And in the next 15 seconds:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed text-lg mb-4">
            <li>The lights dim to 20%.</li>
            <li>The motorized screen comes down.</li>
            <li>The 4K projector fires up and warms into full brightness.</li>
            <li>The receiver switches to the right input and the right Atmos mode.</li>
            <li>The shades close.</li>
            <li>The streaming app you used last time is already on the screen, ready for you to pick up where you left off.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            That's movie mode. One button. No thinking. And the same system has a "cleaning" mode, a "party" mode, a "goodnight" mode — whatever you actually use the room for.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">How We Build It</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            Three platforms carry 95% of the work we do: <strong className="text-foreground">Control4, JoshAI, and Lutron.</strong> Each has strengths.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            <strong className="text-foreground">Control4</strong> is the brain. Touchscreens, remotes, scenes, integration with AV gear, lighting, shading, cameras, thermostats. Mature, reliable, beautiful interfaces that your family will actually use.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            <strong className="text-foreground">JoshAI</strong> is the voice. You talk to your house in natural language — "start movie night," "dim the lights a little," "turn off everything downstairs." Unlike the generic voice assistants, JoshAI actually understands house-specific commands because it's trained on your specific setup.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            <strong className="text-foreground">Lutron</strong> is the lighting and shading. RadioRA 3 or HomeWorks QSX — keypads on the wall that replace your light switches, motorized shades that drop on cue, integration back into Control4 so "movie night" dims the lights without the user thinking about it.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            The secret sauce isn't the hardware — it's the programming. These scenes have to be programmed <em>specifically for your room and your habits</em>. Generic templates don't cut it. That's where a good dealer earns their fee.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">Why You Can't Buy This at Best Buy</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            Control4, JoshAI, and Lutron's pro line are all dealer-only. You can't walk into a store and buy the hardware, and even if you could, the programming is what makes it work — and that takes a trained installer with hours of dealer certification and practice.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            This is why the DIY smart-home-in-a-box products (the ones you can buy online) don't deliver the one-button experience. They can't reach the pro-grade lighting, they can't integrate cleanly with pro-grade AV receivers, and they don't have the reliability for a room you want to use every night without it failing.
          </p>

          <div className="mt-10 p-6 bg-secondary rounded-lg border border-border">
            <p className="text-lg font-semibold text-foreground mb-2">Want one-button control for your theater?</p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Call <a href="tel:2109814098" className="text-primary font-semibold">(210) 981-4098</a>. We'll design a system that your family will actually use.
            </p>
          </div>
        </div>
      </Section>
    </ServicePageLayout>
  );
}
