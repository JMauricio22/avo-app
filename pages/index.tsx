import React from 'react';
import ProductList from '@components/ProductList/Index';

export async function getServerSideProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products`
  );
  const { data } = await response.json();
  return {
    props: {
      productList: data,
    },
  };
}

export default function index({ productList }: { productList: TProduct[] }) {
  return (
    <>
      <ProductList products={productList} />
    </>
  );
}
