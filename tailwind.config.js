/** @type {import('tailwindcss').Config} */

/* 
colors: {
        background: {
          DEFAULT: "#131424", // Main background color
          secondary: "#1e293b", // Secondary container background
          // card: "#334155", // Card or section backgrounds
          card: "#64748b", // Card or section backgrounds
        },
        text: {
          primary: "#e5e7eb", // Light text for headers and primary content
          muted: "#9ca3af", // Muted gray for secondary text
        },
        accent: {
          primary: "#0ea5e9", // Buttons, links, hover effects
          secondary: "#22d3ee", // Sparingly used pop colors
        },
        cta: {
          success: "#22c55e", // Positive actions (e.g., form submission success)
          warning: "#fbbf24", // Warnings or important alerts
          error: "#ef4444", // Error messages or destructive actions
        },
      },
    }, 
*/

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        background: "#F9F9F9", // light gray
        card: "#FFFFFF", // white
        text: "#333333", // dark gray
        primary: "#0078D4", // blue
        // button: "#005A9E", // orange
        "button-hover": "#0064b1", // darker blue
        // "button-hover": "#004880", // darker blue
        link: "#0056A4", // darker blue
        divider: "#E0E0E0",
        dark: {
          background: "#121212",
          card: "#1E1E1E",
          text: "#EAEAEA",
          button: "#FF5722",
          "button-hover": "#E64A19",
        },
      },
    },
  },
  plugins: [],
};
