'use client'
import { IoIosArrowUp, IoIosArrowDown, IoIosAddCircleOutline } from 'react-icons/io'
import { TiDelete } from 'react-icons/ti'

import linksDataStore from '@/../hooks/linksDataStore'

const Link = ({ link, setUpdateLink, setDeleteLink }) => {
  // console.log(setUpdateLink, 'setUpdateLink')
  // console.log(setDeleteLink, 'setDeleteLink')
  const { id, label, url } = link

  return (
    <div className='relative h-fit mb-9'>
      <div className='bg-white p-6 rounded-lg drop-shadow-lg flex flex-col gap-5'>
        <div className='flex flex-col gap-1'>
          <div className='absolute top-1 -left-9 flex flex-col items-center gap-2'>
            <IoIosArrowUp className='text-2xl opacity-65 cursor-pointer' />

            <p className='text-2xl opacity-65'>{id}</p>

            <IoIosArrowDown className='text-2xl opacity-65 cursor-pointer' />
          </div>

          <div className='absolute -top-2 -right-2 z-50 w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center'>
            <TiDelete className='absolute text-3xl text-gray-400 cursor-pointer w-10 h-10' />
          </div>

          <label htmlFor='label' className='text-sm text-gray-700'>
            Label
          </label>

          <input
            aria-label='Label Input'
            type='text'
            name='label'
            placeholder={label || 'asdfljsfljksfjks'}
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
            placeholder={url || 'alksdfjklsdjlkfjsldkfjksd'}
            className='border border-opacity-20 border-black bg-white rounded-md p-3 text-xs'
          />
        </div>
      </div>
    </div>
  )
}

const Links = () => {
  const linksStore = linksDataStore()
  const { setNewLink, setUpdateLink, setDeleteLink } = linksStore
  const { links } = linksStore

  return (
    <div className='p-8 flex flex-row gap-10 justify-around'>
      <div className='w-[30%]'>
        <h1 className='font-bold text-lg'>Links</h1>
        <h2 className='opacity-60'>Add some links here</h2>
      </div>

      <div className='w-[65%]'>
        {links.map(link => {
          return (
            <Link
              key={link.id}
              link={link}
              setUpdateLink={setUpdateLink}
              setDeleteLink={setDeleteLink}
            />
          )
        })}

        <button
          type='button'
          onClick={() => setNewLink({ id: links.length === 0 ? 1 : links.length + 1 })}
          className='w-full flex items-center justify-center mt-8 py-1 border-2 rounded-lg border-black border-opacity-25 cursor-pointer'>
          <IoIosAddCircleOutline className='text-3xl opacity-40' />
        </button>
      </div>
    </div>
  )
}

export default Links
