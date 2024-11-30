import { create } from 'zustand'

const userDataStore = create(set => ({
  profileName: '',
  setProfileName: profileName => set({ profileName }),
}))

export default userDataStore
