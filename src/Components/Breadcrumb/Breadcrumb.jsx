import React from 'react'
import Alert from 'react-bootstrap/Alert';
import HomeIcon from '@mui/icons-material/Home';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';

import './Breadcrumb.css'

export default function Breadcrumb(prop) {
  return (
   <>
   <Alert variant={'success'} className='BreadcrumbAlert'>
    <HomeIcon />
          <Link to={'/'} className='link'>
             صفحه اصلی
          </Link>
         <ChevronLeftIcon />
         <Link to={'/car'} className='link'>
           {prop.page}
         </Link>
    </Alert>
   </>
  )
}
