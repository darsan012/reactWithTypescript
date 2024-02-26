import { useState } from 'react';
import './App.css';
import './index.css';
import Alert from './components/Alert';
import Button from './components/Button';
import { ListGroup } from './components/ListGroup';
import ObjectPractise from './ObjectPractise';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import ExpandableText from './components/ExpandableText';

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

      <hr />
      <ExpandableText maxChar={10}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
      </ExpandableText>
    </>
  );
}

export default App;
