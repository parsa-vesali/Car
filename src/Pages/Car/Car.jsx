import React from 'react'
import NavBar from '../../Components/common/NavBar/NavBar'
import Breadcrumb from '../../Components/common/Breadcrumb/Breadcrumb'
import CarSectionMain from '../../Components/CarPageMain/CarSectionMain'
export default function Car() {
  return (
   <>
   <NavBar />
    <div className='container'>
        <Breadcrumb page={'خرید خودرو'} />
        <CarSectionMain />
    </div>
   </>
  )
}
