import SkillsContainer from "./SkillsContainer";

const frontendSkills = [
  // Frontend Skills
  { name: "HTML5", img: "/src/assets/skills/html5.svg" },
  { name: "CSS", img: "/src/assets/skills/css3.svg" },
  { name: "JavaScript", img: "/src/assets/skills/javascript.svg" },
  { name: "React.js", img: "/src/assets/skills/react.svg" },
  { name: "Redux", img: "/src/assets/skills/redux.svg" },
  { name: "Next.js", img: "/src/assets/skills/nextjs.svg" },
  { name: "Tailwind CSS", img: "/src/assets/skills/tailwindcss.svg" },
];

// Backend Skills
const backendSkills = [
  { name: "Node.js", img: "/src/assets/skills/nodejs.svg" },
  { name: "Express.js", img: "/src/assets/skills/express-js.svg" },
  { name: "MongoDB", img: "/src/assets/skills/mongodb.svg" },
  { name: "MySQL", img: "/src/assets/skills/mysql.svg" },
  { name: "Firebase", img: "/src/assets/skills/firebase.svg" },
];

// Other Skills
const otherSkills = [
  { name: "C++", img: "/src/assets/skills/cpp.svg" },
  { name: "Java", img: "/src/assets/skills/java.svg" },
  { name: "Git", img: "/src/assets/skills/git.svg" },
  { name: "GitHub", img: "/src/assets/skills/github.svg" },
  { name: "VS Code", img: "/src/assets/skills/vscode.svg" },
  { name: "Postman", img: "/src/assets/skills/postman.svg" },
  { name: "Linux", img: "/src/assets/skills/linux.svg" },
];

{
  /* <section id="skills" className="my-8 py-6">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-4xl font-medium text-text">Skills</h2>
        <p className="text-text-secondary mt-2 text-lg">
          A blend of tools and technologies I use to create amazing
          applications.
        </p>
      </div>

      <div className="mx-auto mt-6 grid max-w-5xl grid-cols-2 gap-6 px-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-4 shadow transition-transform hover:scale-105"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="mb-3 h-16 w-16 object-contain"
            />
            <p className="font-semibold text-text">{skill.name}</p>
          </div>
        ))}
      </div>
    </section> */
}

export default function Skills() {
  return (
    <section data-aos="fade">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-8 px-4 pb-8 pt-4 md:flex-row md:gap-20">
        {/* Skills */}
        <div className="space-y-6 rounded-lg p-2 py-4 shadow-sm shadow-primary/60 md:w-1/2 md:p-6">
          <SkillsContainer name="Frontend" skills={frontendSkills} />
          <SkillsContainer name="Backend" skills={backendSkills} />
          <SkillsContainer name="Others" skills={otherSkills} />
        </div>

        {/* Text Content */}
        <div className="self-start md:w-1/2">
          <h2 className="dark:text-dark-text mb-4 text-4xl font-medium text-text md:text-5xl">
            Skills & Tools
          </h2>

          <div className="space-y-2 text-text dark:text-[#b0b0b0]">
            <p className="leading-relaxed md:text-lg">
              My expertise lies in a diverse set of tools and technologies that
              accelerate development and ensure project efficiency. From
              frontend frameworks and backend technologies to databases and
              version control systems, I excel in delivering comprehensive
              full-stack solutions tailored to unique requirements.
            </p>

            <p className="hidden leading-relaxed md:block md:text-lg">
              With a strong emphasis on modern development practices, I
              continuously adapt to emerging technologies to stay at the
              forefront of the industry. My goal is to create high-quality,
              maintainable solutions that enhance functionality and provide
              exceptional user experiences.
            </p>

            <p className="hidden leading-relaxed md:block md:text-lg">
              Passionate about learning, I embrace challenges as opportunities
              to grow and consistently strive to build impactful, user-focused
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
