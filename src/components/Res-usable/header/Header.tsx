"use client"
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { fetchProducts, fetchSubCategories } from 'config/fetch';

const Header = () => {
  const [products, setProducts] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(loading, error, "error")
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [fetchedProducts, fetchedSubCategories] = await Promise.all([
          fetchProducts(),
          fetchSubCategories(),
        ]);
        setProducts(fetchedProducts);
        setSubCategories(fetchedSubCategories as any);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Navbar products={products} subCategories={subCategories} />
  )
}

export default Header