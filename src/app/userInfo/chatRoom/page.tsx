'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState,useEffect,useMemo,useCallback} from "react"
import React from 'react';
import VideoJS from '@/components/custom/video'
import type Player from 'video.js/dist/types/player';
export default function Home() {
  const playerRef = React.useRef<Player|null>(null);
  const [m3u8Link,setM3u8Link]=useState('https://ukzy.ukubf4.com/20221009/exVe5INZ/2000kb/hls/index.m3u8')
  const videoOptions=useMemo(()=>{
    console.log('呃呃喵')
    const options={
        autoplay: true,
        controls: true,
        height:'300',
        width:'600',
        sources: [{
          src:m3u8Link,
          // src: 'http://iwisscotmail.oss-cn-shenzhen.aliyuncs.com/1252541904-1-192.mp4',
          // src:'https://ukzy.ukubf4.com/20221225/Vx5nmXFw/2000kb/hls/P039kVxU.ts',
          type:'application/x-mpegURL'
        }]}
    return options;
  },[m3u8Link])
  function handleM3U8(event:React.ChangeEvent<HTMLInputElement>){
    setM3u8Link(event.currentTarget.value)
  }
  function changePlayerSrc(){
    if(playerRef.current)
      playerRef.current.src({src:m3u8Link,type:'application/x-mpegURL'})
  }

  const handlePlayerReady = useCallback((player:Player) => {
    console.log('呃呃')
    playerRef.current = player;
    player.on('waiting', () => {
      console.log('player is waiting');
    });
    player.on('dispose', () => {
      console.log('player will dispose');
    });
  },[]);

  
  return (
    <div className='h-full bg-lime-100 w-full p-8 font-bold text-3xl text-lime-700 leading-relaxed'>
      <div>
        This is an Cinema.
      </div>

      <div className="flex gap-2 pt-4">
        <Input onChange={handleM3U8} placeholder="Input the m3u8 of the video."></Input><Button onClick={changePlayerSrc}>确定</Button>
      </div>
      
      <div className="text-xl p-2 ">
        currentM3U8:<div className="text-amber-600 text-lg">{m3u8Link}</div>
      </div>

      <div className="h-[200px] w-[400px]">
      <VideoJS options={videoOptions} onReady={handlePlayerReady}></VideoJS>
      </div>
    </div>
  )
}
