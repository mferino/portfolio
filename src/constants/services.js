import React from "react"
import { FaCode, FaBoxOpen, FaChalkboardTeacher } from "react-icons/fa"

export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `I'm a Full stack web developer that can be useful in a variety of languages.  I love trying out new languages for personal projects.  I love refactoring my code to look pretty.  I love writing documentation to make peoples lives easier.  I love it when I finally track down that pesky bug.  I love to learn.  I don't know if you can tell but I love to code!`,
  },
  {
    id: 2,
    icon: <FaBoxOpen className="service-icon" />,
    title: "technology consulting",
    text: `Making choices about which technologies to use can be hard and have serious long term implications for your business.  I love helping guide people through that process no matter the scale of the project.  Don't think you have to hire me if you're looking for advice, please feel free to reach out with any questions, I'm happy to help!`,
  },
  {
    id: 3,
    icon: <FaChalkboardTeacher className="service-icon" />,
    title: "education",
    text: `I love teaching people about code and technology!!  I can help train you or your staff at any level, teaching you the nuances of speaking to a programmer in their natural habitat.  I can even get you started with learning code if, but I'm not sure why anyone would want to head down that path...`,
  },
]
