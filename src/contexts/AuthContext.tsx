import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { parseJwt } from "@/utils";

const AuthContext = createContext<{
  user: UserData | null;
  logout: () => void;
}>({ user: null, logout: () => {} });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      const decodedUser = parseJwt(token);
      setUser(decodedUser);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
