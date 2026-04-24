import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServicePageLayout from "@/components/ServicePageLayout";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const locations = [
  {
    href: "/locations/san-antonio",
    title: "San Antonio, TX",
    description:
      "25+ years serving Stone Oak, The Dominion, Alamo Heights, Hollywood Park, Terrell Hills, and Shavano Park. Our home market since 2001.",
  },
  {
    href: "/locations/stone-oak",
    title: "Stone Oak, TX",
    description:
      "Dedicated media rooms, large great rooms, outdoor living spaces. One of our top three service areas — weekly installs in this neighborhood.",
  },
  {
    href: "/locations/boerne",
    title: "Boerne, TX",
    description:
      "Hill Country luxury homes, new-construction pre-wire, outdoor theaters by the pool. Boerne, Fair Oaks Ranch, Comfort, and Kendall County.",
  },
  {
    href: "/locations/new-braunfels",
    title: "New Braunfels, TX",
    description:
      "Growing community, custom new builds, and the outdoor-living culture that calls for serious weatherproof AV. We service New Braunfels weekly.",
  },
];

export default function LocationsIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "KZ Audio & Video",
    description:
      "Custom home theater, smart home automation, and AV installation across San Antonio, Stone Oak, Boerne, and New Braunfels — since 2001.",
    telephone: "+1-210-981-4098",
    areaServed: ["San Antonio", "Stone Oak", "Boerne", "New Braunfels"],
    priceRange: "$$$",
  };

  return (
    <ServicePageLayout
      metaTitle="Service Areas | KZ Audio & Video — San Antonio & Texas Hill Country"
      metaDescription="KZ Audio & Video serves San Antonio, Stone Oak, Boerne, and New Braunfels with custom home theater, smart home automation, and AV installation. 25+ years. Call (210) 981-4098."
      h1="Service Areas"
      heroSubtitle="Locally owned in San Antonio since 2001. We serve a 45-minute radius around our home office — from downtown San Antonio through Stone Oak and into the Hill Country."
      jsonLd={jsonLd}
      faqs={[
        {
          q: "What if I'm not in one of these listed areas?",
          a: "Call us. These are our top four areas by volume, but we service a 45-minute radius around San Antonio — including Bulverde, Helotes, Cibolo, and Seguin. There's a good chance we cover you.",
        },
        {
          q: "Do you charge extra for service calls to outlying areas?",
          a: "Installation pricing is the same regardless of where in our service area you are. For smaller service calls, there may be a minimum visit fee for further destinations — but we'll tell you up front.",
        },
        {
          q: "How far outside San Antonio do you travel?",
          a: "For full installs, we'll travel up to about 45 minutes from our office. We regularly work in Boerne, Fair Oaks Ranch, New Braunfels, and northern Kendall County.",
        },
      ]}
    >
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Where We Work</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
            Four dedicated service areas — each with a page describing the homes we work in, the services we offer there, and why local homeowners keep calling us back.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {locations.map((loc) => (
              <Card key={loc.href} className="p-6 border border-border hover:shadow-lg transition flex flex-col">
                <h3 className="text-2xl font-bold mb-3 text-foreground">{loc.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{loc.description}</p>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full">
                  <Link href={loc.href}>
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
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
