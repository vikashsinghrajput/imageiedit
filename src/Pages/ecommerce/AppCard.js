import React, { useState } from 'react'
import Photoshop from './Photoshop'
import Data from './Data'
import Button from './Button'
const AppCard = () => {
    const [item,setitem] =useState(Data)
    const menuitems =[...new Set(Data.map((val)=>val.category ))]
    const filteritems =(cat)=>{
        const newItems =Data.filter((newval)=>newval.category === cat)
        setitem(newItems)
    }
  return (
    <div>
        
        <Button
        menuitems ={menuitems}
        filteritems ={filteritems}
        setitem ={setitem}
        />
      <Photoshop item={item}/>

    </div>
  )
}

export default AppCard
