import { FormEvent } from "react";
import Layout from "@/components/layout/Layout";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { waGeneric } from "@/lib/whatsapp";

const Contact = () => {
  const submit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll get back to you within a few hours.");
    (e.target as HTMLFormElement).reset();
  };
  return (
    <Layout>
      <section className="container py-14 md:py-20">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold mb-2">Say hello</p>
          <h1 className="font-display text-4xl md:text-5xl">We'd love to hear from you</h1>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">For custom orders, bulk inquiries or just a friendly chat — drop us a message.</p>
          <a href={waGeneric()} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 bg-[hsl(142_55%_38%)] text-white px-6 py-3.5 rounded-full font-semibold shadow-warm hover-lift">
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <div className="space-y-5">
            {[
              { icon: MapPin, title: "Visit", text: "Sector 9, Chandigarh, India 160009" },
              { icon: Phone, title: "Call", text: "+91 98765 43210" },
              { icon: Mail, title: "Email", text: "hello@chandigarhbakery.in" },
              { icon: MessageCircle, title: "WhatsApp", text: "Tap the green button to chat instantly" },
            ].map(c => (
              <div key={c.title} className="bg-card rounded-2xl p-5 shadow-card border border-border/40 flex gap-4">
                <div className="h-11 w-11 rounded-full bg-secondary text-primary grid place-items-center shrink-0"><c.icon className="h-5 w-5" /></div>
                <div><p className="font-semibold">{c.title}</p><p className="text-sm text-muted-foreground">{c.text}</p></div>
              </div>
            ))}
          </div>

          <form onSubmit={submit} className="bg-card rounded-3xl p-8 shadow-warm border border-border/40 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block"><span className="text-xs font-semibold text-muted-foreground">Name</span>
                <input required className="mt-1 w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" /></label>
              <label className="block"><span className="text-xs font-semibold text-muted-foreground">Email</span>
                <input required type="email" className="mt-1 w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" /></label>
            </div>
            <label className="block"><span className="text-xs font-semibold text-muted-foreground">Subject</span>
              <input className="mt-1 w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" /></label>
            <label className="block"><span className="text-xs font-semibold text-muted-foreground">Message</span>
              <textarea required rows={5} className="mt-1 w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" /></label>
            <button type="submit" className="bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-semibold shadow-warm hover-lift">Send message</button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
