import { create } from 'zustand'

const linksDataStore = create(set => ({
  links: [
    {
      id: 0,
      label: '',
      URL: '',
    },
  ],
  setLinksData: newLink =>
    set(state => ({
      links: state.links.map(link => (link.id === newLink.id ? { ...link, ...newLink } : link)),
    })),
}))

export default linksDataStore
