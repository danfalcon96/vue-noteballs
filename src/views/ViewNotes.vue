<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'

const newNoteBox = useTemplateRef('new-note-box')
const newNote = ref('')
const notes = ref([
  {
    id: 'id1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut autem commodiconsectetur dicta eligendi incidunt, ipsum natus non saepe! Ad autem delectus enim evenietexplicabo laboriosam quidem quis vel.',
  },
  {
    id: 'id2',
    content: 'This is a shorter note!',
  },
])
const addNote = () => {
  let note = {
    id: new Date().getTime().toFixed(),
    content: newNote.value,
  }

  notes.value.unshift(note)
  newNote.value = ''
  newNoteBox.value?.focus()
}
</script>

<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            class="textarea"
            v-model="newNote"
            ref="new-note-box"
            placeholder="Write a note here"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            class="button is-link has-background-success"
            :disabled="!newNote"
            @click="addNote"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <div v-for="note in notes" :key="note.id" class="card nb-4">
      <div class="card-content">
        <div class="content">
          {{ note.content }}
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<style scoped></style>
