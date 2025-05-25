import React from 'react';
import { motion } from 'framer-motion';

const categoriesData = [
  {
    id: 1,
    name: 'Feminino',
    image: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/87dc378d-7654-4475-8f54-db446d3387de/4d2ad2519a04819abba6eb648ea7753d.jpg',
    description: 'Mulher elegante vestindo roupas da coleção feminina',
    count: '120+ produtos'
  },
  {
    id: 2,
    name: 'Masculino',
    image: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/87dc378d-7654-4475-8f54-db446d3387de/88145c9055c732bf9db346b7ed34f681.jpg',
    description: 'Homem vestindo roupas casuais da coleção masculina',
    count: '95+ produtos'
  },
  {
    id: 3,
    name: 'Acessórios',
    image: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/87dc378d-7654-4475-8f54-db446d3387de/2e2148919967ca8d71ff022ad54d582a.jpg',
    description: 'Diversos acessórios de moda incluindo bolsas, cintos e joias',
    count: '50+ produtos'
  }
];

const Categories = () => {
  return (
    <section id="categorias" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Explore Nossas Categorias</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Encontre o que você procura navegando por nossas categorias cuidadosamente organizadas.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categoriesData.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="category-card group relative rounded-xl overflow-hidden shadow-lg h-80"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
              <img  
                alt={category.name} 
                className="w-full h-full object-cover"
               src={category.image} />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-white text-2xl font-bold mb-1">{category.name}</h3>
                <p className="text-white/80 text-sm mb-4">{category.count}</p>
                <div className="w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-300"></div>
              </div>
              
              <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-6 py-2 bg-white/90 rounded-full text-primary font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Ver Categoria
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;