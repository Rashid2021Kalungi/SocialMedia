import React from 'react';
import './post.css';
import { Users } from "../../dummyData";
import { MoreVert } from '@mui/icons-material';

export default function Post({ post }) {  
    const user = Users.find(u => u.id === post.userId); // Find the user by ID

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img 
                            className='postProfileImg' 
                            src={user?.ProfilePicture || "/assets/person/default.jpg"} 
                            alt={user?.username} 
                        />
                        <span className="postUsername">{user?.username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImg' src={post.photo} alt="Post Image" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="/assets/like.png" alt="Like" />
                        <img className='likeIcon' src="/assets/heart.png" alt="Heart" />
                        <span className="postLikeCounter">{post.like} likes</span>
                    </div>
                    <div className="postBottomRight">
                        <div className="postCommentText">{post.comment} comments</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
