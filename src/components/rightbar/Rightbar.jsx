import React from 'react'
import './rightbar.css'
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
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img  className='rightbarProfileImg' src="/assets/person/person3.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tom Cruz</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img  className='rightbarProfileImg' src="/assets/person/person3.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tom Cruz</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img  className='rightbarProfileImg' src="/assets/person/person3.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tom Cruz</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img  className='rightbarProfileImg' src="/assets/person/person3.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tom Cruz</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img  className='rightbarProfileImg' src="/assets/person/person3.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tom Cruz</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img  className='rightbarProfileImg' src="/assets/person/person3.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tom Cruz</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
