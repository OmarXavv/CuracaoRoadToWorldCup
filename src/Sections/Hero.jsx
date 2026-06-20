import { useEffect, useRef } from "react"
import "./Hero.css"
import heroVideo from "../assets/editforsite.mp4"
import heroPoster from "../assets/HeroPoster.png"
import { animateHero } from "../animations/gsapAnimations"

export default function Hero() {
  const badgeRef = useRef(null)
  const headingRef = useRef(null)
  const subRef = useRef(null)

  useEffect(() => {
    animateHero(
      badgeRef.current,
      headingRef.current,
      subRef.current
    )
  }, [])

  return (
    <section className="hero" id="hero">
      <video className="hero__video" autoPlay muted loop playsInline poster={heroPoster}>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero__overlay" />
      <div className="hero__content">
        <div ref={badgeRef} className="hero__badge">FIFA World Cup 2026 · Group E</div>
        <h1 ref={headingRef} className="hero__heading">CURAÇAO<br />MAKES HISTORY</h1>
        <p ref={subRef} className="hero__sub">
          The smallest nation ever to qualify for a FIFA World Cup. 150,000 people. One dream.
        </p>
      </div>
      <div className="hero__scroll">
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}