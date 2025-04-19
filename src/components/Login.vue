<script setup>
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router";

  const username = ref("");
  const password = ref("");
  const errorMessage = ref("");
  const router = useRouter();

  const SESSION_EXPIRATION_TIME = 60 * 60 * 1000;

  // Function to save the login session in localStorage
  const saveSession = () => {
    const now = new Date().getTime();
    localStorage.setItem(
      "auth",
      JSON.stringify({ loggedIn: true, timestamp: now })
    );
  };

  // Function to check if the session is valid
  const isSessionValid = () => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (!auth || !auth.loggedIn) return false;

    const currentTime = new Date().getTime();
    const sessionAge = currentTime - auth.timestamp;

    // If session is older than 1 hour, it's expired
    return sessionAge < SESSION_EXPIRATION_TIME;
  };

  // Function to log the user out
  const logout = () => {
    localStorage.removeItem("auth");
    router.push("/login");
  };

  // Function to handle the login process
  const login = () => {
    // Hardcoded credentials
    const hardcodedUsername = "anuththara";
    const hardcodedPassword = "admin@123";

    // Validate credentials
    if (
      username.value === hardcodedUsername &&
      password.value === hardcodedPassword
    ) {
      // Save session to localStorage
      saveSession();

      // Redirect to /master
      router.push("/master");
    } else {
      // If credentials are incorrect, show error message
      errorMessage.value = "Invalid username or password";
    }
  };

  // Check if the session is valid on page load
  onMounted(() => {
    if (isSessionValid()) {
      router.push("/master");
    } else {
      logout();
    }
  });
</script>

<template>
  <main>
    <section class="bg-gray-50 dark:bg-gray-900 h-screen sm:pt-0 pt-10">
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <i
            class="pi pi-address-book"
            style="font-size: 1.5rem"
          ></i>
          <span class="ml-2">Patient Data</span>
        </a>
        <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"
            >
              Sign in to your account
            </h1>
            <form
              class="space-y-4 md:space-y-6"
              @submit.prevent="login"
            >
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >User Name</label
                >
                <input
                  type="text"
                  name="email"
                  id="email"
                  v-model="username"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="User Name"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Password</label
                >
                <input
                  type="password"
                  name="password"
                  id="password"
                  v-model="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="remember"
                      class="text-gray-500"
                      >Remember me</label
                    >
                  </div>
                </div>
                <a
                  href="#"
                  class="text-sm font-medium text-primary-600 hover:underline"
                  >Forgot password?</a
                >
              </div>
              <!-- Error message display -->
              <p
                v-if="errorMessage"
                class="text-red-500 text-sm mt-2"
              >
                {{ errorMessage }}
              </p>
              <button
                type="submit"
                class="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <p class="text-sm font-light text-gray-500">
                Don’t have an account yet?
                <a
                  href="#"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >Sign up</a
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
  /* Add custom styles here if needed */
</style>
