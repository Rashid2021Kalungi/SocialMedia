import React from 'react'
import './rightbar.css'
import Online from '../online/Online.jsx'
import { Users } from "../../dummyData"
export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightBarWrapper">
        <div className="birthdayContainer">
          <img className='birthdayImg' src="/assets/gift.png" alt="" />
          <span className="birthdayText"><b>Rkman </b>and <b>5 other friends</b> have birthday today</span>
        </div>
        <img className="rightbarAd" src='/assets/ad.jpg' alt=''/>
        <h1 className="rightbarTitle">Online Friends</h1>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
