import React from 'react'
import 
{ BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill,BsArrowLeftRight,BsFillPersonFill,BsFillPersonLinesFill,BsFillFileEarmarkRichtextFill,BsFillExclamationCircleFill,BsBagDashFill,BsBell,}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                 SalePro
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Purchase
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Sale
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Expense
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Quotation
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsArrowLeftRight className='icon'/> Transfer
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Return
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsBagDashFill className='icon'/> Accounting
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillPersonLinesFill className='icon'/> HRM
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillPersonFill className='icon'/> People
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillFileEarmarkRichtextFill className='icon'/>Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    < BsBell className='icon'/> Addons
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
            <BsFillExclamationCircleFill className='icon'/> Documentation
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar