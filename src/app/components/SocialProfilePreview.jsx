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

import Image from 'next/image'

import userDataStore from '../hooks/userDataStore'

const SocialProfilePreview = () => {
  const profileName = userDataStore(state => state.profileName)
  const profileDescription = userDataStore(state => state.profileDescription)
  const photoUrl = userDataStore(state => state.photoUrl)

  return (
    <div className='mt-10 xl:mt-0 bg-white h-full flex items-center justify-center'>
      <div className='min-h-[47rem] w-[350px] mx-auto flex items-center justify-center rounded-[3.5rem] ring-8 ring-black py-6 px-6'>
        <div className='w-full flex flex-col gap-8 items-center'>
          <div className='flex flex-col gap-2 text-center items-center'>
            {photoUrl && (
              <Image
                alt='Profile Image'
                src={photoUrl}
                sizes='100vw'
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                width={500}
                height={300}
                className='rounded-3xl'
              />
            )}
            <h1 className='text-2xl font-bold'>{profileName} Temporary Name </h1>
            <p className='text-lg opacity-60'>
              {profileDescription} Temporary Description Temporary Temporary Temporary Temporary
            </p>
          </div>

          <div className='flex flex-row gap-5'>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaGithub />
            <FaTelegram />
            <FaLinkedin />
            <FaYoutube />
            <FaWhatsapp />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialProfilePreview
