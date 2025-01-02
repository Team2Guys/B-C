
import { fetchCategories, fetchSubCategories } from 'config/fetch';
import SubCategory from './SubCategory';

const AddSubCategory = async () => {
const subCategories = await fetchSubCategories();
const cetagories = await fetchCategories();
  return (
    <SubCategory subCategories={subCategories} cetagories={cetagories} />
  );
};

export default AddSubCategory;