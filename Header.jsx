import React from 'react'
import 
 {BsFilePlus,BsGlobe, BsArrowsFullscreen, BsPersonCircle, BsList, BsJustify,BsBrightnessLow}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsList  className='icon'/>
        </div>
        <div className='header-right'>
        < BsFilePlus className='icon'/>
        <BsBrightnessLow className='icon'/>
            <BsGlobe className='icon'/>
            <BsArrowsFullscreen className='icon'/>
            <BsPersonCircle className='icon'/>
        </div>
    </header>
  )
}

export default Header
