"use client"
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import React from "react";
import MealIdeas from "./meal-ideas.js";

export default function Page() {
  const [items, setItems] = React.useState(itemsData);
  const [selectedItemName, setSelectedItemName] = React.useState("");

  const handleAddItem = newItem => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const itemName = item.name.split(",")[0].replace(/[^a-zA-Z ]/g, "").trim();
    setSelectedItemName(itemName);
  };

  return(
    <div className="flex">
      <div>
        <h1 className="text-4xl font-semibold mb-2">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect}/>
      </div>
      <div >
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}