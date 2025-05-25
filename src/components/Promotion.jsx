import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';

const Promotion = () => {
  return (
    <section id="promocoes" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-96 lg:h-auto">
              <img  
                alt="Promoção especial de roupas" 
                className="w-full h-full object-cover"
               src="https://storage.googleapis.com/hostinger-horizons-assets-prod/87dc378d-7654-4475-8f54-db446d3387de/3bad5861a9d1473727372a340f2c64bb.jpg" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:hidden"></div>
            </div>
            
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  Oferta Especial
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Promoção de Inverno
                </h2>
                <p className="text-gray-600 mb-6">
                  Aproveite descontos de até 50% em peças selecionadas da nossa coleção de inverno. 
                  Renove seu guarda-roupa com estilo e economia!
                </p>
                
                <div className="flex items-center gap-2 mb-8">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Oferta válida por tempo limitado</span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <span className="block text-2xl font-bold text-primary">15</span>
                    <span className="text-xs text-gray-500">Dias</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <span className="block text-2xl font-bold text-primary">10</span>
                    <span className="text-xs text-gray-500">Horas</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <span className="block text-2xl font-bold text-primary">45</span>
                    <span className="text-xs text-gray-500">Minutos</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <span className="block text-2xl font-bold text-primary">30</span>
                    <span className="text-xs text-gray-500">Segundos</span>
                  </div>
                </div>
                
                <Button size="lg" className="hero-gradient text-white rounded-full">
                  Aproveitar Agora
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;