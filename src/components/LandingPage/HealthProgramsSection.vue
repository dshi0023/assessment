<script setup>
import { ref, computed } from "vue";
import programs from "../../data/programs.json";

const activeId = ref(programs[0]?.id ?? null);
const active = computed(() => programs.find((p) => p.id === activeId.value));

const tipIndex = ref(0);
function nextTip() {
  if (!active.value?.tips?.length) return;
  tipIndex.value = (tipIndex.value + 1) % active.value.tips.length;
}
function selectProgram(id) {
  if (id === activeId.value) return;
  activeId.value = id;
  tipIndex.value = 0;
}
</script>

<template>
  <section id="programs" class="container-fluid hp-container px-3 px-sm-5">
    <div class="container">
      <h2 class="display-6 fw-bold text-white text-center mb-4 hp-heading">
        Health Program Highlights
      </h2>

      <div class="row g-3 mb-3 mt-4">
        <div v-for="p in programs" :key="p.id" class="col-12 col-md-6 col-lg-3">
          <button
            type="button"
            class="card h-100 shadow-sm hp-card w-100 text-start border rounded"
            :class="{ 'hp-active': activeId === p.id }"
            @click="selectProgram(p.id)"
            :aria-pressed="activeId === p.id"
            :aria-label="`Select ${p.title} program`"
          >
            <div class="card-body d-flex flex-column align-items-center py-4">
              <div class="mb-3 hp-icon-chip bg-white p-2 rounded shadow">
                <i :class="p.icon" class="hp-icon text-black"></i>
              </div>

              <h5 class="hp-card-title text-center mb-1">{{ p.title }}</h5>
              <p class="hp-card-desc text-center mb-0">{{ p.desc }}</p>
            </div>
          </button>
        </div>
      </div>

      <div class="card shadow hp-drawer mt-4">
        <div class="card-body hp-drawer-body">
          <div class="row g-3 align-items-center">
            <div class="col-12 col-lg-4">
              <div class="d-flex align-items-start gap-3">
                <div class="hp-icon-chip bg-white p-2 rounded shadow mt-1">
                  <i
                    :class="active?.icon || 'bi-box'"
                    class="hp-icon text-black"
                  ></i>
                </div>
                <div>
                  <h5 class="hp-card-title mb-1">
                    {{ active?.title || "Select a program" }}
                  </h5>
                  <p class="hp-card-desc mb-2">
                    {{
                      active?.desc || "Click a card above to view quick tips."
                    }}
                  </p>
                  <a v-if="active" href="/" class="btn btn-dark btn-sm hp-cta">
                    Join this program
                  </a>
                </div>
              </div>
            </div>

            <div class="col-12 col-lg-8">
              <div
                class="hp-tipbox d-flex align-items-center justify-content-between"
              >
                <div class="me-3">
                  <div class="hp-tiplabel mb-1">Quick Tip</div>
                  <p class="hp-tiptext mb-0">
                    {{
                      active?.tips?.[tipIndex] ||
                      "Tips will appear here when you select a program."
                    }}
                  </p>
                </div>
                <button
                  class="btn btn-outline-dark btn-sm hp-tipbtn"
                  type="button"
                  @click="nextTip"
                  :disabled="!active?.tips?.length"
                  title="Next tip"
                >
                  Next tip
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hp-container {
  background-color: #819a91;
  padding: 6rem 0;
}
.hp-heading {
  font-family: "Rubik", sans-serif;
}

.hp-card {
  background-color: rgb(231, 231, 231);
  border: 1px solid #e5e5e5;
  transition: transform 0.15s ease, box-shadow 0.15s ease,
    border-color 0.15s ease;
}
.hp-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  border-color: #cfcfcf;
}
.hp-active {
  outline: 2px solid #000;
}

.hp-drawer {
  background-color: rgb(231, 231, 231);
  border: 1px solid #e5e5e5;
}
.hp-drawer-body {
  min-height: 9rem;
}

.hp-icon {
  font-size: 3.5rem;
}

.hp-card-title {
  font-family: "Poppins", sans-serif;
}
.hp-card-desc {
  font-family: "Manrope", sans-serif;
  color: #555;
  font-size: 0.9rem;
}

.hp-tipbox {
  background: #f7f7f7;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  padding: 14px 16px;
  min-height: 60px;
}
.hp-tiplabel {
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #6c757d;
  font-family: "Manrope", sans-serif;
}
.hp-tiptext {
  font-family: "Manrope", sans-serif;
  font-size: 0.95rem;
  color: #444;
}
.hp-tipbtn {
  font-family: "Manrope", sans-serif;
}

.hp-cta {
  font-family: "Manrope", sans-serif;
}

button.hp-card {
  border-radius: 0.5rem;
}
button.hp-card:focus {
  outline: none;
  box-shadow: none;
}
</style>
