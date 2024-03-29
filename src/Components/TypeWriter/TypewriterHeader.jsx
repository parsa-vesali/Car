import React from 'react'
import './TypeWriterHeader.css'

import { Typewriter } from 'react-simple-typewriter'
export default function TypeWraiterHeader() {
  return (
    <div className='typewriter__container'>
        <Typewriter
            className= "slide-typewriter"
            words={
              ['خرید خودرو با بهترین قیمت','از خودرویی با کیفیت برای تجربه رانندگی لذت‌بخش خود لذت ببرید']
            }
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={200}
            deleteSpeed={100}
            delaySpeed={1500}
          />
    </div>
  )
}
