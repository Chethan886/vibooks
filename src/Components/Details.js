import React from 'react';
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
export default function Details() {
  return (
    <div>
      <div className='about'>
        <h3>
            ABOUT US
        </h3>
        <p><LoremIpsum p={2}/></p>
      </div>
      <div className='services'>
        <h3>
            SERVICES
        </h3>
        <p><LoremIpsum p={2}/></p>
      </div>
      <div className='mission'>
        <h3>
        OUR MISSION
        </h3>
        <p><LoremIpsum p={2}/></p>
      </div>
      <div className='vision'>
        <h3>
        OUR VISION
        </h3>
        <p><LoremIpsum p={2}/></p>
      </div>
      <div className='team'>
        <h3>
        OUR TEAM
        </h3>
        <p><LoremIpsum p={2}/></p>
      </div>
    </div>
  )
}