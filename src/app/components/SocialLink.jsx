import { FaFacebook } from 'react-icons/fa'

const SocialLink = ({ inputName, labelName, icon }) => {
  return (
    <div className='flex flex-col gap-2 w-1/2'>
      <label htmlFor='inputName' className='text-sm text-gray-700'>
        {labelName}
      </label>
      <div className='flex flex-row items-center w-full'>
        <span className='py-2 px-3 rounded-md rounded-r-none border border-opacity-20 border-black'>
          <FaFacebook className='text-xl' />
          {/* {icon} */}
        </span>
        <input
          aria-label='Social Icons'
          type='text'
          name={inputName}
          className='bg-white p-2 text-sm rounded-md rounded-l-none border-l-0 border border-opacity-20 border-black w-full'
        />
      </div>
    </div>
  )
}

export default SocialLink
