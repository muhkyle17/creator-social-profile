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

const SOCIAL_LINKS = [
  { inputName: 'facebook', labelName: 'Facebook', icon: <FaFacebook className='text-[#1877F2]' /> },
  { inputName: 'twitter', labelName: 'Twitter', icon: <FaTwitter className='text-[#1DA1F2]' /> },
  {
    inputName: 'instagram',
    labelName: 'Instagram',
    icon: <FaInstagram className='text-[#f77737]' />,
  },
  { inputName: 'github', labelName: 'Github', icon: <FaGithub /> },
  { inputName: 'telegram', labelName: 'Telegram', icon: <FaTelegram className='text-[#24A1DE]' /> },
  { inputName: 'linkedin', labelName: 'LinkedIn', icon: <FaLinkedin className='text-[#0077B5]' /> },
  { inputName: 'email', labelName: 'Email', icon: <MdOutlineMailOutline /> },
  { inputName: 'youtube', labelName: 'Youtube', icon: <FaYoutube className='text-[#CD201F]' /> },
  { inputName: 'whatsapp', labelName: 'WhatsApp', icon: <FaWhatsapp className='text-[#4FCE5D]' /> },
]

const SocialLinks = () => {
  return (
    <div className='p-8 flex flex-row gap-10 justify-around'>
      <div className='w-[30%]'>
        <h1 className='font-bold text-lg'>Social Links</h1>
        <h2 className='opacity-60'>Add your social media links</h2>
      </div>
      <div className='w-[65%] h-fit bg-white p-6 rounded-lg drop-shadow-lg flex flex-col gap-8'>
        {SOCIAL_LINKS.reduce((rows, link, index) => {
          // Group links into rows of two
          if (index % 2 === 0) rows.push([])
          rows[rows.length - 1].push(link)

          return rows
        }, []).map((row, rowIndex) => (
          <div key={rowIndex} className='flex flex-row gap-10 justify-between'>
            {row.map(({ inputName, labelName, icon }) => (
              <SocialLink key={inputName} inputName={inputName} labelName={labelName} icon={icon} />
            ))}
            {row.length < 2 && <div className='invisible w-1/2' />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SocialLinks
