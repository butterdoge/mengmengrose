'use client'
import { Button, ButtonGroup,FormControl,FormLabel,Input,FormHelperText} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import useStore from '@/state/zustand';
export default function Home() {
  const router=useRouter()
  const userName=useStore((state)=>state.userName)
  const updateUserName=useStore((state)=>state.updateUserName)
  // const [userName,setUserName]=useState('')
  return (
    <div>
      <div className="fixed flex z-20 bg-amber-200 w-full  flex-col items-center justify-start space-y-2 mt-24 py-4 animate__animated animate__fadeInDown">
        <div className="text-4xl font-bold text-amber-500">MENG IS HERE</div>
        <div className="font-base font-semibold text-amber-400">Be with Meng</div>
      </div>

      <div style={{ writingMode: 'vertical-rl' }} className='z-30 bg-amber-400 text-amber-200 font-bold fixed left-16 p-8 text-6xl top-0 h-full'>
        FROM ROGAZINE
      </div>

      <div style={{ writingMode: 'vertical-rl' }} className='z-10 bg-amber-300 text-amber-100 font-bold fixed left-56 pt-56 px-4 text-4xl top-0 h-full'>
        YEA I REMEMBER
      </div>
    
      <div className='fixed left-1/2 -translate-x-1/2 -translate-y-[60px]	top-1/2 bg-yellow-100 py-9 px-24 rounded-xl' >
        <FormControl>
          <FormLabel fontSize={24} fontWeight="bold" color='#f59e0b'>Whats Namey</FormLabel>
          <Input value={userName} onChange={e => updateUserName(e.target.value)} variant='flushed' color='#f59e0b' sx={{}} className='focus-visible:border-amber-400 focus-visible:shadow focus-visible:shadow-amber-400'/>
        </FormControl>
        <Button onClick={()=>router.push('/userInfo')} className='mt-3 bg-amber-200 text-amber-500 px-16'  colorScheme='yellow' >来啦</Button>
      </div>
    </div>
  )
}
