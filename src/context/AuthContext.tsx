import { createContext, FC, ReactNode, useContext, useState } from 'react'
import { RoleType } from '../types/roleTypes';

type AuthContextType = {
  isLoggedIn: boolean;
  role: RoleType
  login: (role: RoleType) => void;
  logout: () => void;
}

interface AuthProviderTypes {
  children: ReactNode
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<AuthProviderTypes> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState<RoleType>('guest');

  const login = (role: RoleType) => {
    setIsLoggedIn(true);
    setRole(role)
  }

  const logout = () => {
    setIsLoggedIn(false);
    setRole('guest')
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, role, logout }}>
      {children}
    </AuthContext.Provider>
  )
};


export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return context;
}