"use client";
import { useEffect ,useState } from 'react';

async function fetchMealIdea(ingredient){
  console.log(ingredient);
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals;
}

export default function MealIdeas({ingredient}) {
  const [meals, setMeals] = useState([]);

  async function loadMeals(){
    try {
      if (ingredient == ""){
        setMeals([]);
        return;
      }
      const data = await fetchMealIdea(ingredient);
      if (data!=null){
        setMeals(data);
      }
      else {
        setMeals([]);
      } 
    }
    catch (e) {
      console.log(e);
    }
}

  useEffect(() => {
    loadMeals(ingredient);
  }, [ingredient]);

    return(
      <div className="bg-gray-600 max-w-sm w-3/4 p-3 mt-10">
        <h2 className="text-xl">{ingredient} Meal Ideas</h2>
        <ul>
          {meals.map(meal => (
            <li key = {meal.idMeal}>
              {meal.strMeal}
            </li>))}
        </ul>  
      </div>
    )
}