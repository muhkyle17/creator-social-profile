import { FaFacebook } from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <div className='p-8 flex flex-row gap-10 justify-around'>
      <div className='w-[30%]'>
        <h1 className='font-bold text-lg'>Social Links</h1>
        <h2 className='opacity-60'>Add your social media links</h2>
      </div>
      <div className='w-[65%] h-fit bg-white p-6 rounded-lg drop-shadow-lg'>
        <div className='flex flex-row gap-10 justify-between'>
          <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor='facebook' className='text-sm text-gray-700'>
              Facebook
            </label>
            <div className='flex flex-row items-center w-full'>
              <span className='py-2 px-3 rounded-md rounded-r-none border border-opacity-20 border-black'>
                <FaFacebook className='text-xl' />
              </span>
              <input
                aria-label='Facebook'
                type='text'
                name='facebook'
                className='bg-white p-2 text-sm rounded-md rounded-l-none border-l-0 border border-opacity-20 border-black w-full'
              />
            </div>
          </div>
          <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor='facebook' className='text-sm text-gray-700'>
              Facebook
            </label>
            <div className='flex flex-row items-center w-full'>
              <span className='py-2 px-3 rounded-md rounded-r-none border border-opacity-20 border-black'>
                <FaFacebook className='text-xl' />
              </span>
              <input
                aria-label='Facebook'
                type='text'
                name='facebook'
                className='bg-white p-2 text-sm rounded-md rounded-l-none border-l-0 border border-opacity-20 border-black w-full'
              />
            </div>
          </div>
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
