import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
    const {idMeal} = useParams()
    const [meal , setMeals] = useState([])
    useEffect( ()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
        fetch(url)
        .then(res=>res.json())
        .then(data =>  {
            setMeals(data.meals)
            console.log(data.meals)
        })
    },[idMeal])
    return (
        <div>
            <Container>
            <div>
                <h5>{meal.strMeal}</h5>
                <img src={meal.strMealThumb} alt=""  />
                <p></p>
            </div>
            </Container>
        </div>
    );
};

export default CardDetails;