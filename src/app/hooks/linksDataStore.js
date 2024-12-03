import { create } from 'zustand'

const linksDataStore = create(set => ({
  links: [
    {
      id: 0,
      label: '',
      URL: '',
    },
  ],
  setNewLink: newLink =>
    set(state => ({
      links: state.links.map(link => (link.id === newLink.id ? { ...link, ...newLink } : link)),
    })),
  setUpdateLink: updatedLink =>
    set(state => ({
      links: state.links.map(link =>
        link.id === updatedLink.id ? { ...link, ...updatedLink } : link
      ),
    })),
  setDeleteLink: deletedLink =>
    set(state => ({
      links: state.links.filter(link =>
        link.id !== deletedLink.id
          ? console.log(deletedLink.id, 'deletedLink.id')
          : console.log(link.id, 'link.id')
      ),
    })),
}))

export default linksDataStore
