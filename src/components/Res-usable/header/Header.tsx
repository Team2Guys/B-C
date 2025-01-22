import React from 'react'
import Navbar from './Navbar'
import { fetchProducts, fetchSubCategories } from 'config/fetch';

const Header = async () => {
  const [products, subCategories] = await Promise.all([fetchProducts(),fetchSubCategories()]);
  return (
    <Navbar products={products}  subCategories={subCategories} />
  )
}

export default Header