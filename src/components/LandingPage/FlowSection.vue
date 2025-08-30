<script setup>
import flows from "../../data/flows.json";
</script>
<template>
  <div class="container-fluid flowsection-container px-3 px-sm-5">
    <h2
      class="display-5 fw-bold text-center flowsection-header mb-4 text-black"
    >
      How it works
    </h2>

    <div class="row g-4 mt-2 sm:mt-4">
      <div v-for="s in flows" :key="s.id" class="col-12 col-md-4">
        <div
          class="card h-100 flowsection-card-container text-center shadow py-4"
        >
          <div class="card-body d-flex flex-column align-items-center">
            <div :class="['mb-3', 'fs-1']">
              <i :class="s.icon" class="card-custom-icon text-black"></i>
            </div>
            <h5 class="card-title fw-semibold card-title text-center">
              {{ s.title }}
            </h5>
            <p class="card-text text-dark-emphasis text-center card-info">
              {{ s.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.flowsection-container {
  background-color: #d1d8be;
  padding: 6rem 0rem;
}
.flowsection-header {
  font-family: "Rubik", sans-serif;
}
.flowsection-card-container {
  cursor: pointer;
  transition: transform 0.2s ease;
}
.flowsection-card-container:hover {
  transform: scale(0.95);
}
.card-title {
  font-family: "Poppins", sans-serif;
}
.card-info {
  font-family: "Manrope", sans-serif;
}
.card-custom-icon {
  font-size: 3.5rem;
}
</style>
