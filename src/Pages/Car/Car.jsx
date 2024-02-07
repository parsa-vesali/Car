import React from 'react'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import CarSectionMain from '../../Components/CarPageMain/CarSectionMain'
export default function Car() {
  return (
    <div className='container'>
        <Breadcrumb page={'خرید خودرو'} />
        <CarSectionMain />
    </div>
  )
}
