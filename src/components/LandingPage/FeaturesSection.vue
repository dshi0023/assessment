<script setup>
import features from "../../data/features.json";
</script>

<template>
  <div
    id="features"
    class="container-fluid px-3 px-sm-5 bg-light featuressection-container"
  >
    <h2 class="display-5 fw-bold text-center featuressection-header mb-4">
      Why NutriBridge
    </h2>

    <div class="row g-3 mt-2 sm:mt-4">
      <div v-for="f in features" :key="f.id" class="col-12 col-md-6 col-xxl-4">
        <div class="card h-100 card-container border rounded">
          <div class="card-body py-4 d-flex flex-column align-items-center">
            <div class="mb-3 card-custom-icon-box p-2 rounded shadow">
              <i :class="f.icon" class="text-white card-custom-icon"></i>
            </div>
            <h5 class="card-title fw-semibold card-title text-center">
              {{ f.title }}
            </h5>
            <p class="card-text text-dark-emphasis text-center card-info">
              {{ f.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.featuressection-container {
  padding: 6rem 0rem;
}
.featuressection-header {
  font-family: "Rubik", sans-serif;
}
.card-container {
  background-color: rgb(231, 231, 231);
  transition: background-color 0.5s ease;
}
.card-container:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}
.card-title {
  font-family: "Poppins", sans-serif;
}
.card-info {
  font-family: "Manrope", sans-serif;
}
.card-custom-icon-box {
  background-color: #819a91;
}
.card-custom-icon {
  font-size: 3.5rem;
}
</style>
