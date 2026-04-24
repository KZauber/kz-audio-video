import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export const SERVICE_LINKS = [
  { href: "/services/home-theater-installation", label: "Home Theater Installation" },
  { href: "/services/av-repair", label: "AV Repair & Rescue" },
  { href: "/services/surround-sound", label: "Surround Sound" },
  { href: "/services/smart-home-automation", label: "Smart Home Automation" },
  { href: "/services/tv-mounting", label: "TV Mounting" },
  { href: "/services/outdoor-home-theater", label: "Outdoor Home Theater" },
  { href: "/services/home-audio", label: "Whole Home Audio" },
];

export const LOCATION_LINKS = [
  { href: "/locations/san-antonio", label: "San Antonio" },
  { href: "/locations/stone-oak", label: "Stone Oak" },
  { href: "/locations/boerne", label: "Boerne" },
  { href: "/locations/new-braunfels", label: "New Braunfels" },
];

export const PHONE_NUMBER = "(210) 981-4098";
export const PHONE_TEL = "tel:2109814098";

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-border sticky top-0 z-50 bg-white">
      <div className="container flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">KZ</span>
          </div>
          <span className="font-bold text-lg text-foreground">KZ AUDIO & VIDEO</span>
        </Link>

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

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition outline-none">
              Locations
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/locations" className="font-semibold">All Locations</Link>
              </DropdownMenuItem>
              {LOCATION_LINKS.map((l) => (
                <DropdownMenuItem key={l.href} asChild>
                  <Link href={l.href}>{l.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/blog" className="text-sm font-medium hover:text-primary transition">Blog</Link>
          <Link href="/#areas" className="text-sm font-medium hover:text-primary transition">Service Areas</Link>
          <Link href="/#portfolio" className="text-sm font-medium hover:text-primary transition">Portfolio</Link>
          <Link href="/#about" className="text-sm font-medium hover:text-primary transition">About</Link>
          <Link href="/#faq" className="text-sm font-medium hover:text-primary transition">FAQ</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a href={PHONE_TEL} className="hidden sm:inline text-sm font-medium text-primary hover:text-primary/80 transition">
            {PHONE_NUMBER}
          </a>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white hidden sm:inline-flex">
            <a href="/#contact">FREE QUOTE</a>
          </Button>
          <button
            type="button"
            aria-label="Open menu"
            className="md:hidden p-2 rounded hover:bg-secondary"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container py-4 flex flex-col gap-2">
            <p className="text-xs uppercase font-semibold text-muted-foreground mt-2">Services</p>
            <Link href="/services" className="py-2 text-sm font-medium hover:text-primary">All Services</Link>
            {SERVICE_LINKS.map((s) => (
              <Link key={s.href} href={s.href} className="py-2 text-sm hover:text-primary">
                {s.label}
              </Link>
            ))}
            <p className="text-xs uppercase font-semibold text-muted-foreground mt-3">Locations</p>
            <Link href="/locations" className="py-2 text-sm font-medium hover:text-primary">All Locations</Link>
            {LOCATION_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="py-2 text-sm hover:text-primary">
                {l.label}
              </Link>
            ))}
            <div className="border-t border-border mt-2 pt-2 flex flex-col gap-2">
              <Link href="/blog" className="py-2 text-sm font-medium hover:text-primary">Blog</Link>
              <Link href="/#areas" className="py-2 text-sm font-medium hover:text-primary">Service Areas</Link>
              <Link href="/#portfolio" className="py-2 text-sm font-medium hover:text-primary">Portfolio</Link>
              <Link href="/#about" className="py-2 text-sm font-medium hover:text-primary">About</Link>
              <Link href="/#faq" className="py-2 text-sm font-medium hover:text-primary">FAQ</Link>
              <a href={PHONE_TEL} className="py-2 text-sm font-semibold text-primary">{PHONE_NUMBER}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
