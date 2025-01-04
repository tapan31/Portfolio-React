/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
// import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

// Data
const projects = [
  {
    title: "Elevate-Self",
    description:
      "Elevate Self is a feature-rich blogging platform that empowers users to create, read, edit, and delete posts. It supports rich media integration, allowing users to add images to their posts and enhance visual storytelling. The application also includes a commenting system, where users can engage with posts, and a liking feature to promote interaction. Built with a focus on user experience, Elevate Self ensures smooth navigation and seamless content management.",
    githubLink: "https://github.com/tapan31/Elevate-Self",
    liveLink: "https://elevate-self-fcv3.vercel.app/",
    imageSrc: "/src/assets/projects/elevate-self.png",
    techStack: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Tailwind CSS",
    ],
  },
  {
    title: "QuizHive",
    description:
      "QuizHive is an interactive quiz application designed to engage users with challenging quizzes across various topics. It features dynamic theming to personalize the experience, real-time feedback on answers, and detailed performance analysis with charts. QuizHive aims to make learning fun and informative, combining modern UI design with robust functionality. Whether you're testing your knowledge or learning something new, QuizHive provides an immersive and educational experience.",
    githubLink: "https://github.com/tapan31/Quizhive",
    liveLink: "https://quizhive-opal.vercel.app/",
    imageSrc: "/src/assets/projects/quizhive.png",
    techStack: ["React.js", "Open Trivia API", "Tailwind CSS"],
  },
  {
    title: "Github-Finder",
    description:
      "GitHub Finder is a React-based web application that allows users to search for GitHub profiles using their usernames. The app displays user details like repositories, followers, and bio, offering a quick and easy way to explore GitHub users' contributions. The responsive design ensures compatibility across devices, making it a handy tool for developers and recruiters to explore profiles seamlessly.",
    githubLink: "https://github.com/tapan31/github-finder",
    liveLink: "https://github-finder-lyart-gamma.vercel.app/",
    imageSrc: "/src/assets/projects/github-finder.png",
    techStack: ["React.js", "GitHub API", "Tailwind CSS"],
  },
  {
    title: "Tip-Calculator",
    description:
      "The Tip Calculator is a sleek and intuitive web application designed to simplify the process of calculating tips. Users can input the total bill amount, select a tip percentage, and determine the individual contribution for splitting the bill among a group. The minimalist interface ensures effortless usability, while precise calculations guarantee accuracy. Ideal for dining out with friends or budgeting tips effectively.",
    githubLink: "https://github.com/tapan31/tip-calculator-app",
    liveLink: "https://tapan31.github.io/tip-calculator-app/",
    imageSrc: "/src/assets/projects/tip-calculator.png",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section id="projects" data-aos="fade">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <h2 className="dark:text-dark-text mb-4 text-center text-4xl font-medium text-text md:text-5xl">
          Projects
        </h2>
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper custom-pagination"
        >
          {projects.map((project) => (
            <SwiperSlide className="px-1 md:p-0" key={project.title}>
              <Project project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function Project({ project }) {
  return (
    <div className="mb-4 flex flex-col-reverse items-center justify-between gap-5 rounded-lg border border-gray-300 pb-4 text-text md:flex-row md:gap-10 md:border-none md:px-2 md:py-8 dark:text-[#b0b0b0]">
      {/* Project Description */}
      <div className="max-w-full space-y-3 px-4 md:w-[40%]">
        <h3 className="dark:text-dark-text text-2xl font-medium text-text md:text-3xl">
          {project.title}
        </h3>
        <p className="tracking-tight md:tracking-normal">
          {project.description}
        </p>
        <p className="space-x-2 break-words font-mono font-medium text-primary">
          {project.techStack.map((tech, index) => (
            <span key={tech}>
              {tech}
              {index < project.techStack.length - 1 ? "," : ""}
            </span>
          ))}
        </p>
        <div className="space-x-4">
          <a
            href={project.githubLink}
            target="_blank"
            className="inline-block rounded-lg bg-primary p-2 text-sm text-white transition-transform duration-200 hover:bg-button-hover"
          >
            Github {<FontAwesomeIcon icon={faGithub} size="lg" />}
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            className="inline-block rounded-lg bg-[#ff9800] p-2 text-sm text-white transition-transform duration-200 hover:bg-[#e28c0f]"
          >
            Live {<FontAwesomeIcon icon={faLink} size="lg" />}
          </a>
        </div>
      </div>

      {/* Project Image */}
      <div className="rounded-t-md shadow-sm md:w-[60%] md:rounded-md md:p-2 md:shadow-[0_0_3px_rgba(0,0,0,0.3)] md:dark:shadow-[0_0_3px_rgba(255,255,255,0.3)]">
        <img
          src={project.imageSrc}
          className="w-full rounded-t-md object-cover md:rounded-md"
          alt={project.title}
        />
      </div>
    </div>
  );
}
