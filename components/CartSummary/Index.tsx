import React from 'react';
import Link from 'next/link';
import { Segment, Button } from 'semantic-ui-react';

type CartSummaryProps = {
  totalAmount: number;
};

const Index = ({ totalAmount }: CartSummaryProps) => {
  return (
    <Segment clearing size="large" as="section">
      <span>
        <strong>Sub total:</strong>$ {totalAmount}
      </span>
      <Link href="/checkout">
        <Button color="black" floated="right" role="link"  disabled={totalAmount < 1}>
          Check out
        </Button>
      </Link>
    </Segment>
  );
};

export default Index;
