import React, { useEffect, useState } from 'react';
import Mealcard from './MealCard/Mealcard';

const Home = () => {
    
     const [searchText, setsearchText] = useState(' ');
     const [foods, setFood] = useState([]);

    useEffect( () => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
        .then(res=>res.json())
        .then(data => {
            
            setFood(data.meals)})
    }, [searchText])
    const searchFood = e => {
        setsearchText(e.target.value)
    }
    return (
        <div>
            <input type="text" onChange={searchFood} placeholder='Search the Food'/>
            <br />
            <p>No :{foods.length}</p>
            {
                foods.map(food => (<Mealcard key={food.idMeal} food={food}></Mealcard>))
            }
        </div>
    ) ;
};

export default Home;