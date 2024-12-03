import { create } from 'zustand'

const linksDataStore = create(set => ({
  links: [],
  setNewLink: newLink => {
    console.log(newLink, 'newLink')
    set(state => ({
      links: state.links === 0 ? newLink : [...state.links, newLink],
    }))
  },

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
