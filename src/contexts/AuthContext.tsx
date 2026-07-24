import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type User = {
  email: string;
};

type AuthContextValue = {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);

export function AuthProvider({
  children,
}: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string) => {
    setUser({ email });
  };

  const logout = () => {
    setUser(null);
  };

  const value: AuthContextValue = {
    isLoggedIn: user !== null,
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error(
      "useAuth must be used inside AuthProvider",
    );
  }

  return context;
}