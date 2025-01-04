/* eslint-disable react/prop-types */

export default function MobileNavbar({ isOpen, onClose }) {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
        isOpen ? "h-40 opacity-100" : "h-0 opacity-0"
      }`}
    >
      <ul className="dark:text-dark-text flex flex-col gap-1 py-2 text-center font-medium text-text">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <li
            key={item}
            className="rounded-lg p-1 hover:bg-slate-200 hover:text-primary"
          >
            <a
              className="inline-block w-full"
              href={`#${item.toLowerCase()}`}
              onClick={onClose}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
