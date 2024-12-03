'use client'

import socialLinksDataStore from '@/../hooks/socialLinksDataStore'

const SocialLink = ({ inputName, labelName, icon }) => {
  const setLinkHandlers = {
    facebook: socialLinksDataStore(state => state.setFacebookLink),
    twitter: socialLinksDataStore(state => state.setTwitterLink),
    instagram: socialLinksDataStore(state => state.setInstagramLink),
    github: socialLinksDataStore(state => state.setGithubLink),
    telegram: socialLinksDataStore(state => state.setTelegramLink),
    linkedin: socialLinksDataStore(state => state.setLinkedinLink),
    email: socialLinksDataStore(state => state.setEmailLink),
    youtube: socialLinksDataStore(state => state.setYoutubeLink),
    whatsapp: socialLinksDataStore(state => state.setWhatsAppLink),
  }

  // Unified change handler
  const handleChange = (value, e) => {
    const setLink = setLinkHandlers[value]
    if (setLink) {
      setLink(e.target.value)
    }
  }

  return (
    <div className='flex flex-col gap-2 w-1/2'>
      <label htmlFor={inputName} className='text-sm text-gray-700'>
        {labelName}
      </label>
      <div className='flex flex-row items-center w-full'>
        <span className='text-xl py-2 px-3 rounded-md rounded-r-none border border-opacity-20 border-black'>
          {icon}
        </span>
        <input
          aria-label='Social Icons'
          type='text'
          onChange={e => handleChange(inputName, e)}
          name={inputName}
          id={inputName}
          className='bg-white p-2 text-sm rounded-md rounded-l-none border-l-0 border border-opacity-20 border-black w-full'
        />
      </div>
    </div>
  )
}

export default SocialLink
