import React from 'react'
import './sidebar.css'
import {RssFeed,Chat,PlayCircle,Group,Bookmark, HelpOutline,Today,Event,School} from '@mui/icons-material'
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className='sidebarIcon'/>
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <Chat className='sidebarIcon'/>
                    <span className="sidebarListItemText">chats</span>
                </li>
                <li className="sidebarListItem">
                    <PlayCircle className='sidebarIcon'/>
                    <span className="sidebarListItemText">Video</span>
                </li>
                <li className="sidebarListItem">
                    <Group className='sidebarIcon'/>
                    <span className="sidebarListItemText">Group</span>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className='sidebarIcon'/>
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <HelpOutline className='sidebarIcon'/>
                    <span className="sidebarListItemText">Question</span>
                </li>
                <li className="sidebarListItem">
                    <Today className='sidebarIcon'/>
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <Event className='sidebarIcon'/>
                    <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <School className='sidebarIcon'/>
                    <span className="sidebarListItemText">Courses</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className='sidebarHr'/>
            <ul className="sidebarFriendList">
               <li className="sidebarFriend">
                  <img className='sidebarFriendImg' src="/assets/person/person2.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Deo</span>
               </li>
               <li className="sidebarFriend">
                  <img className='sidebarFriendImg' src="/assets/person/person2.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Deo</span>
               </li>
               <li className="sidebarFriend">
                  <img className='sidebarFriendImg' src="/assets/person/person2.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Deo</span>
               </li>
               <li className="sidebarFriend">
                  <img className='sidebarFriendImg' src="/assets/person/person2.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Deo</span>
               </li>
               <li className="sidebarFriend">
                  <img className='sidebarFriendImg' src="/assets/person/person2.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Deo</span>
               </li>
               <li className="sidebarFriend">
                  <img className='sidebarFriendImg' src="/assets/person/person2.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Deo</span>
               </li>
               <li className="sidebarFriend">
                  <img className='sidebarFriendImg' src="/assets/person/person2.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Deo</span>
               </li>
               <li className="sidebarFriend">
                  <img className='sidebarFriendImg' src="/assets/person/person2.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Deo</span>
               </li>
               <li className="sidebarFriend">
                  <img className='sidebarFriendImg' src="/assets/person/person2.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Deo</span>
               </li>
               <li className="sidebarFriend">
                  <img className='sidebarFriendImg' src="/assets/person/person2.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Deo</span>
               </li>
               <li className="sidebarFriend">
                  <img className='sidebarFriendImg' src="/assets/person/person2.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Deo</span>
               </li>
               <li className="sidebarFriend">
                  <img className='sidebarFriendImg' src="/assets/person/person2.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Deo</span>
               </li>
               <li className="sidebarFriend">
                  <img className='sidebarFriendImg' src="/assets/person/person2.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Deo</span>
               </li>
               <li className="sidebarFriend">
                  <img className='sidebarFriendImg' src="/assets/person/person2.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Deo</span>
               </li>
               <li className="sidebarFriend">
                  <img className='sidebarFriendImg' src="/assets/person/person2.jpeg" alt="" />
                  <span className="sidebarFriendName">Jane Deo</span>
               </li>
            </ul>
        </div>
    </div>
  )
}
