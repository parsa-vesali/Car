import React from 'react'
import Heder from '../../Components/Header/Heder'
import PopularModel from '../../Components/PopularModel/PopularModel'
import UpdatedPrice from '../../Components/UpdatedPrice/UpdatedPrice'
import Technical from '../../Components/Technical/Technical'
import Articles from '../../Components/Articles/Articles'
import './Home.css'
export default function Home() {
  return (
    <div>
      <Heder />
      <PopularModel />
      <div className="container UpdatedPrice__container">
        <UpdatedPrice />
        <Technical />
      </div>
      <Articles />
    </div>
  )
}
