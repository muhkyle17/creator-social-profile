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

const SocialLink = ({ icon, platform }) => {
  return (
    <button
      type='button'
      className='cursor-pointer'
      onClick={() => console.log(`You clicked the ${platform} button`)}>
      {icon}
    </button>
  )
}

const SocialLinksPreview = () => {
  return (
    <div className='flex flex-row gap-3 text-xl'>
      <SocialLink icon={<FaFacebook className='text-[#1877F2]' />} platform='facebook' />
      <SocialLink icon={<FaTwitter className='text-[#1DA1F2]' />} platform='twitter' />
      <SocialLink icon={<FaInstagram className='text-[#f77737]' />} platform='instagram' />
      <SocialLink icon={<FaGithub />} platform='github' />
      <SocialLink icon={<FaTelegram className='text-[#24A1DE]' />} platform='telegram' />
      <SocialLink icon={<FaLinkedin className='text-[#0077B5]' />} platform='linkedin' />
      <SocialLink icon={<MdOutlineMailOutline />} platform='email' />
      <SocialLink icon={<FaYoutube className='text-[#CD201F]' />} platform='youtube' />
      <SocialLink icon={<FaWhatsapp className='text-[#4FCE5D]' />} platform='whatsapp' />
    </div>
  )
}

export default SocialLinksPreview
