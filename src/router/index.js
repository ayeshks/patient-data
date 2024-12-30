import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MasterView from '@/views/MasterView.vue';
import PatienView from '../views/PatientView.vue';
import UpdateView from '../views/UpdateView.vue';

// Function to check if the session is valid (if user is logged in and session has not expired)
const isSessionValid = () => {
  const auth = JSON.parse(localStorage.getItem('auth'));
  if (!auth || !auth.loggedIn) return false;
  
  const currentTime = new Date().getTime();
  const sessionAge = currentTime - auth.timestamp;
  
  // Return true if the session is valid (within the 1-hour window), false otherwise
  return sessionAge < (60 * 60 * 1000);  // 1 hour
};

// Create router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/master',
      name: 'master',
      component: MasterView,
      beforeEnter: (to, from, next) => {
        if (isSessionValid()) {
          next(); // Allow access if session is valid
        } else {
          next('/'); // Redirect to home (login) page if session is invalid
        }
      },
    },
    {
      path: '/patient/:registerNo',
      name: 'patient',
      component: PatienView,
      props: true,
      beforeEnter: (to, from, next) => {
        if (isSessionValid()) {
          next(); // Allow access if session is valid
        } else {
          next('/'); // Redirect to home (login) page if session is invalid
        }
      },
    },
    {
      path: '/update/:registerNo',
      name: 'update',
      component: UpdateView,
      props: true,
      beforeEnter: (to, from, next) => {
        if (isSessionValid()) {
          next(); // Allow access if session is valid
        } else {
          next('/'); // Redirect to home (login) page if session is invalid
        }
      },
    }
  ],
});

// Global navigation guard for other routes
router.beforeEach((to, from, next) => {
  // If the user is not logged in and tries to access protected routes, redirect them to login
  if (!isSessionValid() && (to.name === 'master' || to.name === 'patient' || to.name === 'update')) {
    next('/');  // Redirect to login page
  } else {
    next();  // Allow navigation if session is valid
  }
});

export default router;
