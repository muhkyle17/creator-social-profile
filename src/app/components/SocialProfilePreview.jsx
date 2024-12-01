'use client'

import Image from 'next/image'

import userDataStore from '../hooks/userDataStore'

const SocialProfilePreview = () => {
  const profileName = userDataStore(state => state.profileName)
  const profileDescription = userDataStore(state => state.profileDescription)
  const photoUrl = userDataStore(state => state.photoUrl)

  return (
    <div className='mt-10 xl:mt-0 bg-white h-full flex items-center justify-center'>
      <div className='min-h-[47rem] w-[350px] mx-auto flex items-center justify-center rounded-[3.5rem] ring-8 ring-black py-6 px-6'>
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
          <h1 className='text-2xl font-bold'>{profileName}</h1>
          <p className='text-lg opacity-60'>{profileDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default SocialProfilePreview
