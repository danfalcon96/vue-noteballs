import { defineStore } from 'pinia'
import { ref } from 'vue'

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
      id: new Date().getTime().toFixed(),
      content: note,
    })
  }

  return {
    notes,
    addNote,
  }
})
