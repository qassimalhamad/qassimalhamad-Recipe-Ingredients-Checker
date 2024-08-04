import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const recipiesIngredient = [
    { name: 'Tomato', needed: true },
    { name: 'Potato', needed: true },
    { name: 'Spices', needed: false },
  ];
  const recipiesIngredientList = recipiesIngredient.map((ingredient, index) => (
    <li key={index} className={ingredient.needed ? 'needed' : 'not-needed'}>
      {ingredient.name}
    </li>
  ))
  return (
    <>
      <h1>Recipies Ingredient List</h1>

        {recipiesIngredientList}
    </>
  )
}

export default App
