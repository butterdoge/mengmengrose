'use client'
import { Avatar, AvatarBadge,Divider,Button} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
export default function Home() {
  // const userInfo=useSelector(state=>state.userInfo)
  return (
    <div className='h-full bg-lime-100 w-full p-8 font-bold text-3xl text-lime-700 leading-relaxed'>
      This is an Index.
      <br>
      </br>
      And there will be even more content.
    </div>
  )
}
