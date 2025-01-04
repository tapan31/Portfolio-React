import about from "../assets/about-me.png";

/* 
I’m a Full-Stack Developer with expertise in the MERN stack
            (MongoDB, Express.js, React.js, Node.js). I specialize in building
            user-friendly interfaces and efficient backends that bring ideas to
            life. My goal is to develop innovative solutions that not only meet
            business needs but also enhance user satisfaction.
            <br />
            <span className="text-text text-lg">
              Apart from coding, I enjoy solving puzzles and exploring the
              latest tech trends.
            </span>
*/

export default function AboutMe() {
  return (
    <section id="about" data-aos="fade">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-4 py-8 md:flex-row">
        {/* About me Image */}
        <div className="hidden md:block md:w-1/2">
          <img src={about} className="w-full md:p-14" alt="About Me" />
        </div>

        {/* About me Text */}
        <div className="space-y-4 py-4 md:w-1/2">
          <h2 className="dark:text-dark-text text-4xl font-medium text-text md:text-5xl">
            About Me
          </h2>
          <p className="text-text md:text-lg dark:text-[#b0b0b0]">
            I’m a Full-Stack Developer with expertise in the MERN stack
            (MongoDB, Express.js, React.js, Node.js). I specialize in building
            user-friendly interfaces and efficient backends that bring ideas to
            life. I hold a B.Tech in Computer Science, equipping me with a
            strong foundation in software development. My goal is to develop
            innovative solutions that not only meet business needs but also
            enhance user satisfaction. Apart from coding, I enjoy solving
            puzzles and exploring the latest tech trends.
          </p>

          <p className="text-md italic text-text dark:text-[#b0b0b0]">
            &ldquo;Strive not to be a success, but rather to be of value.&ldquo;
            – Albert Einstein
          </p>
          {/* <div className="w-1/2 md:w-[35%]">
            <img src={mernImg} className="w-full object-cover" alt="" />
          </div> */}
        </div>
      </div>
    </section>
  );
}
