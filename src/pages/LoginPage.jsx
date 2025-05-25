import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Lock } from 'lucide-react';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify({ email: user.email, name: user.name }));
      onLogin();
      toast({
        title: "Login bem-sucedido!",
        description: `Bem-vindo de volta, ${user.name || user.email}!`,
      });
      navigate('/dashboard');
    } else {
      toast({
        title: "Erro de login",
        description: "Email ou senha inválidos.",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16 flex justify-center items-center min-h-[calc(100vh-200px)]"
    >
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-2xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Acesse sua Conta</h1>
          <p className="mt-2 text-sm text-gray-600">
            Não tem uma conta?{' '}
            <Link to="/register" className="font-medium text-primary hover:text-primary/80">
              Crie uma agora
            </Link>
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">Email</Label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="pl-10"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="password">Senha</Label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Sua senha"
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="#" className="font-medium text-primary hover:text-primary/80">
                Esqueceu sua senha?
              </a>
            </div>
          </div>
          <div>
            <Button type="submit" className="w-full hero-gradient text-white">
              Entrar
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default LoginPage;