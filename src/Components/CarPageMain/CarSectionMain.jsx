import React , {useState} from 'react'  
import Advertisements from '../Advertisements/Advertisements'
import SidebarFilterbox from '../SidebarFilterbox/SidebarFilterbox'
import './CarSectionMain.css'
 
export default function CarSectionMain() {
  
  return (
    <>
     <div className="CarSectionMain__header">
        <h2 className='CarSectionMain__header-title'>خرید خودرو ، فروش خودرو</h2>
        {/* <form className='CarSectionMain__form'>
          <select className='CarSectionMain__selection'>
            <option value="" className='CarSectionMain__option'>به روزترین آگهی</option>
            <option value="" className='CarSectionMain__option'>گرانترین</option>
            <option value="" className='CarSectionMain__option'>ارزانترین</option>
            <option value="" className='CarSectionMain__option'>جدیدترین سال</option>
            <option value="" className='CarSectionMain__option'>قدیمی‌ترین سال</option>
            <option value="" className='CarSectionMain__option'>کم کارکرد ترین</option>
          </select>
        </form> */}
      </div>
    <div className='CarSectionMain__container'>
        <Advertisements />
        <SidebarFilterbox />
    </div>
    </>
  )
}
