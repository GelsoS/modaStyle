import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ana Silva',
    role: 'Cliente Fiel',
    image: 'cliente-ana',
    description: 'Mulher jovem sorrindo com cabelos castanhos',
    content: 'As roupas são de excelente qualidade e o atendimento é impecável. Sempre encontro peças que combinam com meu estilo!',
    rating: 5
  },
  {
    id: 2,
    name: 'Carlos Oliveira',
    role: 'Cliente Novo',
    image: 'cliente-carlos',
    description: 'Homem de meia idade com barba curta e óculos',
    content: 'Fiquei impressionado com a rapidez da entrega e a qualidade das peças. Certamente voltarei a comprar mais vezes.',
    rating: 4
  },
  {
    id: 3,
    name: 'Mariana Costa',
    role: 'Influenciadora',
    image: 'cliente-mariana',
    description: 'Mulher jovem com cabelo loiro e óculos de sol',
    content: 'As roupas são modernas e versáteis, perfeitas para diversas ocasiões. Recomendo a todos os meus seguidores!',
    rating: 5
  }
];

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-xl shadow-md"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img  
            alt={testimonial.name} 
            className="w-full h-full object-cover"
           src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
        </div>
        <div>
          <h4 className="font-medium">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
      
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Veja as experiências de quem já comprou em nossa loja e se encantou com nossos produtos.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;