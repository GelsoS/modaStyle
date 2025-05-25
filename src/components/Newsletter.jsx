import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Erro!",
        description: "Por favor, insira seu email.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulando o envio do formulário
    toast({
      title: "Inscrição realizada!",
      description: "Você foi inscrito em nossa newsletter com sucesso.",
    });
    
    setEmail('');
  };

  return (
    <section id="contato" className="py-16 newsletter-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Fique por Dentro das Novidades</h2>
            <p className="text-gray-600 mb-8">
              Inscreva-se em nossa newsletter e receba em primeira mão informações sobre lançamentos, 
              promoções exclusivas e dicas de moda.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor email"
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <Button type="submit" className="hero-gradient text-white rounded-full">
                Inscrever-se
              </Button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4">
              Ao se inscrever, você concorda com nossa política de privacidade. 
              Não enviamos spam e você pode cancelar a qualquer momento.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;