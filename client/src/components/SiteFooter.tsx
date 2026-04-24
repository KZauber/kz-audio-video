import { Link } from "wouter";
import { PHONE_NUMBER, PHONE_TEL, SERVICE_LINKS } from "./SiteHeader";

export default function SiteFooter() {
  return (
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
            <p className="text-gray-300 text-sm">
              Professional home theater installation and low voltage services since 2001. 25+ years serving San Antonio and the Texas Hill Country.
            </p>
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
              <li><a href={PHONE_TEL} className="hover:text-primary transition">{PHONE_NUMBER}</a></li>
              <li><a href="mailto:kelly@kzaudioandvideo.com" className="hover:text-primary transition">kelly@kzaudioandvideo.com</a></li>
              <li>Serving San Antonio, Stone Oak, Boerne, New Braunfels, Bulverde, Alamo Heights, Fair Oaks Ranch, Helotes & The Dominion</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} KZ Audio & Video. Since 2001. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
