'use client'

import userProfileDataStore from '@/../hooks/userProfileDataStore'

import ProfilePreview from './ProfilePreview'
import SocialLinksPreview from './SocialLinksPreview'

const SocialProfilePreview = () => {
  // Profile state
  const profileName = userProfileDataStore(state => state.profileName)
  const profileDescription = userProfileDataStore(state => state.profileDescription)
  const photoUrl = userProfileDataStore(state => state.photoUrl)

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

              <SocialLinksPreview />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialProfilePreview
