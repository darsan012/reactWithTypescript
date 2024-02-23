import { useState } from 'react';

export const ListGroup = () => {
  const cities = ['New York', 'San Francisco', 'Oxford', 'Deutschland'];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List Group</h1>
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
