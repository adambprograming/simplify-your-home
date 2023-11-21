'use client'
// Styles
import './menu-dropdown.styles.scss'
// React Functions
import { useState } from 'react';
// Context

const MenuDropdown = () => {

  const [activeMenu, setActiveMenu] = useState(false);
    const handleMenuClick = () => {
      document.getElementsByClassName('menu-icon').item(0).classList.toggle('active');
      document.getElementsByClassName('line-1').item(0).classList.remove('no-animation')
      document.getElementsByClassName('line-2').item(0).classList.remove('no-animation')
      document.getElementsByClassName('line-3').item(0).classList.remove('no-animation')
      setActiveMenu(!activeMenu);
    };
    return (
    <nav className='nav'>
      <div className="menu-icon" onClick={() => {handleMenuClick()}}>
        <div className="line-1 no-animation"></div>
        <div className="line-2 no-animation"></div>
        <div className="line-3 no-animation"></div>
      </div>
      <ul className={`dropdown ${activeMenu === true ? "active" : ""}`}>
        {/* <li className='dropdown-item'><button onClick={() => {document.getElementById('article-categories').scrollIntoView({ behavior: 'smooth' }); activeMenu && handleMenuClick()}}><h5>{"Categories"}</h5></button></li> */}
        <li className='dropdown-item'><button onClick={() => {document.getElementById('article-techstack').scrollIntoView({ behavior: 'smooth' }); activeMenu && handleMenuClick()}}><h5>{"Categories"}</h5></button></li>
        <li className='dropdown-item'><button onClick={() => {document.getElementById('article-contact').scrollIntoView({ behavior: 'smooth' }); activeMenu && handleMenuClick()}}><h5>{"Example 3"}</h5></button></li>
      </ul>
    </nav>
  )
}

export default MenuDropdown