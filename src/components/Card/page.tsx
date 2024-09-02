import Card from 'components/Res-usable/Cards/card';
import Container from 'components/Res-usable/Container/Container';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Category } from 'types/interfaces';

const HomeCard = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  console.log(categories, 'categoriescategoriescategories');

  const productHandler = async () => {
    setLoading(true);
    try {
      const categoryRequest = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories/get-all-subCategories`,
      );

      const [categoryResponse] = await Promise.all([categoryRequest]);

      setCategories(categoryResponse.data || []);
    } catch (error) {
      console.log('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    productHandler();
  }, []);

  return (
    <Container className="py-12">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-6 gap-3">
          {categories &&
            categories.map((data, index) => <Card key={index} data={data} />)}
        </div>
      </div>
    </Container>
  );
};

export default HomeCard;
