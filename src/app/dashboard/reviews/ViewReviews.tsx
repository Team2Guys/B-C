"use client"

import { Table } from 'antd';
import revalidateTag from 'components/ServerActons/ServerAction';
import { deleteReview } from 'config/fetch';
import Image from 'next/image';
import React, { SetStateAction, useState } from 'react'
import { LiaEdit } from 'react-icons/lia';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import { IREVIEWS } from 'types/general';

import { DateFormatHandler } from 'utils/helperFunctions';

interface IView_Reviews {
    review: IREVIEWS[],
    setselecteMenu: React.Dispatch<SetStateAction<string>>,
    setEditsetReview: React.Dispatch<SetStateAction<IREVIEWS | undefined>>,
}

export default function ViewReviews({
    review,
    setselecteMenu,
    setEditsetReview
}: IView_Reviews) {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [loading, setloading] = useState<number | undefined>()

    const canDeleteProduct = true;
    const canEditproduct = true;
    const canAddProduct = true;



    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const confirmDelete = (key: number) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Once deleted, the Sub Category cannot be recovered.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',
        }).then((result) => {
            console.log(result, "result")
            if (result.isConfirmed) {
                handleDelete(key);
            }
        }).catch((err) => {
            console.log(err)
        });
    };


    const handleDelete = async (key: number) => {
        try {
            setloading(key)
            await deleteReview(key)
            revalidateTag('reviews');

        } catch (err) {
console.log(err, )
throw err
        } finally{
            setloading(key)
        }
    };

    const columns = [
        {
            title: 'Image',
            dataIndex: 'posterImageUrl',
            width: 150,
            key: 'posterImageUrl',
            render: (text: string, record: IREVIEWS) => (
                <Image
                    src={record?.posterImageUrl?.imageUrl || "/assets/images/dummy-avatar.jpg"}
                    alt={`Image of ${record?.name}`}
                    width={200}
                    loading='lazy'
                    className="sm:w-[80px] sm:h-[80px] rounded-md object-contain"
                    height={200}
                />
            ),
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 200,
        },

        {
            title: 'Create At',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text: string, record: IREVIEWS) =>
                record?.createdAt ? new Date(record.createdAt).toLocaleString('en-US', { hour12: true }).replace(/:\d{2}\s/, ' ') : null,
        },
        {
            title: 'Updated At',
            dataIndex: 'createdAt',
            key: 'date',
            render: (_: string, record: IREVIEWS) => {
                const createdAt = new Date(record?.updatedAt ?? "");
                return <span>{DateFormatHandler(createdAt)}</span>;
            }
        },
        {
            title: 'Edit',
            key: 'Edit',
            width: 150,
            render: (text: string, record: IREVIEWS) => (
                <LiaEdit
                    className={`${canEditproduct ? 'cursor-pointer' : ''} ${!canEditproduct ? 'cursor-not-allowed text-slate-200' : ''
                        }`}
                    size={20}
                    onClick={() => {
                        if (canEditproduct) {
                            setEditsetReview(record);
                            setselecteMenu('Add Products');
                        }
                    }}
                />
            ),
        },
        {
            title: 'Action',
            key: 'action',
            width: 150,
            render: (text: string, record: IREVIEWS) => (
                loading == record.id ? "Deleting" :
                    <RiDeleteBin6Line
                        className={`${canDeleteProduct ? 'text-red-600 cursor-pointer' : ''} ${!canDeleteProduct ? 'cursor-not-allowed text-slate-200' : ''
                            }`}
                        size={20}
                        onClick={() => {
                            console.log(record, "id")
                            // if (canDeleteProduct) {
                            confirmDelete(record.id);
                            // }
                        }}
                    />
            ),
        },
    ];

    return (
        <>
            <div className="flex justify-between gap-2 mb-4 items-center flex-nowrap">
                <input
                    className="primary-input w-fit max-w-96"
                    type="search"
                    placeholder="Search Review"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <div>
                    <p
                        className={`py-2 px-4 rounded-md text-nowrap text-12 xs:text-base ${canAddProduct
                                ? 'cursor-pointer text-white bg-black '
                                : 'cursor-not-allowed bg-gray-500 text-white'
                            }`}
                        onClick={() => {
                            if (canAddProduct) {
                                setselecteMenu('Add Products');
                                setEditsetReview(undefined);
                            }
                        }}
                    >
                        Add Review
                    </p>
                </div>
            </div>
            <Table
                key={review?.map(r => r.id).join(',')}
                className="lg:overflow-hidden overflow-x-scroll !dark:border-strokedark !dark:bg-boxdark !bg-transparent"
                dataSource={review}
                columns={columns}
                rowKey="id"
                pagination={false}
            />


        </>
    )
}
