import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"
// import { BiLike } from "react-icons/bs";
import { AiOutlineLike,AiFillCaretDown } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardFill } from "react-icons/ri";

const Post = ({ profilePic, image, username, timestamp, message }) => {
    const event = new Date();

  return (
      <div className='post'>
          <div className="post_top">
              <Avatar src={profilePic} className="post_avatar" />
              <div className="post_topInfo">
                  <h3>{username}</h3>
                  {/* <p>{ new Date(timestamp?.toDate()).toUTCString()}</p> */}
                  {/* <p>{new Date().getDay}</p> */}
                  <p>{ event.toUTCString()}</p>
              </div>
              
          </div>
          <div className="post_bottom">
              <p>{ message}</p>
          </div>
          <div className="post_image">
              <img src={image} alt="" />
          </div>
          <div className="post_options">
              <div className="post_option">
                  <AiOutlineLike/>
                  <p>Like</p>
              </div>
                 <div className="post_option">
                  <FaRegCommentAlt/>
                  <p>Comments</p>
              </div>
                 <div className="post_option">
                  <RiShareForwardFill/>
                  <p>Share</p>
              </div>
              <div className="post_option "  >
                  <img src="https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-1/274853959_461893082340743_5560211986058231290_n.jpg?stp=c0.0.32.32a_cp0_dst-jpg_p32x32&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeG41AHBuIRsVQzWHpGzLIyWPSqLu7nlOp89Kou7ueU6nzUvVkv2QuIYIRE9W70-ZqbmNH1WBBNT8zMBmsuKvPcT&_nc_ohc=rRy9ilDRBRcAX_XCL2l&_nc_ht=scontent.flos1-2.fna&oh=00_AT-yuHbGQJkof4S-IH81MGpcrpwR7NflNpmGvqCn937F6Q&oe=629AB1A9"   />
                  <AiFillCaretDown/>
              </div>
          </div>
    </div>
  )
}

export default Post