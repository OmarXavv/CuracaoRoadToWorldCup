import { useEffect, useRef } from "react"
import "./WhereIsCuracao.css"
import mapImage from "../assets/CuracaoImage.png"
import { animateStickyScroll } from "../animations/gsapAnimations"

const slides = [
  {
    text: "Curaçao is a small island in the southern Caribbean Sea, located approximately 65 km north of the coast of Venezuela. It is part of the ABC Islands, a trio of Dutch Caribbean islands that also includes Aruba and Bonaire.",
  },
  {
    facts: [
      { label: "Area", value: "171 sq mi (444 km²)" },
      { label: "Capital", value: "Willemstad" },
      { label: "Population", value: "~150,000–170,000" },
      { label: "Government", value: "Autonomous country within the Kingdom of the Netherlands" },
      { label: "Languages", value: "Dutch, English, Spanish, Papiamento" },
      { label: "Climate", value: "Semi-arid tropical, 28–32°C, outside the hurricane belt" },
      { label: "Highest point", value: "Christoffelberg at 372 meters" },
    ],
  },
  {
    text: "Culturally, Curaçao is one of the most diverse places on Earth, home to over 50 nationalities, with influences from Africa, Europe, South America, and beyond, all reflected in the colorful buildings of the UNESCO World Heritage capital Willemstad.",
  },
]

export default function WhereIsCuracao() {
  const sectionRef = useRef(null)
  const slideRefs = useRef([])

  useEffect(() => {
    animateStickyScroll(sectionRef.current, slideRefs.current)
  }, [])

  return (
    <section className="where" id="where" ref={sectionRef}>
      <h2 className="where__title">WHERE IS CURAÇAO?</h2>

      <div className="where__layout">

        <div className="where__sticky">
          <img src={mapImage} alt="Map of Curaçao" className="where__map-img" />
        </div>

        <div className="where__slides">
          {slides.map((slide, i) => (
            <div
              className="where__slide"
              key={i}
              ref={(el) => (slideRefs.current[i] = el)}
            >
              {slide.text && (
                <p className="where__text">{slide.text}</p>
              )}

              {slide.facts && (
                <ul className="where__list">
                  {slide.facts.map((f) => (
                    <li key={f.label}>
                      <span className="where__label">{f.label}</span>
                      {f.value}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}