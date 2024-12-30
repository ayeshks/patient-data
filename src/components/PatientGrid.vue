<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router"; // Import useRoute for fetching URL params and useRouter for navigation
import developer from "../components/Developer.vue";

const showPopup = ref(false);
const showPopup2 = ref(false);
const showPopup3 = ref(false);
const showPopup4 = ref(false);
const showPopup5 = ref(false);
const patient = ref({
  registerNo: "",
  firstName: "",
  lastName: "",
  age: "",
  sex: "",
  guardianName: "",
  address: "",
  contactNo: "",
  chietComplaints: "",
  clinicalDiagnosis: "",
  dOB: "",
  bW: "",
  aPGAR: "",
  resucitation: "",
  pBu: "",
  special: "",
  pOA: "",
  parity: "",
  mOD: "",
  antenatal: "",
  perinatal: "",
  pertnatal: "",
  Pm: "",
  Ps: "",
  f: "",
  actually: "",
  chronic: "",
  social: "",
  financial: "",
  psychological: ""
});
const updatedPatient = ref({
  guardianName: "",
  address: "",
  contactNo: "",
  chietComplaints: "",
  clinicalDiagnosis: "",
  dOB: "",
  bW: "",
  aPGAR: "",
  resucitation: "",
  pBu: "",
  special: "",
  instrumental: "",
  pOA: "",
  parity: "",
  mOD: "",
  antenatal: "",
  perinatal: "",
  pertnatal: "",
  Pm: "",
  Ps: "",
  f: "",
  actually: "",
  chronic: "",
  social: "",
  financial: "",
  psychological: ""
});

// Get the registerNo from the URL using useRoute
const route = useRoute();
const router = useRouter();

// Retrieve `registerNo` from route params
const registerNo = route.params.registerNo;

// Function to navigate to the update page
const goToUpdatePage = () => {
  console.log("Register No:", registerNo);
  if (registerNo) {
    router.push({ name: "update", params: { registerNo } });
  } else {
    console.error("registerNo is undefined");
  }
};

// Function to fetch patient data based on registerNo
const loadPatientData = () => {
  const patients = JSON.parse(localStorage.getItem("patients")) || [];
  const foundPatient = patients.find(
    p => p.registerNo === route.params.registerNo
  );
  if (foundPatient) {
    patient.value = foundPatient;
    updatedPatient.value = {
      guardianName: foundPatient.guardianName,
      address: foundPatient.address,
      contactNo: foundPatient.contactNo,
      chietComplaints: foundPatient.chietComplaints,
      clinicalDiagnosis: foundPatient.clinicalDiagnosis,
      dOB: foundPatient.dOB,
      bW: foundPatient.bW,
      aPGAR: foundPatient.aPGAR,
      resucitation: foundPatient.resucitation,
      pBu: foundPatient.pBu,
      special: foundPatient.special,
      instrumental: foundPatient.instrumental,
      pOA: foundPatient.pOA,
      parity: foundPatient.parity,
      mOD: foundPatient.mOD,
      antenatal: foundPatient.antenatal,
      perinatal: foundPatient.perinatal,
      pertnatal: foundPatient.pertnatal,
      Pm: foundPatient.Pm,
      Ps: foundPatient.Ps,
      f: foundPatient.f,
      actually: foundPatient.actually,
      chronic: foundPatient.chronic,
      social: foundPatient.social,
      financial: foundPatient.financial,
      psychological: foundPatient.psychological
    };
  } else {
    console.error("Patient not found");
  }
};

// Save updated patient data to localStorage
const savePatientData = () => {
  const patients = JSON.parse(localStorage.getItem("patients")) || [];
  const index = patients.findIndex(
    p => p.registerNo === patient.value.registerNo
  );
  if (index !== -1) {
    patients[index] = { ...patient.value, ...updatedPatient.value };
    localStorage.setItem("patients", JSON.stringify(patients));
    showPopup.value = false;
    showPopup2.value = false;
    showPopup3.value = false;
    showPopup4.value = false;
    showPopup5.value = false;
    window.location.reload();
  }
};

// Call loadPatientData on component mount
onMounted(() => {
  loadPatientData();
});
</script>

<template>
  <div class="p-4 sm:ml-2 w-full h-screen overflow-hidden">
    <div class="p-4 rounded-lg">
      <div class="shadow-md h-[90vh] mb-4 rounded-xl bg-gray-50 p-4 overflow-scroll">
        <!-- Patient Details Header -->
        <div class="patient-details flex pb-2 space-x-4">
          <h1 class="text-black font-bold font-serif">Reg No: {{ patient.registerNo }}</h1>
          <h1
            class="text-black font-bold font-serif"
          >Patient Name: {{ patient.firstName }} {{ patient.lastName }}</h1>
        </div>

        <!-- Patient Info Display -->
        <div class="main-content grid sm:grid-cols-2 gap-4">
          <!-- Patient Info Grid -->
          <div
            class="patient-info rounded-lg h-40 bg-gray-300 p-4 flex justify-between overflow-scroll relative"
          >
            <div class="overflow-scroll flex-1">
              <h1 class="text-primary text-lg font-bold font-serif">Personal Information</h1>
              <div class="personal mt-4 space-y-2 overflow-scroll">
                <div class="text-black font-bold flex">
                  Guardian Name:
                  <p class="text-black ml-1 font-normal">{{ patient.guardianName }}</p>
                </div>
                <div class="text-black font-bold flex">
                  Address:
                  <p class="text-black ml-1 font-normal">{{ patient.address }}</p>
                </div>
                <div class="text-black font-bold flex">
                  Contact No:
                  <p class="text-black ml-1 font-normal">{{ patient.contactNo }}</p>
                </div>
              </div>
            </div>

            <!-- Fixed position Edit Button -->
            <button
              class="text-primary py-1 px-4 rounded-full border-2 border-primary absolute bottom-2 right-2"
              @click="showPopup = true"
            >Edit</button>
          </div>

          <!-- Chiet Complaint -->
          <div
            class="patient-info rounded-lg h-40 bg-gray-100 p-2 flex justify-between overflow-scroll relative"
          >
            <div class="overflow-scroll flex-1">
              <div class="personal mt-4 space-y-2 overflow-scroll">
                <div class="text-black font-bold flex">
                  Chiet Complaints:
                  <p class="text-black ml-1 font-normal">{{ patient.chietComplaints }}</p>
                </div>
                <div class="text-black font-bold flex">
                  Clinical Diagnosis:
                  <p class="text-black ml-1 font-normal">{{ patient.clinicalDiagnosis }}</p>
                </div>
              </div>
            </div>
            <button
              class="text-primary py-1 px-4 rounded-full border-2 border-primary absolute bottom-2 right-2"
              @click="showPopup2 = true"
            >Edit</button>
          </div>

          <!-- Birth Hx -->
          <!-- showPopup3 -->
          <div
            class="patient-info rounded-lg h-80 bg-yellow-50 p-2 flex justify-between overflow-hidden relative"
          >
            <div class="overflow-scroll flex-1">
              <h1 class="text-primary text-lg font-bold">Birth Hx</h1>
              <div class="personal mt-4 space-y-2 overflow-scroll">
                <div class="text-black font-bold flex">
                  DOB:
                  <p class="text-black ml-1 font-normal">{{ patient.dOB }}</p>
                </div>
                <div class="text-black font-bold flex">
                  BW:
                  <p class="text-black ml-1 font-normal">{{ patient.bW }}</p>
                </div>
                <div class="text-black font-bold flex">
                  APGAR:
                  <p class="text-black ml-1 font-normal">{{ patient.aPGAR }}</p>
                </div>
                <div class="text-black font-bold flex">
                  Resucitation:
                  <p class="text-black ml-1 font-normal">{{ patient.resucitation }}</p>
                </div>
                <div class="text-black font-bold flex">
                  PBU Admission/Intervention:
                  <p class="text-black ml-1 font-normal">{{ patient.pBu }}</p>
                </div>
                <div class="text-black font-bold flex">
                  Special Ix:
                  <p class="text-black ml-1 font-normal">{{ patient.special }}</p>
                </div>
                <div class="text-black font-bold flex">
                  Instrumental Ix:
                  <p class="text-black ml-1 font-normal">{{ patient.instrumental }}</p>
                </div>
              </div>
            </div>
            <button
              class="text-primary py-1 px-4 rounded-full border-2 border-primary absolute bottom-2 right-2"
              @click="showPopup3 = true"
            >Edit</button>
          </div>

          <!-- Obsteric Hx -->
          <!-- showPopup4 -->
          <div
            class="patient-info rounded-lg h-80 bg-green-100 p-2 flex justify-between overflow-scroll relative"
          >
            <div class="overflow-scroll flex-1">
              <h1 class="text-primary text-lg font-bold">Obsteric Hx</h1>
              <div class="personal mt-4 space-y-2 overflow-scroll">
                <div class="text-black font-bold flex">
                  POA:
                  <p class="text-black ml-1 font-normal">{{ patient.pOA }}</p>
                </div>
                <div class="text-black font-bold flex">
                  Parity:
                  <p class="text-black ml-1 font-normal">{{ patient.parity }}</p>
                </div>
                <div class="text-black font-bold flex">
                  MOD:
                  <p class="text-black ml-1 font-normal">{{ patient.mOD }}</p>
                </div>
                <div class="text-black font-bold flex">
                  Antenatal Hx (T1/T2/T3/T4):
                  <p class="text-black ml-1 font-normal">{{ patient.antenatal }}</p>
                </div>
                <div class="text-black font-bold flex">
                  Perinatal Hx:
                  <p class="text-black ml-1 font-normal">{{ patient.perinatal }}</p>
                </div>
                <div class="text-black font-bold flex">
                  Pertnatal Hx:
                  <p class="text-black ml-1 font-normal">{{ patient.pertnatal }}</p>
                </div>
                <div class="text-black font-bold flex">
                  Pm Hx:
                  <p class="text-black ml-1 font-normal">{{ patient.Pm }}</p>
                </div>
                <div class="text-black font-bold flex">
                  Ps Hx:
                  <p class="text-black ml-1 font-normal">{{ patient.Ps }}</p>
                </div>
                <div class="text-black font-bold flex">
                  F Hx:
                  <p class="text-black ml-1 font-normal">{{ patient.f }}</p>
                </div>
              </div>
            </div>
            <button
              class="text-primary py-1 px-4 rounded-full border-2 border-primary absolute bottom-2 right-2"
              @click="showPopup4 = true"
            >Edit</button>
          </div>

          <!-- Problem List -->
          <!-- showPopup5 -->
          <div
            class="patient-info rounded-lg h-40 bg-gray-100 p-2 flex justify-between overflow-scroll relative"
          >
            <div class="overflow-scroll flex-1">
              <h1 class="text-primary text-lg font-bold">Problem List</h1>
              <div class="personal mt-4 space-y-2 overflow-scroll">
                <div class="text-black font-bold flex">
                  Actually:
                  <p class="text-black ml-1 font-normal">{{ patient.actually }}</p>
                </div>
                <div class="text-black font-bold flex">
                  Chronic:
                  <p class="text-black ml-1 font-normal">{{ patient.chronic }}</p>
                </div>
                <div class="text-black font-bold flex">
                  Social:
                  <p class="text-black ml-1 font-normal">{{ patient.social }}</p>
                </div>
                <div class="text-black font-bold flex">
                  Financial:
                  <p class="text-black ml-1 font-normal">{{ patient.financial }}</p>
                </div>
                <div class="text-black font-bold flex">
                  Psychological:
                  <p class="text-black ml-1 font-normal">{{ patient.psychological }}</p>
                </div>
              </div>
            </div>
            <button
              class="text-primary py-1 px-4 rounded-full border-2 border-primary absolute bottom-2 right-2"
              @click="showPopup5 = true"
            >Edit</button>
          </div>

          <!-- update-button -->
          <div class="update-btn py-2 px-4 flex justify-center items-center h-40">
            <div
              @click="goToUpdatePage"
              class="bg-white rounded-lg py-4 px-4 cursor-pointer border-2 border-primary"
            >
              <h1 class="text-primary">Updating Patient Details</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Popup for editing personal information -->
    <div
      v-if="showPopup"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 class="text-lg font-bold mb-4">Edit Patient Details</h2>
        <form @submit.prevent="savePatientData">
          <div class="mb-4">
            <label class="block mb-2 font-bold">Guardian Name</label>
            <input
              type="text"
              v-model="updatedPatient.guardianName"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block mb-2 font-bold">Address</label>
            <input
              type="text"
              v-model="updatedPatient.address"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block mb-2 font-bold">Contact No</label>
            <input
              type="text"
              v-model="updatedPatient.contactNo"
              class="border p-2 rounded-md w-full"
              required
            />
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
    <!-- popup 2 -->
    <div
      v-if="showPopup2"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 class="text-lg font-bold mb-4">Edit Patient Details</h2>
        <form @submit.prevent="savePatientData">
          <div class="mb-4">
            <label class="block mb-2 font-bold">Chiet Complaints</label>
            <input
              type="text"
              v-model="updatedPatient.chietComplaints"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block mb-2 font-bold">Clinical Diagnosis</label>
            <input
              type="text"
              v-model="updatedPatient.clinicalDiagnosis"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div class="flex justify-end space-x-4">
            <button
              type="button"
              class="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
              @click="showPopup2 = false"
            >Cancel</button>
            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >Save</button>
          </div>
        </form>
      </div>
    </div>
    <!-- popup 3 -->
    <div
      v-if="showPopup3"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg sm:w-[60vw] w-96">
        <h2 class="text-lg font-bold mb-4">Edit Birth Hx</h2>
        <form @submit.prevent="savePatientData" class="grid grid-cols-2 gap-2">
          <div class="mb-4">
            <label class="block mb-2 font-bold">DOB</label>
            <input
              type="text"
              v-model="updatedPatient.dOB"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block mb-2 font-bold">BW</label>
            <input
              type="text"
              v-model="updatedPatient.bW"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block mb-2 font-bold">APGAR</label>
            <input
              type="text"
              v-model="updatedPatient.aPGAR"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block mb-2 font-bold">Resucitation</label>
            <input
              type="text"
              v-model="updatedPatient.resucitation"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block mb-2 font-bold">PBU Admission/Intervention</label>
            <input
              type="text"
              v-model="updatedPatient.pBu"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block mb-2 font-bold">Special Ix</label>
            <input
              type="text"
              v-model="updatedPatient.special"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block mb-2 font-bold">Instrumental Ix</label>
            <input
              type="text"
              v-model="updatedPatient.instrumental"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div class="flex justify-end space-x-4 h-10 mt-8">
            <button
              type="button"
              class="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
              @click="showPopup3 = false"
            >Cancel</button>
            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >Save</button>
          </div>
        </form>
      </div>
    </div>

    <!-- popup 4 -->
    <div
      v-if="showPopup4"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg sm:w-[60vw] w-96">
        <h2 class="text-lg font-bold mb-4">Edit Obsteric Hx</h2>
        <form @submit.prevent="savePatientData" class="grid grid-cols-2 gap-2">
          <div class="mb-4">
            <label class="block mb-2 font-bold">POA</label>
            <input
              type="text"
              v-model="updatedPatient.pOA"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block mb-2 font-bold">Parity</label>
            <input
              type="text"
              v-model="updatedPatient.parity"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block mb-2 font-bold">MOD</label>
            <input
              type="text"
              v-model="updatedPatient.mOD"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block mb-2 font-bold">Antenatal Hx (T1/T2/T3/T4)</label>
            <input
              type="text"
              v-model="updatedPatient.antenatal"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block mb-2 font-bold">Perinatal Hx</label>
            <input
              type="text"
              v-model="updatedPatient.perinatal"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block mb-2 font-bold">Pertnatal Hx</label>
            <input
              type="text"
              v-model="updatedPatient.pertnatal"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block mb-2 font-bold">Pm Hx</label>
            <input
              type="text"
              v-model="updatedPatient.Pm"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block mb-2 font-bold">Ps Hx</label>
            <input
              type="text"
              v-model="updatedPatient.Ps"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block mb-2 font-bold">F Hx</label>
            <input
              type="text"
              v-model="updatedPatient.f"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div class="flex justify-end space-x-4 h-10 mt-8">
            <button
              type="button"
              class="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
              @click="showPopup4 = false"
            >Cancel</button>
            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >Save</button>
          </div>
        </form>
      </div>
    </div>

    <!-- popup 5 -->

    <div
      v-if="showPopup5"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg sm:w-[60vw] w-96">
        <h2 class="text-lg font-bold mb-4">Edit Problem List</h2>
        <form @submit.prevent="savePatientData" class="grid grid-cols-2 gap-2">
          <div class="mb-4">
            <label class="block mb-2 font-bold">Actually</label>
            <input
              type="text"
              v-model="updatedPatient.actually"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block mb-2 font-bold">Chronic</label>
            <input
              type="text"
              v-model="updatedPatient.chronic"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block mb-2 font-bold">Social</label>
            <input
              type="text"
              v-model="updatedPatient.social"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block mb-2 font-bold">Financial</label>
            <input
              type="text"
              v-model="updatedPatient.financial"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block mb-2 font-bold">Psychological</label>
            <input
              type="text"
              v-model="updatedPatient.psychological"
              class="border p-2 rounded-md w-full"
              required
            />
          </div>

          <div class="flex justify-end space-x-4 h-10 mt-8">
            <button
              type="button"
              class="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
              @click="showPopup5 = false"
            >Cancel</button>
            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >Save</button>
          </div>
        </form>
      </div>
    </div>

    <developer />
  </div>
</template>

<style scoped>
/* You can add custom styles here if needed */
</style>
