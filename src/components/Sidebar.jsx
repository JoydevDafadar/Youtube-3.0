import React from 'react'

import {categories} from './utils/constanats'

const Sidebar = (prop) => {
  
  return (
    <>
      {
        categories.map( (curr, ind) => {
          return (
            <button className={( curr.name === prop.selectedTopic )? "active" : ""} 
            key={ind}
            onClick={() => 
            {prop.setselectedTopic(curr.name)}} >
              <span>{curr.icon}</span>{curr.name}
            </button>
          )
        })
      }
    </>
  )
}

export default Sidebar