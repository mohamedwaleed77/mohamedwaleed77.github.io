import React from 'react'
import GlitchOverlay from './Glitch'
 

export default function NavBar() {
  return (
    <div className='relative [text-shadow:_0_0px_5px_rgb(255_255_255_/_0.9)] text-white bg-neutral-800 flex justify-around items-center w-full'>
        
        <p className='text-4xl text-gray-200 p-2'>MOHAMED WALEED</p>
        <div className='flex gap-4 pr-4 flex-wrap justify-center'>
        <a href='#about' className='px-3 py-2 rounded-full bg-blue-600'>About</a>
        <a href='#projects' className='px-3 py-2 rounded-full bg-blue-600'>Projects</a>
        <a href='#skills' className='px-3 py-2 rounded-full bg-blue-600'>skills</a>
        <a href='#contact' className='px-3 py-2 rounded-full bg-blue-600'>contact</a>
        </div>
    </div>
  )
}
