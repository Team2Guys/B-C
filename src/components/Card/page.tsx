import Card from 'components/Res-usable/Cards/card';
import Container from 'components/Res-usable/Container/Container';
import { useQuery } from '@tanstack/react-query';
import { fetchSubCategories } from 'config/fetch';
import { ICategory } from 'types/types';

const HomeCard = () => {
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: fetchSubCategories,
  });

  if (isLoading)
    return (
      <div>
      <Container className="py-12">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-6 gap-3">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="max-w-md rounded lg:m-4 m-2 animate-pulse">
                  <div className="bg-gray-300 lg:w-[460px] md:w-[400px] sm:w-full lg:h-[485px] md:h-[300px] sm:h-auto rounded-3xl"></div>
                  <div className="px-2 py-4">
                    <div className="h-6 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded"></div>
                  </div>
                  <div className="h-8 bg-gray-300 rounded w-1/2 mt-4"></div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    );
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <Container className="py-12">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-6 gap-3">
          {categories &&
            categories.map((data: ICategory, index: number) => (
              <Card key={index} data={data} />
            ))}
        </div>
      </div>
    </Container>
  );
};

export default HomeCard;
