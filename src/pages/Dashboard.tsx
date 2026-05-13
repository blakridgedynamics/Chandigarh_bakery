import { Link, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/context/AuthContext";
import { UserApi } from "@/lib/api";
import { backendKeys } from "@/hooks/useBackendContent";
import { waGeneric } from "@/lib/whatsapp";
import { Home, LogOut, MapPin, MessageCircle, ShieldCheck, User as UserIcon } from "lucide-react";

const Dashboard = () => {
  const { user, logout, isBootstrapping } = useAuth();
  const { data: addresses = [], isLoading: addressesLoading } = useQuery({
    queryKey: backendKeys.addresses,
    queryFn: UserApi.addresses,
    enabled: Boolean(user),
    staleTime: 2 * 60 * 1000,
    retry: 1,
  });

  if (isBootstrapping) {
    return (
      <Layout>
        <section className="container py-10 md:py-14">
          <div className="h-44 animate-pulse rounded-lg bg-muted" />
        </section>
      </Layout>
    );
  }

  if (!user) return <Navigate to="/login" replace />;

  const firstName = user.name.split(" ")[0] || "there";

  return (
    <Layout>
      <section className="container py-10 md:py-14">
        <div className="mb-8 rounded-lg bg-gradient-primary p-8 text-primary-foreground shadow-warm md:p-10">
          <p className="mb-2 text-xs uppercase tracking-[0.18em] opacity-80">My account</p>
          <h1 className="font-display text-3xl md:text-4xl">Hi {firstName}</h1>
          <p className="mt-2 opacity-90">Manage your profile, saved delivery details and bakery enquiries.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-lg border border-border/40 bg-card p-6 shadow-card">
            <div className="mb-4 flex items-center gap-2">
              <UserIcon className="h-5 w-5 text-primary" />
              <h2 className="font-display text-xl">Profile</h2>
            </div>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-xs text-muted-foreground">Name</dt>
                <dd className="font-medium">{user.name}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Email</dt>
                <dd className="break-all font-medium">{user.email}</dd>
              </div>
              {user.phone && (
                <div>
                  <dt className="text-xs text-muted-foreground">Phone</dt>
                  <dd className="font-medium">{user.phone}</dd>
                </div>
              )}
              {user.role && (
                <div>
                  <dt className="text-xs text-muted-foreground">Role</dt>
                  <dd className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold capitalize text-primary">
                    <ShieldCheck className="h-3.5 w-3.5" /> {user.role}
                  </dd>
                </div>
              )}
            </dl>
            <button
              onClick={() => void logout()}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-destructive hover:underline"
            >
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>

          <div className="rounded-lg border border-border/40 bg-card p-6 shadow-card">
            <div className="mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <h2 className="font-display text-xl">Saved addresses</h2>
            </div>
            {addressesLoading ? (
              <div className="space-y-3">
                <div className="h-20 animate-pulse rounded-lg bg-muted" />
                <div className="h-20 animate-pulse rounded-lg bg-muted" />
              </div>
            ) : addresses.length ? (
              <div className="space-y-3">
                {addresses.map((address) => (
                  <div key={address.id} className="rounded-lg bg-secondary/60 p-4">
                    <div className="mb-1 flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">{address.label || "Address"}</p>
                      {address.isDefault && <span className="rounded-md bg-primary px-2 py-0.5 text-[10px] font-semibold text-primary-foreground">Default</span>}
                    </div>
                    <p className="text-sm font-medium">{address.fullName}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {address.addressLine1}
                      {address.addressLine2 ? `, ${address.addressLine2}` : ""}, {address.city}, {address.state} {address.pincode}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-lg bg-secondary/60 p-5 text-sm text-muted-foreground">
                <Home className="mb-3 h-5 w-5 text-primary" />
                Saved delivery addresses will appear here once they are added to your account.
              </div>
            )}
          </div>

          <div className="rounded-lg border border-border/40 bg-card p-6 shadow-card">
            <div className="mb-4 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <h2 className="font-display text-xl">Place an order</h2>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Share what you need and we will confirm availability, quantity, delivery date and payment details.
            </p>
            <div className="space-y-3">
              <a
                href={waGeneric()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[hsl(142_55%_38%)] px-5 py-3 text-sm font-semibold text-white hover-lift"
              >
                <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
              </a>
              <Link
                to="/shop"
                className="inline-flex w-full items-center justify-center rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold transition-smooth hover:bg-secondary"
              >
                Browse menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
