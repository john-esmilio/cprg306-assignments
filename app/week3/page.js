import ItemList from "./item-list.js";

export default function Page() {
  return(
    <main className=" bg-gray-950">
      <h1 className="text-4xl font-semibold mb-2">Shopping List</h1>
      <ItemList />
    </main>
  );
}