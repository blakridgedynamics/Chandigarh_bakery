import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ProductCard";
import { categories, products, CategoryId } from "@/data/products";
import { cn } from "@/lib/utils";

const Shop = () => {
  const [params, setParams] = useSearchParams();
  const active = (params.get("category") || "all") as CategoryId | "all";

  const filtered = useMemo(
    () => active === "all" ? products : products.filter(p => p.category === active),
    [active]
  );

  const setCat = (c: string) => {
    if (c === "all") { params.delete("category"); setParams(params); }
    else { params.set("category", c); setParams(params); }
  };

  return (
    <Layout>
      <section className="bg-gradient-warm py-12 md:py-16 border-b border-border">
        <div className="container text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold mb-2">Our menu</p>
          <h1 className="font-display text-4xl md:text-5xl mb-3">Browse, then enquire on WhatsApp</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">All bakes are made-to-order. Tap any item to start a WhatsApp chat — we'll confirm availability and your delivery date.</p>
        </div>
      </section>

      <section className="container py-10">
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center">
          {[{ id: "all", name: "All" }, ...categories].map(c => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={cn(
                "shrink-0 px-5 py-2.5 rounded-full text-sm font-medium border transition-smooth",
                active === c.id
                  ? "bg-primary text-primary-foreground border-primary shadow-soft"
                  : "bg-background border-border text-foreground/70 hover:border-primary hover:text-primary"
              )}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 animate-fade-in">
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No products in this category yet.</p>
        )}
      </section>
    </Layout>
  );
};

export default Shop;
