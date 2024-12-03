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

import socialLinksDataStore from '@/../hooks/socialLinksDataStore'

const SOCIAL_PLATFORMS = [
  {
    platform: 'facebook',
    icon: <FaFacebook className='text-[#1877F2]' />,
    stateKey: 'facebookLink',
  },
  { platform: 'twitter', icon: <FaTwitter className='text-[#1DA1F2]' />, stateKey: 'twitterLink' },
  {
    platform: 'instagram',
    icon: <FaInstagram className='text-[#f77737]' />,
    stateKey: 'instagramLink',
  },
  { platform: 'github', icon: <FaGithub />, stateKey: 'githubLink' },
  {
    platform: 'telegram',
    icon: <FaTelegram className='text-[#24A1DE]' />,
    stateKey: 'telegramLink',
  },
  {
    platform: 'linkedin',
    icon: <FaLinkedin className='text-[#0077B5]' />,
    stateKey: 'linkedinLink',
  },
  { platform: 'email', icon: <MdOutlineMailOutline />, stateKey: 'emailLink' },
  { platform: 'youtube', icon: <FaYoutube className='text-[#CD201F]' />, stateKey: 'youtubeLink' },
  {
    platform: 'whatsapp',
    icon: <FaWhatsapp className='text-[#4FCE5D]' />,
    stateKey: 'whatsappLink',
  },
]

const SocialLink = ({ icon, href }) => {
  if (!href) return null // Handle case where the link is undefined or null

  return (
    <a
      type='button'
      target='_blank'
      rel='noopener noreferrer'
      className='cursor-pointer'
      href={href}>
      {icon}
    </a>
  )
}

const SocialLinksPreview = () => {
  const socialLinks = socialLinksDataStore()

  return (
    <div className='flex flex-row gap-3 text-xl'>
      {SOCIAL_PLATFORMS.map(({ platform, icon, stateKey }) => (
        <SocialLink key={platform} icon={icon} href={socialLinks[stateKey]} />
      ))}
    </div>
  )
}

export default SocialLinksPreview
