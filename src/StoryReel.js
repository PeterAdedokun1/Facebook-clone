import React from 'react'
import "./StoryReel.css"
import Story from './Story'

const StoryReel = () => {
  return (
      <div className='storyReel'>
          <Story
              image="https://images.pexels.com/photos/7004739/pexels-photo-7004739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              profileSrc="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Tuan Kiet Jr"
          />
          
            <Story
              image="https://images.pexels.com/photos/185933/pexels-photo-185933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              profileSrc="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Bruno Salvadori"
          />  <Story
              image="https://images.pexels.com/photos/7078237/pexels-photo-7078237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              profileSrc="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Andrea Piacquadio"
          />  <Story
              image="https://images.pexels.com/photos/235767/pexels-photo-235767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              profileSrc="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Italo Melo"
          />  <Story
              image="https://images.pexels.com/photos/1261731/pexels-photo-1261731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             profileSrc="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Adedokun Peter "
          />
    </div>
  )
}

export default StoryReel