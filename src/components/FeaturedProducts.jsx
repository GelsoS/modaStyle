import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const staticProducts = [
  {
    id: 1,
    name: 'Vestido Floral Verão',
    price: 129.90,
    originalPrice: 179.90,
    image: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/87dc378d-7654-4475-8f54-db446d3387de/29efacb850a5d304919462ea8750bbc7.jpg',
    description: 'Vestido floral leve e elegante, perfeito para o verão',
    discount: true
  },
  {
    id: 2,
    name: 'Camisa Social Slim',
    price: 89.90,
    originalPrice: 89.90,
    image: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/87dc378d-7654-4475-8f54-db446d3387de/941dd88e761d3cbd8e50f4cf54eab312.jpg',
    description: 'Camisa social masculina de corte slim em algodão premium',
    discount: false
  },
  {
    id: 3,
    name: 'Jaqueta Jeans Vintage',
    price: 159.90,
    originalPrice: 199.90,
    image: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/87dc378d-7654-4475-8f54-db446d3387de/097930658c9c01e81af95e16ab30a1de.jpg',
    description: 'Jaqueta jeans com estilo vintage e lavagem especial',
    discount: true
  },
  {
    id: 4,
    name: 'Calça de Alfaiataria',
    price: 149.90,
    originalPrice: 149.90,
    image: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/87dc378d-7654-4475-8f54-db446d3387de/2800171af45059f35ded09c7d3f4b797.jpg',
    description: 'Calça de alfaiataria de corte reto em tecido premium',
    discount: false
  }
];

const ProductCard = ({ product, index }) => {
  const { toast } = useToast();
  
  const handleAddToCart = () => {
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho.`,
      duration: 3000,
    });
  };
  
  const handleAddToWishlist = () => {
    toast({
      title: "Adicionado aos favoritos!",
      description: `${product.name} foi adicionado à sua lista de desejos.`,
      duration: 3000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="product-card bg-white rounded-xl overflow-hidden shadow-md"
    >
      <div className="relative h-64 overflow-hidden">
        <img  
          alt={product.name} 
          className="w-full h-full object-cover"
         src={product.image} />
        
        {product.discount && (
          <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
            OFERTA
          </div>
        )}
        
        <button 
          onClick={handleAddToWishlist}
          className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full shadow-sm transition-colors"
        >
          <Heart className="h-4 w-4 text-primary" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-lg mb-1">{product.name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="font-bold text-lg">R$ {product.price.toFixed(2)}</span>
          {product.discount && (
            <span className="text-sm text-gray-500 line-through">R$ {product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        
        <Button 
          onClick={handleAddToCart}
          className="w-full rounded-lg flex items-center justify-center gap-2"
        >
          <ShoppingBag className="h-4 w-4" />
          Adicionar
        </Button>
      </div>
    </motion.div>
  );
};

const FeaturedProducts = () => {
  const [productsToDisplay, setProductsToDisplay] = React.useState(staticProducts);

  React.useEffect(() => {
    const managedProducts = localStorage.getItem('managedProducts');
    if (managedProducts) {
      const parsedManagedProducts = JSON.parse(managedProducts);
      if (parsedManagedProducts.length > 0) {
         const productsWithUserImages = parsedManagedProducts.map((prod, index) => ({
           ...prod,
           image: staticProducts[index % staticProducts.length].image 
         }));
         setProductsToDisplay(productsWithUserImages.slice(0, 4)); 
      }
    }
  }, []);


  return (
    <section id="produtos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Produtos em Destaque</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Confira nossa seleção de produtos mais populares, escolhidos a dedo para você.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsToDisplay.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="rounded-full">
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;