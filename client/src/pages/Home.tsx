import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SERVICE_LINKS } from "@/components/SiteHeader";
import { ChevronDown, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    service: "",
    details: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    console.log("Form submitted:", formData);
    alert("Thank you! We'll get back to you within one business day.");
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      city: "",
      service: "",
      details: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-50 bg-white">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">KZ</span>
            </div>
            <span className="font-bold text-lg text-foreground">KZ AUDIO & VIDEO</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition outline-none">
                Services
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                <DropdownMenuItem asChild>
                  <Link href="/services" className="font-semibold">All Services</Link>
                </DropdownMenuItem>
                {SERVICE_LINKS.map((s) => (
                  <DropdownMenuItem key={s.href} asChild>
                    <Link href={s.href}>{s.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#areas" className="text-sm font-medium hover:text-primary transition">Service Areas</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition">Portfolio</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition">About</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition">FAQ</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+15127871186" className="text-sm font-medium text-primary hover:text-primary/80 transition">
              (512) 787-1186
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-white">FREE QUOTE</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden" style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663392461276/3c6eAFYT8Fn8BKKqtPYpos/hero-home-theater-bYz4VmVyqX6SPbzde9DQhD.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container relative z-10 max-w-2xl">
          <div className="max-w-2xl">
            <p className="text-primary text-sm font-semibold mb-4">NEW BRAUNFELS · SAN ANTONIO · TEXAS HILL COUNTRY</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              HOME THEATER <span className="text-primary">INSTALLATION</span> EXPERTS
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Serving San Antonio, New Braunfels, Bulverde, and Boerne with over <strong>24 years of experience</strong> in custom home theater design, surround sound, whole-home audio, and smart home automation.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div>
                <p className="text-3xl font-bold text-primary">24+</p>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-gray-400">Installs Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">4</p>
                <p className="text-sm text-gray-400">Cities Service Areas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">FREE</p>
                <p className="text-sm text-gray-400">Consultations</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">GET A FREE QUOTE</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">OUR SERVICES</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">LOW VOLTAGE SERVICES DONE RIGHT</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From patio speakers in San Antonio to a full custom home theater in New Braunfels — we bring the same level of craftsmanship and attention to detail to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Home Theater Installation",
                description: "Custom home theater design and installation for San Antonio, New Braunfels, Bulverde, and Boerne homeowners. From dedicated theater rooms to media rooms, we handle projectors, screens, 4K displays, and full acoustic treatment.",
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663392461276/3c6eAFYT8Fn8BKKqtPYpos/portfolio-project-1-c7kqAvYzB2Eg2ayN6DUsHC.webp',
              },
              {
                title: "Surround Sound Systems",
                description: "Professional surround sound installation throughout the Texas Hill Country and San Antonio metro area. Dolby Atmos, DTS:X, and traditional 5.1/7.1 systems — in-wall, in-ceiling, and freestanding configurations.",
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663392461276/3c6eAFYT8Fn8BKKqtPYpos/service-surround-sound-akYMtT7LW9Z4YCXZJSADwA.webp',
              },
              {
                title: "TV Sales & Installation",
                description: "We sell and install premium flat-screen TVs — Samsung, LG, Sony, and more — as part of complete home theater and whole-home AV system projects. From 55\" to over 100\" displays integrated with your surround sound, automation, and control systems.",
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663392461276/3c6eAFYT8Fn8BKKqtPYpos/service-tv-installation-ZBb7gdmBf4buHHwxS3KxDg.webp',
              },
              {
                title: "Home Automation",
                description: "Smart home automation integration for lighting, climate, security, and entertainment. Control your entire home from a single app or touchscreen. We program and install Control4, Lutron, and other leading platforms.",
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663392461276/3c6eAFYT8Fn8BKKqtPYpos/service-home-automation-nvEJyBNtAzbRNk57HNX3UU.webp',
              },
            ].map((service, idx) => (
              <Card key={idx} className="p-8 border border-border hover:shadow-lg transition overflow-hidden">
                <div className="h-40 mb-4 rounded overflow-hidden -mx-8 -mt-8 mb-6">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">Get a Quote</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="areas" className="py-24 bg-secondary">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">SERVING THE TEXAS HILL COUNTRY</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Based in New Braunfels, we cover a 20-mile radius serving San Antonio, Bulverde, Boerne, and the surrounding Texas Hill Country communities.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { city: "San Antonio", desc: "Full metro area coverage" },
              { city: "New Braunfels", desc: "Our home base" },
              { city: "Bulverde", desc: "Texas Hill Country" },
              { city: "Boerne", desc: "Kendall County" },
              { city: "Seguin", desc: "Guadalupe County" },
              { city: "Kyle / Buda", desc: "Hays County" },
            ].map((area, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-border">
                <h4 className="font-bold text-lg text-foreground mb-2">{area.city}</h4>
                <p className="text-muted-foreground">{area.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary text-white p-8 rounded-lg text-center">
            <p className="text-lg mb-4">Don't see your city? We cover approximately 20 miles from New Braunfels in all directions.</p>
            <Button className="bg-white text-primary hover:bg-gray-100">CALL US NOW</Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">RECENT INSTALLATIONS</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Every project is custom-designed to fit the space, budget, and lifestyle of our clients across San Antonio, New Braunfels, Bulverde, and Boerne.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { type: "TV Installation", title: 'Full AV System with 85" Display — San Antonio, TX', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663392461276/3c6eAFYT8Fn8BKKqtPYpos/service-tv-installation-ZBb7gdmBf4buHHwxS3KxDg.webp' },
              { type: "Surround Sound", title: "7.2 Surround System — New Braunfels, TX", image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663392461276/3c6eAFYT8Fn8BKKqtPYpos/service-surround-sound-akYMtT7LW9Z4YCXZJSADwA.webp' },
              { type: "Home Automation", title: "Smart Home Control — Bulverde, TX", image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663392461276/3c6eAFYT8Fn8BKKqtPYpos/service-home-automation-nvEJyBNtAzbRNk57HNX3UU.webp' },
              { type: "Dedicated Theater", title: "Full Home Theater Room — Boerne, TX", image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663392461276/3c6eAFYT8Fn8BKKqtPYpos/portfolio-project-1-c7kqAvYzB2Eg2ayN6DUsHC.webp' },
            ].map((project, idx) => (
              <Card key={idx} className="overflow-hidden border border-border hover:shadow-lg transition">
                <div className="h-48 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                  <img src={project.image} alt={project.type} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <p className="font-semibold text-foreground">{project.title}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">24 YEARS OF TEXAS CRAFTSMANSHIP</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                KZ Audio & Video has been the trusted name in home theater installation and low voltage services across the San Antonio metro area and Texas Hill Country since 2001. Owner Kelly brings over two decades of hands-on experience to every project.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We take a personalized approach to every installation — starting with a free consultation to understand your space, your preferences, and your budget. We design a custom solution, then install and calibrate everything to our exacting standards.
              </p>
              <p className="text-lg font-semibold text-foreground">No subcontractors. No shortcuts.</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Years in Business", value: "24+", subtext: "Since 2001" },
                { label: "Projects Completed", value: "500+", subtext: "Across San Antonio area" },
                { label: "Cities Served", value: "4", subtext: "SA · NB · Bulverde · Boerne" },
                { label: "Satisfaction Goal", value: "100%", subtext: "We don't leave until it's right" },
              ].map((stat, idx) => (
                <Card key={idx} className="p-6 border border-border text-center">
                  <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="font-semibold text-foreground mb-1">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.subtext}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Brands We Install & Support</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { brand: "JVC", category: "Projectors" },
                { brand: "DENON", category: "AV Receivers" },
                { brand: "MARTIN LOGAN", category: "Speakers" },
                { brand: "DEFINITIVE TECHNOLOGY", category: "Speakers" },
                { brand: "SAMSUNG", category: "Displays" },
                { brand: "SONY", category: "Displays & Projectors" },
                { brand: "LG", category: "OLED Displays" },
                { brand: "EPSON", category: "Projectors" },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <p className="font-bold text-foreground mb-1">{item.brand}</p>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">TRUSTED BY TEXAS HOMEOWNERS</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "KZ Audio & Video transformed our living room into a true home theater experience. The surround sound installation was flawless — every speaker perfectly placed and calibrated. Highly recommend for anyone in San Antonio looking for professional AV work.",
              "We had a 85-inch TV mounted over our fireplace with full cable concealment. The result looks like it came out of a magazine. Kelly was professional, on time, and cleaned up perfectly. Will definitely use KZ again for our home automation project.",
              "After 24 years in business, these guys know what they're doing. Our dedicated home theater room is absolutely incredible. The Dolby Atmos system they installed is better than any commercial theater I've been to. Worth every penny.",
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-8 border border-border">
                <p className="text-muted-foreground leading-relaxed mb-4">"{testimonial}"</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary">★</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-secondary">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">FREQUENTLY ASKED QUESTIONS</h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What areas do you serve for home theater installation?",
                a: "We serve San Antonio, New Braunfels, Bulverde, Boerne, Seguin, Kyle, and Buda. We cover approximately 20 miles from New Braunfels in all directions.",
              },
              {
                q: "How long does a home theater installation take?",
                a: "Installation times vary depending on the complexity of your project. Simple TV mounting can take a few hours, while a full home theater installation may take several days. We'll provide a timeline during your free consultation.",
              },
              {
                q: "Do you offer free consultations?",
                a: "Yes! We offer free on-site consultations to understand your space, preferences, and budget. There's no obligation.",
              },
              {
                q: "What brands do you install?",
                a: "We install and support JVC, DENON, Martin Logan, Definitive Technology, Samsung, Sony, LG, Epson, and many other premium brands.",
              },
              {
                q: "Can you hide all the wires and cables?",
                a: "Yes, we specialize in professional cable concealment. We hide wires in walls, ceilings, and behind baseboards while maintaining signal quality and following building codes.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border border-border">
                <h4 className="font-bold text-foreground mb-2">{item.q}</h4>
                <p className="text-muted-foreground">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">GET YOUR FREE QUOTE</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Ready to transform your home entertainment experience? Contact us for a free on-site consultation and quote.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Call or Text</p>
                    <a href="tel:+15127871186" className="text-primary hover:text-primary/80">(512) 787-1186</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:kelly@kzaudioandvideo.com" className="text-primary hover:text-primary/80">kelly@kzaudioandvideo.com</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Service Area</p>
                    <p className="text-muted-foreground">New Braunfels, TX (home base)<br />Serving San Antonio, Bulverde, Boerne & surrounding areas</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Hours</p>
                    <p className="text-muted-foreground">Monday – Friday: 9:00 AM – 5:00 PM<br />Saturday & Sunday: By appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="px-4 py-2 border border-border rounded bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="px-4 py-2 border border-border rounded bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Phone *"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-border rounded bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-border rounded bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="text"
                name="city"
                placeholder="City / Area"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-border rounded bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-border rounded bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a service...</option>
                <option value="home-theater">Home Theater Installation</option>
                <option value="surround-sound">Surround Sound System</option>
                <option value="tv-mounting">TV Mounting / Installation</option>
                <option value="home-automation">Home Automation</option>
              </select>

              <textarea
                name="details"
                placeholder="Tell us about your project — room size, existing equipment, budget range, etc."
                value={formData.details}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-border rounded bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg">
                SEND MY FREE QUOTE REQUEST
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">KZ</span>
                </div>
                <span className="font-bold">KZ AUDIO & VIDEO</span>
              </div>
              <p className="text-gray-300 text-sm">Professional home theater installation and low voltage services since 2001.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {SERVICE_LINKS.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="hover:text-primary transition">{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="tel:+15127871186" className="hover:text-primary transition">(512) 787-1186</a></li>
                <li><a href="mailto:kelly@kzaudioandvideo.com" className="hover:text-primary transition">kelly@kzaudioandvideo.com</a></li>
                <li>614 C South Business 35<br />New Braunfels, TX 78130</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 KZ Audio & Video. All rights reserved. | Made with Manus</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
