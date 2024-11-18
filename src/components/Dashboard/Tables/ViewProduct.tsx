'use client';
import React, { useState, useEffect } from 'react';
import { Table, notification, Modal } from 'antd';
import Image from 'next/image';
import { RiDeleteBin6Line } from 'react-icons/ri';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FaRegEye } from 'react-icons/fa';
import { LiaEdit } from 'react-icons/lia';
import { useAppSelector } from 'components/Others/HelperRedux';
import { generateSlug } from 'data/data';
import Loader from 'components/Loader/Loader';
import Cookies from 'js-cookie';
import TableSkeleton from './TableSkelton';
import { useQuery } from '@tanstack/react-query';
import { ICategory, IProduct } from 'types/types';
import { fetchCategories } from 'config/fetch';

interface Product {
  id: string;
  title: string;
  category: string;
  posterImage: { imageUrl: string };
  createdAt: string;
}

interface CategoryProps {
  Categories: any;
  setCategory: any;
  setselecteMenu: (menu: string) => void;
  loading: boolean;
  setEditProduct: any;
}

const ViewProduct: React.FC<CategoryProps> = ({
  Categories,
  setCategory,
  setselecteMenu,
  loading,
  setEditProduct,
}) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const admin_token = Cookies.get('2guysAdminToken');
  const super_admin_token = Cookies.get('superAdminToken');

  const token = admin_token || super_admin_token;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const { loggedInUser }: any = useAppSelector((state) => state.usersSlice);
  const canAddProduct = true;
  const canDeleteProduct = true;
  const canEditproduct = true;

  useEffect(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    if (Categories) {
      const filtered = Categories.filter((product: Product) =>
        product.title.toLowerCase().includes(lowercasedSearchTerm),
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, Categories]);

  const confirmDelete = (key: any) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this product?',
      content: 'Once deleted, the product cannot be recovered.',
      onOk: () => handleDelete(key),
      okText: 'Yes',
      cancelText: 'No',
    });
  };

  const handleDelete = async (key: string) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/delete_product/${key}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      setCategory((prev: Product[]) => prev.filter((item) => item.id !== key));
      notification.success({
        message: 'Product Deleted',
        description: 'The product has been successfully deleted.',
        placement: 'topRight',
      });
    } catch (err) {
      notification.error({
        message: 'Deletion Failed',
        description: 'There was an error deleting the product.',
        placement: 'topRight',
      });
    }
  };
  const {
    data: categories,
    error: categoriesError,
    isLoading: isLoadingCategories,
  } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const columns = [
    {
      title: 'Image',
      dataIndex: 'posterImageUrl',
      key: 'posterImageUrl',
      render: (text: any, record: Product) => (
        <Image
          src={record.posterImage?.imageUrl}
          alt={`Image of ${record.title}`}
          width={50}
          height={50}
        />
      ),
    },
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'date',
      render: (text: any, record: Product) => {
        const createdAt = new Date(record.createdAt);
        return <span>{createdAt.toLocaleDateString()}</span>;
      },
    },
    {
      title: 'Time',
      dataIndex: 'createdAt',
      key: 'time',
      render: (text: any, record: Product) => {
        const createdAt = new Date(record.createdAt);
        return <span>{createdAt.toLocaleTimeString()}</span>;
      },
    },
    {
      title: 'Preview',
      key: 'Preview',
      render: (text: any, record: Product) => {
        //@ts-expect-error
        const category = categories?.find((i) => i.id === record.CategoryId);
        if (category === undefined) return null;
        const parent = generateSlug(category?.title);
        return (
          <FaRegEye
            className="cursor-pointer"
            onClick={() => {
              const url = `/${parent === 'shutters' ? `${parent}-range` : parent}/${generateSlug(record.title)}`;
              window.open(url, '_blank');
            }}
          />
        );
      },
    },
    {
      title: 'Edit',
      key: 'Edit',
      render: (text: any, record: Product) => (
        <LiaEdit
          className={`${canEditproduct ? 'cursor-pointer' : 'cursor-not-allowed text-slate-200'}`}
          size={20}
          onClick={() => {
            if (canEditproduct) {
              console.log(record, 'canEditproduct');
              setEditProduct(record);
              setselecteMenu('Add Products');
            }
          }}
        />
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: Product) => (
        <RiDeleteBin6Line
          className={`${canDeleteProduct ? 'text-red cursor-pointer' : 'cursor-not-allowed text-slate-200'}`}
          size={20}
          onClick={() => {
            if (canDeleteProduct) {
              confirmDelete(record.id);
            }
          }}
        />
      ),
    },
  ];

  return (
    <div>
      {loading || isLoadingCategories ? (
        <TableSkeleton rows={8} columns={5} />
      ) : (
        <>
          <div className="flex justify-between mb-4 items-center flex-wrap text-black dark:text-white">
            <input
              className="peer lg:p-3 p-2 block outline-none border dark:text-black rounded-md border-gray-200 dark:bg-boxdark dark:drop-shadow-none text-sm dark:focus:border-primary focus:border-dark focus:ring-dark-500 disabled:opacity-50 disabled:pointer-events-none"
              type="search"
              placeholder="Search Product"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <div>
              <p
                className={`${canAddProduct ? 'cursor-pointer rounded-md' : 'cursor-not-allowed  text-white rounded-md'} p-2 ${canAddProduct ? '  bg-secondary text-white rounded-md ' : ''}`}
                onClick={() => {
                  if (canAddProduct) {
                    setEditProduct(undefined);
                    setselecteMenu('Add Products');
                  }
                }}
              >
                Add Products
              </p>
            </div>
          </div>
          {filteredProducts && filteredProducts.length > 0 ? (
            <Table
              className="lg:overflow-hidden overflow-x-scroll !dark:border-strokedark !dark:bg-boxdark !bg-transparent"
              dataSource={filteredProducts}
              columns={columns}
              rowKey="id"
              pagination={false}
            />
          ) : (
            <p className="text-primary dark:text-white">No products found</p>
          )}
        </>
      )}
    </div>
  );
};

export default ViewProduct;
