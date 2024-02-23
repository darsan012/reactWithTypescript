import { useState } from 'react';

interface Props {
  items: string[];
  heading: string;
}

export const ListGroup = (props: Props) => {
  const cities = props.items;
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{props.heading}</h1>
      <ul className="list-group ">
        {cities.length === 0 && <p>No items found</p>}
        {cities.map((city, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            onClick={() => {
              setSelectedIndex(index);
              console.log(selectedIndex);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
};
