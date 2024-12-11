import React from 'react';
import { IProduct } from 'types/types';
import { updateProductTitle } from './ui/menu-card';

interface IFooter {
  items: IProduct[];
  href?: string;
}

const FooterItem = ({ items }: IFooter) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          {updateProductTitle(item.title)}

          {item.title}
        </div>
      ))}
    </div>
  );
};

export default FooterItem;
