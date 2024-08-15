"use client";

// Import the useThemeStore hook from the zustand store to manage theme state
import { useThemeStore } from "@/store/ui/themeStore";

// Import icons for moon and sun from the lucide-react library
import { MoonIcon, SunIcon } from "lucide-react";

const ThemeToggle = () => {
  // Use the useThemeStore hook to get the darkMode state and toggleTheme function
  const { darkMode, toggleTheme } = useThemeStore((state) => ({
    darkMode: state.darkMode, // Get the current dark mode state
    toggleTheme: state.toggleTheme, // Get the function to toggle the theme
  }));

  return (
    // Label acts as a container for the switch and makes it clickable
    <label className="flex cursor-pointer items-center">
      {/* Hidden checkbox input that tracks the state of the theme */}
      <input
        type="checkbox"
        checked={darkMode} // Set checkbox state based on darkMode
        onChange={toggleTheme} // Call toggleTheme function when changed
        className="sr-only" // Visually hidden but accessible to screen readers
      />
      {/* Container for the switch with relative positioning */}
      <div className="relative w-14 h-8 bg-[#E5E7EB] rounded-full">
        {/* The 'dot' represents the slider that moves between positions */}
        <div
          className={`dot absolute top-1 transition-all duration-1500 ease-in-out ${
            darkMode ? "left-6 bg-gray-800" : "left-1 bg-white"
          } h-6 w-6 rounded-full flex items-center justify-center`}
        >
          {/* Conditionally render icons based on the darkMode state */}
          {darkMode ? (
            <MoonIcon className="w-4 h-4 text-white" /> // Show moon icon for dark mode
          ) : (
            <SunIcon className="w-4 h-4 text-yellow-500" /> // Show sun icon for light mode
          )}
        </div>
      </div>
    </label>
  );
};

export default ThemeToggle;
