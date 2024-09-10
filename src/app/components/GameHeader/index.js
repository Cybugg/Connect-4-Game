import React from 'react'
import { IoMdSettings } from "react-icons/io";
import { FaMusic } from "react-icons/fa6";
import { MdMusicNote } from "react-icons/md";
import { MdMusicOff } from "react-icons/md";

function GameHeader({winner,turn,playAudio, setPlayAudio}) {
  return (
    <section className='w-full container mx-auto px-36 pb-12'>
        <div className='flex justify-between gap-5 w-full '>
            <div className='bg-[rgb(66,66,66)] rounded-full px-3 py-2 cursor-pointer'>
                Menu
            </div>
            <div className='bg-green-700 font-bold rounded-full px-8 py-2'>
                Bet: <span className='text-lg'>200</span>
            </div>
            <div className='bg-white text-gray-700 font-bold rounded-full px-8 py-2'>
                Balance: <span className='text-lg'>1200</span>
            </div>
            <div className='bg-[rgb(66,66,66)] rounded-full px-3 py-2 cursor-pointer'>
                Forfeit
            </div>
            <div className=' text-xl flex gap-2 '>
            <div className='bg-[rgb(66,66,66)] rounded-full p-3 cursor-pointer'>
              <IoMdSettings />   
            </div>
            <div className='bg-[rgb(66,66,66)] rounded-full p-3 cursor-pointer' onClick={()=>setPlayAudio(prev => !prev)}>
           {playAudio? <MdMusicNote />:<MdMusicOff />}
            </div>
            </div>
            
        </div>
        </section>
  )
}

export default GameHeader