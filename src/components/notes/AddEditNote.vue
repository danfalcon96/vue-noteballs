<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { vAutoFocus } from '@/directives/vAutoFocus.ts'

withDefaults(
  defineProps<{
    modelValue: string
    bgColor?: string
    placeholder?: string
    label?: string
  }>(),
  { bgColor: 'success', placeholder: 'Type something...' },
)

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
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
    <label v-if="label" class="label has-text-white">{{ label }}</label>

    <div class="field">
      <div class="control">
        <textarea
          ref="noteTextAreaRef"
          :value="modelValue"
          @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
          class="textarea"
          :placeholder="placeholder"
          v-auto-focus
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
