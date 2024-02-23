import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Button from './components/Button';
import { ListGroup } from './components/ListGroup';

function App() {
  const items = ['New York', 'San Francisco', 'Oxford', 'Deutschland'];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const [btnClick, setBtnClick] = useState(false);

  return (
    <>
      {/* conditional rendering for displaying alert and list */}
      {btnClick && (
        <Alert onClick={() => setBtnClick(false)}>
          <strong>Click me</strong> to hide cities
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
    </>
  );
}

export default App;
