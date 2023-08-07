import React from 'react'
import Diandra from "../../images/Diandra.jpg";

export const Header = () => {
  return (
   <header>

    <a href='#'>
        <div className='logo'>
            <img src={Diandra} alt='logo' width='150'/>
        </div>
    </a>
    <ul>
        <li>
            <a href='#'>INICIO</a>
        </li>
        <li>
            <a href='#'>PRODUCTOS</a>
        </li>
    </ul>
    <div className='cart'>
        <box-icon name='cart'></box-icon>
        <span className='item_total'>0</span>
    </div>
   </header>
  )
}
