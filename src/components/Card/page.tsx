'use client'
import Card from 'components/Res-usable/Cards/card';
import Container from 'components/Res-usable/Container/Container';
import { ICategory } from 'types/types';
import { links } from 'data/header_links';

const HomeCard = ({ categories }: { categories: ICategory[] }) => {

  const customOrder = ['Blinds', 'Curtains', 'Shutters'];

  const sortedCategories = categories?.sort((a: ICategory, b: ICategory) => {
    const indexA = customOrder.indexOf(a.title);
    const indexB = customOrder.indexOf(b.title);
    return indexA - indexB;
  });
  return (

    <Container className="py-12">

      {
        categories?.length < 0 ?
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-3 w-full">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="max-w-md rounded lg:m-4 m-2 animate-pulse"
                >
                  <div className="bg-gray-300 w-full lg:h-[400px] md:h-[300px] sm:h-auto rounded-3xl"></div>
                  <div className="px-2 py-4">
                    <div className="h-6 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded"></div>
                  </div>
                  <div className="h-8 bg-gray-300 rounded w-1/2 mt-4 mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
          :
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-3">
              {sortedCategories && sortedCategories
                .filter((cat: ICategory) => cat.title !== 'Commercial')
                .map((cat: ICategory, index: number) => {
                  const filtered = links.find((item) => item.label === cat.title,);
                  return (
                    <Card key={index} data={cat} href={filtered?.href} />
                  );
                })}
            </div>
          </div>
      }
    </Container>
  );
};

export default HomeCard;