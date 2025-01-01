import React from 'react';
import Container from 'components/Res-usable/Container/Container';
import Image from 'next/image';

interface ChooseUsProps {
  title: string;
  gridClass?: string;
  boxClass?: string;
  items: {
    image?: any;
    text: string;
  }[];
}

const ChooseUs: React.FC<ChooseUsProps> = ({
  title,
  gridClass = '',
  items,
  boxClass,
}) => {
  return (
    <Container className="space-y-4">
      <h2 className="text-20 md:text-30 font-medium text-center">{title}</h2>
      <div className={`${gridClass}`}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg p-1 sm:p-3 text-center py-2 sm:py-6 space-y-4 ${boxClass}`}
          >
            {item.image && (
              <Image
                className="mx-auto"
                width={60}
                height={60}
                src={item.image}
                alt="card"
              />
            )}
            <p className="text-12 sm:text-14">{item.text}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ChooseUs;
