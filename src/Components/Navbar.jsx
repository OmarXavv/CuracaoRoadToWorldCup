import "./Navbar.css"
import starsIcon from "../assets/Stars.png"

const links = [
  { label: "Where is Curaçao?", href: "#where" },
  { label: "Team History", href: "#history" },
  { label: "Road To the World Cup", href: "#journey" },
  { label: "The Bluewave Squad",href: "#squad" },
]

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="#hero" className="nav__logo">
        <img src={starsIcon} alt="stars" className="nav__stars" />
      </a>
      <ul className="nav__links">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="nav__link">{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}