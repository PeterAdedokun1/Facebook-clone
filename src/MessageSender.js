import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import "./MessageSender.css"
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { BsPeopleFill, BsEmojiLaughing } from "react-icons/bs";
import db from "./firebase";
import firebase from 'firebase';
import { useStateValue } from './StateProvider';
const MessageSender = () => {
  const [input, setinput] = useState("")
    const [{user}, dispatch] = useStateValue()
   
  const handleSubmit = (e) => {
    if (input == "") {
      return 
    }
    e.preventDefault()
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
    })
    setinput("")
  }
  return (
      <div className='messageSender'>
          <div className="MessageSender_top">
              <Avatar src='https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-1/274853959_461893082340743_5560211986058231290_n.jpg?stp=c0.0.60.60a_cp0_dst-jpg_p60x60&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeG41AHBuIRsVQzWHpGzLIyWPSqLu7nlOp89Kou7ueU6nzUvVkv2QuIYIRE9W70-ZqbmNH1WBBNT8zMBmsuKvPcT&_nc_ohc=rRy9ilDRBRcAX_XCL2l&_nc_ht=scontent.flos1-2.fna&oh=00_AT_MnT0IeoPcDzCR84hNq8wh6oTeS7adxafL5pw1GWUMmA&oe=629AB1A9'/>
        <form>
          <input type="text" className='messageSender_input' placeholder="What's on your mind, Adedokun?" value={input} onChange={ (e)=> setinput(e.target.value)}/>
          {/* <input type="text" placeholder='image URL (optional)' /> */}
          <button onClick={handleSubmit} type="submit">Hidden Submit</button>
              </form>
          </div>
      <div className="messageSender_botton">
        <div className="messageSender_option">
          <MdOutlinePhotoLibrary   style={{color: "green", fontSize: "24px"}}/>
          <p>Photo/Video</p>
        </div>
        <div className="messageSender_option">
          <BsPeopleFill style={{color: "blue", fontSize: "24px"}} />
          <p>Tag friends</p>
        </div>
        <div className="messageSender_option">
          <BsEmojiLaughing style={{color: "orange", fontSize: "24px"}}/>
          <p>Feeling/activity</p>
        </div>
       </div>
    </div>
  )
}

export default MessageSender