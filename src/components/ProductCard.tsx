import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { formatINR } from "@/lib/format";
import { MessageCircle } from "lucide-react";
import { waProduct } from "@/lib/whatsapp";

const ProductCard = ({ product }: { product: Product }) => {
  const handleEnquire = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(waProduct(product.name), "_blank", "noopener,noreferrer");
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group flex flex-col bg-card rounded-2xl overflow-hidden shadow-card hover-lift border border-border/40"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={400}
          height={400}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display text-base leading-snug text-foreground line-clamp-2">{product.name}</h3>
        <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2 min-h-[2.5em]">{product.shortDescription || product.description}</p>
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="text-xs text-muted-foreground">
            Starting <span className="font-semibold text-primary text-sm">{formatINR(product.price)}</span>
          </span>
        </div>
        <button
          onClick={handleEnquire}
          aria-label={`Enquire about ${product.name} on WhatsApp`}
          className="mt-3 inline-flex items-center justify-center gap-1.5 bg-[hsl(142_55%_38%)] text-white rounded-full px-3.5 py-2.5 text-xs font-semibold hover:opacity-95 transition-smooth"
        >
          <MessageCircle className="h-3.5 w-3.5" /> Enquire on WhatsApp
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
