"use client"

import { Table } from 'antd';
import revalidateTag from 'components/ServerActons/ServerAction';
import { deleteRedirectUrl } from 'config/fetch';
import React, { SetStateAction, useState } from 'react'
import { LiaEdit } from 'react-icons/lia';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import { RedirectUrls } from 'types/general';
import { DateFormatHandler } from 'utils/helperFunctions';

interface IView_RedirectUrls {
    Redirecturls: RedirectUrls[],
    setselecteMenu: React.Dispatch<SetStateAction<string>>,
    setRedirectUrls: React.Dispatch<SetStateAction<RedirectUrls | undefined>>,
}

export default function ViewRedirecturl({
    Redirecturls,
    setselecteMenu,
    setRedirectUrls
}: IView_RedirectUrls) {

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
            await deleteRedirectUrl(key)
            revalidateTag('reviews');

        } catch (err) {
            console.log(err, "error")

            throw err;
        } finally{
                     setloading(undefined)
        }
    };

    const columns = [

        {
            title: 'Url',
            dataIndex: 'url',
            key: 'url',
            width: 200,
        },

        {
            title: 'Create At',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (_: string, record: RedirectUrls) => {
                const createdAt = new Date(record?.createdAt ?? "");
                return <span>{DateFormatHandler(createdAt)}</span>;
            }
        },
        {
            title: 'Updated At',
            dataIndex: 'createdAt',
            key: 'date',
            render: (_: string, record: RedirectUrls) => {
                const createdAt = new Date(record?.updatedAt ?? "");
                return <span>{DateFormatHandler(createdAt)}</span>;
            }
        },
        {
            title: 'Edit',
            key: 'Edit',
            width: 150,
            render: (text: string, record: RedirectUrls) => (
                <LiaEdit
                    className={`${canEditproduct ? 'cursor-pointer' : ''} ${!canEditproduct ? 'cursor-not-allowed text-slate-200' : ''
                        }`}
                    size={20}
                    onClick={() => {
                        if (canEditproduct) {
                            setRedirectUrls(record);
                            setselecteMenu('Add RedirectUrls');
                        }
                    }}
                />
            ),
        },
        {
            title: 'Action',
            key: 'action',
            width: 150,
            render: (text: string, record: RedirectUrls) => (
                loading && loading === record.id ? "Deleting..." :
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
                    className="search_input"
                    type="search"
                    placeholder="Search Review"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <div>
                    <p
                        className={`dashboard_primary_button ${canAddProduct
                                ? 'cursor-pointer text-white bg-primary '
                                : 'cursor-not-allowed bg-gray-500 text-white'
                            }`}
                        onClick={() => {
                            if (canAddProduct) {
                                setselecteMenu('Add RedirectUrls');
                                setRedirectUrls(undefined);
                            }
                        }}
                    >
                        Add Redirect Urls
                    </p>
                </div>
            </div>
            <Table
                className="lg:overflow-hidden overflow-x-scroll !dark:border-strokedark !dark:bg-boxdark !bg-transparent"
                dataSource={Redirecturls}
                columns={columns}
                rowKey="id"
                pagination={false}
            />


        </>
    )
}
