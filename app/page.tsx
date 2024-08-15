"use client"; // This directive is specific to Next.js; it indicates that this component is meant to be rendered on the client side, not on the server side.

// Home.tsx
import ThemeToggle from "@/components/ThemeToggle"; // Importing the ThemeToggle component, which will be used to switch between light and dark modes.
import { useThemeStore } from "@/store/ui/themeStore"; // Importing the custom Zustand store for managing theme state.
import { useEffect } from "react"; // Importing the useEffect hook from React for handling side effects.

export default function Home() {
  // Default export of the Home component function.
  const { darkMode } = useThemeStore((state) => ({
    // Accessing the darkMode state from the Zustand store.
    darkMode: state.darkMode, // Destructuring darkMode from the store's state.
  }));

  useEffect(() => {
    // useEffect hook to run side effects in the component.
    console.log("Theme State: " + (darkMode ? "dark" : "light")); // Logging the current theme state to the console. Corrected to use parentheses for proper evaluation of the ternary operator.
  }, [darkMode]); // Dependency array includes darkMode so that the effect runs when darkMode changes.

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      {" "}
      {/* Main wrapper for the content of the page, with flexbox layout and padding. */}
      <div className="fixed top-0 w-full flex items-center justify-between p-2 border-b">
        {" "}
        {/* Fixed header with full width, flex layout, padding, and a bottom border. */}
        <span>Navbar example</span>{" "}
        {/* Placeholder text for the navigation bar. */}
        <ThemeToggle />{" "}
        {/* Rendering the ThemeToggle component for theme switching functionality. */}
      </div>
      <span className="mt-10">
        {" "}
        {/* Spacing from the top of the previous section. */}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad aperiam
        odio debitis. Exercitationem ducimus consequatur qui, accusamus
        consequuntur voluptatibus ad ipsum blanditiis laborum. Qui aut, fugiat
        minus dolor totam ad.
      </span>{" "}
      {/* Placeholder text for the page content. */}
    </main>
  );
}
