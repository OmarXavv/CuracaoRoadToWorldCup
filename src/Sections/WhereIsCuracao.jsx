import "./WhereIsCuracao.css"
import mapImage from "../assets/CuracaoImage.png"

export default function WhereIsCuracao() {
  return (
    <section className="where" id="where">
      <div className="where__inner">
        <h2 className="where__title">WHERE IS CURAÇAO?</h2>
        <div className="where__grid">
          <div className="where__map">
            <img src={mapImage} alt="Map of Curaçao" className="where__map-img" />
          </div>
          <div className="where__facts">
            <p className="where__intro">
              Curaçao is a small island in the southern Caribbean Sea, located approximately 65 km north of the coast of Venezuela. It is part of the ABC Islands, a trio of Dutch Caribbean islands that also includes Aruba and Bonaire.
            </p>
            <ul className="where__list">
              <li><span className="where__label">Area</span>171 sq mi (444 km²)</li>
              <li><span className="where__label">Capital</span>Willemstad</li>
              <li><span className="where__label">Population</span>~150,000–170,000</li>
              <li><span className="where__label">Government</span>Autonomous country within the Kingdom of the Netherlands</li>
              <li><span className="where__label">Languages</span>Dutch, English, Spanish, Papiamento</li>
              <li><span className="where__label">Climate</span>Semi-arid tropical, 28–32°C, outside the hurricane belt</li>
              <li><span className="where__label">Highest point</span>Christoffelberg at 372 meters</li>
            </ul>
            <p className="where__outro">
              Culturally, Curaçao is one of the most diverse places on Earth — home to over 50 nationalities, with influences from Africa, Europe, South America, and beyond, all reflected in the colorful buildings of the UNESCO World Heritage capital Willemstad.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}