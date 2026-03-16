'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuthState, clearAuthState, saveAuthState, GitHubUser, fetchGitHubUser } from '../lib/auth';
import { ADMIN_USERNAME } from '../config/auth';

interface AuthContextType {
  isAuthenticated: boolean;
  isAdmin: boolean;
  user: GitHubUser | null;
  token: string | null;
  setAuth: (token: string, user: GitHubUser) => void;
  logout: () => void;
  isLoading: boolean;
}

const defaultAuthContext: AuthContextType = {
  isAuthenticated: false,
  isAdmin: false,
  user: null,
  token: null,
  setAuth: () => {},
  logout: () => {},
  isLoading: true,
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState(getAuthState());
  const [isLoading, setIsLoading] = useState(true);

  // Verify token validity on mount
  useEffect(() => {
    const verifyToken = async () => {
      const state = getAuthState();
      try {
        if (state.token && state.user) {
          const verifiedUser = await fetchGitHubUser(state.token);
          // Verify the token actually belongs to the admin
          if (verifiedUser.login !== ADMIN_USERNAME) {
            clearAuthState();
            setAuthState(getAuthState());
            return;
          }
          // Refresh stored user with verified data
          saveAuthState(state.token, verifiedUser);
          setAuthState(getAuthState());
        }
      } catch (error) {
        // Token is invalid, clear auth state
        clearAuthState();
        setAuthState(getAuthState());
      } finally {
        setIsLoading(false);
      }
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

export const useAuth = () => useContext(AuthContext);

