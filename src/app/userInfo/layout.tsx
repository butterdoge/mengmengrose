'use client'
import { Avatar, AvatarBadge,Divider,Button} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { Button as MButton} from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import useStore from '@/state/zustand'
export default function Home({
  children,
}: {
  children: React.ReactNode
}) {
  const router=useRouter()
  const userName=useStore(state=>state.userName)
  // const userInfo=useSelector(state=>state.userInfo)
  return (
    <div className='flex w-full h-screen'>
      <div className='w-40 bg-amber-300 h-screen p-4 animate__animated animate__fadeInLeft' >
        <div className='flex flex-col justify-center items-center gap-2 mb-4'>
            <Avatar size='xl' src='/TOUX.jpg'></Avatar>
            <div className=' text-center'>
                <div className='text-amber-600 font-bold text-2xl'>{userName}</div>
                <div className='text-amber-600 text-l font-medium'>不太可爱的孩子</div>
            </div>
        </div>
        <Divider w='4px'></Divider>
        <div className='flex flex-col justify-center items-stretch gap-2 mb-4'>
          <MButton variant='meng' onClick={()=>router.push('/userInfo/cinema')}>CINEMA</MButton>
          <MButton variant='meng' onClick={()=>router.push('/userInfo')}>ABOUT SITE</MButton>
        </div>
      </div>
      
      <div className='grow'>
        {children}
      </div>

    </div>
  )
}
