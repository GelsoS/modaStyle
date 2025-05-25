import React from 'react';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Categories from '@/components/Categories';
import Promotion from '@/components/Promotion';
import Newsletter from '@/components/Newsletter';
import Testimonials from '@/components/Testimonials';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Promotion />
      <Testimonials />
      <Newsletter />
    </motion.div>
  );
};

export default HomePage;