<script setup lang="ts">
import { useStoreNotes } from '@/stores/storeNotes.ts'
import { vAutoFocus } from '@/directives/vAutoFocus.ts'

const storeNotes = useStoreNotes()
</script>

<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Character (of all notes)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input type="text" class="input" placeholder="Do you love noteballs?" v-auto-focus />
  </div>
</template>

<style scoped></style>
