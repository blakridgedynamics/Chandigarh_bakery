import { Link } from "react-router-dom";
import { Instagram, MessageCircle, MapPin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="mt-24 bg-secondary/60 border-t border-border">
    <div className="container py-14 grid gap-10 md:grid-cols-4">
      <div className="space-y-4">
        <img src={logo} alt="Chandigarh Bakery" className="h-12 w-auto" width={48} height={48} loading="lazy" />
        <p className="text-sm text-muted-foreground max-w-xs">
          Premium egg-free, healthy bakes — handcrafted with love in Chandigarh.
        </p>
      </div>

      <div>
        <h4 className="font-display text-lg mb-4">Visit Us</h4>
        <p className="text-sm text-muted-foreground flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Sector 9, Chandigarh, India 160009</p>
        <p className="text-sm text-muted-foreground flex gap-2 mt-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> +91 98765 43210</p>
        <p className="text-sm text-muted-foreground flex gap-2 mt-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> hello@chandigarhbakery.in</p>
      </div>

      <div>
        <h4 className="font-display text-lg mb-4">Explore</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/shop" className="hover:text-primary transition-smooth">Menu</Link></li>
          <li><Link to="/custom-cake" className="hover:text-primary transition-smooth">Custom Cakes</Link></li>
          <li><Link to="/experiences" className="hover:text-primary transition-smooth">Experiences</Link></li>
          <li><Link to="/about" className="hover:text-primary transition-smooth">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-primary transition-smooth">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display text-lg mb-4">Stay Connected</h4>
        <div className="flex gap-3">
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[hsl(142_55%_38%)] text-white text-sm font-medium hover-lift">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium hover-lift">
            <Instagram className="h-4 w-4" /> Instagram
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container py-5 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Chandigarh Bakery. All rights reserved.</p>
        <p>Crafted with warmth & whole-wheat.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
