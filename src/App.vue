<script setup>
import Navbar from "./components/LandingPage/Navbar.vue";
import HeroSection from "./components/LandingPage/HeroSection.vue";
import FeaturesSection from "./components/LandingPage/FeaturesSection.vue";
import PersonalisedSection from "./components/LandingPage/PersonalisedSection.vue";
import FlowSection from "./components/LandingPage/FlowSection.vue";
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
    <PersonalisedSection />
  </div>
</template>
