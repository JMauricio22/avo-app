import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, Container } from 'semantic-ui-react';
import Avocado from '@components/SVGIcons/Avocado';
import ShoppingCart from './ShoppingCart';

const Index = () => {
  const { pathname } = useRouter();

  return (
    <header>
      <Menu size="huge" borderless>
        <Container text>
          <Link href="/">
            <Menu.Item name="Home" active={pathname === '/'}>
              <Avocado />
              Avo Store
            </Menu.Item>
          </Link>
          <Link href="/cart">
            <Menu.Item name="Cart" position="right">
              <ShoppingCart />
            </Menu.Item>
          </Link>
        </Container>
      </Menu>
    </header>
  );
};

export default Index;
