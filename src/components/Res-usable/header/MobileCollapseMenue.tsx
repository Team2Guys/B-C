import { Collapse } from 'antd';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { MouseEventHandler } from 'react';

const { Panel } = Collapse;

interface Product {
  title: string;
  [key: string]: any;
}


interface MobileCollapseMenuProps {
  activeKey: number | undefined;
  handlePanelChange: (key: string | string[]) => void;
  downIcon: StaticImageData;
  title: string;
  MoterisedData: { title: string; link: string }[];
  onClick: MouseEventHandler<HTMLAnchorElement> | undefined;
  path: string;
  distributedProducts: Product[][];
  defualtActiveKey: number | undefined;
  matchingItem: string | null;
  generatePath: (product: Product, category: string) => string;
}

const generateSlug = (text: string): string => {
  return text.toLowerCase().replace(/\s+/g, '-');
};

const MobileCollapseMenu: React.FC<MobileCollapseMenuProps> = ({
  activeKey,
  handlePanelChange,
  downIcon,
  title,
  MoterisedData,
  onClick,
  path,
  distributedProducts,
  defualtActiveKey,
  matchingItem,
  generatePath,
}) => {
  return (
    <div className="lg:hidden">
      <Collapse
        bordered={false}
        activeKey={activeKey}
        onChange={handlePanelChange}
        expandIcon={({ isActive }) =>
          isActive ? (
            <Image
              src={downIcon}
              alt="up icon"
              width={8}
              height={8}
              className="transform rotate-180"
            />
          ) : (
            <Image src={downIcon} alt="down icon" width={8} height={8} />
          )
        }
        className="bg-transparent"
      >
        {title === 'Motorised' ? (
          <div className="flex justify-between">
            <div className="flex flex-col py-2 w-fit space-y-2">
              {MoterisedData.map((product, index) => (
                <Link
                  key={index}
                  onClick={onClick}
                  href={product.link}
                  className={`text-16 ${
                    path.slice(1) === generateSlug(product.title)
                      ? 'font-bold'
                      : 'font-normal'
                  }`}
                >
                  {product.title}dsd
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <>
            {distributedProducts.map((products, index) => {
              const headerType = ['By Style', 'By Room', 'Dynamic'][index];
              const isActive =
                (title === 'Commercial' &&
                  (matchingItem?.includes('blinds-and-curtains') ||
                    matchingItem?.includes('blinds-curtains') ||
                    matchingItem?.includes('printed-blinds'))) ||
                matchingItem?.includes(title.toLowerCase());

              const dynamicLabel =
                title === 'Blinds' && headerType === 'Dynamic'
                  ? 'By Meterial'
                  : title === 'Curtains' && headerType === 'Dynamic'
                  ? 'By Febric Type'
                  : title === 'Shutters' && headerType === 'Dynamic'
                  ? 'By Colour'
                  : title === 'Commercial' && headerType === 'Dynamic'
                  ? 'By Meterial'
                  : headerType;

              // Skip panel if product list is empty
              if (products.length === 0) return null;

              return (
                <Panel
                  header={
                    <span
                      className={`${
                        isActive && defualtActiveKey === index
                          ? 'text-secondary font-bold'
                          : 'font-normal'
                      }`}
                    >
                      {title} {dynamicLabel}
                    </span>
                  }
                  key={index}
                  className="custom-panel pt-[6px]"
                >
                  <ul className="space-y-2">
                    {products.map((product, idx) => (
                      <li key={idx}>
                        <Link
                          href={generatePath(product, title.toLowerCase())}
                          className={`text-16 ${
                            matchingItem === generateSlug(product.title)
                              ? 'font-bold'
                              : 'font-normal'
                          }`}
                          onClick={onClick}
                        >
                          {title === 'Blinds' && headerType === 'By Room'
                            ? product.title.replace('Blinds', '')
                            : title === 'Curtains' &&
                              headerType === 'By Room'
                            ? product.title.replace('Curtains', '')
                            : title === 'Curtains' &&
                              headerType.toLowerCase() === 'dynamic'
                            ? product.title === 'Geometric Curtains'
                              ? 'Geometric Designs'
                              : product.title.includes('Fabric')
                              ? product.title.replace('Curtains', '')
                              : product.title.replace('Curtains', 'Fabrics')
                            : title === 'Shutters' &&
                              (headerType === 'By Room' ||
                                headerType.toLowerCase() === 'dynamic')
                            ? product.title.replace('Shutters', '')
                            : title === 'Commercial' &&
                              (headerType === 'By Room' ||
                                headerType.toLowerCase() === 'dynamic')
                            ? product.title.replace(
                                /Blinds And Curtains|Curtains/g,
                                '',
                              )
                            : product.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Panel>
              );
            })}
          </>
        )}
      </Collapse>
    </div>
  );
};

export default MobileCollapseMenu;
