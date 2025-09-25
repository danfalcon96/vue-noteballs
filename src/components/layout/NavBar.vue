<script setup lang="ts">
import { ref } from 'vue'

const showMobileNav = ref(false)

const hideMobileNav = () => {
  showMobileNav.value = false
}
</script>

<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">Noteballs</div>
        <a
          @click.prevent="showMobileNav = !showMobileNav"
          class="navbar-burger"
          :class="{ 'is-active': showMobileNav }"
          aria-expanded="false"
          aria-label="menu"
          data-target="noteballs-main-menu"
          role="button"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="noteballs-main-menu" class="navbar-menu" :class="{ 'is-active': showMobileNav }">
        <div class="navbar-end">
          <RouterLink to="/" class="navbar-item" active-class="is-active" @click="hideMobileNav">
            Notes
          </RouterLink>
          <RouterLink
            to="/stats"
            class="navbar-item"
            active-class="is-active"
            @click="hideMobileNav"
          >
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
