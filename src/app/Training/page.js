"use client"
import { useEffect, useRef, useState } from "react";
import Board from "../components/Board";
import DropZone from "../components/DropZone";
import GameHeader from "../components/GameHeader";
import ReactAudioPlayer from 'react-audio-player';

export default function Home() {
      const [p1Count, setP1Count] = useState(0);
      const [p2Count, setP2Count] = useState(0);
      const [turn,setTurn] = useState(1);
      const [audioError, setAudioError] = useState();
      const [playAudio, setPlayAudio] = useState(false);
  return (
    <>   
    <div className="w-full flex items-center justify-center">
<main className=" bg-[rgb(41,41,41)] min-h-screen  container mx-auto px-5  p-24 py-5   flex flex-col  items-center  space-y-3">
<ReactAudioPlayer
  src="/static/game.mp3"
  muted={!playAudio}
  controls={false}
  loop
/>
      <GameHeader playAudio={playAudio} setPlayAudio={setPlayAudio} />

      <div className="flex items-center justify-center gap-5 ">
 {/* Player 1 */}
 <div className="flex flex-col items-center ">
 <div className={`${turn ===1? "bg-green-600":"bg-gray-600"} h-6 w-6 rounded-full my-1`}> </div>

{/* Turn Indicator */}
 <div className='flex rounded-3xl py-5 px-8 flex-col gap-4 items-center bg-[rgb(66,66,66)]'>
                    <div>
                    <img src='/static/player1.jpg' alt='player1_img' className='h-16 w-16 rounded-full text-xs object-cover border' />
                    </div>
                    <div className='xl font-bold'>
                    Player 1
                    </div>
                    <div className='text-4xl'>
{p1Count}                    </div>
                </div>   
</div>

      <div className="">
      <DropZone turn={turn} setTurn={setTurn} p1Count={p1Count} setP1Count={setP1Count} p2Count={p2Count} setP2Count={setP2Count}/>
      <Board />   
      </div>
      {/* Player 2 */}
      <div className="flex flex-col items-center ">

        {/* Turn Indicator */}
        
      <div className={`${turn ===2? "bg-green-600":"bg-gray-600"} h-6 w-6 rounded-full my-1`}> </div>
         <div className='flex rounded-3xl py-5 px-8 flex-col gap-4 items-center bg-[rgb(66,66,66)]'>
                    <div>
                    <img src='/static/player2.jpg' alt='player2_img' className='h-16 w-16 rounded-full text-xs object-cover border' />
                    </div>
                    <div className='xl font-bold'>
                    Player 2
                    </div>
                    <div className='text-4xl'>
                        {p2Count}
                    </div>
                </div>  
      </div>
     
      </div>
    </main>
    </div>
    
    </>
 
  );
}
