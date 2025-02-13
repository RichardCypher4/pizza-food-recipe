import React from 'react'
import { MenuList } from '../helpers/MenuList'
import Menuitem from '../components/Menuitem'
import '../style/Menu.css'
const Menu = () => {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Our Menu</h1> 
      <div className='menuList'>
        {MenuList.map((menuItem, key) => {
          return <Menuitem
          key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price}/>
        })}
      </div>
    </div>
  )
}

export default Menu

