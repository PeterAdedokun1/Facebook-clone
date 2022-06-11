import React from 'react'
import "./Widget.css"
import { Avatar } from '@mui/material'
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { HiDotsHorizontal } from "react-icons/hi";
import Hello from "./Hello"

const Widgets = () => {
  return (
    <div className="top-widget">
      <div className="section1">
        <p>Sponsored</p>
        <div className="sponsored-container">
          <div className="sponsored-images">
            <div className="sponsored-img">
              <img src="https://scontent.flos1-2.fna.fbcdn.net/v/t45.1600-4/278787397_23850311546550206_729012514691594775_n.png?stp=dst-png_p285x285&_nc_cat=105&ccb=1-7&_nc_sid=eaa83b&_nc_eui2=AeF2NSHSCb90GBsmX2cjdtaIqvTOFOmD44Oq9M4U6YPjg919_JRq1kbgct_W613qVDY8Ij42jKjCoPRzyA3ugKzD&_nc_ohc=TiEkM5B_UCAAX-C_hKt&_nc_ht=scontent.flos1-2.fna&oh=00_AT-YvaMpF97-wyf3vml5dbdfAeqA_4MjBmzsQ5fHQru-dg&oe=629BC660" alt="" />
            </div>
            <div className="sponsored-text">
              <h3>8 Week Online Course</h3>
              <p>alxafrica.com</p>
            </div>
          </div>
          <br />
           <div className="sponsored-images">
            <div className="sponsored-img">
              <img src="https://scontent.flos1-2.fna.fbcdn.net/v/t45.1600-4/280966310_6286494414310_162151827018429408_n.jpg?stp=cp0_dst-jpg_p296x100_q75_spS444&_nc_cat=1&ccb=1-7&_nc_sid=67cdda&_nc_eui2=AeGTjH-KOe8z6V_VIe8eqjHufEJDT3L2Ncx8QkNPcvY1zMb-XWP0ebwQ5QspLa0ovBMUWDCPryhQRjTOmigv_C-b&_nc_ohc=z5yHp7u4yD4AX8RL_ZR&_nc_ht=scontent.flos1-2.fna&oh=00_AT_owjKCZ3uQZHkQ5AIQvBVawv9Vin0QZyHQRHC7ftia7g&oe=629BE339" alt="" />
            </div>
            <div className="sponsored-text">
              <h3>Use Promo code <br /> MAY22SALE</h3>
              <p>try.codeacademy.com</p>
            </div>
                </div>
        </div>
      </div>
      {/* contact */}
      <div className="contacts">
        <div className="top-contact">
          <p>Contacts</p>
          
          <div style={{marginTop: "10px"}}>
          <RiVideoAddLine className='contact-img' />
          <AiOutlineSearch className='contact-img' />
            <HiDotsHorizontal className='contact-img' />
            </div>
        </div>
        <div className="contacts-list">
          <li>
            <Hello img={"https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-1/274853959_461893082340743_5560211986058231290_n.jpg?stp=c0.0.60.60a_cp0_dst-jpg_p60x60&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeG41AHBuIRsVQzWHpGzLIyWPSqLu7nlOp89Kou7ueU6nzUvVkv2QuIYIRE9W70-ZqbmNH1WBBNT8zMBmsuKvPcT&_nc_ohc=rRy9ilDRBRcAX_XCL2l&_nc_ht=scontent.flos1-2.fna&oh=00_AT_MnT0IeoPcDzCR84hNq8wh6oTeS7adxafL5pw1GWUMmA&oe=629AB1A9"}/>
            
            <p>Adedokun Peter</p>
          </li>
           <li>
            <Hello alt="Remy Sharp" img="https://images.pexels.com/photos/9818341/pexels-photo-9818341.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
            <p>Valara Evane</p>
          </li>
           <li>
            <Hello alt="Remy Sharp" img="https://images.pexels.com/photos/12168833/pexels-photo-12168833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <p>Zeeshaan Shabbir</p>
          </li>
           <li>
            <Hello alt="Remy Sharp" img="https://images.pexels.com/photos/12167579/pexels-photo-12167579.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
            <p>Enrique Hoyos</p>
          </li>
          

          
        </div>
      </div>

      
      </div>
  )
}

export default Widgets