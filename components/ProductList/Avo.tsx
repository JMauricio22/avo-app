import React from 'react';
import { Header, Transition } from 'semantic-ui-react';

import Avocado from '@components/SVGIcons/Avocado';

type AnimatedHeaderProps = {
  visible: boolean;
  onClick: () => void;
  onComplete: () => void;
};

const Avo = ({ visible, onClick, onComplete }: AnimatedHeaderProps) => {
  return (
    <Header as="h1" onClick={onClick}>
      Avo
      <Transition
        animation="jiggle"
        visible={visible}
        duration={900}
        onComplete={onComplete}
      >
        <Avocado size="58px" />
      </Transition>
      App
    </Header>
  );
};

export default Avo;
