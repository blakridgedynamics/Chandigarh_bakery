import { Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/context/AuthContext";
import { LogOut, MapPin, MessageCircle, User as UserIcon } from "lucide-react";
import { waGeneric } from "@/lib/whatsapp";

const addresses = [
  { label: "Home", line: "House 23, Sector 9, Chandigarh — 160009" },
  { label: "Office", line: "Tower B, IT Park, Chandigarh — 160101" },
];

const Dashboard = () => {
  const { user, logout } = useAuth();
  if (!user) return <Navigate to="/login" replace />;

  return (
    <Layout>
      <section className="container py-10 md:py-14">
        <div className="bg-gradient-primary text-primary-foreground rounded-3xl p-8 md:p-10 shadow-warm mb-8">
          <p className="text-xs uppercase tracking-[0.18em] opacity-80 mb-2">My account</p>
          <h1 className="font-display text-3xl md:text-4xl">Hi {user.name.split(" ")[0]} 👋</h1>
          <p className="opacity-90 mt-2">Welcome to your bakery dashboard.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card rounded-2xl p-6 shadow-card border border-border/40">
            <div className="flex items-center gap-2 mb-4"><UserIcon className="h-5 w-5 text-primary" /><h2 className="font-display text-xl">Profile</h2></div>
            <dl className="text-sm space-y-2">
              <div><dt className="text-muted-foreground text-xs">Name</dt><dd className="font-medium">{user.name}</dd></div>
              <div><dt className="text-muted-foreground text-xs">Email</dt><dd className="font-medium">{user.email}</dd></div>
              {user.phone && <div><dt className="text-muted-foreground text-xs">Phone</dt><dd className="font-medium">{user.phone}</dd></div>}
            </dl>
            <button onClick={logout} className="mt-5 inline-flex items-center gap-2 text-sm text-destructive hover:underline">
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-card border border-border/40">
            <div className="flex items-center gap-2 mb-4"><MapPin className="h-5 w-5 text-primary" /><h2 className="font-display text-xl">Saved addresses</h2></div>
            <div className="space-y-3">
              {addresses.map(a => (
                <div key={a.label} className="p-4 rounded-xl bg-secondary/60">
                  <p className="text-xs uppercase tracking-wider text-primary font-semibold">{a.label}</p>
                  <p className="text-sm mt-1">{a.line}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-card border border-border/40">
            <div className="flex items-center gap-2 mb-4"><MessageCircle className="h-5 w-5 text-primary" /><h2 className="font-display text-xl">Place an order</h2></div>
            <p className="text-sm text-muted-foreground mb-4">All orders are confirmed via WhatsApp. Tap below to start a chat.</p>
            <a href={waGeneric()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[hsl(142_55%_38%)] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover-lift">
              <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
