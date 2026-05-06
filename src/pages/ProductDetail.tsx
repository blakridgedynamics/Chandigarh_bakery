import { Link, useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ProductCard";
import { findProduct, products } from "@/data/products";
import { formatINR } from "@/lib/format";
import { MessageCircle, Leaf, Truck, ArrowRight } from "lucide-react";
import { waProduct } from "@/lib/whatsapp";

const ProductDetail = () => {
  const { id = "" } = useParams();
  const product = findProduct(id);

  if (!product) {
    return (
      <Layout>
        <div className="container py-24 text-center">
          <h1 className="font-display text-3xl mb-4">Product not found</h1>
          <Link to="/shop" className="text-primary underline">Back to menu</Link>
        </div>
      </Layout>
    );
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <Layout>
      <section className="container py-10 md:py-14">
        <nav className="text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link> / <Link to="/shop" className="hover:text-primary">Menu</Link> / <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <div className="relative rounded-3xl overflow-hidden bg-muted shadow-card aspect-square">
            <img src={product.image} alt={product.name} width={800} height={800} className="w-full h-full object-cover" />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full">
                {product.badge}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold mb-2">{product.category.replace("-", " ")}</p>
            <h1 className="font-display text-3xl md:text-4xl mb-3">{product.name}</h1>
            <p className="text-lg text-muted-foreground mb-2">Starting <span className="text-2xl font-semibold text-primary">{formatINR(product.price)}</span></p>
            <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

            {product.tag && (
              <div className="mb-6 inline-flex w-fit items-center gap-2 text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full">
                <Leaf className="h-3.5 w-3.5" /> {product.tag}
              </div>
            )}

            {product.variants && (
              <div className="mb-6">
                <p className="text-sm font-semibold mb-2">Available sizes</p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map(v => (
                    <span key={v.label} className="px-4 py-2 rounded-full text-sm border border-border bg-background">
                      {v.label} — {formatINR(v.price)}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={waProduct(product.name)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[hsl(142_55%_38%)] text-white px-6 py-3.5 rounded-full font-semibold shadow-warm hover-lift"
              >
                <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
              </a>
              <Link to="/shop" className="inline-flex items-center gap-2 bg-background border border-border px-6 py-3.5 rounded-full font-semibold hover:bg-secondary transition-smooth">
                Back to menu <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                <Truck className="h-5 w-5 text-primary mt-0.5" />
                <div><p className="font-semibold">Pre-order required</p><p className="text-xs text-muted-foreground">Tricity delivery</p></div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                <Leaf className="h-5 w-5 text-primary mt-0.5" />
                <div><p className="font-semibold">100% egg-free</p><p className="text-xs text-muted-foreground">Always wholesome</p></div>
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-2xl md:text-3xl mb-6">You may also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default ProductDetail;
