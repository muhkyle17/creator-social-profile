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
          <SocialLink inputName='facebook' labelName='Facebook' icon={<FaFacebook />} />
          <SocialLink inputName='twitter' labelName='Twitter' icon={<FaTwitter />} />
        </div>
        <div className='flex flex-row gap-10 justify-between'>
          <SocialLink inputName='instagram' labelName='Instgram' icon={<FaInstagram />} />
          <SocialLink inputName='github' labelName='Github' icon={<FaGithub />} />
        </div>
        <div className='flex flex-row gap-10 justify-between'>
          <SocialLink inputName='email' labelName='Email' icon={<MdOutlineMailOutline />} />
          <SocialLink inputName='youtube' labelName='Youtube' icon={<FaYoutube />} />
        </div>
        <div className='flex flex-row gap-10 justify-between'>
          <SocialLink inputName='whatsapp' labelName='WhatsApp' icon={<FaWhatsapp />} />
          <div className='invisible w-1/2' />
        </div>
      </div>
    </div>
  )
}

export default SocialLinks
