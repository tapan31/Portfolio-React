import Particle from "./Particle";
import HeroText from "./HeroText";
import HeroImg from "./HeroImg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-8"
      data-aos="fade-down"
    >
      <div className="absolute inset-0 -z-20 h-full w-full">
        <Particle />
      </div>
      <div className="mx-auto flex flex-col items-center justify-between gap-7 px-4 py-8 md:mt-4 md:flex-row md:py-2 lg:max-w-6xl lg:gap-12 lg:px-2 xl:max-w-7xl">
        <HeroText />
        <HeroImg />
      </div>
    </section>
  );
}
