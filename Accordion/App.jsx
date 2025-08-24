
import React from 'react'
import Meal from './components/Meal'
import Calculator from './components/Calculator'
import ToggleColor from './components/ToggleColor'
import SearchIcon from './components/SearchIcon'
import Testimonials from './components/Testimonials'
import Accordion from './components/Accordion'
import { accordionData } from "./utils/content";





const App =() =>{
  
  return (
        <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
  )
  
}

 export default App