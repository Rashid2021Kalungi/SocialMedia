import React from 'react'
import TopBar from '../../components/topBar/TopBar'
import './Home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feedbar from '../../components/feedbar/Feedbar'
export default function () {
  return (
    <>
      <TopBar/>
      <div className="homeContainer">
        <Sidebar/>
        <Feedbar/>
        <Rightbar/>
      </div>
    </>
    
  )
}
