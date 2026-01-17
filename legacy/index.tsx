import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary';
import { AuthProvider } from './contexts/AuthContext';
import App from './App';

// Lazy load admin-only components for code splitting
const LoginPage = lazy(() => import('./components/LoginPage'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'));

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <HashRouter>
          <Suspense fallback={null}>
            <Routes>
              {/* Public view-only portfolio */}
              <Route path="/" element={<App isAdmin={false} />} />
              
              {/* Admin routes */}
              <Route path="/admin/login" element={<LoginPage />} />
              <Route path="/admin/callback" element={<LoginPage />} />
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute>
                    <App isAdmin={true} />
                  </ProtectedRoute>
                } 
              />
              
              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </AuthProvider>
    </ErrorBoundary>
  </React.StrictMode>
);