import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (Object.values(form).some(v => !v)) return toast.error("Please fill in all fields");
    signup(form);
    toast.success("Account created — welcome!");
    navigate("/dashboard");
  };
  const set = (k: string) => (e: any) => setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <Layout>
      <section className="container py-16 md:py-24">
        <div className="max-w-md mx-auto bg-card rounded-3xl p-8 md:p-10 shadow-warm border border-border/40">
          <h1 className="font-display text-3xl md:text-4xl mb-2 text-center">Create an account</h1>
          <p className="text-sm text-muted-foreground text-center mb-8">Join our family of bakery lovers.</p>
          <form onSubmit={submit} className="space-y-4">
            {[
              { k: "name", label: "Full name", type: "text" },
              { k: "email", label: "Email", type: "email" },
              { k: "phone", label: "Phone", type: "tel" },
              { k: "password", label: "Password", type: "password" },
            ].map(f => (
              <label key={f.k} className="block">
                <span className="text-xs font-semibold text-muted-foreground">{f.label}</span>
                <input type={f.type} required value={(form as any)[f.k]} onChange={set(f.k)} className="mt-1 w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </label>
            ))}
            <button type="submit" className="w-full bg-primary text-primary-foreground py-3.5 rounded-full font-semibold shadow-warm hover-lift">Create account</button>
          </form>
          <p className="text-sm text-center text-muted-foreground mt-6">
            Already have one? <Link to="/login" className="text-primary font-semibold hover:underline">Sign in</Link>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Signup;
