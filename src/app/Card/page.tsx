// pages/index.tsx
import { NextPage } from 'next';
import Card from '../../components/Res-usable/Cards/card';
import { cardData } from '../../data/data';

const HomeCard: NextPage = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default HomeCard;
