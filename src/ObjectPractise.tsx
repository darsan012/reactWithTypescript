import { useState } from 'react';
import Button from './components/Button';

interface Props {
  children: string;
  //   onClick: () => void;
}

const ObjectPractise = ({ children }: Props) => {
  const [drink, setDrink] = useState({ title: 'Americano', price: 5 });

  // working with the arrays
  const [tags, setTags] = useState(['happy', 'cheerful']);

  const handleCLick = () => {
    // drink.price = 6;//
    // setDrink(drink); // this doesn't work, we need to give brand new object as below

    const newDrink = {
      ...drink,
      price: 6,
    };
    setDrink(newDrink);

    // working with the arrays
    setTags([...tags, 'exciting']);
  };
  return (
    <>
      <hr />
      <p>{children}</p>
      <strong>{drink.price}</strong>
      {tags.map((items, index) => {
        <p>Hello world</p>;
        <p key={index}>{items[index]}</p>;
      })}
      <br />
      <Button onClick={handleCLick}> Click Me </Button>
    </>
  );
};

export default ObjectPractise;
