import React from 'react'
import Heder from '../../Components/Header/Heder'
import PopularModel from '../../Components/PopularModel/PopularModel'
import UpdatedPrice from '../../Components/UpdatedPrice/UpdatedPrice'
import './Home.css'
export default function Home() {
  return (
    <div>
      <Heder />
      <PopularModel />
      <UpdatedPrice />
    </div>
  )
}
