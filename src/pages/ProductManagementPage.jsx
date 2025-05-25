import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { PlusCircle, Edit, Trash2, Search, XCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


const initialProducts = [
  { id: 1, name: 'Vestido Floral Verão', price: 129.90, stock: 50, category: 'Vestidos' },
  { id: 2, name: 'Camisa Social Slim', price: 89.90, stock: 30, category: 'Camisas' },
  { id: 3, name: 'Jaqueta Jeans Vintage', price: 159.90, stock: 20, category: 'Jaquetas' },
];

const ProductManagementPage = () => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('managedProducts');
    return savedProducts ? JSON.parse(savedProducts) : initialProducts;
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [productForm, setProductForm] = useState({ name: '', price: '', stock: '', category: '' });
  const { toast } = useToast();

  useEffect(() => {
    localStorage.setItem('managedProducts', JSON.stringify(products));
  }, [products]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductForm({ ...productForm, [name]: value });
  };

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    if (currentProduct) {
      setProducts(products.map(p => p.id === currentProduct.id ? { ...productForm, id: currentProduct.id, price: parseFloat(productForm.price), stock: parseInt(productForm.stock) } : p));
      toast({ title: "Produto atualizado!", description: `${productForm.name} foi atualizado com sucesso.` });
    } else {
      const newProduct = { ...productForm, id: Date.now(), price: parseFloat(productForm.price), stock: parseInt(productForm.stock) };
      setProducts([...products, newProduct]);
      toast({ title: "Produto adicionado!", description: `${productForm.name} foi adicionado com sucesso.` });
    }
    setIsModalOpen(false);
    setCurrentProduct(null);
    setProductForm({ name: '', price: '', stock: '', category: '' });
  };

  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setProductForm({ name: product.name, price: product.price.toString(), stock: product.stock.toString(), category: product.category });
    setIsModalOpen(true);
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(p => p.id !== productId));
    toast({ title: "Produto excluído!", description: "O produto foi excluído com sucesso.", variant: "destructive" });
  };

  const openAddModal = () => {
    setCurrentProduct(null);
    setProductForm({ name: '', price: '', stock: '', category: '' });
    setIsModalOpen(true);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">Gerenciar Produtos</h1>
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button onClick={openAddModal} className="flex items-center gap-2">
              <PlusCircle className="h-5 w-5" /> Adicionar Produto
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-white rounded-lg shadow-xl">
            <DialogHeader>
              <DialogTitle>{currentProduct ? 'Editar Produto' : 'Adicionar Novo Produto'}</DialogTitle>
              <DialogDescription>
                {currentProduct ? 'Modifique as informações do produto.' : 'Preencha os detalhes do novo produto.'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmitProduct} className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Nome</Label>
                <Input id="name" name="name" value={productForm.name} onChange={handleInputChange} className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">Preço</Label>
                <Input id="price" name="price" type="number" step="0.01" value={productForm.price} onChange={handleInputChange} className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="stock" className="text-right">Estoque</Label>
                <Input id="stock" name="stock" type="number" value={productForm.stock} onChange={handleInputChange} className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">Categoria</Label>
                <Input id="category" name="category" value={productForm.category} onChange={handleInputChange} className="col-span-3" required />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">Cancelar</Button>
                </DialogClose>
                <Button type="submit">{currentProduct ? 'Salvar Alterações' : 'Adicionar Produto'}</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="text"
          placeholder="Buscar produtos por nome ou categoria..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 w-full sm:w-1/2 lg:w-1/3"
        />
        {searchTerm && (
          <Button variant="ghost" size="icon" className="absolute right-3 top-1/2 transform -translate-y-1/2" onClick={() => setSearchTerm('')}>
            <XCircle className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </Button>
        )}
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="w-full min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preço</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estoque</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoria</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProducts.length > 0 ? filteredProducts.map((product) => (
              <motion.tr 
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ {product.price.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.stock}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleEditProduct(product)} className="text-blue-600 hover:text-blue-800">
                    <Edit className="h-4 w-4 mr-1" /> Editar
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-800">
                        <Trash2 className="h-4 w-4 mr-1" /> Excluir
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-white rounded-lg shadow-xl">
                      <AlertDialogHeader>
                        <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Esta ação não pode ser desfeita. Isso excluirá permanentemente o produto.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDeleteProduct(product.id)} className="bg-destructive hover:bg-destructive/90">
                          Excluir
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </td>
              </motion.tr>
            )) : (
              <tr>
                <td colSpan="5" className="px-6 py-12 text-center text-sm text-gray-500">
                  Nenhum produto encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductManagementPage;