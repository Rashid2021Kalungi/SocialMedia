import React from 'react'
import './TopBar.css'
import { Search, Person,Notifications, Chat } from '@mui/icons-material';

export default function TopBar() {
  return (
    <div className='topbarContainer '>
      <div className="topbarLeft">
        <div className="logo">Rkman</div>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className='serachIcon'/>
          <input className='searchInput' placeholder='Search for friends, posts, and videos' />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
          </div><div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">1</span>
          </div><div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/person1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  )
}
