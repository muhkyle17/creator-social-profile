import { FaFacebook } from 'react-icons/fa'

import SocialLink from './SocialLink'

const SocialLinks = () => {
  return (
    <div className='p-8 flex flex-row gap-10 justify-around'>
      <div className='w-[30%]'>
        <h1 className='font-bold text-lg'>Social Links</h1>
        <h2 className='opacity-60'>Add your social media links</h2>
      </div>
      <div className='w-[65%] h-fit bg-white p-6 rounded-lg drop-shadow-lg'>
        <div className='flex flex-row gap-10 justify-between'>
          <SocialLink inputName='facebook' labelName='Facebook' icon='facebook' />
          <SocialLink inputName='twitter' labelName='Twitter' icon='facebook' />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default SocialLinks
