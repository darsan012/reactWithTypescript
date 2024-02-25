import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Button from './components/Button';
import { ListGroup } from './components/ListGroup';
import ObjectPractise from './ObjectPractise';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

function App() {
  const items = ['New York', 'San Francisco', 'Oxford', 'Deutschland'];
  const [cartItems, setCartItems] = useState(['Tv', 'Cable', 'Keyboard']);
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const [btnClick, setBtnClick] = useState(false);

  return (
    <>
      {/* conditional rendering for displaying alert and list */}
      {btnClick && (
        <Alert onClick={() => setBtnClick(false)}>
          <strong>Click the cross</strong> to hide cities
        </Alert>
      )}
      {btnClick && (
        <ListGroup
          items={items}
          heading="The list of the cities are:"
          onSelectedItem={handleSelectedItem}
        />
      )}
      <br />
      <Button onClick={() => setBtnClick(true)} color="secondary">
        Show Cities
      </Button>
      <ObjectPractise>
        Below is the playground for objects in react state
      </ObjectPractise>

      <hr />
      <div>Sharing states between navbar and cart components</div>
      <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </>
  );
}

export default App;
