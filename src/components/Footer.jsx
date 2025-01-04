import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="relative mt-6 h-24 bg-gray-700 md:h-20 dark:bg-[#1c1c1c]">
      <div className="absolute bottom-0 left-0 right-0 mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-4 py-4 text-gray-50 md:flex-row md:justify-between md:py-6">
        <p className="text-center font-medium">
          &copy; {new Date().getFullYear()} Tapan Sonak
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
