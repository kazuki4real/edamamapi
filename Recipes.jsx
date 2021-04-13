import React from 'react';
import style from './recipe.module.css'

const Recipes = ({title, calories, image, cuisineType, ingredients}) => {
  
  return (
    <div className={style.recipes}>
      <h1>{title}</h1>
      <p className={style.cal}>{Math.floor(calories)}<span className={style.blank}>Calories</span></p>
      <p>Cuisne From: {cuisineType}</p>
      <ul>
        {ingredients.map((ing, index) => (
          <li key={index}>{ing.text}</li>
        ))}
      </ul>
      <img src={image} alt=""/>
    </div>
  )
}

export default Recipes;