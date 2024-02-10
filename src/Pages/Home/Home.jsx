import React from 'react'
import Heder from '../../Components/layout/Header/Heder'
import NavBar from '../../Components/common/NavBar/NavBar'
import PopularModel from '../../Components/layout/PopularModel/PopularModel'
import UpdatedPrice from '../../Components/UpdatedPrice/UpdatedPrice'
import Articles from '../../Components/layout/Articles/Articles'
import Footer from '../../Components/layout/Footer/Footer'
import './Home.css'
export default function Home() {
  return (
    <div>
      <NavBar />
      <Heder />
      <PopularModel />
      <UpdatedPrice />
      <Articles />
      <Footer />
    </div>
  )
}
