import ServicePageLayout, { Section } from "@/components/ServicePageLayout";

export default function AVSystemNotDead() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Your Old Home Theater System Isn't Dead — It's Just Outdated",
    author: { "@type": "Person", name: "Kelly Zauber" },
    publisher: {
      "@type": "Organization",
      name: "KZ Audio & Video",
      telephone: "+1-210-981-4098",
    },
    description:
      "After 25 years of home theater work in San Antonio, Kelly Zauber explains why most 'dead' AV systems aren't actually dead — and what's worth saving.",
  };

  return (
    <ServicePageLayout
      metaTitle="Your Old Home Theater System Isn't Dead — It's Just Outdated | KZ Audio & Video"
      metaDescription="Most 'dead' home theaters aren't actually broken — they're outdated. Kelly Zauber on HDMI handshake failures, what's worth keeping, and why AV rescue runs $1,500–$5,000 vs. $15K+ for new."
      h1="Your Old Home Theater System Isn't Dead — It's Just Outdated"
      heroSubtitle="After 25 years walking into homes with dead systems, here's the truth — most of them aren't dead. They're just outdated. And a lot of what you already own is still worth keeping."
      jsonLd={jsonLd}
      faqs={[
        {
          q: "How do I know if my system is worth rescuing?",
          a: "Call us first. We'll come out, diagnose what you've got, and tell you honestly what's salvageable. The diagnosis runs $150 and most of our clients walk away knowing whether to invest $1,500–$5,000 in a rescue or start over.",
        },
        {
          q: "What's the #1 reason old theaters stop working?",
          a: "HDMI handshake incompatibility. A 4K TV, a 4K streamer, and a 10-year-old receiver can't negotiate a signal — so you get a black screen. It's fixable. It's not 'dead.'",
        },
        {
          q: "What about my Klipsch speakers from 15 years ago?",
          a: "Probably still great. Quality speakers last decades. Klipsch, Bose, quality subs, and good amplifiers are the parts of your system most worth keeping — it's the electronics around them that age out.",
        },
      ]}
    >
      <Section>
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            I walk into homes every week — usually a Stone Oak family room, sometimes a Boerne great room, occasionally an Alamo Heights library — and the AV system is dead. Black screen. No sound. A coffee table covered in three remotes that nobody can make work. The family gave up on it two years ago.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            Here's what I want you to know, after 25 years of this: most of those systems aren't dead. They're outdated. And a big chunk of what you already own is still worth keeping.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">Why Systems Fail (It's Almost Always the Same Thing)</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            The number one culprit, by a wide margin, is HDMI handshake incompatibility. When you plugged a new 4K TV in, it couldn't talk to your 10-year-old receiver. HDMI isn't just a video cable — it's a protocol, and it has versions. An HDMI 1.4 receiver can't pass a 4K/HDR signal from a modern streaming box. So you get a black screen, or intermittent dropouts, or audio without video.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            Second on the list: dead IR (infrared) systems. The little emitters that let one remote control everything quietly failed, and now nothing responds to anything. Usually a $200 fix.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            Third: the original system was poorly programmed by whoever installed it. A Logitech Harmony remote with half the macros broken. A Universal Remote the installer never trained anyone to use. The system was fine — the setup wasn't.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">What's Worth Keeping</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            Quality amplifiers. Good speakers. Subs. These components last decades when they're decent to begin with. If you've got Klipsch Reference, Klipsch Heritage, Bose architectural speakers, a quality sub — those are probably still great. The drivers don't wear out on a reasonable duty cycle, and the cabinets last forever.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            What to replace: old AV receivers with HDMI 1.4 or earlier. DVD players (you don't need them). Mass-market soundbars and all-in-one surround packages sold at big-box stores 10 years ago. Cheap universal remotes.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">The Spaghetti-Wiring Problem</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            Open the cabinet under most 10-year-old home theaters and you'll see the same thing: a rat's nest of cables nobody labeled, three components nobody uses anymore, gear stacked on top of other gear with no airflow, dust everywhere. Half the time there's a cable box the family stopped paying for three years ago still sitting in the stack.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            When we rescue a system, we clean this up. Everything gets labeled. Dead components come out. Active ones get re-racked with proper cooling. It's not glamorous work, but it's the reason your system will still be running in five years instead of failing in one.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">What It Actually Costs</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            A typical AV rescue — new receiver, HDMI upgrades, cleaned-up wiring, re-programmed remote or new control system — runs <strong>$1,500 to $5,000</strong>. A full new theater install runs <strong>$15,000+</strong>. That's a big gap.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            Honest advice: call us <em>before</em> you buy anything new. We charge $150 for a diagnostic visit. We'll tell you exactly what's wrong, what's worth saving, and what's not. No pressure, no hard sell. If the right answer is to keep your speakers and swap a receiver, that's what we'll recommend — even though we'd make more on a full replacement.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            That's not a marketing line. It's how we've stayed in business for 25 years.
          </p>

          <div className="mt-10 p-6 bg-secondary rounded-lg border border-border">
            <p className="text-lg font-semibold text-foreground mb-2">Got a system that stopped working?</p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Call <a href="tel:2109814098" className="text-primary font-semibold">(210) 981-4098</a>. We'll come out, diagnose it, and tell you honestly what to do next.
            </p>
          </div>
        </div>
      </Section>
    </ServicePageLayout>
  );
}
