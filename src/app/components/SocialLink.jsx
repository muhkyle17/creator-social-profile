'use client'

import socialLinksDataStore from '../hooks/socialLinksDataStore'

const SocialLink = ({ inputName, labelName, icon }) => {
  const setFacebookLink = socialLinksDataStore(state => state.setFacebookLink)
  const setTwitterLink = socialLinksDataStore(state => state.setTwitterLink)
  const setInstagramLink = socialLinksDataStore(state => state.setInstagramLink)
  const setGithubLink = socialLinksDataStore(state => state.setGithubLink)
  const setTelegramLink = socialLinksDataStore(state => state.setTelegramLink)
  const setLinkedinLink = socialLinksDataStore(state => state.setLinkedinLink)
  const setEmailLink = socialLinksDataStore(state => state.setEmailLink)
  const setYoutubeLink = socialLinksDataStore(state => state.setYoutubeLink)
  const setWhatsAppLink = socialLinksDataStore(state => state.setWhatsAppLink)

  const state = socialLinksDataStore(state => state)

  const handleChange = (value, e) => {
    if (value === 'facebook') setFacebookLink(e.target.value)
    if (value === 'twitter') setTwitterLink(e.target.value)
    if (value === 'instagram') setInstagramLink(e.target.value)
    if (value === 'github') setGithubLink(e.target.value)
    if (value === 'telegram') setTelegramLink(e.target.value)
    if (value === 'linkedin') setLinkedinLink(e.target.value)
    if (value === 'email') setEmailLink(e.target.value)
    if (value === 'youtube') setYoutubeLink(e.target.value)
    if (value === 'whatsapp') setWhatsAppLink(e.target.value)
  }

  return (
    <div className='flex flex-col gap-2 w-1/2'>
      <label htmlFor='inputName' className='text-sm text-gray-700'>
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
          className='bg-white p-2 text-sm rounded-md rounded-l-none border-l-0 border border-opacity-20 border-black w-full'
        />
      </div>
    </div>
  )
}

export default SocialLink
