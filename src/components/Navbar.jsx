import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search, User, LogOut, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Navbar = ({ isAuthenticated, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogoutClick = () => {
    onLogout();
    toast({ title: "Logout realizado com sucesso!" });
    navigate('/');
  };

  const navLinkClass = "text-sm font-medium hover:text-primary transition-colors";
  const mobileNavLinkClass = "text-sm font-medium py-2 hover:text-primary transition-colors block";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gradient"
            >
              ModaStyle
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={navLinkClass}>Início</Link>
            <a href="/#produtos" className={navLinkClass}>Produtos</a>
            <a href="/#categorias" className={navLinkClass}>Categorias</a>
            <a href="/#promocoes" className={navLinkClass}>Promoções</a>
            <a href="/#contato" className={navLinkClass}>Contato</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5" />
            </Button>
            {isAuthenticated ? (
              <>
                <Button variant="ghost" size="icon" className="rounded-full" onClick={() => navigate('/dashboard')}>
                  <LayoutDashboard className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full" onClick={handleLogoutClick}>
                  <LogOut className="h-5 w-5" />
                </Button>
              </>
            ) : (
              <Button variant="ghost" size="icon" className="rounded-full" onClick={() => navigate('/login')}>
                <User className="h-5 w-5" />
              </Button>
            )}
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" className="rounded-full relative mr-2">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-1">
                <Link to="/" className={mobileNavLinkClass} onClick={toggleMobileMenu}>Início</Link>
                <a href="/#produtos" className={mobileNavLinkClass} onClick={toggleMobileMenu}>Produtos</a>
                <a href="/#categorias" className={mobileNavLinkClass} onClick={toggleMobileMenu}>Categorias</a>
                <a href="/#promocoes" className={mobileNavLinkClass} onClick={toggleMobileMenu}>Promoções</a>
                <a href="/#contato" className={mobileNavLinkClass} onClick={toggleMobileMenu}>Contato</a>
                <div className="border-t my-2"></div>
                {isAuthenticated ? (
                  <>
                    <Link to="/dashboard" className={mobileNavLinkClass} onClick={toggleMobileMenu}>
                      <LayoutDashboard className="inline-block mr-2 h-4 w-4" />Painel
                    </Link>
                    <button onClick={() => { handleLogoutClick(); toggleMobileMenu(); }} className={`${mobileNavLinkClass} text-left w-full`}>
                      <LogOut className="inline-block mr-2 h-4 w-4" />Sair
                    </button>
                  </>
                ) : (
                  <Link to="/login" className={mobileNavLinkClass} onClick={toggleMobileMenu}>
                    <User className="inline-block mr-2 h-4 w-4" />Login / Registro
                  </Link>
                )}
                <div className="flex items-center space-x-4 pt-2">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Search className="h-5 w-5" />
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;