import React from 'react'
import "../style.css";
import { useState } from "react";

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
  {
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Your time is limited, so dont waste it living someone else`s life.",
    author: "Steve Jobs",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
];  
    const handlePrevClick = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
};

    const handleNextClick = ()=>{
        setCurrentIndex(currentIndex +  1)% testimonials.length;
    }

  return (
    <div className="testimonials">
        <div className='testimonials-quote'>
            "{testimonials[currentIndex].quote}"

        </div>
        <div className='testimonials-author '>
            - {testimonials[currentIndex].author}
        </div>
        <div className='testimonials-nav'>
            <button onClick={handlePrevClick}>Prev</button>
            <button onClick={handleNextClick}>Next</button>
        </div>
    </div>
  )
}

export default Testimonials