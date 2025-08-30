<script setup>
const scrollInToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const nav = document.getElementById("nav");
  if (nav && nav.classList.contains("show")) {
    nav.classList.remove("show");
  }
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light navbar-custom">
    <div class="container-fluid px-3 px-sm-5">
      <a class="navbar-brand fw-bold text-light" href="/">
        <img
          src="../../assets/nutribridge-logo.png"
          alt="NutriBridge Logo"
          height="33"
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
            <a
              href="#"
              class="nav-link text-light"
              @click.prevent="scrollInToSection('features')"
            >
              Features
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link text-light"
              @click.prevent="scrollInToSection('flow')"
            >
              Flow
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link text-light"
              @click.prevent="scrollInToSection('programs')"
            >
              Health-Program
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link text-light"
              @click.prevent="scrollInToSection('newsletter')"
            >
              Newsletter
            </a>
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
.nav-link {
  transition: transform 0.2s ease;
}
.nav-link:hover {
  transform: scale(0.95);
}
</style>
