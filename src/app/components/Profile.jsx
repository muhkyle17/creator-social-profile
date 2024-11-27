const Profile = () => {
  return (
    <div className='flex flex-row gap-10'>
      <div className='w-[20%]'>
        <h1 className='font-bold text-lg'>Profile</h1>
        <h2 className='opacity-60'>A brief introduction about yourself</h2>
      </div>
      <div className='w-[40%] bg-white p-6 rounded-lg drop-shadow-lg'>
        <div className='flex flex-col gap-1'>
          <label htmlFor='name' className='text-sm'>
            Name
          </label>
          <input
            aria-label='Name Input'
            type='text'
            name='name'
            className='border border-opacity-20 border-black rounded-md p-3 text-xs'
          />
        </div>
      </div>
    </div>
  )
}

export default Profile
