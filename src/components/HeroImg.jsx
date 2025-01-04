import Logo from "../assets/3d-code.png";

export default function HeroImg() {
  return (
    <div className="sm:w-3/4 md:w-1/2">
      <div className="lg:float-right lg:w-[90%]">
        <img
          src={Logo}
          alt="hero-img"
          className="w-full rounded-[100%] object-cover shadow-[0_0px_10px_rgba(0,120,212,0.3)]"
        />
      </div>
    </div>
  );
}
