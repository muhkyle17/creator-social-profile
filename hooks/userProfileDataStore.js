import { create } from 'zustand'

const userProfileDataStore = create(set => ({
  profileName: '',
  setProfileName: profileName => set({ profileName }),
  profileDescription: '',
  setProfileDescription: profileDescription => set({ profileDescription }),
  photoUrl: '',
  setPhotoUrl: photoUrl => set({ photoUrl }),
}))

export default userProfileDataStore
