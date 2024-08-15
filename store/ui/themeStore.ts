// ThemeStore.ts

// Import the create function from zustand to create a store
import { create } from "zustand";

// Define the shape of the theme state and actions
interface ThemeState {
  darkMode: boolean; // Boolean state indicating if dark mode is enabled
  setDarkMode: (darkMode: boolean) => void; // Function to set the dark mode state
  toggleTheme: () => void; // Function to toggle between dark and light modes
}

// Create the zustand store with the initial state and actions
export const useThemeStore = create<ThemeState>((set) => ({
  // Initialize darkMode state based on localStorage
  darkMode: localStorage.getItem("theme") === "dark",

  // Function to set the dark mode state
  setDarkMode: (darkMode: boolean) => {
    set({ darkMode }); // Update the darkMode state
    if (darkMode) {
      document.documentElement.classList.add("dark"); // Add dark class to the document
      localStorage.setItem("theme", "dark"); // Save theme to localStorage
    } else {
      document.documentElement.classList.remove("dark"); // Remove dark class from the document
      localStorage.setItem("theme", "light"); // Save theme to localStorage
    }
  },

  // Function to toggle the dark mode state
  toggleTheme: () =>
    set((state) => {
      const newDarkMode = !state.darkMode; // Toggle the current darkMode state
      if (newDarkMode) {
        document.documentElement.classList.add("dark"); // Add dark class to the document
        localStorage.setItem("theme", "dark"); // Save theme to localStorage
      } else {
        document.documentElement.classList.remove("dark"); // Remove dark class from the document
        localStorage.setItem("theme", "light"); // Save theme to localStorage
      }
      return { darkMode: newDarkMode }; // Return the new darkMode state
    }),
}));
