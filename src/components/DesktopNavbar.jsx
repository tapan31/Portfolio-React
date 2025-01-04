import ToggleButton from "./ToggleButton";

export default function DesktopNavbar() {
  return (
    <nav className={`dark:text-dark-text hidden text-text md:block`}>
      <ul className="flex items-center gap-4 text-lg lg:gap-6">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <li
            key={item}
            className="px-2 font-medium transition-colors duration-150 hover:text-primary"
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
        <ToggleButton />
      </ul>
    </nav>
  );
}
