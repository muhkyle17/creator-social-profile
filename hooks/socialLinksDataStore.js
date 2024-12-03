import { create } from 'zustand'

const linkKeys = [
  'facebookLink',
  'twitterLink',
  'instagramLink',
  'githubLink',
  'telegramLink',
  'linkedinLink',
  'emailLink',
  'youtubeLink',
  'whatsAppLink',
]

const socialLinksDataStore = create(set => {
  // Generate initial state using map
  const initialState = Object.fromEntries(linkKeys.map(key => [key, '']))

  // Generate setters using map
  const setters = Object.fromEntries(
    linkKeys.map(key => [
      `set${key.charAt(0).toUpperCase() + key.slice(1)}`,
      value => set({ [key]: value }),
    ])
  )

  console.log(initialState, 'initialState')

  return {
    ...initialState,
    ...setters,
  }
})

export default socialLinksDataStore
