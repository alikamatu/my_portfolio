import React from 'react'
import { catlist } from '../assets/projects'
import './Category.scss'

const Category = ({menu, setMenu}) => {
    
  return (
    <div className='category'>
      {catlist.map((item, i) => {
        return <div onClick={() => setMenu(prev=>prev===item.name?"All": item.name)} className="name" 
        key={i}>
            <p className={menu===item.name?"active" : ""}>{item.name}</p>
        </div>
      })}
    </div>
  )
}

export default Category
