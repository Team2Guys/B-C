import DefaultLayout from 'components/Dashboard/Layouts/DefaultLayout';
import Product from './Product';

const Produc_page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/GetAllProducts`,
    { next: { tags: ['calculatePrices'] } },
  );

  const products = await response.json();

  return (
    <DefaultLayout>
      <Product products={products} />
    </DefaultLayout>
  );
};

export default Produc_page;
