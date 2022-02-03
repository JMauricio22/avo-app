import { Segment, Icon, Header, List } from 'semantic-ui-react';

const success = () => (
  <Segment
    color="blue"
    inverted
    textAlign="center"
    style={{ marginTop: '1rem', color: 'white' }}
  >
    <Icon inverted circular name="check" size="big" color="green" />
    <List>
      <List.Item style={{ fontSize: '18px' }}>
        Su compra se ha completado con éxito
      </List.Item>
      <List.Item>
        <small style={{ fontSize: '12px' }}>Avo Store</small>
      </List.Item>
    </List>
  </Segment>
);

export default success;
