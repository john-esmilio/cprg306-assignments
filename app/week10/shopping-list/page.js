"use client"
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import React, {useEffect} from "react";
import MealIdeas from "./meal-ideas.js";
import {getItems, addItem} from "../_services/shopping-list-service.js";

export default function Page() {
  const [items, setItems] = React.useState([]);
  const [selectedItemName, setSelectedItemName] = React.useState("");

  const handleAddItem = newItem => {
    const itemID = addItem(user.uid, newItem);
    const updateItems = [...items, {id: itemID, ...newItem}];
    setItems(updateItems);
  };

  const handleItemSelect = (item) => {
    const itemName = item.name.split(",")[0].replace(/[^a-zA-Z ]/g, "").trim();
    setSelectedItemName(itemName);
  };

  const {user} = useUserAuth();

  if (user === null) {
    window.location.href = "../";
    return null;
  }

  async function loadItems() {
    const items = await getItems(user.uid);
    setItems(items);
  }

  useEffect(() => {
    loadItems();
  }, [user.uid]);

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