
import { fetchCategories, fetchSubCategories } from 'config/fetch';
import SubCategory from './SubCategory';

const AddSubCategory = async () => {
  const [subCategories, categories] = await Promise.all([
    fetchSubCategories(),
    fetchCategories()
  ])
  return (
    <SubCategory subCategories={subCategories} cetagories={categories} />
  );
};

export default AddSubCategory;