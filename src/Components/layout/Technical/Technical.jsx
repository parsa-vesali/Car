import React from 'react'
import HandymanIcon from '@mui/icons-material/Handyman';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import './Technical.css'
export default function Technical() {
  return (
    <div className='technical'>
        <div className="technical__header">
            <h2 className='technical__header-title'>
            بررسی مشخصات فنی خودرو
            </h2>
            <span className="updatedPrice__icon">
                <HandymanIcon />
            </span>
        </div>
       <div className="technical__btn-container">
       <button className='technical__btn'>
          مشاهده همه
          <ChevronLeftIcon />
        </button>
       </div>
    </div>
  )
}
