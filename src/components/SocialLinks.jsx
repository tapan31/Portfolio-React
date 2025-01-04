/* eslint-disable react/prop-types */

import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const links = {
  linkedIn: "https://www.linkedin.com/in/tapan-sonak-412581207/",
  github: "https://github.com/tapan31",
  mail: "tapansonak786@gmail.com",
};

export default function SocialLinks({ containerStyles = "", linkStyles = "" }) {
  return (
    <div className={`space-x-6 text-gray-100 ${containerStyles}`}>
      <a
        href={links.linkedIn}
        target="_blank"
        className={`inline-block transition-transform duration-200 ease-in-out hover:scale-110 ${linkStyles}`}
      >
        <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
      </a>
      <a
        href={links.github}
        target="_blank"
        className={`inline-block transition-transform duration-200 ease-in-out hover:scale-110 ${linkStyles}`}
      >
        <FontAwesomeIcon icon={faGithub} size="xl" />
      </a>
      <a
        href={`mailto:${links.mail}`}
        target="_blank"
        className={`inline-block transition-transform duration-200 ease-in-out hover:scale-110 ${linkStyles}`}
      >
        <FontAwesomeIcon icon={faEnvelope} size="xl" />
      </a>
    </div>
  );
}
