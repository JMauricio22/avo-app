import React from 'react';
import { Header, Transition, Confirm } from 'semantic-ui-react';

import DeadAvocado from '@components/SVGIcons/DeadAvocado';

const RottenHeader = () => (
  <Header size="huge" as="h1">
    Avo
    <DeadAvocado size="58px" />
    App
  </Header>
);

export default RottenHeader;
