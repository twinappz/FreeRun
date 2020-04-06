import React from 'react';
import Layout from '../containers/Layout';
import CreateProduct from '../components/CreateProduct';

const AddProductPage = () => {
  return (
    <Layout title='Add Product'>
      <CreateProduct />
    </Layout>
  );
}

export default AddProductPage;