import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { User, Mail, Lock } from 'lucide-react';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({
        title: "Erro de registro",
        description: "As senhas não coincidem.",
        variant: "destructive",
      });
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(u => u.email === email);

    if (existingUser) {
      toast({
        title: "Erro de registro",
        description: "Este email já está cadastrado.",
        variant: "destructive",
      });
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    toast({
      title: "Registro bem-sucedido!",
      description: "Sua conta foi criada. Faça login para continuar.",
    });
    navigate('/login');
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
          <h1 className="text-3xl font-bold text-gray-900">Crie sua Conta</h1>
          <p className="mt-2 text-sm text-gray-600">
            Já tem uma conta?{' '}
            <Link to="/login" className="font-medium text-primary hover:text-primary/80">
              Faça login
            </Link>
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Nome Completo</Label>
            <div className="relative mt-1">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome completo"
                className="pl-10"
              />
            </div>
          </div>
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
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Crie uma senha forte"
                className="pl-10"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="confirmPassword">Confirmar Senha</Label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirme sua senha"
                className="pl-10"
              />
            </div>
          </div>
          <div>
            <Button type="submit" className="w-full hero-gradient text-white">
              Criar Conta
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default RegisterPage;