import { create } from 'zustand'

const userDataStore = create(set => ({
  profileName: '',
  setProfileName: profileName => set({ profileName }),
  profileDescription: '',
  setProfileDescription: profileDescription => set({ profileDescription }),
  photoUrl: '',
  setPhotoUrl: photoUrl => set({ photoUrl }),
}))

export default userDataStore
