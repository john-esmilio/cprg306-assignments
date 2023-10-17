export default function Item({name, quantity, category}) {
  return (
    <ul>
      <li className="p-2 m-4 bg-gray-900 max-w-sm">
        <h3 className="text-xl font-bold">{name}</h3> 
        <p>Quantity: {quantity}</p> 
        <p>In {category} aisle</p> 
      </li>
    </ul>
  )
}