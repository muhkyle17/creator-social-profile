'use client'
import userDataStore from '../hooks/userProfileDataStore'

const Profile = () => {
  const setProfileName = userDataStore(state => state.setProfileName)
  const setProfileDescription = userDataStore(state => state.setProfileDescription)
  const setPhotoUrl = userDataStore(state => state.setPhotoUrl)
  const handleChange = (value, e) => {
    if (value === 'profileName') setProfileName(e.target.value)
    if (value === 'description') setProfileDescription(e.target.value)
    if (value === 'photoUrl') setPhotoUrl(e.target.value)
  }

  return (
    <div className='p-8 flex flex-row gap-10 justify-around'>
      <div className='w-[30%]'>
        <h1 className='font-bold text-lg'>Profile</h1>
        <h2 className='opacity-60'>A brief introduction about yourself</h2>
      </div>
      <div className='w-[65%] h-fit bg-white p-6 rounded-lg drop-shadow-lg flex flex-col gap-5'>
        <div className='flex flex-col gap-1'>
          <label htmlFor='name' className='text-sm text-gray-700'>
            Name
          </label>
          <input
            aria-label='Name Input'
            type='text'
            name='name'
            className='border border-opacity-20 border-black bg-white rounded-md p-3 text-xs'
            onChange={e => handleChange('profileName', e)}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='description' className='text-sm text-gray-700'>
            Short description about yourself
          </label>
          <textarea
            aria-label='Description Input'
            rows='4'
            type='text'
            name='description'
            className='border border-opacity-20 border-black bg-white rounded-md p-3 text-xs'
            onChange={e => handleChange('description', e)}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='photoUrl' className='text-sm text-gray-700'>
            Photo URL
          </label>
          <input
            aria-label='Photo Url Image Input'
            type='photoUrl'
            name='name'
            className='border border-opacity-20 border-black bg-white rounded-md p-3 text-xs'
            onChange={e => handleChange('photoUrl', e)}
          />
        </div>
      </div>
    </div>
  )
}

export default Profile
