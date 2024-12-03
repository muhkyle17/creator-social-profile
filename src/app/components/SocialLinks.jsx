'use client'

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaTelegram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'

import SocialLink from './SocialLink'

const SocialLinks = () => {
  return (
    <div className='p-8 flex flex-row gap-10 justify-around'>
      <div className='w-[30%]'>
        <h1 className='font-bold text-lg'>Social Links</h1>
        <h2 className='opacity-60'>Add your social media links</h2>
      </div>
      <div className='w-[65%] h-fit bg-white p-6 rounded-lg drop-shadow-lg flex flex-col gap-8'>
        <div className='flex flex-row gap-10 justify-between'>
          <SocialLink
            inputName='facebook'
            labelName='Facebook'
            icon={<FaFacebook className='text-[#1877F2]' />}
          />
          <SocialLink
            inputName='twitter'
            labelName='Twitter'
            icon={<FaTwitter className='text-[#1DA1F2]' />}
          />
        </div>
        <div className='flex flex-row gap-10 justify-between'>
          <SocialLink
            inputName='instagram'
            labelName='Instgram'
            icon={<FaInstagram className='text-[#f77737]' />}
          />
          <SocialLink inputName='github' labelName='Github' icon={<FaGithub />} />
        </div>
        <div className='flex flex-row gap-10 justify-between'>
          <SocialLink
            inputName='telegram'
            labelName='Telegram'
            icon={<FaTelegram className='text-[#24A1DE]' />}
          />
          <SocialLink
            inputName='linked'
            labelName='LinkedIn'
            icon={<FaLinkedin className='text-[#0077B5]' />}
          />
        </div>
        <div className='flex flex-row gap-10 justify-between'>
          <SocialLink inputName='email' labelName='Email' icon={<MdOutlineMailOutline />} />
          <SocialLink
            inputName='youtube'
            labelName='Youtube'
            icon={<FaYoutube className='text-[#CD201F]' />}
          />
        </div>
        <div className='flex flex-row gap-10 justify-between'>
          <SocialLink
            inputName='whatsapp'
            labelName='WhatsApp'
            icon={<FaWhatsapp className='text-[#4FCE5D]' />}
          />
          <div className='invisible w-1/2' />
        </div>
      </div>
    </div>
  )
}

export default SocialLinks
