import { Header, Table, Divider } from 'semantic-ui-react';

type ProductAttributes = {
  attributes: TProductAttributes;
};

const ProductAttributes = ({ attributes }: ProductAttributes) => {
  return (
    <>
      <Header as="h3">About this avocado</Header>
      <p>{attributes.description}</p>
      <Divider />
      <Table>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="3">Attributes</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Shape</Table.Cell>
            <Table.Cell>{attributes.shape}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Hardiness</Table.Cell>
            <Table.Cell>{attributes.hardiness}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Taste</Table.Cell>
            <Table.Cell>{attributes.taste}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};

export default ProductAttributes;
