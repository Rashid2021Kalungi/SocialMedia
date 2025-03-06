import React from 'react'
import './feedbar.css'
import Share from '../share/Share'
import Post from '../Post/Post'
import {Posts} from "../../dummyData"
export default function Feedbar() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {Posts.map((p)=>(
          <Post key={p.userId} post={p}/>
        ))}
        
       
      </div>
    </div>
  )
}

