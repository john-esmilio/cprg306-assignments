"use client";
import Item from './item';
import React, { useState } from 'react';
import items from './items.json';

export default function ItemList(){

  const [sortBy, setSortBy] = useState("name");
  let sortedItems = [...items];

  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  }
  else if(sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  return(
    <div>
      <label>Sort By:</label>
      <button class="bg-blue-700 hover:bg-orange-700 p-2 m-3 w-24 " onClick = {() => setSortBy('name') }>Name</button>
      <button class="bg-green-700 hover:bg-orange-700 p-2 m-3 w-24"  onClick = {() => setSortBy('category')}>Category</button>
      <ul>
        {sortedItems.map((item, index) => (
          <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
          ))}
      </ul>
    </div>
  )
}