import { IoIosArrowUp, IoIosArrowDown, IoIosAddCircleOutline } from 'react-icons/io'

const Links = () => {
  return (
    <div className='p-8 flex flex-row gap-10 justify-around'>
      <div className='w-[30%]'>
        <h1 className='font-bold text-lg'>Links</h1>
        <h2 className='opacity-60'>Add some links here</h2>
      </div>

      <div className='relative w-[65%] h-fit'>
        <div className='bg-white p-6 rounded-lg drop-shadow-lg flex flex-col gap-5'>
          <div className='absolute top-1 -left-9 flex flex-col items-center gap-2'>
            <IoIosArrowUp className='text-2xl opacity-65 cursor-pointer' />
            <p className='text-2xl opacity-65'> 1</p>
            <IoIosArrowDown className='text-2xl opacity-65 cursor-pointer' />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='label' className='text-sm text-gray-700'>
              Label
            </label>
            <input
              aria-label='Label Input'
              type='text'
              name='label'
              className='border border-opacity-20 border-black bg-white rounded-md p-3 text-xs'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='url' className='text-sm text-gray-700'>
              URL
            </label>
            <input
              aria-label='Url Input'
              type='url'
              name='url'
              className='border border-opacity-20 border-black bg-white rounded-md p-3 text-xs'
            />
          </div>
        </div>

        <button
          type='button'
          className='w-full flex items-center justify-center mt-8 py-1 border-2 rounded-lg border-black border-opacity-25 cursor-pointer'>
          <IoIosAddCircleOutline className='text-3xl opacity-40' />
        </button>
      </div>
    </div>
  )
}

export default Links
