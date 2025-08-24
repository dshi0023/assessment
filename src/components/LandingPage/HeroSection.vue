<script setup></script>

<template>
  <div
    class="container-fluid herosection-container p-3 p-sm-5 min-vh-100 d-flex align-items-center"
  >
    <div class="row w-100">
      <div class="col-12 col-md-6 col-lg-6 col-xl-7">
        <h1 class="display-5 fw-bold herosection-header">
          Nutrition Made Simple, For Everyone
        </h1>
        <p class="text-muted lead herosection-info mt-4">
          Our not-for-profit platform helps you take control of your diet with
          clear nutrition breakdowns, budget-friendly meal plans, and smart
          ingredient swaps. Join a supportive community and build healthier
          habits without barriers.
        </p>
        <a href="/" class="btn herosection-button text-white mt-4"
          >Get Started Today</a
        >
      </div>
      <div class="col-12 col-md-6 col-lg-6 col-xl-5 mt-4 mt-lg-0">
        <div class="ratio ratio-4x3 bg-white rounded-3">
          <img
            src="../../assets/herosection-img.png"
            alt="NutriBridge visual"
            class="img-fluid rounded-3 shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
header .display-5 {
  line-height: 1.15;
}
.herosection-container {
  background-color: #d1d8be;
}
.herosection-header {
  font-family: "Rubik", sans-serif;
}
.herosection-button {
  background-color: #819a91 !important;
  transition: transform 0.2s ease;
  font-family: "Manrope", sans-serif;
  font-weight: 600;
}
.herosection-button:hover {
  transform: scale(0.95);
}
.herosection-info {
  font-family: "Poppins", sans-serif;
}
</style>
