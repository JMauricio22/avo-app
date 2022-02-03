import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import { Card, Container, Grid, Confirm } from 'semantic-ui-react';
import Avo from './Avo';
import ModalHeaderContent from './ModalHeaderContent';
import RottenHeader from './RottenHeader';

type ProductListProps = {
  products: TProduct[];
};

const Index = ({ products }: ProductListProps) => {
  const [count, setCount] = useState(0);
  const [isAvoDead, setIsAvoDead] = useState(false);
  const [visible, setVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleVisible = () => setVisible((prevVisible) => !prevVisible);

  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    window.setTimeout(toggleVisible, 350);
  }, []);

  useEffect(() => {
    if (count === 4) {
      setIsAvoDead(true);
      setModalOpen(true);
    }
  }, [count]);

  return (
    <Container>
      <div className="title">
        <Grid textAlign="center">
          <Grid.Row>
            <Grid.Column>
              <div className="header-container">
                {isAvoDead ? (
                  <RottenHeader />
                ) : (
                  <Avo
                    visible={visible}
                    onClick={toggleVisible}
                    onComplete={() => setCount((prevCount) => prevCount + 1)}
                  />
                )}
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <Card.Group itemsPerRow={2} stackable>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </Card.Group>
      <Confirm
        open={modalOpen}
        content={ModalHeaderContent}
        onCancel={closeModal}
        onConfirm={closeModal}
        cancelButton="Ay, lo siento"
        confirmButton="OK"
        closeOnDimmerClick={false}
      />
      <style>
        {`
          .title {
            margin: 4rem 0;
          }
          .header-container h1 {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .header-container h1 svg {
            cursor: pointer;
          }
        `}
      </style>
    </Container>
  );
};

export default Index;
