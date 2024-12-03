'use client'

import Image from 'next/image'
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

import userDataStore from '../../hooks/userDataStore'
import ProfilePreview from './ProfilePreview'

const SocialProfilePreview = () => {
  const profileName = userDataStore(state => state.profileName)
  const profileDescription = userDataStore(state => state.profileDescription)
  const photoUrl = userDataStore(state => state.photoUrl)

  return (
    <div className='mt-10 xl:mt-0 bg-white h-full flex items-center justify-center'>
      <div className='min-h-[47rem] w-[350px] mx-auto flex items-center justify-center rounded-[3.5rem] ring-8 ring-black py-6 px-6 max-h-[900px]'>
        <div className='relative w-full min-h-[700px] max-h-[800px] flex flex-col gap-8 items-center justify-start'>
          <div className='absolute inset-0 overflow-auto pr-4 -mr-4'>
            <div className='flex flex-col gap-8 items-center'>
              <ProfilePreview
                profileName={profileName}
                profileDescription={profileDescription}
                photoUrl={photoUrl}
              />

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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialProfilePreview
