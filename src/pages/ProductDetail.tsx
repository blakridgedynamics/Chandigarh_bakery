import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ProductCard";
import { findProduct, products } from "@/data/products";
import { CatalogApi } from "@/lib/api";
import { fromBackendProduct, fromStaticProduct, type CatalogProduct } from "@/lib/catalog";
import { formatINR } from "@/lib/format";
import { waProduct } from "@/lib/whatsapp";
import { backendKeys } from "@/hooks/useBackendContent";
import { ArrowRight, Leaf, MessageCircle, Star, Truck } from "lucide-react";

const ProductDetail = () => {
  const { id = "" } = useParams();
  const staticProduct = findProduct(id);

  const {
    data: backendProduct,
    isLoading,
  } = useQuery({
    queryKey: backendKeys.product(id),
    queryFn: () => CatalogApi.product(id),
    enabled: Boolean(id),
    retry: false,
    staleTime: 2 * 60 * 1000,
  });

  const product: CatalogProduct | null = backendProduct
    ? fromBackendProduct(backendProduct)
    : staticProduct
      ? fromStaticProduct(staticProduct)
      : null;

  const { data: relatedResponse } = useQuery({
    queryKey: backendKeys.products({ categoryId: product?.categoryId, limit: 5 }),
    queryFn: () => CatalogApi.products({ categoryId: product?.categoryId || undefined, limit: 5 }),
    enabled: Boolean(backendProduct && product?.categoryId),
    staleTime: 2 * 60 * 1000,
    retry: 1,
  });

  if (isLoading && !staticProduct) {
    return (
      <Layout>
        <section className="container py-10 md:py-14">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="aspect-square animate-pulse rounded-lg bg-muted" />
            <div className="space-y-4">
              <div className="h-8 w-2/3 animate-pulse rounded bg-muted" />
              <div className="h-4 w-full animate-pulse rounded bg-muted" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
              <div className="h-12 w-48 animate-pulse rounded-lg bg-muted" />
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="container py-24 text-center">
          <h1 className="font-display mb-4 text-3xl">Product not found</h1>
          <Link to="/shop" className="text-primary underline">
            Back to menu
          </Link>
        </div>
      </Layout>
    );
  }

  const backendRelated = relatedResponse?.data
    ?.map(fromBackendProduct)
    .filter((item) => item.slug !== product.slug)
    .slice(0, 4);
  const staticRelated = staticProduct
    ? products
        .filter((item) => item.category === staticProduct.category && item.id !== staticProduct.id)
        .slice(0, 4)
        .map(fromStaticProduct)
    : [];
  const related = backendRelated?.length ? backendRelated : staticRelated;
  const categoryLabel = product.category ? product.category.replace("-", " ") : "Bakery special";
  const isSoldOut = product.stock !== undefined && product.stock <= 0;

  return (
    <Layout>
      <section className="container py-10 md:py-14">
        <nav className="mb-6 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>{" "}
          /{" "}
          <Link to="/shop" className="hover:text-primary">
            Menu
          </Link>{" "}
          / <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-muted shadow-card">
            <img src={product.image} alt={product.name} width={900} height={900} className="h-full w-full object-cover" />
            {product.badge && (
              <span className="absolute left-4 top-4 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                {product.badge}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{categoryLabel}</p>
            <h1 className="font-display mb-3 text-3xl md:text-5xl">{product.name}</h1>
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <p className="text-lg text-muted-foreground">
                Starting <span className="text-2xl font-semibold text-primary">{formatINR(product.price)}</span>
              </p>
              {product.avgRating ? (
                <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold">
                  <Star className="h-3.5 w-3.5 fill-accent text-accent" /> {product.avgRating.toFixed(1)}
                </span>
              ) : null}
            </div>
            <p className="mb-6 leading-relaxed text-muted-foreground">{product.description}</p>

            {product.tag && (
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-md bg-secondary px-3 py-1.5 text-xs text-secondary-foreground">
                <Leaf className="h-3.5 w-3.5" /> {product.tag}
              </div>
            )}

            {product.variants && (
              <div className="mb-6">
                <p className="mb-2 text-sm font-semibold">Available sizes</p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <span key={variant.label} className="rounded-md border border-border bg-background px-4 py-2 text-sm">
                      {variant.label} / {formatINR(variant.price)}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8 flex flex-wrap gap-3">
              <a
                href={waProduct(product.name)}
                target="_blank"
                rel="noreferrer"
                aria-disabled={isSoldOut}
                className={`inline-flex items-center gap-2 rounded-lg px-6 py-3.5 font-semibold shadow-warm transition-smooth ${
                  isSoldOut
                    ? "pointer-events-none bg-muted text-muted-foreground"
                    : "bg-[hsl(142_55%_38%)] text-white hover:opacity-95"
                }`}
              >
                <MessageCircle className="h-4 w-4" /> {isSoldOut ? "Sold out" : "Enquire on WhatsApp"}
              </a>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3.5 font-semibold transition-smooth hover:bg-secondary"
              >
                Back to menu <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-3 rounded-lg bg-secondary/50 p-4">
                <Truck className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Pre-order required</p>
                  <p className="text-xs text-muted-foreground">Tricity delivery</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-secondary/50 p-4">
                <Leaf className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">100% egg-free</p>
                  <p className="text-xs text-muted-foreground">Always wholesome</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display mb-6 text-2xl md:text-3xl">You may also like</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default ProductDetail;
