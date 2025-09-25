import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useStoreNotes = defineStore('storeNotes', () => {
  const notes = ref([
    {
      id: 'id1',
      content:
        'Lorem ipsum dolor sit ame, consectetur adipisicing elit. Animi aut autem commodiconsectetur dicta eligendi incidunt, ipsum natus non saepe! Ad autem delectus enim evenietexplicabo laboriosam quidem quis vel.',
    },
    {
      id: 'id2',
      content: 'This is a shorter note!',
    },
  ])

  const addNote = (note: string) => {
    notes.value.unshift({
      id: new Date().getTime().toString(),
      content: note,
    })
  }

  const deleteNote = (noteId: string) => {
    notes.value = notes.value.filter((note) => note.id !== noteId)
  }

  const updateNote = (noteId: string, noteContent: string) => {
    notes.value[notes.value.findIndex((note) => note.id === noteId)].content = noteContent
  }

  const getNoteContent = computed(() => {
    return (id: string) => {
      return notes.value.filter((note) => note.id === id)[0].content
    }
  })

  return {
    notes,
    addNote,
    deleteNote,
    updateNote,
    getNoteContent,
  }
})
