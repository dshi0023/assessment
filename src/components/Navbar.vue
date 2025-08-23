<template>
  <nav class="navbar navbar-expand-lg navbar-light navbar-custom">
    <div class="container">
      <a class="navbar-brand fw-bold text-light" href="/">
        <img
          src="../assets/nutribridge-logo.png"
          alt="NutriBridge Logo"
          height="35"
        />
      </a>
      <button
        class="navbar-toggler text-light border"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#nav"
        aria-controls="nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="bi bi-list"></i>
      </button>

      <div id="nav" class="collapse navbar-collapse">
        <ul
          class="navbar-nav ms-auto nav-links fw-medium text-center text-lg-end"
        >
          <li class="nav-item">
            <a class="nav-link text-light" href="/">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/">Personalize</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/">Recipes</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar-custom {
  background-color: #819a91 !important;
}
.nav-links {
  font-family: "Manrope", sans-serif;
}
.navbar-toggler:focus,
.navbar-toggler:active {
  outline: none !important;
  box-shadow: none !important;
}
</style>
