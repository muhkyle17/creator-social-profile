import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

const Links = () => {
  return (
    <div className='p-8 flex flex-row gap-10 justify-around'>
      <div className='w-[30%]'>
        <h1 className='font-bold text-lg'>Links</h1>
        <h2 className='opacity-60'>Add some links here</h2>
      </div>
      <div className='relative w-[65%] h-fit bg-white p-6 rounded-lg drop-shadow-lg flex flex-col gap-5'>
        <div className='absolute top-2 -left-8 flex flex-col items-center gap-2'>
          <IoIosArrowUp className='text-2xl opacity-65 cursor-pointer' />
          <p className='text-2xl opacity-65'> 1</p>
          <IoIosArrowDown className='text-2xl opacity-65 cursor-pointer' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='name' className='text-sm text-gray-700'>
            Name
          </label>
          <input
            aria-label='Name Input'
            type='text'
            name='name'
            className='border border-opacity-20 border-black bg-white rounded-md p-3 text-xs'
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
          />
        </div>
      </div>
    </div>
  )
}

export default Links
