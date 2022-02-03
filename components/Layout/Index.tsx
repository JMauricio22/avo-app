import React from 'react';
import { Container } from 'semantic-ui-react';
import Navbar from '../Navbar/Index';
import Footer from '../Footer/Index';

type LayoutProps = {
  children?: React.ReactNode;
};

const Index = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Container as="main" text>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Index;
