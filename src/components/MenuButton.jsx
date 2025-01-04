/* eslint-disable react/prop-types */
import { X, Menu } from "lucide-react";

export default function MenuButton({ isOpen, onClick }) {
  return (
    <button
      className={`dark:text-dark-text text-text md:hidden`}
      onClick={onClick}
    >
      <span className="sr-only">Toggle Menu</span>
      {isOpen ? <X /> : <Menu />}
    </button>
  );
}
