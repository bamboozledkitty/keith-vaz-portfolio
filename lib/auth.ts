import { ADMIN_USERNAME, GITHUB_CLIENT_ID, GITHUB_OAUTH_SCOPES } from '../config/auth';

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  name?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  isAdmin: boolean;
  user: GitHubUser | null;
  token: string | null;
}

const TOKEN_KEY = 'github_oauth_token';
const USER_KEY = 'github_user';

export const getAuthState = (): AuthState => {
  const token = localStorage.getItem(TOKEN_KEY);
  const userJson = localStorage.getItem(USER_KEY);
  const user = userJson ? JSON.parse(userJson) : null;

  return {
    isAuthenticated: !!token && !!user,
    isAdmin: user?.login === ADMIN_USERNAME,
    user,
    token,
  };
};

export const getGitHubOAuthUrl = (redirectUri: string): string => {
  const params = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    redirect_uri: redirectUri,
    scope: GITHUB_OAUTH_SCOPES,
    state: generateState(),
  });

  return `https://github.com/login/oauth/authorize?${params.toString()}`;
};

export const generateState = (): string => {
  const state = Math.random().toString(36).substring(7);
  sessionStorage.setItem('oauth_state', state);
  return state;
};

export const verifyState = (state: string): boolean => {
  const storedState = sessionStorage.getItem('oauth_state');
  sessionStorage.removeItem('oauth_state');
  return state === storedState;
};

export const fetchGitHubUser = async (token: string): Promise<GitHubUser> => {
  const response = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.v3+json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch GitHub user');
  }

  return response.json();
};

export const saveAuthState = (token: string, user: GitHubUser): void => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const clearAuthState = (): void => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

// Cloudflare Worker URL for token exchange
const WORKER_URL = import.meta.env.VITE_CLOUDFLARE_WORKER_URL || '';

// Exchange OAuth code for access token via Cloudflare Worker
export const requestAccessToken = async (
  code: string,
  state: string
): Promise<string> => {
  if (!WORKER_URL) {
    throw new Error('Cloudflare Worker URL not configured');
  }

  const response = await fetch(WORKER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code, state }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Unknown error' }));
    throw new Error(error.error || 'Failed to exchange token');
  }

  const data = await response.json();

  if (!data.access_token) {
    throw new Error('No access token received');
  }

  return data.access_token;
};

