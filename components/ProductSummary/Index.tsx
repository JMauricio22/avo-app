import { Item, Label, Button } from 'semantic-ui-react';
import AddCart from './AddCart';
import ProductAttributes from './ProductAttributes';

type ProductSummaryProps = {
  product: TProduct;
};

const Index = ({ product }: ProductSummaryProps) => {
  return (
    <>
      <Item.Group as="section">
        <Item style={{ alignItems: 'center' }}>
          <Item.Image size="medium" src={product.image} />
          <Item.Content>
            <Item.Header as="h1">{product.name}</Item.Header>
            <Item.Meta>{product.price}</Item.Meta>
            <Item.Description>
              <Label>SKU: {`${product.sku}`}</Label>
            </Item.Description>
            <Item.Extra>
              <AddCart product={product} />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      <ProductAttributes attributes={product.attributes} />
    </>
  );
};

export default Index;
