import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Package, Users, Settings, BarChart2, ShoppingBag } from 'lucide-react';

const DashboardPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const StatCard = ({ title, value, icon, color }) => (
    <motion.div 
      className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${color}`}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${color.replace('border-', 'bg-').replace('text-','bg-')}/10`}>
          {React.cloneElement(icon, { className: `h-6 w-6 ${color.replace('border-','text-')}`})}
        </div>
      </div>
    </motion.div>
  );

  const ActionButton = ({ title, icon, to }) => (
    <Link to={to}>
      <motion.div 
        className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {React.cloneElement(icon, { className: "h-10 w-10 text-primary mx-auto mb-3"})}
        <p className="font-medium">{title}</p>
      </motion.div>
    </Link>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Painel de Controle</h1>
        {user && <p className="text-gray-600">Bem-vindo(a) de volta, {user.name || user.email}!</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total de Produtos" value="125" icon={<Package />} color="border-blue-500 text-blue-500" />
        <StatCard title="Novos Pedidos" value="32" icon={<ShoppingBag className="h-6 w-6" />} color="border-green-500 text-green-500" />
        <StatCard title="Clientes Ativos" value="87" icon={<Users />} color="border-yellow-500 text-yellow-500" />
        <StatCard title="Receita Mensal" value="R$ 12.500" icon={<BarChart2 />} color="border-purple-500 text-purple-500" />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ações Rápidas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ActionButton title="Gerenciar Produtos" icon={<Package />} to="/dashboard/products" />
          <ActionButton title="Ver Pedidos" icon={<ShoppingBag className="h-6 w-6" />} to="#" />
          <ActionButton title="Configurações da Loja" icon={<Settings />} to="#" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Atividade Recente</h2>
        <ul className="space-y-3">
          <li className="text-sm text-gray-600">Novo pedido #1234 recebido.</li>
          <li className="text-sm text-gray-600">Produto "Camisa Floral" atualizado.</li>
          <li className="text-sm text-gray-600">Novo cliente "João Silva" cadastrado.</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default DashboardPage;