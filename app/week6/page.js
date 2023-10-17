"use client"
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import React from "react";

export default function Page() {
  const [items, setItems] = React.useState(itemsData);

  const handleAddItem = newItem => {
    setItems([...items, newItem]);
  };

  return(
    <div>
      <h1 className="text-4xl font-semibold mb-2">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items}/>
    </div>
  );
}