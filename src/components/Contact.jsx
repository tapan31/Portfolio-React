import Lottie from "lottie-react";
import contact from "../assets/contact.json";

import SocialLinks from "./SocialLinks";
import Form from "./Form";

const resumeLink =
  "https://drive.google.com/file/d/1V0ktM0s2Q0P4cnGOJT6cxhf7mv7lo4Gu/view?usp=sharing";

export default function Contact() {
  return (
    <section id="contact" data-aos="fade">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-4 pb-8 pt-10 md:flex-row md:items-center md:gap-10">
        <div className="max-w-full space-y-3 md:w-1/2">
          <h2 className="mb-3 text-4xl font-medium text-primary md:text-5xl">
            Let&apos;s Connect
          </h2>
          <p className="dark:text-dark-text text-text">
            I&apos;m always open to new opportunities and collaboration. Feel
            free to reach out!
          </p>

          {/* Links */}
          <SocialLinks
            containerStyles="text-primary"
            linkStyles="hover:text-button-hover"
          />

          <a
            href={resumeLink}
            target="_blank"
            className="inline-block rounded-lg bg-primary p-2 text-sm font-medium text-white hover:bg-button-hover"
          >
            Download CV
          </a>

          <Lottie
            animationData={contact}
            className="mx-auto w-[300px] lg:w-[500px]"
          />
        </div>

        <div className="md:w-1/2">
          <Form />
        </div>
      </div>
    </section>
  );
}
