import SkillsContainer from "./SkillsContainer";

// Import Frontend Skills Images
import html5Img from "../assets/skills/html5.svg";
import css3Img from "../assets/skills/css3.svg";
import javascriptImg from "../assets/skills/javascript.svg";
import reactImg from "../assets/skills/react.svg";
import reduxImg from "../assets/skills/redux.svg";
import nextjsImg from "../assets/skills/nextjs.svg";
import tailwindcssImg from "../assets/skills/tailwindcss.svg";

// Import Backend Skills Images
import nodejsImg from "../assets/skills/nodejs.svg";
import expressjsImg from "../assets/skills/express-js.svg";
import mongodbImg from "../assets/skills/mongodb.svg";
import mysqlImg from "../assets/skills/mysql.svg";
import firebaseImg from "../assets/skills/firebase.svg";

// Import Other Skills Images
import cppImg from "../assets/skills/cpp.svg";
import javaImg from "../assets/skills/java.svg";
import gitImg from "../assets/skills/git.svg";
import githubImg from "../assets/skills/github.svg";
import vscodeImg from "../assets/skills/vscode.svg";
import postmanImg from "../assets/skills/postman.svg";
import linuxImg from "../assets/skills/linux.svg";

// Frontend Skills
const frontendSkills = [
  { name: "HTML5", img: html5Img },
  { name: "CSS", img: css3Img },
  { name: "JavaScript", img: javascriptImg },
  { name: "React.js", img: reactImg },
  { name: "Redux", img: reduxImg },
  { name: "Next.js", img: nextjsImg },
  { name: "Tailwind CSS", img: tailwindcssImg },
];

// Backend Skills
const backendSkills = [
  { name: "Node.js", img: nodejsImg },
  { name: "Express.js", img: expressjsImg },
  { name: "MongoDB", img: mongodbImg },
  { name: "MySQL", img: mysqlImg },
  { name: "Firebase", img: firebaseImg },
];

// Other Skills
const otherSkills = [
  { name: "C++", img: cppImg },
  { name: "Java", img: javaImg },
  { name: "Git", img: gitImg },
  { name: "GitHub", img: githubImg },
  { name: "VS Code", img: vscodeImg },
  { name: "Postman", img: postmanImg },
  { name: "Linux", img: linuxImg },
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
