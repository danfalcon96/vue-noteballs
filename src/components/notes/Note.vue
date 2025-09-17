<script setup lang="ts">
import { computed } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes.ts'

const storeNotes = useStoreNotes()

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
})

const characterLength = computed(() => {
  let length = props.note.content.length
  return `${length} character${length > 1 ? 's' : ''}`
})

const deleteClicked = () => {
  storeNotes.deleteNote(props.note.id)
}
</script>

<template>
  <div class="card nb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item" @click.prevent="deleteClicked">Delete</a>
    </footer>
  </div>
</template>

<style scoped></style>
