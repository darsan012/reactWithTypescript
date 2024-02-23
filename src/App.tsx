import './App.css';
import Alert from './components/Alert';
// import { ListGroup } from './components/ListGroup';

function App() {
  // const items = ['New York', 'San Francisco', 'Oxford', 'Deutschland'];
  // const handleSelectedItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <>
      {/* <ListGroup
        items={items}
        heading="list"
        onSelectedItem={handleSelectedItem}
      /> */}
      <Alert>
        Hello <h1>World</h1>
      </Alert>
    </>
  );
}

export default App;
