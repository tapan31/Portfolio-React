import SocialLinks from "./SocialLinks";

export default function HeroText() {
  return (
    <div className="dark:text-dark-text space-y-3 text-center text-text md:w-1/2 md:space-y-5 md:text-start">
      <h1 className="leading[2.5] text-4xl font-medium md:text-5xl lg:text-7xl lg:leading-[1.1]">
        Hello I&apos;m <br />
        <span className="text-5xl text-primary lg:text-7xl">Tapan Sonak</span>
      </h1>

      <div>
        <p className="text-xl font-medium md:text-3xl">Full-Stack Developer</p>
        <p className="mt-2 text-text dark:text-gray-300">
          Building innovative software solutions with dedication and expertise.
        </p>
      </div>

      {/* Links */}
      <SocialLinks
        containerStyles="text-primary"
        linkStyles="hover:text-button-hover"
      />

      <a
        href="#contact"
        className="inline-block rounded-md bg-primary p-2 font-medium text-white hover:bg-button-hover"
      >
        Let&apos;s work together
      </a>
    </div>
  );
}
