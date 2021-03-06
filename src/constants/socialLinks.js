import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaPhoneSquare,
  FaDiscord,
} from "react-icons/fa"

const data = [
  {
    id: 4,
    icon: <FaPhoneSquare className="social-icon"></FaPhoneSquare>,
    url: "tel:406-579-6359",
  },
  {
    id: 1,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://www.github.com/mferino",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/mdference",
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com/mdference",
  },
  {
    id: 5,
    icon: <FaDiscord className="social-icon"></FaDiscord>,
    url: "https://discord.gg/GzSEqtrjfX",
  },
]

const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
