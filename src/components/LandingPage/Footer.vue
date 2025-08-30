<script setup>
const scrollInToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>

<template>
  <footer class="footer-custom text-light py-4">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-lg-4 text-center text-lg-start mb-3 mb-lg-0">
          <a
            href="/"
            class="d-inline-flex align-items-center text-decoration-none"
          >
            <img
              src="../../assets/nutribridge-logo.png"
              alt="NutriBridge Logo"
              height="33"
              class="me-2"
            />
          </a>
        </div>

        <div class="col-12 col-lg-4 text-center mb-3 mb-lg-0">
          <ul class="list-inline mb-0 footer-links">
            <li class="list-inline-item mx-2">
              <a
                href="#"
                class="text-light text-decoration-none"
                @click.prevent="scrollInToSection('features')"
                >Features</a
              >
            </li>
            <li class="list-inline-item mx-2">
              <a
                href="#"
                class="text-light text-decoration-none"
                @click.prevent="scrollInToSection('flow')"
                >Flow</a
              >
            </li>
            <li class="list-inline-item mx-2">
              <a
                href="#"
                class="text-light text-decoration-none"
                @click.prevent="scrollInToSection('programs')"
                >Programs</a
              >
            </li>
            <li class="list-inline-item mx-2">
              <a
                href="#"
                class="text-light text-decoration-none"
                @click.prevent="scrollInToSection('newsletter')"
                >Newsletter</a
              >
            </li>
          </ul>
        </div>

        <div class="col-12 col-lg-4 text-center text-lg-end">
          <small class="d-block"
            >&copy; 2025 NutriBridge. All rights reserved.</small
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-custom {
  background-color: #819a91;
  font-family: "Manrope", sans-serif;
}
.footer-links a {
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.footer-links a:hover {
  transform: scale(0.95);
  opacity: 0.85;
}
</style>
