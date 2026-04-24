import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServicePageLayout from "@/components/ServicePageLayout";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const posts = [
  {
    href: "/blog/av-system-not-dead",
    title: "Your Old Home Theater System Isn't Dead — It's Just Outdated",
    description:
      "After 25 years in the business, Kelly Zauber explains why most 'dead' AV systems aren't actually dead — and what's worth saving before you spend $15K on a new install.",
  },
  {
    href: "/blog/home-theater-cost-san-antonio",
    title: "How Much Does a Home Theater Cost in San Antonio? (2026 Guide)",
    description:
      "Three tiers — media room, dedicated theater, premium. Real numbers from real jobs, what drives cost, and why cheap installs always become the most expensive.",
  },
  {
    href: "/blog/dolby-atmos-explained",
    title: "What Is Dolby Atmos and Do You Need It in Your Home Theater?",
    description:
      "Atmos in plain English — what it is, what it requires, what content supports it, and the real-world experience that convinced us it's the biggest leap in home sound in 20 years.",
  },
  {
    href: "/blog/one-button-home-theater",
    title: "One Button Turns On Your Entire Home Theater — Here's How",
    description:
      "Press one button or say one phrase — lights dim, screen drops, projector fires up, Atmos kicks in. How Control4, JoshAI, and Lutron make it happen.",
  },
];

export default function BlogIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "KZ Audio & Video Blog",
    description:
      "Expert articles on home theater installation, AV repair, Dolby Atmos, smart home automation, and pricing from KZ Audio & Video in San Antonio.",
    publisher: {
      "@type": "Organization",
      name: "KZ Audio & Video",
      telephone: "+1-210-981-4098",
    },
  };

  return (
    <ServicePageLayout
      metaTitle="Home Theater & AV Blog | KZ Audio & Video San Antonio"
      metaDescription="Expert articles on home theater installation, AV repair, Dolby Atmos, one-button control, and honest pricing from KZ Audio & Video in San Antonio."
      h1="Home Theater & AV Insights"
      heroSubtitle="25+ years of hands-on experience, written plainly. No sales pitches — just the honest answers to the questions homeowners actually ask us."
      jsonLd={jsonLd}
      faqs={[
        {
          q: "Can I ask Kelly a specific question?",
          a: "Yes — call (210) 981-4098. Consultations are free. If it's a quick question, we'll answer it over the phone. If it's bigger, we'll come out and look.",
        },
        {
          q: "How often do you publish new articles?",
          a: "When we have something worth saying. We'd rather publish four honest articles a year than fifty SEO posts that don't help anybody.",
        },
      ]}
    >
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Latest Articles</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
            Long-form articles on home theater, smart home automation, and AV repair — written by the people who actually install these systems every day.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {posts.map((post) => (
              <Card key={post.href} className="p-6 border border-border hover:shadow-lg transition flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-foreground">{post.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{post.description}</p>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full">
                  <Link href={post.href}>
                    Read article <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
