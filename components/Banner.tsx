import Image from 'next/image';
import Logo from '../public/Logo.png'
import {UserCircleIcon, HeartIcon, ShoppingCartIcon} from '@heroicons/react/24/solid'

export default function Banner () {
  return (
    <div className='w-full h-50 bg-gradient-to-br from-red-300 to-[#00aed1] filter flex flex-row justify-between p-10'>
      <div>
        {/* Make logo bigger in photoshop */}
        <Image src={Logo} alt='' width={100} height={100} className='rounded-full'/>
      </div>
      <div className='flex flex-row space-x-5 py-7'>
        <div>
          <UserCircleIcon className='h-6 w-6 text-white cursor-pointer'/>
        </div>
        <div>
          <HeartIcon className='h-6 w-6 text-white cursor-pointer'/>
        </div>
        <div>
          <ShoppingCartIcon className='h-6 w-6 text-white cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}