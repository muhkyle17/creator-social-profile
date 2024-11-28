const SocialLinks = () => {
  return (
    <div className='p-8 flex flex-row gap-10 justify-around'>
      <div className='w-[30%]'>
        <h1 className='font-bold text-lg'>Social Links</h1>
        <h2 className='opacity-60'>Add your social media links</h2>
      </div>
      <div className='w-[65%] h-fit bg-white p-6 rounded-lg drop-shadow-lg'>
        <div className='flex flex-row gap-5'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='facebook' className='text-sm text-gray-700'>
              Facebook
            </label>
            <input
              aria-label='Facebook'
              type='text'
              name='facebook'
              className='border border-opacity-20 border-black bg-white rounded-md p-2 text-sm'
            />
          </div>
          <div></div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default SocialLinks
