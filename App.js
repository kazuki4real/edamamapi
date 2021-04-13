import React, {useEffect, useState } from 'react';
import './App.css';
import Recipes from './Recipes';
import Search from './Search';

const APP_ID = '';
const APP_KEY = '';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');

  useEffect( async () => {
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const submitSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  return (
    <div className="App">
      <Search
      updateSearch={updateSearch}
      submitSearch={submitSearch}
      search={search}
      />
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipes
          key={recipe.recipe.url}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          updateSearch={recipe.recipe.updateSearch}
          cuisineType={recipe.recipe.cuisineType}
          ingredients={recipe.recipe.ingredients}
          />
          ))}
      </div>
    </div>
  );
}

export default App;
