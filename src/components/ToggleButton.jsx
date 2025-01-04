import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../contexts/ThemeContext";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function ToggleButton() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button onClick={toggleTheme} className="dark:text-white">
      {isDark ? (
        <FontAwesomeIcon icon={faSun} size="xl" />
      ) : (
        <FontAwesomeIcon icon={faMoon} size="xl" />
      )}
    </button>
  );
}
