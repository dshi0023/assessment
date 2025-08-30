<script setup>
import Navbar from "./components/LandingPage/Navbar.vue";
import HeroSection from "./components/LandingPage/HeroSection.vue";
import FeaturesSection from "./components/LandingPage/FeaturesSection.vue";
import NewsletterSection from "./components/LandingPage/NewsletterSection.vue";
import FlowSection from "./components/LandingPage/FlowSection.vue";
import HealthProgramsSection from "./components/LandingPage/HealthProgramsSection.vue";
import Footer from "./components/LandingPage/Footer.vue";
</script>

<template>
  <div>
    <Navbar />
  </div>
  <div>
    <HeroSection />
  </div>
  <div>
    <FeaturesSection />
  </div>
  <div><FlowSection /></div>
  <div>
    <HealthProgramsSection />
  </div>
  <div>
    <NewsletterSection />
  </div>
  <div>
    <Footer />
  </div>
</template>
