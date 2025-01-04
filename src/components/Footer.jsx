import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-gray-700 dark:bg-[#1c1c1c]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 text-gray-50 md:flex-row md:py-6">
        <p className="text-center font-medium">
          &copy; {new Date().getFullYear()} Tapan Sonak
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
