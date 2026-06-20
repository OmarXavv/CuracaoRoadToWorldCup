import "./TheSquad.css"

const coach = {
  name: "Dick Advocaat",
  role: "Head Coach",
  club: "–",
  image: "/assets/players/coach.jpg",
}

const goalkeepers = [
  { name: "Eloy Room",        club: "Miami FC",    image: "/assets/players/room.jpg" },
  { name: "Tyrick Bodak",     club: "SC Telstar",  image: "/assets/players/bodak.jpg" },
  { name: "Trevor Doornbusch",club: "VVV-Venlo",   image: "/assets/players/doornbusch.jpg" },
]

const defenders = [
  { name: "Armando Obispo",   club: "PSV Eindhoven",   image: "/assets/players/obispo.jpg" },
  { name: "Riechedly Bazoer", club: "Konyaspor",       image: "/assets/players/bazoer.jpg" },
  { name: "Joshua Brenet",    club: "Kayserispor",     image: "/assets/players/brenet.jpg" },
  { name: "Roshon van Eijma", club: "RKC Waalwijk",   image: "/assets/players/vaneijma.jpg" },
  { name: "Sherel Floranus",  club: "PEC Zwolle",      image: "/assets/players/floranus.jpg" },
  { name: "Shurandy Sambo",   club: "Sparta Rotterdam",image: "/assets/players/sambo.jpg" },
]

const midfielders = [
  { name: "Leandro Bacuna",     club: "Igdir FK",      image: "/assets/players/leandro.jpg" },
  { name: "Juninho Bacuna",     club: "FC Volendam",   image: "/assets/players/juninho.jpg" },
  { name: "Livano Comenencia",  club: "FC Zurich",     image: "/assets/players/comenencia.jpg" },
  { name: "Kenji Gorré",        club: "–",             image: "/assets/players/gorre.jpg" },
  { name: "Ar'Jany Martha",     club: "Rotherham",     image: "/assets/players/martha.jpg" },
  { name: "Kevin Felida",       club: "FC Den Bosch",  image: "/assets/players/felida.jpg" },
]

function PlayerCard({ name, club, image }) {
  return (
    <div className="card">
      <div className="card__img-wrap">
        <img src={image} alt={name} className="card__img" onError={e => { e.target.style.display = "none" }} />
        <div className="card__placeholder">?</div>
      </div>
      <div className="card__info">
        <p className="card__name">{name}</p>
        <p className="card__club">{club}</p>
      </div>
    </div>
  )
}

function CoachCard({ name, role, club, image }) {
  return (
    <div className="card card--coach">
      <div className="card__img-wrap">
        <img src={image} alt={name} className="card__img" onError={e => { e.target.style.display = "none" }} />
        <div className="card__placeholder">?</div>
      </div>
      <div className="card__info">
        <p className="card__name">{name}</p>
        <p className="card__role">{role}</p>
      </div>
    </div>
  )
}

function Group({ title, players }) {
  return (
    <div className="squad__group">
      <h3 className="squad__group-title">{title}</h3>
      <div className="squad__grid">
        {players.map((p) => (
          <PlayerCard key={p.name} {...p} />
        ))}
      </div>
    </div>
  )
}

export default function TheSquad() {
  return (
    <section className="squad" id="squad">
      <div className="squad__inner">
        <h2 className="squad__title">THE BLUEWAVE SQUAD</h2>

        <div className="squad__coach-wrap">
          <h3 className="squad__group-title">COACH</h3>
          <div className="squad__coach">
            <CoachCard {...coach} />
          </div>
        </div>

        <Group title="GOALKEEPERS" players={goalkeepers} />
        <Group title="DEFENDERS"   players={defenders} />
        <Group title="MIDFIELDERS" players={midfielders} />
      </div>
    </section>
  )
}