<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router"; // Import useRouter for navigation

const router = useRouter(); // Use router instance
const showPopup = ref(false);
const patients = ref([]);

const newPatient = ref({
  registerNo: "",
  firstName: "",
  lastName: "",
  age: "",
  sex: ""
});

const loadPatients = () => {
  const savedPatients = JSON.parse(localStorage.getItem("patients")) || [];
  patients.value = savedPatients;
};

const savePatients = () => {
  localStorage.setItem("patients", JSON.stringify(patients.value));
};

const addPatient = () => {
  patients.value.push({ ...newPatient.value });
  savePatients();
  newPatient.value = {
    registerNo: "",
    firstName: "",
    lastName: "",
    age: "",
    sex: ""
  };
  showPopup.value = false;
};

const goToPatientDetails = registerNo => {
  router.push({ name: "patient", params: { registerNo } }); // Navigate to patient details page
};

onMounted(() => {
  loadPatients();
});
</script>

<template>
  <div class="p-4 sm:ml-2 w-full h-screen overflow-hidden">
    <div class="p-4 rounded-lg">
      <div class="shadow-md h-[90vh] mb-4 rounded-xl bg-gray-50 p-4">
        <div class="user-title flex justify-between items-center">
          <h1 class="text-black font-semibold text-xl font-serif">Hi Dr. Anuththara</h1>
          <button
            class="bg-primary sm:text-lg text-sm text-white sm:px-4 px-2 py-2 rounded-full hover:bg-red-800 mt-10"
            @click="showPopup = true"
          >Add Patient</button>
        </div>

        <!-- Table to display patient details -->
        <div class="mt-6 h-[60vh] overflow-scroll">
          <table
            class="min-w-full border-collapse divide-y divide-gray-200 shadow-sm rounded-lg overflow-hidden"
          >
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >Register No</th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >First Name</th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >Last Name</th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >Age</th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >Sex</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr
                v-for="patient in patients"
                :key="patient.registerNo"
                class="hover:bg-gray-100"
                @click="goToPatientDetails(patient.registerNo)"
              >
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                >{{ patient.registerNo }}</td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                >{{ patient.firstName }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ patient.lastName }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ patient.age }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ patient.sex }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Popup for adding patient details -->
        <div
          v-if="showPopup"
          class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <div class="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 class="text-lg font-bold mb-4">Add Patient Details</h2>
            <form @submit.prevent="addPatient">
              <div class="mb-4">
                <label class="block mb-2 font-bold">Register No</label>
                <input
                  type="text"
                  v-model="newPatient.registerNo"
                  class="border p-2 rounded-md w-full"
                  required
                />
              </div>

              <div class="mb-4">
                <label class="block mb-2 font-bold">First Name</label>
                <input
                  type="text"
                  v-model="newPatient.firstName"
                  class="border p-2 rounded-md w-full"
                  required
                />
              </div>

              <div class="mb-4">
                <label class="block mb-2 font-bold">Last Name</label>
                <input
                  type="text"
                  v-model="newPatient.lastName"
                  class="border p-2 rounded-md w-full"
                  required
                />
              </div>

              <div class="mb-4">
                <label class="block mb-2 font-bold">Age</label>
                <input
                  type="number"
                  v-model="newPatient.age"
                  class="border p-2 rounded-md w-full"
                  required
                />
              </div>

              <div class="mb-4">
                <label class="block mb-2 font-bold">Sex</label>
                <select v-model="newPatient.sex" class="border p-2 rounded-md w-full" required>
                  <option value>Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div class="flex justify-end space-x-4">
                <button
                  type="button"
                  class="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                  @click="showPopup = false"
                >Cancel</button>
                <button
                  type="submit"
                  class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <developer />
  </div>
</template>

<style scoped>
.user-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
