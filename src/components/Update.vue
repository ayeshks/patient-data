<template>
  <div class="p-4 sm:ml-2 w-full h-screen overflow-hidden">
    <div class="p-4 rounded-lg">
      <div class="shadow-md h-[90vh] mb-4 rounded-xl bg-gray-50 p-4 overflow-scroll">
        <!-- Patient Details Header -->
        <div class="patient-details flex pb-2 space-x-4">
          <h1 class="text-black font-bold font-serif">Reg No: {{ registerNo }}</h1>
          <!-- <h1 class="text-black font-bold font-serif">Patient Name:</h1> -->
        </div>
        <button
          class="bg-primary text-white px-4 py-2 rounded-full"
          @click="openPopup"
        >Add to Details</button>

        <!-- Display Data Grid -->
        <div class="mt-4">
          <h2 class="text-lg font-bold mb-2">Patient Data</h2>
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="(data, index) in patientData"
              :key="index"
              class="border rounded p-4 bg-white shadow"
            >
              <p>
                <strong>Date:</strong>
                {{ data.date }}
              </p>
              <p>
                <strong>Instigation:</strong>
                {{ data.instigation }}
              </p>
              <p>
                <strong>Treatment Plan:</strong>
                {{ data.treatmentPlan }}
              </p>
              <p>
                <strong>Current Assessment:</strong>
                {{ data.currentAssessment }}
              </p>
              <p>
                <strong>Short-term Goals:</strong>
                {{ data.shortTermGoals }}
              </p>
              <p>
                <strong>Long-term Goals:</strong>
                {{ data.longTermGoals }}
              </p>
              <p>
                <strong>Update Treatment Plan:</strong>
                {{ data.updateTreatmentPlan }}
              </p>
              <p>
                <strong>Consultation:</strong>
                {{ data.consultation }}
              </p>
              <button
                class="border-2 border-primary text-primary px-4 py-1 rounded-full mt-2"
                @click="editDetails(index)"
              >Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <developer />

    <!-- Popup Modal -->
    <div
      v-if="showPopup"
      class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
    >
      <div class="bg-white p-6 rounded-lg w-1/2">
        <h2 class="text-lg font-bold mb-4">Patient Details</h2>
        <form @submit.prevent="saveDetails">
          <div class="grid grid-cols-2 gap-4">
            <label>
              Date:
              <input type="date" v-model="form.date" class="w-full border rounded p-2" />
            </label>
            <label>
              Instigation up to now:
              <textarea
                v-model="form.instigation"
                class="w-full border rounded p-2"
              ></textarea>
            </label>
            <label>
              Treatment plan up to now:
              <textarea
                v-model="form.treatmentPlan"
                class="w-full border rounded p-2"
              ></textarea>
            </label>
            <label>
              Current assessment:
              <textarea
                v-model="form.currentAssessment"
                class="w-full border rounded p-2"
              ></textarea>
            </label>
            <label>
              Short-term goals:
              <textarea
                v-model="form.shortTermGoals"
                class="w-full border rounded p-2"
              ></textarea>
            </label>
            <label>
              Long-term goals:
              <textarea
                v-model="form.longTermGoals"
                class="w-full border rounded p-2"
              ></textarea>
            </label>
            <label>
              Update treatment plan:
              <textarea
                v-model="form.updateTreatmentPlan"
                class="w-full border rounded p-2"
              ></textarea>
            </label>
            <label>
              Consultation:
              <textarea v-model="form.consultation" class="w-full border rounded p-2"></textarea>
            </label>
          </div>
          <div class="flex justify-end mt-4">
            <button
              type="button"
              class="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              @click="closePopup"
            >Cancel</button>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import developer from "../components/Developer.vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const showPopup = ref(false);
const patientData = ref([]);
const currentIndex = ref(null);
const registerNo = ref(route.params.registerNo || "");
const form = ref({
  date: "",
  instigation: "",
  treatmentPlan: "",
  currentAssessment: "",
  shortTermGoals: "",
  longTermGoals: "",
  updateTreatmentPlan: "",
  consultation: ""
});

const openPopup = () => {
  currentIndex.value = null;
  form.value = {
    date: "",
    instigation: "",
    treatmentPlan: "",
    currentAssessment: "",
    shortTermGoals: "",
    longTermGoals: "",
    updateTreatmentPlan: "",
    consultation: ""
  };
  showPopup.value = true;
};

const closePopup = () => {
  showPopup.value = false;
};

const saveDetails = () => {
  const existingData = JSON.parse(localStorage.getItem(registerNo.value)) || [];

  if (currentIndex.value !== null) {
    existingData[currentIndex.value] = { ...form.value };
  } else {
    existingData.push({ ...form.value });
  }

  localStorage.setItem(registerNo.value, JSON.stringify(existingData));
  patientData.value = existingData;
  closePopup();
};

const editDetails = index => {
  const existingData = JSON.parse(localStorage.getItem(registerNo.value)) || [];
  form.value = { ...existingData[index] };
  currentIndex.value = index;
  showPopup.value = true;
};

onMounted(() => {
  if (registerNo.value) {
    patientData.value =
      JSON.parse(localStorage.getItem(registerNo.value)) || [];
  }
});
</script>

<style scoped>
.fixed {
  position: fixed;
}
.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
