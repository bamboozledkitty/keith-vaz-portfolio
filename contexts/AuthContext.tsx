'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuthState, clearAuthState, saveAuthState, GitHubUser, fetchGitHubUser } from '../lib/auth';

interface AuthContextType {
  isAuthenticated: boolean;
  isAdmin: boolean;
  user: GitHubUser | null;
  token: string | null;
  setAuth: (token: string, user: GitHubUser) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState(getAuthState());
  const [isLoading, setIsLoading] = useState(true);

  // Verify token validity on mount
  useEffect(() => {
    const verifyToken = async () => {
      const state = getAuthState();
      if (state.token && state.user) {
        try {
          // Verify token is still valid
          await fetchGitHubUser(state.token);
        } catch (error) {
          // Token is invalid, clear auth state
          clearAuthState();
          setAuthState(getAuthState());
        }
      }
      setIsLoading(false);
    };

    verifyToken();
  }, []);

  const setAuth = (token: string, user: GitHubUser) => {
    saveAuthState(token, user);
    setAuthState(getAuthState());
  };

  const logout = () => {
    clearAuthState();
    setAuthState(getAuthState());
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: authState.isAuthenticated,
        isAdmin: authState.isAdmin,
        user: authState.user,
        token: authState.token,
        setAuth,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

