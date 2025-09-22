<script setup lang="ts">
import { useTemplateRef } from 'vue'

defineProps({
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const noteTextAreaRef = useTemplateRef('noteTextAreaRef')

const focusTextArea = () => {
  if (noteTextAreaRef.value) noteTextAreaRef.value.focus()
}

defineExpose({
  focusTextArea,
})
</script>

<template>
  <div class="card has-background-success-dark p-4 mb-5">
    <div class="field">
      <div class="control">
        <textarea
          ref="noteTextAreaRef"
          :value="modelValue"
          @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
          class="textarea"
          placeholder="Write a note here"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="form-button"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
