import React from 'react'
import Gallery from './Gallery'
import { fetchCategories, fetchProducts } from 'config/fetch'

const GalleryPage = async () => {
  const [products, categories] = await Promise.all([fetchProducts(), fetchCategories()]);

  return (
    <>
    <Gallery products={products} categories={categories} />
    </>
  )
}

export default GalleryPage