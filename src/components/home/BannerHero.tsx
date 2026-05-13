import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle, Sparkles, Star } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { useBanners } from "@/hooks/useBackendContent";
import type { Banner } from "@/lib/api";
import { waGeneric } from "@/lib/whatsapp";

const fallbackBanner: Banner = {
  id: "fallback-bakery-hero",
  title: "Premium Egg-Free Home Bakery in Chandigarh",
  subtitle:
    "Custom cakes, desserts and gifting experiences. Handcrafted in small batches with whole grains, jaggery and pure ghee.",
  imageUrl: hero,
  linkUrl: "/shop",
  linkLabel: "View Menu",
};

const isInternalLink = (href?: string | null) => Boolean(href && href.startsWith("/"));

const BannerHero = () => {
  const { data = [] } = useBanners();
  const banners = useMemo(() => (data.length ? data : [fallbackBanner]), [data]);
  const [activeIndex, setActiveIndex] = useState(0);
  const active = banners[activeIndex % banners.length] || fallbackBanner;

  useEffect(() => {
    if (banners.length < 2) return undefined;
    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % banners.length);
    }, 7000);
    return () => window.clearInterval(interval);
  }, [banners.length]);

  useEffect(() => {
    if (activeIndex >= banners.length) setActiveIndex(0);
  }, [activeIndex, banners.length]);

  const go = (direction: 1 | -1) => {
    setActiveIndex((index) => (index + direction + banners.length) % banners.length);
  };

  const action =
    active.linkUrl &&
    (isInternalLink(active.linkUrl) ? (
      <Link
        to={active.linkUrl}
        className="inline-flex items-center gap-2 rounded-lg bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-soft transition-smooth hover:bg-background/90"
      >
        {active.linkLabel || "Explore"} <ArrowRight className="h-4 w-4" />
      </Link>
    ) : (
      <a
        href={active.linkUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-soft transition-smooth hover:bg-background/90"
      >
        {active.linkLabel || "Explore"} <ArrowRight className="h-4 w-4" />
      </a>
    ));

  return (
    <section className="relative min-h-[620px] overflow-hidden border-b border-border md:min-h-[680px]">
      <img
        key={active.id}
        src={active.imageUrl}
        alt={active.title}
        className="absolute inset-0 h-full w-full object-cover animate-scale-in"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/45 to-foreground/10" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative flex min-h-[620px] items-center py-16 md:min-h-[680px]">
        <div className="max-w-3xl text-background">
          <span className="mb-5 inline-flex items-center gap-2 rounded-lg bg-background/15 px-3 py-2 text-xs font-semibold backdrop-blur">
            <Sparkles className="h-4 w-4" /> Pre-order via WhatsApp
          </span>
          <h1 className="font-display text-4xl leading-[1.05] text-balance md:text-6xl lg:text-7xl">{active.title}</h1>
          {active.subtitle && <p className="mt-5 max-w-2xl text-base leading-7 text-background/88 md:text-lg">{active.subtitle}</p>}

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waGeneric()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[hsl(142_55%_38%)] px-5 py-3 text-sm font-semibold text-white shadow-soft transition-smooth hover:opacity-95"
            >
              <MessageCircle className="h-4 w-4" /> Order on WhatsApp
            </a>
            {action}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-background/85">
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-accent text-accent" /> 4.9 / 5
            </span>
            <span>1,200+ happy customers</span>
            <span>Chandigarh, Mohali and Panchkula</span>
          </div>
        </div>
      </div>

      {banners.length > 1 && (
        <div className="absolute bottom-7 right-4 flex items-center gap-2 md:right-10">
          <button
            type="button"
            onClick={() => go(-1)}
            className="rounded-lg bg-background/90 p-2.5 text-foreground shadow-soft transition-smooth hover:bg-background"
            aria-label="Previous banner"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-1.5 rounded-lg bg-background/90 px-3 py-2 shadow-soft">
            {banners.map((banner, index) => (
              <button
                key={banner.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-smooth ${index === activeIndex ? "w-6 bg-primary" : "w-2 bg-muted-foreground/35"}`}
                aria-label={`Show banner ${index + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            className="rounded-lg bg-background/90 p-2.5 text-foreground shadow-soft transition-smooth hover:bg-background"
            aria-label="Next banner"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </section>
  );
};

export default BannerHero;
