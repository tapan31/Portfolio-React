import { useEffect, useState } from "react";
import Logo from "./Logo";
import DesktopNavbar from "./DesktopNavbar";
import MenuButton from "./MenuButton";
import MobileNavbar from "./MobileNavbar";
import ToggleButton from "./ToggleButton";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 100);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <header
      className={`dark:bg-dark-background sticky left-0 right-0 top-0 z-10 bg-background px-4 py-4 shadow transition-colors duration-200 ease-in-out md:py-5 dark:shadow-[0_0_4px_rgba(255,255,255,0.7)]`}
    >
      <div className="mx-auto flex items-center justify-between lg:max-w-6xl xl:max-w-7xl">
        <Logo />
        <DesktopNavbar />

        <div className="flex items-center gap-8 md:hidden">
          <ToggleButton />
          <MenuButton
            isOpen={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
      </div>

      <MobileNavbar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
