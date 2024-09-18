import Breadcrumb from 'components/Dashboard/Breadcrumbs/Breadcrumb'
import DefaultLayout from 'components/Dashboard/Layouts/DefaultLayout'
import React from 'react'

const Blog = () => {
  return (
    <DefaultLayout>
    <Breadcrumb pageName={'Blogs'} />
    
  </DefaultLayout>
  )
}

export default Blog