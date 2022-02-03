import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from 'semantic-ui-react';

type ProductItemProps = {
  product: TProduct;
};

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link key={product.id} href={`/product/${product.id}`} passHref>
      <Card>
        <Image src={`${product.image}`} width={333} height={333} />
        <Card.Content>
          <Card.Header>{product.name}</Card.Header>
          <Card.Meta>{product.price}</Card.Meta>
        </Card.Content>
      </Card>
    </Link>
  );
};

export default ProductItem;
