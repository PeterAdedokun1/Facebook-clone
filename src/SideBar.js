import React from 'react'
import "./Sidebar.css"
import SideBarRow from './SideBarRow'
import friend from "./images/friends.png"
import group from "../src/images/groups.png"
const SideBar = ({src,Icon,title}) => {
  return (
    <div className='sidebar'>
      <SideBarRow
        src="https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-1/274853959_461893082340743_5560211986058231290_n.jpg?stp=c0.0.60.60a_cp0_dst-jpg_p60x60&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeG41AHBuIRsVQzWHpGzLIyWPSqLu7nlOp89Kou7ueU6nzUvVkv2QuIYIRE9W70-ZqbmNH1WBBNT8zMBmsuKvPcT&_nc_ohc=rRy9ilDRBRcAX_XCL2l&_nc_ht=scontent.flos1-2.fna&oh=00_AT_MnT0IeoPcDzCR84hNq8wh6oTeS7adxafL5pw1GWUMmA&oe=629AB1A9"
          title="Adedokun Peter Opeyemi"
      /> 
      <SideBarRow
        // Icon = {group}
        src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png?_nc_eui2=AeE8psyRA6FB4036dCBs2w0QzZiWk1i76CzNmJaTWLvoLJiUdcAQcGYc23fWX9dr98jodUFyxmiHvvwkp41h89mc"
        title="Friends"
      /> 
      <SideBarRow
        src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png?_nc_eui2=AeERWfVsRXp2gAOl2nUXe3w-A_bf-kPbCmUD9t_6Q9sKZYEqT6dmwufiO9MWXoUaCVBluXtoNu3RqQbEXsOSea34"
        title="Groups"
      /> 
      <SideBarRow
        src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png?_nc_eui2=AeEv69rOCLUTA8zGXnxl_CpPhiW3PpWMIZeGJbc-lYwhl6xgOVNfTQqkT5WckwBTVRpfI7vyJdfV4coxLqTsWMQ3"
        title="Marketplace"
      /> 
      <SideBarRow
        src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png?_nc_eui2=AeFNAs_EHM2Lrl2bM3zj6kYVCWLM3IEe9I0JYszcgR70jdhsmZONlnqiPARh0UjF4v4ZKMLpD0Skf-TxbDZFSpDq"
        title="Watch"
        
      /> 
      <SideBarRow
        src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png?_nc_eui2=AeFa7KHAc15HIz0gaFpVhaXXD7-9NrPNDkEPv702s80OQR68lshUjPqnAisOvOEvR4BeRLqC1MTfVAnqssUaIk3m"
        title="Memories"
      /> 
      <SideBarRow
        src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png?_nc_eui2=AeE6D76a_r-jX3brXY1jUyQ3eak_ngIfa7p5qT-eAh9rupymgV-3kKLU70798a2TxCeJtgmvfBWwlMhN7aZeGKhl"
        title="Saved"
      /> 
      <SideBarRow
        src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png?_nc_eui2=AeFwXP7hPzAe9GftLUKaKxlQIucpu18fVQgi5ym7Xx9VCHoUP_thlQhiwqsp8aJUQGIDXmvKjW94HUpfmRRWQbCn"
        title="Pages"
      /> 
    </div>
  )
}

export default SideBar