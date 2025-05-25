import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import DashboardPage from '@/pages/DashboardPage';
import ProtectedRoute from '@/components/ProtectedRoute';
import ProductManagementPage from '@/pages/ProductManagementPage';

function App() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = React.useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };


  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <DashboardPage />
                </ProtectedRoute>
              } 
            />
            <Route
              path="/dashboard/products"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ProductManagementPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;