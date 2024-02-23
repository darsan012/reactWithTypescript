import './App.css';
import { ListGroup } from './components/ListGroup';

function App() {
  const items = ['New York', 'San Francisco', 'Oxford', 'Deutschland'];

  return (
    <>
      <ListGroup items={items} heading="list" />
    </>
  );
}

export default App;
