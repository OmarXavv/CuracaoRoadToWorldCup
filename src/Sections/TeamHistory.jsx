import "./TeamHistory.css"
import ffkImage from "../assets/ffk.png"
import concacafImage from "../assets/concacaf.png"
import fifaImage from "../assets/fifa.png"

const slides = [
  {
    number: "01",
    image: ffkImage,
    text: "Curaçao's national football team, governed by the Federashon di Futbòl Kòrsou (FFK), has undergone a dramatic rise over the past decade. For much of its history, the team competed as the Netherlands Antilles, representing a collective of Dutch Caribbean islands. After the dissolution of the Netherlands Antilles in 2010, Curaçao became its own footballing nation.",
  },
  {
    number: "02",
    image: concacafImage,
    text: "The team's breakthrough moment came in 2017 when they reached the CONCACAF Gold Cup quarterfinals an early sign that Curaçao was becoming a serious regional force. What gave them an edge was a unique eligibility setup: many players of Curaçaoan descent grew up in the Netherlands and built careers in European leagues, giving the squad a professional quality far beyond what a 150,000-person island would typically produce.",
  },
  {
    number: "03",
    image: fifaImage,
    text: "The 2026 World Cup qualification campaign was their defining moment. Under veteran Dutch manager Dick Advocaat, Curaçao became the smallest nation by population ever to qualify for a FIFA World Cup, breaking Iceland's previous record from 2018.",
  },
]

export default function TeamHistory() {
  return (
    <section className="history" id="history">
      {slides.map((slide) => (
        <div className="history__slide">
          <div className="history__image-wrap">
            <img src={slide.image} alt={`Team history`} className="history__image" />
          </div>
          <div className="history__content">
            <div className="history__top">
              <span className="history__label">★ TEAM HISTORY</span>
            </div>
            <p className="history__text">{slide.text}</p>
            <div className="history__bottom">
              <span className="history__number">{slide.number}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}