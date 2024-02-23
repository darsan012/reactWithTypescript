import './App.css';
import { ListGroup } from './components/ListGroup';

function App() {
  const items = ['New York', 'San Francisco', 'Oxford', 'Deutschland'];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <ListGroup
        items={items}
        heading="list"
        onSelectedItem={handleSelectedItem}
      />
    </>
  );
}

export default App;
