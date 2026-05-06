import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) return toast.error("Please fill in all fields");
    login(email, password);
    toast.success("Welcome back!");
    navigate("/dashboard");
  };

  return (
    <Layout>
      <section className="container py-16 md:py-24">
        <div className="max-w-md mx-auto bg-card rounded-3xl p-8 md:p-10 shadow-warm border border-border/40">
          <h1 className="font-display text-3xl md:text-4xl mb-2 text-center">Welcome back</h1>
          <p className="text-sm text-muted-foreground text-center mb-8">Sign in to track your orders & favourites.</p>
          <form onSubmit={submit} className="space-y-4">
            <label className="block">
              <span className="text-xs font-semibold text-muted-foreground">Email</span>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="mt-1 w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <label className="block">
              <span className="text-xs font-semibold text-muted-foreground">Password</span>
              <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="mt-1 w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 text-muted-foreground">
                <input type="checkbox" className="accent-primary" /> Remember me
              </label>
              <a href="#" className="text-primary hover:underline">Forgot?</a>
            </div>
            <button type="submit" className="w-full bg-primary text-primary-foreground py-3.5 rounded-full font-semibold shadow-warm hover-lift">Sign in</button>
          </form>
          <p className="text-sm text-center text-muted-foreground mt-6">
            New here? <Link to="/signup" className="text-primary font-semibold hover:underline">Create an account</Link>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
