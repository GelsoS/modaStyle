import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <span className="text-2xl font-bold text-white mb-4 block">ModaStyle</span>
            <p className="text-gray-400 mb-6">
              Sua loja de roupas online com as melhores tendências da moda e preços acessíveis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <span className="font-bold text-lg mb-4 block">Links Rápidos</span>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#produtos" className="text-gray-400 hover:text-white transition-colors">Produtos</a></li>
              <li><a href="#categorias" className="text-gray-400 hover:text-white transition-colors">Categorias</a></li>
              <li><a href="#promocoes" className="text-gray-400 hover:text-white transition-colors">Promoções</a></li>
              <li><a href="https://wa.me/554998288414" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <span className="font-bold text-lg mb-4 block">Informações</span>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Termos e Condições</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Devolução e Troca</a></li>
            </ul>
          </div>
          
          <div>
            <span className="font-bold text-lg mb-4 block">Contato</span>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-gray-400">Av. Paulista, 1000, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-400">(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-400">contato@modastyle.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; 2025 ModaStyle. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;