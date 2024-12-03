import { create } from 'zustand'

const socialLinksDataStore = create(set => ({
  facebookLink: '',
  twitterLink: '',
  instagramLink: '',
  githubLink: '',
  telegramLink: '',
  linkedinLink: '',
  emailLink: '',
  youtubeLink: '',
  whastappLink: '',
  setFacebookLink: facebookLink => set({ facebookLink }),
  setTwitterLink: twitterLink => set({ twitterLink }),
  setInstagramLink: instagramLink => set({ instagramLink }),
  setGithubLink: githubLink => set({ githubLink }),
  setTelegramLink: telegramLink => set({ telegramLink }),
  setLinkedinLink: linkedinLink => set({ linkedinLink }),
  setEmailLink: emailLink => set({ emailLink }),
  setYoutubeLink: youtubeLink => set({ youtubeLink }),
  setWhatsAppLink: whatsAppLink => set({ whatsAppLink }),
}))

export default socialLinksDataStore
