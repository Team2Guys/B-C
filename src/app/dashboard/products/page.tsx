
import DefaultLayout from 'components/Dashboard/Layouts/DefaultLayout';
import Product from './Product';
import { fetchProducts } from 'config/fetch';

const Produc_page = async () => {
let products = fetchProducts()

  return (
    <DefaultLayout>
      <Product products={products} />
    </DefaultLayout>
  );
};

export default Produc_page;