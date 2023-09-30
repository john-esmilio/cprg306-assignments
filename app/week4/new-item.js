"use client";

import { useState } from "react";

export default function NewItem() {

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Added ${name}, quantity: ${quantity} to the ${category} category!`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return(
    <main class="flex justify-center w-full">
      <form class="p-2 m-4 bg-slate-900 text-black max-w-sm w-full rounded-lg" onSubmit={handleSubmit}>
        <div class="mb-2">
          <input class="w-full mt-1 border-2 border-gray-500 p-2 rounded-lg font-sans" type="text" value={name} onChange={event => setName(event.target.value)} placeholder="Item name" required />
        </div>
      
        <div class ="flex justify-between">
          <input class="w-20 mt-1 border-2 border-gray-500 p-2 rounded-lg font-sans" type = "number" min = "1" max = "99" value = {quantity} onChange = {event => setQuantity(event.target.value)} required />
          <select class="w-30 mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans" value = {category} onChange = {event => setCategory(event.target.value)} >
            <option value = "produce">Produce</option>
            <option value = "dairy">Dairy</option>
            <option value = "bakery">Bakery</option>
            <option value = "meat">Meat</option>
            <option value = "frozen foods">Frozen Foods</option>
            <option value = "canned goods">Canned Goods</option>
            <option value = "dry goods">Dry Goods</option>
            <option value = "beverages">Beverages</option>
            <option value = "snacks">Snacks</option>
            <option value = "household">Household</option>
            <option value = "other">Other</option>
          </select>
        </div>

        <button type = "submit" class ="w-half mt-3 bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add</button>
      </form>
    </main>
  )
}