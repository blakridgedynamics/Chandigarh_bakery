import { FormEvent, useState } from "react";
import Layout from "@/components/layout/Layout";
import { waCustomCake } from "@/lib/whatsapp";
import { Cake, MessageCircle } from "lucide-react";

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="text-xs font-semibold text-muted-foreground">{label}</span>
    <div className="mt-1">{children}</div>
  </label>
);

const inputClass = "w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring";

const CustomCake = () => {
  const [form, setForm] = useState({
    name: "", phone: "", occasion: "Birthday", date: "",
    flavour: "", servings: "", budget: "", message: "",
  });

  const update = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    window.open(waCustomCake(form), "_blank", "noopener,noreferrer");
  };

  return (
    <Layout>
      <section className="bg-gradient-warm py-14 md:py-20 border-b border-border">
        <div className="container text-center max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/70 backdrop-blur text-xs font-medium text-primary border border-border mb-4">
            <Cake className="h-3.5 w-3.5" /> Made-to-order, just for you
          </span>
          <h1 className="font-display text-4xl md:text-5xl mb-4">Custom Cake Enquiry</h1>
          <p className="text-muted-foreground">
            Birthdays, weddings, anniversaries — share your vision and we'll craft a one-of-a-kind cake for your moment.
          </p>
        </div>
      </section>

      <section className="container py-12 md:py-16 max-w-3xl">
        <form onSubmit={submit} className="bg-card rounded-3xl p-6 md:p-10 shadow-warm border border-border/40 space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full name">
              <input required className={inputClass} value={form.name} onChange={e => update("name", e.target.value)} />
            </Field>
            <Field label="Phone">
              <input required type="tel" className={inputClass} value={form.phone} onChange={e => update("phone", e.target.value)} />
            </Field>
            <Field label="Occasion">
              <select className={inputClass} value={form.occasion} onChange={e => update("occasion", e.target.value)}>
                <option>Birthday</option>
                <option>Wedding</option>
                <option>Anniversary</option>
                <option>Baby Shower</option>
                <option>Corporate</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Date required">
              <input required type="date" className={inputClass} value={form.date} onChange={e => update("date", e.target.value)} />
            </Field>
            <Field label="Flavour preference">
              <input placeholder="e.g. Belgian chocolate, red velvet" className={inputClass} value={form.flavour} onChange={e => update("flavour", e.target.value)} />
            </Field>
            <Field label="Servings required">
              <input placeholder="e.g. 1 kg / 15 people" className={inputClass} value={form.servings} onChange={e => update("servings", e.target.value)} />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Budget range">
                <input placeholder="e.g. ₹2,500 – ₹4,000" className={inputClass} value={form.budget} onChange={e => update("budget", e.target.value)} />
              </Field>
            </div>
            <div className="sm:col-span-2">
              <Field label="Message / design notes">
                <textarea rows={5} className={inputClass + " resize-none"} value={form.message} onChange={e => update("message", e.target.value)} placeholder="Tell us about colours, themes, dietary needs, or design references." />
              </Field>
            </div>
          </div>

          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-[hsl(142_55%_38%)] text-white py-4 rounded-full font-semibold shadow-warm hover-lift">
            <MessageCircle className="h-5 w-5" /> Send Enquiry on WhatsApp
          </button>
          <p className="text-[11px] text-muted-foreground text-center">All custom cakes require a minimum 48-hour pre-booking.</p>
        </form>
      </section>
    </Layout>
  );
};

export default CustomCake;
