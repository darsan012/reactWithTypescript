import { ListGroup } from './ListGroup';

interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <ListGroup
        items={cartItems}
        heading="Items in the carts are:"
        onSelectedItem={() => console.log('Selected')}
      />
      <button onClick={onClear}>Clear Items</button>
    </>
  );
};

export default Cart;
