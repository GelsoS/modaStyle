import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
      <div className="absolute inset-0">
        <img  
          alt="Modelo feminina vestindo roupas da nova coleção" 
          className="w-full h-full object-cover"
         src="https://storage.googleapis.com/hostinger-horizons-assets-prod/87dc378d-7654-4475-8f54-db446d3387de/3bad5861a9d1473727372a340f2c64bb.jpg" />
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-4">
              Nova Coleção 2025
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Descubra Seu Estilo <span className="text-gradient">Único</span>
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-lg">
              Explore nossa nova coleção e encontre peças exclusivas que combinam com seu estilo. Qualidade e tendência em um só lugar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="hero-gradient text-white rounded-full">
                Comprar Agora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 rounded-full">
                Ver Coleção
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;