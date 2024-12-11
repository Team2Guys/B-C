'use client';

import AddSubcategory from 'components/AddCategory/AddSubcategory';
import Breadcrumb from 'components/Dashboard/Breadcrumbs/Breadcrumb';
import DefaultLayout from 'components/Dashboard/Layouts/DefaultLayout';
import ViewSubcategries from 'components/Dashboard/Tables/ViewSubcategries';
import ProtectedRoute from 'hooks/AuthHookAdmin';
import { useState } from 'react';
import { CategoriesType } from 'types/interfaces';

const AddCategory = () => {
  const [menuType, setMenuType] = useState<string>('Categories');
  const [editCategory, seteditCategory] = useState<
    CategoriesType | undefined | null
  >();

  return (
    <DefaultLayout>
      <Breadcrumb pageName={'Sub Categories'} />
      {menuType === 'Categories' ? (
        <div className="flex flex-col gap-10">
          <ViewSubcategries
            setMenuType={setMenuType}
            seteditCategory={seteditCategory}
            editCategory={editCategory}
          />
        </div>
      ) : (
        <AddSubcategory
          setMenuType={setMenuType}
          seteditCategory={seteditCategory}
          editCategory={editCategory}
        />
      )}
    </DefaultLayout>
  );
};

export default ProtectedRoute(AddCategory);
