import type { Directive } from 'vue'

export const vAutoFocus: Directive = {
  mounted: (element: HTMLElement) => {
    element.focus()
  },
}
