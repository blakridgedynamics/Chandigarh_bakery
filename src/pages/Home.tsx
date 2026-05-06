import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/data/products";
import hero from "@/assets/hero.jpg";
import {
  ArrowRight, Wheat, Leaf, Heart, Star, Sparkles, MessageCircle,
  Cake, Gift, BookOpen, ClipboardCheck, CheckCircle2, MapPin, Clock,
} from "lucide-react";
import { waGeneric, waExperience } from "@/lib/whatsapp";

const featured = products.filter(p => p.badge).slice(0, 4);

const dessertCats = categories.filter(c => c.id !== "savory");

const reviews = [
  { name: "Aanya Sharma", initial: "A", color: "from-rose-400 to-rose-600", text: "The Biscoff cheesecake was unreal — creamy, balanced, and packed beautifully. Felt like a gift!", rating: 5, date: "2 weeks ago", item: "Biscoff Cheesecake" },
  { name: "Rohan Kapoor", initial: "R", color: "from-amber-400 to-orange-600", text: "We've ordered the jaggery oat cookies four times now. Honestly the best healthy cookie in the city.", rating: 5, date: "1 month ago", item: "Jaggery Oat Cookies" },
  { name: "Meher Dhillon", initial: "M", color: "from-emerald-400 to-teal-600", text: "Love that everything is egg-free and made with whole-wheat. The focaccia is bakery-perfect.", rating: 5, date: "3 weeks ago", item: "Rosemary Focaccia" },
  { name: "Ishaan Bhatia", initial: "I", color: "from-violet-400 to-indigo-600", text: "Booked a custom cake for my wife's birthday — design was spot-on and the taste blew everyone away.", rating: 5, date: "5 days ago", item: "Custom Birthday Cake" },
  { name: "Priya Mehta", initial: "P", color: "from-pink-400 to-fuchsia-600", text: "Their festive hamper was the highlight of Diwali gifting. Everyone asked where I got it from!", rating: 5, date: "2 months ago", item: "Diwali Hamper" },
  { name: "Karan Sethi", initial: "K", color: "from-sky-400 to-blue-600", text: "Granola is genuinely addictive. Crunchy, not too sweet, perfect with yogurt. New breakfast staple.", rating: 5, date: "1 week ago", item: "Almond Cranberry Granola" },
];

const steps = [
  { icon: BookOpen, title: "Browse the menu", text: "Pick what tempts you from our handcrafted bakes." },
  { icon: MessageCircle, title: "Enquire on WhatsApp", text: "Tap any 'Enquire' button to start a chat." },
  { icon: ClipboardCheck, title: "Share your details", text: "Tell us your requirement, quantity & delivery date." },
  { icon: CheckCircle2, title: "We confirm", text: "We confirm availability, pricing and delivery." },
  { icon: Sparkles, title: "Pre-order confirmed 🎉", text: "Sit back — we'll bake and deliver fresh." },
];

const Home = () => (
  <Layout>
    {/* HERO */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-warm" aria-hidden />
      <div className="container relative py-16 md:py-24 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="space-y-6 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/70 backdrop-blur text-xs font-medium text-primary border border-border">
            <Sparkles className="h-3.5 w-3.5" /> Pre-order via WhatsApp
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-balance">
            Premium Egg-Free<br />Home <span className="text-primary">Bakery</span> in Chandigarh
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg text-balance">
            Custom cakes, desserts & gifting experiences. Pre-order via WhatsApp — handcrafted in small batches with whole grains, jaggery and pure ghee.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={waGeneric()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[hsl(142_55%_38%)] text-white px-6 py-3.5 rounded-full font-semibold shadow-warm hover-lift"
            >
              <MessageCircle className="h-4 w-4" /> Order on WhatsApp
            </a>
            <Link to="/shop" className="inline-flex items-center gap-2 bg-background border border-border px-6 py-3.5 rounded-full font-semibold hover:bg-secondary transition-smooth">
              View Menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1"><Star className="h-4 w-4 fill-accent text-accent" /> 4.9 / 5</div>
            <div>1,200+ happy customers</div>
          </div>
        </div>
        <div className="relative animate-scale-in">
          <div className="absolute -inset-4 bg-gradient-primary opacity-15 blur-3xl rounded-full" aria-hidden />
          <img src={hero} alt="Assorted freshly baked cookies, tea cake and cheesecake" width={1600} height={1024}
               className="relative rounded-3xl shadow-warm w-full object-cover aspect-[4/3]" />
        </div>
      </div>
    </section>

    {/* PRE-ORDER NOTICE */}
    <section className="bg-secondary/60 border-y border-border">
      <div className="container py-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-sm text-foreground/80 text-center">
        <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> All orders require advance pre-booking</span>
        <span className="hidden sm:inline opacity-30">•</span>
        <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Delivering across Chandigarh Tricity</span>
      </div>
    </section>

    {/* 1. DESSERTS */}
    <section className="container py-16 md:py-20">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold mb-2">Our menu</p>
        <h2 className="font-display text-3xl md:text-5xl">Desserts & Bakes</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Cookies, tea cakes, cheesecakes, granola & munchies — baked fresh, every batch.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {dessertCats.map(c => (
          <Link key={c.id} to={`/shop?category=${c.id}`} className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-card hover-lift">
            <img src={c.image} alt={c.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-smooth group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-background">
              <h3 className="font-display text-xl">{c.name}</h3>
              <p className="text-[11px] opacity-90 mt-0.5 line-clamp-2">{c.blurb}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/shop" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-semibold shadow-warm hover-lift">
          View Full Menu <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>

    {/* 2. CUSTOM CAKES */}
    <section className="bg-gradient-warm py-16 md:py-24 border-y border-border">
      <div className="container grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-primary opacity-10 blur-3xl rounded-full" aria-hidden />
          <img src={featured[0]?.image} alt="Custom celebration cake" className="relative rounded-3xl shadow-warm w-full aspect-square object-cover" />
        </div>
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/70 backdrop-blur text-xs font-medium text-primary border border-border">
            <Cake className="h-3.5 w-3.5" /> Made-to-order
          </span>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.1]">Custom Cakes for your moments</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Birthdays, weddings, anniversaries — we specialise in egg-free designer cakes built around your story, your flavour and your aesthetic.
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm">
            {["Designer & themed cakes", "Number / letter cakes", "Tiered wedding cakes", "Vegan & sugar-free options"].map(t => (
              <li key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {t}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link to="/custom-cake" className="inline-flex items-center gap-2 bg-[hsl(142_55%_38%)] text-white px-6 py-3.5 rounded-full font-semibold shadow-warm hover-lift">
              <MessageCircle className="h-4 w-4" /> Enquire for Custom Cake
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* 3. EXPERIENCES */}
    <section className="container py-16 md:py-20">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold mb-2">Beyond the bake</p>
        <h2 className="font-display text-3xl md:text-5xl">Experiences & Gifting</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Workshops, gifting boxes and curated festive hampers — celebrate every moment with us.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: BookOpen, title: "Baking Workshops", text: "Hands-on small-batch classes for home bakers." },
          { icon: Gift, title: "Curated Gifting Boxes", text: "Thoughtful bakery boxes for any occasion." },
          { icon: Sparkles, title: "Festive Hampers", text: "Diwali, Christmas, weddings & corporate gifting." },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="bg-card rounded-2xl p-7 shadow-card border border-border/40 hover-lift">
            <div className="h-12 w-12 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center mb-4">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a href={waExperience()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[hsl(142_55%_38%)] text-white px-6 py-3.5 rounded-full font-semibold shadow-warm hover-lift">
          <MessageCircle className="h-4 w-4" /> Plan an Experience
        </a>
      </div>
    </section>

    {/* FEATURED PRODUCTS */}
    <section className="bg-secondary/40 py-16 md:py-20 border-y border-border">
      <div className="container">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold mb-2">Bestsellers</p>
            <h2 className="font-display text-3xl md:text-4xl">Loved this season</h2>
          </div>
          <Link to="/shop" className="text-sm font-medium text-primary hover:underline shrink-0">View all →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>

    {/* HOW TO ORDER */}
    <section className="container py-16 md:py-20">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold mb-2">Simple & quick</p>
        <h2 className="font-display text-3xl md:text-5xl">How to Order</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">No checkouts, no hassle — just a friendly WhatsApp chat away.</p>
      </div>
      <ol className="grid md:grid-cols-5 gap-4">
        {steps.map((s, i) => (
          <li key={s.title} className="relative bg-card rounded-2xl p-6 shadow-card border border-border/40 text-center">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-primary text-primary-foreground text-xs font-bold grid place-items-center shadow-soft">{i + 1}</span>
            <div className="h-12 w-12 mx-auto rounded-full bg-secondary text-primary grid place-items-center mb-3 mt-2">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg mb-1">{s.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.text}</p>
          </li>
        ))}
      </ol>
      <div className="text-center mt-10">
        <a href={waGeneric()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[hsl(142_55%_38%)] text-white px-6 py-3.5 rounded-full font-semibold shadow-warm hover-lift">
          <MessageCircle className="h-4 w-4" /> Start your order
        </a>
      </div>
    </section>

    {/* WHY US */}
    <section className="bg-secondary/40 py-16 md:py-20 border-y border-border">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold mb-2">Our promise</p>
          <h2 className="font-display text-3xl md:text-4xl">Why bake matters</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Heart, title: "100% Egg-Free", text: "Every recipe is crafted egg-free without compromising taste or texture." },
            { icon: Wheat, title: "Whole-Wheat Goodness", text: "We use whole-wheat, ragi, oats and jaggery wherever possible." },
            { icon: Leaf, title: "Healthy Ingredients", text: "Real butter, pure ghee, dry-fruits — no preservatives, ever." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-card rounded-2xl p-7 shadow-card border border-border/40 hover-lift">
              <div className="h-12 w-12 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* GOOGLE-STYLE REVIEWS */}
    <section className="relative py-20 md:py-28 overflow-hidden border-y border-border bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* decorative blobs */}
      <div className="absolute top-10 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-float" aria-hidden />
      <div className="absolute bottom-10 -right-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} aria-hidden />

      <div className="container relative">
        {/* Header with Google badge */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-card shadow-card border border-border/60 mb-5 animate-fade-in">
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-xs font-semibold tracking-wide">Google Reviews</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span className="text-xs text-muted-foreground">Verified</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl mb-4">Loved by Chandigarh</h2>

          {/* Big rating */}
          <div className="inline-flex items-center gap-5 bg-card rounded-2xl px-6 py-4 shadow-warm border border-border/60 animate-scale-in">
            <div className="text-left">
              <div className="font-display text-4xl md:text-5xl leading-none text-primary">4.9</div>
              <div className="flex items-center gap-0.5 mt-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-left">
              <div className="text-sm font-semibold">Excellent</div>
              <div className="text-xs text-muted-foreground">Based on 280+ reviews</div>
            </div>
          </div>
        </div>

        {/* Marquee row */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="flex gap-5 animate-marquee w-max" style={{ animationDuration: "50s" }}>
            {[...reviews, ...reviews].map((r, i) => (
              <article
                key={i}
                className="group relative w-[300px] sm:w-[340px] shrink-0 bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-warm hover:-translate-y-1 transition-all duration-300"
              >
                {/* Google G mark */}
                <div className="absolute top-5 right-5 opacity-90">
                  <svg viewBox="0 0 24 24" className="h-5 w-5">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>

                {/* User row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`relative h-11 w-11 rounded-full bg-gradient-to-br ${r.color} text-white grid place-items-center font-semibold text-lg shadow-soft ring-2 ring-background`}>
                    {r.initial}
                    <span className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full bg-background grid place-items-center">
                      <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-tight">{r.name}</p>
                    <p className="text-[11px] text-muted-foreground">{r.date} · Local Guide</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-3">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-[#fbbc05] text-[#fbbc05]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm leading-relaxed text-foreground/85 mb-4">"{r.text}"</p>

                {/* Item tag */}
                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
                    <Sparkles className="h-3 w-3 text-primary" /> {r.item}
                  </span>
                  <span className="text-[10px] text-muted-foreground">Helpful · 👍</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA to Google */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?q=chandigarh+bakery+reviews"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-card border border-border px-5 py-3 rounded-full text-sm font-semibold hover:shadow-card transition-smooth"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Read all reviews on Google
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>

    {/* DELIVERY AREAS */}
    <section className="bg-gradient-warm py-14 md:py-16 border-t border-border">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold mb-2">Where we deliver</p>
          <h2 className="font-display text-3xl md:text-4xl mb-3">Across Chandigarh Tricity</h2>
          <p className="text-muted-foreground">We deliver fresh-baked goodness across Chandigarh, Mohali and Panchkula. Outside the tricity? Drop us a WhatsApp — we'll see what we can do.</p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {["Chandigarh", "Mohali", "Panchkula", "Zirakpur", "Kharar", "New Chandigarh"].map(c => (
            <div key={c} className="bg-card rounded-xl p-4 text-center shadow-card border border-border/40">
              <MapPin className="h-4 w-4 text-primary mx-auto mb-1.5" />
              <p className="text-sm font-semibold">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FINAL CTA */}
    <section className="container py-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-primary text-primary-foreground p-10 md:p-14 shadow-warm">
        <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-accent/30 blur-3xl" aria-hidden />
        <div className="relative grid md:grid-cols-[2fr_1fr] gap-8 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] mb-3 opacity-80">Ready to order?</p>
            <h2 className="font-display text-3xl md:text-5xl mb-3">Let's bake something special</h2>
            <p className="opacity-90 max-w-lg">Tap below to start a WhatsApp chat — we'll confirm availability, pricing and your delivery date.</p>
          </div>
          <a href={waGeneric()} target="_blank" rel="noreferrer" className="justify-self-start md:justify-self-end inline-flex items-center gap-2 bg-background text-primary px-6 py-3.5 rounded-full font-semibold hover-lift">
            <MessageCircle className="h-4 w-4" /> Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default Home;
