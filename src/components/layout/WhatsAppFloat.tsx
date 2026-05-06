import { MessageCircle } from "lucide-react";
import { waGeneric } from "@/lib/whatsapp";

const WhatsAppFloat = () => (
  <a
    href={waGeneric()}
    target="_blank"
    rel="noreferrer"
    aria-label="Enquire on WhatsApp"
    className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 pl-4 pr-5 py-3.5 rounded-full bg-[hsl(142_55%_38%)] text-white shadow-warm hover:shadow-[0_18px_40px_-10px_hsl(142_55%_38%/0.55)] transition-smooth animate-float"
  >
    <MessageCircle className="h-5 w-5" />
    <span className="hidden sm:inline text-sm font-semibold">Enquire on WhatsApp</span>
  </a>
);

export default WhatsAppFloat;
