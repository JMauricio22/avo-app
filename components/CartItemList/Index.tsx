import Link from 'next/link';
import { Item, Button, Icon } from 'semantic-ui-react';
import { Message } from 'semantic-ui-react';
import { CartItemType } from '@store/Cart';

type CartItemListProps = {
  items: CartItemType[];
  removeFromCart: (product: TProduct) => void;
  increaseElementQuantity: (product: TProduct) => void;
  decreaseElementQuantity: (product: TProduct) => void;
};

const Index = ({
  items,
  removeFromCart,
  increaseElementQuantity,
  decreaseElementQuantity,
}: CartItemListProps) => {
  const mapCartItemsToItems = (items: CartItemType[]) => {
    return items.map((item: CartItemType) => {
      const {
        id,
        name,
        image,
        price,
        quantity,
        attributes: { description },
      } = item;

      return {
        childKey: id,
        image: (
          <Item.Image
            size="small"
            src={image}
            alt={name}
            style={{ background: '#f2f2f2' }}
          />
        ),
        header: (
          <Link href="/product/[id]" as={`/product/${id}/`} passHref>
            <Item.Header as="a">{name}</Item.Header>
          </Link>
        ),
        description: (
          <p
            style={{
              width: '100%',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {description}
          </p>
        ),
        meta: `${quantity} x ${price}`,
        extra: (
          <>
            <Button
              basic
              color="instagram"
              icon="add"
              circular
              compact
              size="small"
              onClick={() => increaseElementQuantity(item)}
            />
            <Button
              basic
              color="instagram"
              icon="minus"
              circular
              compact
              size="small"
              onClick={() => decreaseElementQuantity(item)}
            />
            <Button
              size="tiny"
              color="red"
              basic
              icon="remove"
              floated="right"
              onClick={() => removeFromCart(item)}
            />
          </>
        ),
      };
    });
  };

  const onEmpty = () => {
    return !items.length ? (
      <Message warning>
        <Message.Header>Your cart is empty</Message.Header>
        <p>
          You will need to add some items to the cart before you can checkout.
        </p>
      </Message>
    ) : null;
  };

  const onRender = () => <Item.Group items={mapCartItemsToItems(items)} />;

  return (
    <>
      {onEmpty()}
      {onRender()}
    </>
  );
};

export default Index;
