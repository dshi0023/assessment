<script setup>
import { ref } from "vue";
import { useLocalStorage } from "../../helpers/UseLocalStorage";

const { state: prefs, save } = useLocalStorage("nb_prefs", {
  name: "",
  email: "",
  weeklyBudget: "",
  budgetTier: "",
});

const form = ref({ ...prefs.value });

const errors = ref({
  name: null,
  email: null,
  weeklyBudget: null,
  budgetTier: null,
});

const validateName = (blur) => {
  const v = form.value.name.trim();
  errors.value.name =
    v.length < 3 ? (blur ? "Please enter at least 3 characters." : null) : null;
};

const validateEmail = (blur) => {
  const v = form.value.email.trim();
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  errors.value.email = ok
    ? null
    : blur
    ? "Please enter a valid email address."
    : null;
};

const validateBudget = (blur) => {
  const n = +form.value.weeklyBudget;
  const ok = Number.isFinite(n) && n >= 10 && n <= 500;
  errors.value.weeklyBudget = ok
    ? null
    : blur
    ? "Enter a value between $10 and $500."
    : null;
};

const validateTier = (blur) => {
  const v = form.value.budgetTier;
  errors.value.budgetTier = v
    ? null
    : blur
    ? "Please select a budget tier."
    : null;
};

const submitForm = () => {
  validateName(true);
  validateEmail(true);
  validateBudget(true);
  validateTier(true);

  if (
    !errors.value.name &&
    !errors.value.email &&
    !errors.value.weeklyBudget &&
    !errors.value.budgetTier
  ) {
    save({ ...form.value });
    alert("Saved! Your preferences will be used to tailor meals.");
  }
};

const clearForm = () => {
  form.value = { name: "", email: "", weeklyBudget: 50, budgetTier: "low" };
  errors.value = {
    name: null,
    email: null,
    weeklyBudget: null,
    budgetTier: null,
  };
  save({});
};
</script>

<template>
  <div class="container-fluid p-3 p-sm-5 personalisedsection-container">
    <h2
      class="display-5 fw-bold text-center personalisedsection-header mb-4 text-white"
    >
      Personalize Your Plan Today
    </h2>

    <div class="row justify-content-center g-4">
      <div class="col-12 col-md-8 col-lg-8">
        <div class="card shadow card-container py-3">
          <div class="card-body">
            <form novalidate @submit.prevent="submitForm" class="p-2">
              <div class="mb-3">
                <label class="form-label personalisedsection-label" for="name"
                  >Name *</label
                >
                <input
                  id="name"
                  v-model.trim="form.name"
                  class="form-control personalisedsection-input bg-transparent border border-black"
                  minlength="2"
                  required
                  @blur="() => validateName(true)"
                  @input="() => validateName(false)"
                  :class="{ 'is-invalid': !!errors.name }"
                  placeholder="e.g. Portia"
                />
                <small v-if="errors.name" class="text-danger">{{
                  errors.name
                }}</small>
              </div>

              <div class="mb-3">
                <label class="form-label personalisedsection-label" for="email"
                  >Email *</label
                >
                <input
                  id="email"
                  v-model.trim="form.email"
                  type="email"
                  class="form-control personalisedsection-input bg-transparent border border-black"
                  required
                  @blur="() => validateEmail(true)"
                  @input="() => validateEmail(false)"
                  :class="{ 'is-invalid': !!errors.email }"
                  placeholder="name@example.com"
                />
                <small v-if="errors.email" class="text-danger">{{
                  errors.email
                }}</small>
              </div>

              <div class="mb-3">
                <label class="form-label personalisedsection-label" for="budget"
                  >Weekly Budget (AUD) *</label
                >
                <input
                  id="budget"
                  v-model.number="form.weeklyBudget"
                  type="number"
                  class="form-control personalisedsection-input bg-transparent border border-black"
                  min="10"
                  max="500"
                  step="5"
                  required
                  @blur="() => validateBudget(true)"
                  @input="() => validateBudget(false)"
                  :class="{ 'is-invalid': !!errors.weeklyBudget }"
                />
                <div class="form-text">Allowed range: $10 – $500</div>
                <small v-if="errors.weeklyBudget" class="text-danger">{{
                  errors.weeklyBudget
                }}</small>
              </div>

              <div class="mb-4">
                <label class="form-label personalisedsection-label" for="tier"
                  >Budget Tier *</label
                >
                <select
                  id="tier"
                  v-model="form.budgetTier"
                  class="form-select bg-transparent border border-black personalisedsection-input"
                  required
                  @blur="() => validateTier(true)"
                  @change="() => validateTier(false)"
                  :class="{ 'is-invalid': !!errors.budgetTier }"
                >
                  <option value="" disabled>Select…</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                <small v-if="errors.budgetTier" class="text-danger">{{
                  errors.budgetTier
                }}</small>
              </div>

              <div class="d-flex gap-2">
                <button
                  class="btn bg-black text-white w-100 personalisedsection-submit-button"
                  type="button"
                  @click="clearForm"
                >
                  Clear
                </button>
                <button
                  class="btn bg-black text-white w-100 personalisedsection-submit-button"
                  type="submit"
                >
                  Save Preferences
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.personalisedsection-container {
  background-color: #819a91;
}
.personalisedsection-header {
  font-family: "Rubik", sans-serif;
}
.card-container {
  background-color: rgb(231, 231, 231);
  transition: background-color 0.5s ease;
}
.personalisedsection-input {
  font-family: "Manrope", sans-serif;
}
.personalisedsection-label {
  font-family: "Poppins", sans-serif;
}
.personalisedsection-submit-button {
  font-family: "Manrope", sans-serif;
  transition: transform 0.2s ease;
}
.personalisedsection-submit-button:hover {
  transform: scale(0.95);
}
</style>
