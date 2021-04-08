import React, { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("Items Updating");
  }, [getItems]);

  return items.map((item) => {
    return <div key={item}>{item}</div>;
  });
};

export default List;
