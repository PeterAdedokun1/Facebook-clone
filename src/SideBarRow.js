import { Avatar } from '@mui/material'
import React from 'react'
import "./sideBarRow.css"

const SideBarRow = ({src,Icon,title}) => {
  return (
      <div className='sideBarRow'>
          {src && <Avatar src={src} />}
          {Icon && <Icon />}
          <p>{ title}</p>
    </div>
  )
}

export default SideBarRow