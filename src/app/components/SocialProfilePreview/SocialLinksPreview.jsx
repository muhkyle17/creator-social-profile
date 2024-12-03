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

const SocialLinksPreview = () => {
  return (
    <div className='flex flex-row gap-3 text-xl'>
      <button
        type='button'
        className='cursor-pointer'
        onClick={() => console.log(`You clicked the ${'button'}`)}>
        <FaTwitter className='text-[#1DA1F2]' />
      </button>
      <button
        type='button'
        className='cursor-pointer'
        onClick={() => console.log(`You clicked the ${'button'}`)}>
        <FaInstagram className='text-[#f77737]' />
      </button>
      <button
        type='button'
        className='cursor-pointer'
        onClick={() => console.log(`You clicked the ${'button'}`)}>
        <FaGithub />
      </button>
      <button
        type='button'
        className='cursor-pointer'
        onClick={() => console.log(`You clicked the ${'button'}`)}>
        <MdOutlineMailOutline />
      </button>
      <button
        type='button'
        className='cursor-pointer'
        onClick={() => console.log(`You clicked the ${'button'}`)}>
        <FaFacebook className='text-[#1877F2]' />
      </button>
      <button
        type='button'
        className='cursor-pointer'
        onClick={() => console.log(`You clicked the ${'button'}`)}>
        <FaTelegram className='text-[#24A1DE]' />
      </button>
      <button
        type='button'
        className='cursor-pointer'
        onClick={() => console.log(`You clicked the ${'button'}`)}>
        <FaLinkedin className='text-[#0077B5]' />
      </button>
      <button
        type='button'
        className='cursor-pointer'
        onClick={() => console.log(`You clicked the ${'button'}`)}>
        <FaYoutube className='text-[#CD201F]' />
      </button>
      <button
        type='button'
        className='cursor-pointer'
        onClick={() => console.log(`You clicked the ${'button'}`)}>
        <FaWhatsapp className='text-[#4FCE5D]' />
      </button>
    </div>
  )
}

export default SocialLinksPreview
