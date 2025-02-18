import React from 'react'
import './post.css'
import { MoreVert } from '@mui/icons-material'

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src="/assets/person/person5.jpg" alt="" />
                    <span className="postUsername">Johnson Nue</span>
                    <span className="postDate">5 min ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! Its my first Post:)</span>
                <img className='postImg' src="/assets/person/person2.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="/assets/like.png" alt="" />
                    <img className='likeIcon' src="/assets/heart.png" alt="" />
                    <span className="postLikeCounter">32 like it</span>
                </div>
                <div className="postBottomRight">
                    <div className="postCommentText">9 comments</div>
                </div>
            </div>
        </div>
    </div>
  )
}
