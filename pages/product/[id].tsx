import React from 'react';
import { GetServerSideProps } from 'next';
import ProductSummary from '@components/ProductSummary/Index';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products/${params.id}`
  );
  const product: TProduct = await response.json();
  return {
    props: {
      product,
    },
  };
};

export default function Index({ product }: { product: TProduct }) {
  return <>{product == null ? null : <ProductSummary product={product} />}</>;
}
