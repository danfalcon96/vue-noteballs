<script setup lang="ts"></script>

<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">Noteballs</div>
      </div>

      <div id="noteballs-main-menu" class="navbar-menu">
        <div class="navbar-end">
          <RouterLink to="/" class="navbar-item" active-class="is-active"> Notes </RouterLink>
          <RouterLink to="/stats" class="navbar-item" active-class="is-active"> Stats </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
