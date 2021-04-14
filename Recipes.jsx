import React from 'react';
import style from './recipe.module.css'

const Recipes = (props) => {
  
  return (
    <div className={style.recipes}>
      <h1>{props.title}</h1>
      <p className={style.cal}>{Math.floor(props.calories)}<span className={style.blank}>Calories</span></p>
      <p>Cuisne From: {props.cuisineType}</p>
      <ul>
        {props.ingredients.map((ing, index) => (
          <li key={index}>{ing.text}</li>
        ))}
      </ul>
      <img src={props.image} alt=""/>
    </div>
  )
}

export default Recipes;