import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react";
import "../style.css";


const Meal = () => {
    const [meal, setMeal ]= useState([]);
    useEffect(()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").
        then((res)=>{
            setMeal(res.data.meals);
        }).catch((err)=>{
            console.error("Error fetching meals:", err);
        });
    },[]);
    const itemList = meal.map(({idMeal, strMeal, strMealThumb}) => {
        return (
            <section className='card'>
                <img src={strMealThumb} alt="" srcset="" />
                <section className='content'>
                    <p>#{idMeal}</p>
                    <p>{strMeal}</p>

                </section>
            </section>
  )

    })
  return <div className="items-container">{itemList}</div>;
}

export default Meal