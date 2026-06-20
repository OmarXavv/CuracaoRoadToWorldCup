import { useEffect, useRef } from "react"
import "./Intro.css"
import stars from "../assets/Stars.png"
import { animateIntro } from "../animations/gsapAnimations"

export default function Intro({ onComplete }) {
  const introRef = useRef(null)
  const stripeRef = useRef(null)
  const starsRef = useRef(null)

  useEffect(() => {
    animateIntro(
      introRef.current,
      stripeRef.current,
      starsRef.current,
      onComplete
    )
  }, [])

  return (
    <div ref={introRef} className="intro">
      <img
        ref={starsRef}
        src={stars}
        alt="Curaçao flag stars"
        className="intro__stars"
      />
      <div ref={stripeRef} className="intro__stripe" />
    </div>
  )
}