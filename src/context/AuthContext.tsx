import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type User = { name: string; email: string; phone?: string };

type AuthContextType = {
  user: User | null;
  login: (email: string, _password: string) => void;
  signup: (data: { name: string; email: string; phone: string; password: string }) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    try { return JSON.parse(localStorage.getItem("cb_user") || "null"); } catch { return null; }
  });

  useEffect(() => {
    if (user) localStorage.setItem("cb_user", JSON.stringify(user));
    else localStorage.removeItem("cb_user");
  }, [user]);

  const login = (email: string) => {
    const name = email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    setUser({ name, email });
  };
  const signup = (data: { name: string; email: string; phone: string; password: string }) =>
    setUser({ name: data.name, email: data.email, phone: data.phone });
  const logout = () => setUser(null);

  return <AuthContext.Provider value={{ user, login, signup, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
