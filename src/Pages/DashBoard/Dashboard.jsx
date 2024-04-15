import React from 'react'
import TopBar from '../../Components/topbar/TopBar'
import SideBar from '../../Components/sidebar/SideBar'
import HomeAdmin from './HomeAdmin/HomeAdmin'

function Dashboard() {

    return (
        <>
            <TopBar />
            <div className="container-1">
                <SideBar />
                <HomeAdmin />
            </div>
        </>
    )
}

export default Dashboard