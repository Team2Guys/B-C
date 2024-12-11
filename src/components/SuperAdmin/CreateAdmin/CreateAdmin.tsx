'use client';
import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';

import { IoMdArrowRoundBack } from 'react-icons/io';
import { Checkbox, CheckboxProps } from 'antd';
import axios from 'axios';
import Toaster from 'components/Toaster/Toaster';
import Loader from 'components/Loader/Loader';
import Cookies from 'js-cookie';
import { Button } from 'components/ui/button';
import { createAdmin, formDataTypes } from 'types/interfaces';
import Input from 'components/Common/regularInputs';
import { intitalValues } from 'data/data';


const CreateAdmin = ({ setselecteMenu, edit_admins, setedit_admins }: createAdmin) => {
  const [formData, setFormData] = useState<formDataTypes>(edit_admins ? edit_admins : intitalValues);


  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange: CheckboxProps['onChange'] = (e: any) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = async () => {
    try {
      setError('');
      let token = Cookies.get('superAdminToken');
      if (!token) return null;

      let paswordFlag = edit_admins ? false : !formData.password

      if (!formData.fullname || !formData.email || paswordFlag)
        throw new Error('Fields are required');

      setLoading(true);
      let url = edit_admins ? `/api/admins/editAdmin/${edit_admins.id}` : `/api/admins/add-admin`
      let method_type: "post" | "put" = edit_admins ? "put" : "post"

      let response: any = await axios[method_type](`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      );


      console.log(response, 'response');
      Toaster('success', 'Admin has been sucessfully Created');
      setFormData(intitalValues);
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else if (err.message) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleAddAllPermissions = () => {
    setFormData({
      ...formData,
      canAddProduct: true,
      canEditProduct: true,
      canDeleteProduct: true,
      canAddCategory: true,
      canDeleteCategory: true,
      canEditCategory: true,
      canAddSubCategory:true,
      canDeleteSubCategory:true,
      canEditSubCategory:true,
      canViewAppointments:true,
      canVeiwAdmins: true,
      canVeiwTotalproducts: true,
      canVeiwTotalCategories: true,
      canVeiwTotalSubCategories:true,
      canAddBlog: true,
      canDeleteBlog: true,
      canEditBlog : true,
    });


  };

  const checkboxData = [
    { name: 'canAddProduct', label: 'Can Add Product' },
    { name: 'canEditProduct', label: 'Can Edit Product' },
    { name: 'canDeleteProduct', label: 'Can Delete Product' },
    { name: 'canAddCategory', label: 'Can Add Category' },
    { name: 'canDeleteCategory', label: 'Can Delete Category' },
    { name: 'canEditCategory', label: 'Can Edit Category' },
    { name: 'canAddSubCategory', label: 'Can Add SubCategory' },
    { name: 'canDeleteSubCategory', label: 'Can Delete SubCategory' },
    { name: 'canEditSubCategory', label: 'Can Edit SubCategory' },
    { name: 'canViewAppointments', label: 'Can View Appointments' },
    { name: 'canVeiwAdmins', label: 'Can View Admins' }, 
    { name: 'canVeiwTotalproducts', label: 'Can View Total Products' }, 
    { name: 'canVeiwTotalCategories', label: 'Can View Total Categories' },
    { name: 'canVeiwTotalSubCategories', label: 'Can View Total SubCategories' },
    { name: 'canAddBlog', label: 'Can Add Blog' },
    { name: 'canDeleteBlog', label: 'Can Delete Blog' },
    { name: 'canEditBlog', label: 'Can Edit Blog' },
  ];

  const handleClearAllPermissions = () => {
    setFormData({
      ...formData,
      canAddProduct: false,
      canEditProduct: false,
      canDeleteProduct: false,
      canAddCategory: false,
      canDeleteCategory: false,
      canEditCategory: false,
      canAddSubCategory: false, 
      canDeleteSubCategory: false,
      canEditSubCategory: false,
      canViewAppointments: false,
      canVeiwAdmins: false,  
      canVeiwTotalproducts: false,  
      canVeiwTotalCategories: false,
      canVeiwTotalSubCategories: false,  
      canAddBlog: false,
      canDeleteBlog: false,
      canEditBlog: false,
    });
  };

  return (
    <>
      <div
        className="text-lg font-black mb-4 flex items-center justify-center gap-2 dark:text-white w-fit p-2 cursor-pointer"
        onClick={() => {
          setselecteMenu('AllAdmin');
          setedit_admins && setedit_admins(undefined)

        }}
      >
        <IoMdArrowRoundBack /> Back
      </div>

      <Form
        className="max-w-screen-md mx-auto rounded-md shadow-xl mt-1 mb-5 dark:bg-lightdark"
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Row gutter={[10, 10]} className="lg:p-6 p-4">
          <Col
            xl={{ order: 1, span: 24 }}
            lg={{ order: 1, span: 24 }}
            md={{ order: 1, span: 24 }}
            sm={{ order: 1, span: 24 }}
            xs={{ order: 1, span: 24 }}
          >
            <p className="text-2xl dark:text-white">Create New Admin</p>
          </Col>
          <Col
            xl={{ order: 1, span: 12 }}
            lg={{ order: 1, span: 12 }}
            md={{ order: 1, span: 12 }}
            sm={{ order: 1, span: 12 }}
            xs={{ order: 1, span: 24 }}
          >
            <Form.Item label={<span className="text-black dark:text-white">Full Name</span>}>
              <Input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={formData.fullname}
                onChange={handleInputChange}
              />
            </Form.Item>
          </Col>

          <Col
            xl={{ order: 1, span: 12 }}
            lg={{ order: 1, span: 12 }}
            md={{ order: 1, span: 12 }}
            sm={{ order: 1, span: 12 }}
            xs={{ order: 1, span: 24 }}
          >
            <Form.Item label={<span className="text-black dark:text-white">Email</span>}>
              <Input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Form.Item>
          </Col>
          <Col
            xl={{ order: 1, span: 24 }}
            lg={{ order: 1, span: 24 }}
            md={{ order: 1, span: 24 }}
            sm={{ order: 1, span: 24 }}
            xs={{ order: 1, span: 24 }}
          >
            <Form.Item label={<span className="text-black dark:text-white">Password</span>}>
              <Input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </Form.Item>
          </Col>
          {checkboxData.map((checkbox, index) => (
            <Col
              key={index}
              xl={{ order: 1, span: 8 }}
              lg={{ order: 1, span: 8 }}
              md={{ order: 1, span: 8 }}
              sm={{ order: 1, span: 12 }}
              xs={{ order: 1, span: 24 }}
            >
              <Checkbox
                className="custom-checkbox"
                name={checkbox.name}
                checked={formData[checkbox.name as keyof typeof formData] as boolean}
                onChange={handleCheckboxChange}
              >
                {checkbox.label}
              </Checkbox>

            </Col>
          ))}

          <Col
            className="text-center mt-2 flex justify-between w-full items-center"
            xl={{ order: 1, span: 24 }}
            lg={{ order: 1, span: 24 }}
            md={{ order: 1, span: 24 }}
            sm={{ order: 1, span: 24 }}
            xs={{ order: 1, span: 24 }}
          >
            <button
              type="button"
              className="px-3 py-1 bg-primary rounded  text-white"
              onClick={handleClearAllPermissions}
            >
              Clear All{' '}
            </button>
            <button
              type="button"
              className="px-3 py-1 bg-primary rounded  text-white "
              onClick={handleAddAllPermissions}
            >
              Add All permissions
            </button>
          </Col>
          <Col
            className="text-center mt-2 flex justify-between w-full items-center"
            xl={{ order: 1, span: 24 }}
            lg={{ order: 1, span: 24 }}
            md={{ order: 1, span: 24 }}
            sm={{ order: 1, span: 24 }}
            xs={{ order: 1, span: 24 }}
          >
            {error ? <p className="text-black dark:text-white text-lg">{error}</p> : null}
          </Col>
          <Col
            className="text-center mt-2"
            xl={{ order: 1, span: 24 }}
            lg={{ order: 1, span: 24 }}
            md={{ order: 1, span: 24 }}
            sm={{ order: 1, span: 24 }}
            xs={{ order: 1, span: 24 }}
          >
            <Button
              disabled={loading}
              className="bg-primary  text-white w-full"
              onClick={handleSubmit}
            >
              {loading ? <Loader color="White" /> : 'Add Admin'}
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default CreateAdmin;
