<script setup lang="ts"></script>

<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Write a note here" />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success">Add New Note</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut autem commodi
          consectetur dicta eligendi incidunt, ipsum natus non saepe! Ad autem delectus enim eveniet
          explicabo laboriosam quidem quis vel.
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
