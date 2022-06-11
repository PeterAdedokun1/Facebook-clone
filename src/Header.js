import React from 'react'
import { FaSearch } from "react-icons/fa";
import { AiFillHome ,AiOutlineMenu,AiOutlineMessage} from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";
import { SiGooglemybusiness } from "react-icons/si";
import { MdOutlinePeopleAlt,MdNotifications } from "react-icons/md";
import { SiFacebookgaming } from "react-icons/si";
import { RiArrowDownSFill } from "react-icons/ri";
import { useStateValue } from './StateProvider';
import { CgMenuGridO } from "react-icons/cg";
import "./Header.css"
import { Avatar } from '@mui/material';
import Message from "./Message"
import NotificationsIcon from "./Notify"
import GridViewIcon from '@mui/icons-material/GridView';
import Grid from "./Grid"
import Arrow from "./Arrow"
const Header = () => {
        const [{user},dispatch]= useStateValue()
  return (
      <div className='header'>
          <div className="header_left">
            
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" width="40px" height="40px"
               alt="" />
              <div className="header_input">
                    <FaSearch/> 
                  <input type="text" placeholder='Search Facebook' />
              </div>
          </div>
          <div className="header_center">
              <div className="header_option header_option_active">
                  <AiFillHome className='home'/>
              </div>
               <div className="header_option">
                  <MdOndemandVideo />
              </div>
               <div className="header_option">
                  <SiGooglemybusiness />
              </div>
               <div className="header_option">
                  <MdOutlinePeopleAlt />
              </div>
               <div className="header_option">
                  <SiFacebookgaming />
              </div>
          </div>
          <div className="header_right">
              <div className="header_info">
                  <Avatar
                    alt="Remy Sharp"
                    src=" https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-1/274853959_461893082340743_5560211986058231290_n.jpg?stp=c0.0.60.60a_cp0_dst-jpg_p60x60&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeG41AHBuIRsVQzWHpGzLIyWPSqLu7nlOp89Kou7ueU6nzUvVkv2QuIYIRE9W70-ZqbmNH1WBBNT8zMBmsuKvPcT&_nc_ohc=rRy9ilDRBRcAX_XCL2l&_nc_ht=scontent.flos1-2.fna&oh=00_AT_MnT0IeoPcDzCR84hNq8wh6oTeS7adxafL5pw1GWUMmA&oe=629AB1A9"
                    sx={{ width: 24, height: 24 }}
                    />
                  <h4>Adedokun </h4>
                <div className='topp ' >
                  <CgMenuGridO className='top' />
                      <Grid className='top' style={{ margin: "70px" }} />
                      
                  < Message className="top" />
                  <NotificationsIcon className="top" />
                  <Arrow className='top' />
                  </div>
              </div>
            
          </div>
    </div>
  )
}


export default Header


//