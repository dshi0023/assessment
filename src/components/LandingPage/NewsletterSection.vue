<script setup>
import { ref } from "vue";
import { useLocalStorage } from "../../helpers/UseLocalStorage";

const { state: stored, save } = useLocalStorage("nb_newsletter", {
  name: "",
  email: "",
  weeklyBudget: null,
  focus: "",
  agree: false,
});

const form = ref({ ...stored.value });

const errors = ref({
  name: null,
  email: null,
  weeklyBudget: null,
  focus: null,
  agree: null,
});

const validateName = (blur) => {
  const v = (form.value.name || "").trim();
  errors.value.name =
    v.length < 2 ? (blur ? "Please enter at least 2 characters." : null) : null;
};

const validateEmail = (blur) => {
  const v = (form.value.email || "").trim();
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  errors.value.email = ok ? null : blur ? "Please enter a valid email." : null;
};

const validateBudget = (blur) => {
  const n = +form.value.weeklyBudget;
  const ok = Number.isFinite(n) && n >= 10 && n <= 500;
  errors.value.weeklyBudget = ok
    ? null
    : blur
    ? "Enter between $10 and $500."
    : null;
};

const validateFocus = (blur) => {
  const v = form.value.focus;
  errors.value.focus = v ? null : blur ? "Please select a health focus." : null;
};

const validateAgree = (blur) => {
  const ok = !!form.value.agree;
  errors.value.agree = ok ? null : blur ? "Please agree to subscribe." : null;
};

const submitForm = () => {
  validateName(true);
  validateEmail(true);
  validateBudget(true);
  validateFocus(true);
  validateAgree(true);

  if (
    !errors.value.name &&
    !errors.value.email &&
    !errors.value.weeklyBudget &&
    !errors.value.focus &&
    !errors.value.agree
  ) {
    save({ ...form.value });
    alert("Thanks for subscribing! We’ll tailor nutrition tips for you.");
  }
};

const clearForm = () => {
  form.value = {
    name: "",
    email: "",
    weeklyBudget: null,
    focus: "",
    agree: false,
  };
  errors.value = {
    name: null,
    email: null,
    weeklyBudget: null,
    focus: null,
    agree: null,
  };
  save({ ...form.value });
};
</script>

<template>
  <div
    id="newsletter"
    class="container-fluid p-3 p-sm-5 newslettersection-container"
  >
    <h2
      class="display-6 fw-bold text-center newslettersection-header mb-4 text-black"
    >
      Subscribe for Weekly Nutrition Tips
    </h2>

    <div class="row justify-content-center g-4">
      <div class="col-12 col-md-8 col-lg-7">
        <div class="card shadow newsletter-card py-3">
          <div class="card-body">
            <form novalidate @submit.prevent="submitForm" class="p-2">
              <div class="mb-3">
                <label class="form-label newsletter-label" for="name"
                  >Name *</label
                >
                <input
                  id="name"
                  v-model.trim="form.name"
                  class="form-control newsletter-input bg-transparent border border-black"
                  required
                  minlength="2"
                  @blur="() => validateName(true)"
                  @input="() => validateName(false)"
                  :class="{ 'is-invalid': !!errors.name }"
                  placeholder="e.g. Alex"
                />
                <small v-if="errors.name" class="text-danger">{{
                  errors.name
                }}</small>
              </div>

              <div class="mb-3">
                <label class="form-label newsletter-label" for="email"
                  >Email *</label
                >
                <input
                  id="email"
                  v-model.trim="form.email"
                  type="email"
                  class="form-control newsletter-input bg-transparent border border-black"
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
                <label class="form-label newsletter-label" for="budget"
                  >Weekly Budget (AUD) *</label
                >
                <input
                  id="budget"
                  v-model.number="form.weeklyBudget"
                  type="number"
                  class="form-control newsletter-input bg-transparent border border-black"
                  min="10"
                  max="500"
                  required
                  @blur="() => validateBudget(true)"
                  @input="() => validateBudget(false)"
                  :class="{ 'is-invalid': !!errors.weeklyBudget }"
                  placeholder="e.g. 120"
                />
                <div class="form-text">Allowed range: $10 – $500</div>
                <small v-if="errors.weeklyBudget" class="text-danger">{{
                  errors.weeklyBudget
                }}</small>
              </div>

              <div class="mb-3">
                <label class="form-label newsletter-label" for="focus"
                  >Health Focus *</label
                >
                <select
                  id="focus"
                  v-model="form.focus"
                  class="form-select bg-transparent border border-black newsletter-input"
                  required
                  @blur="() => validateFocus(true)"
                  @change="() => validateFocus(false)"
                  :class="{ 'is-invalid': !!errors.focus }"
                >
                  <option value="" disabled>Select…</option>
                  <option value="heart">Heart Health</option>
                  <option value="diabetes">Diabetes-Friendly</option>
                  <option value="weight">Weight Management</option>
                  <option value="wellbeing">General Wellbeing</option>
                </select>
                <small v-if="errors.focus" class="text-danger">{{
                  errors.focus
                }}</small>
              </div>

              <div class="mb-4 form-check">
                <input
                  id="agree"
                  class="form-check-input"
                  type="checkbox"
                  v-model="form.agree"
                  @blur="() => validateAgree(true)"
                  @change="() => validateAgree(false)"
                  :class="{ 'is-invalid': !!errors.agree }"
                  required
                />
                <label class="form-check-label newsletter-label" for="agree">
                  I agree to receive weekly nutrition emails *
                </label>
                <small v-if="errors.agree" class="text-danger d-block mt-1">{{
                  errors.agree
                }}</small>
              </div>

              <div class="d-flex gap-2">
                <button
                  class="btn btn-small bg-black text-white w-100 newsletter-submit-button"
                  type="button"
                  @click="clearForm"
                >
                  Clear
                </button>
                <button
                  class="btn bg-black text-white w-100 newsletter-submit-button"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>

            <p class="small text-muted mt-3 mb-0">
              Validations: required text length, email format, number range,
              required dropdown, required checkbox.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.newslettersection-container {
  background-color: #d1d8be;
}
.newslettersection-header {
  font-family: "Rubik", sans-serif;
}
.newsletter-card {
  background-color: rgb(231, 231, 231);
  transition: background-color 0.5s ease;
}
.newsletter-input {
  font-family: "Manrope", sans-serif;
}
.newsletter-label {
  font-family: "Poppins", sans-serif;
}
.newsletter-submit-button {
  font-family: "Manrope", sans-serif;
  transition: transform 0.2s ease;
}
.newsletter-submit-button:hover {
  transform: scale(0.95);
}
</style>
