import "./RoadToTheWorldCup.css"

const matches = [
  { opponent: "Barbados",          flag: "🇧🇧", result: "4 – 1", stage: "Round 2" },
  { opponent: "Aruba",             flag: "🇦🇼", result: "2 – 0", stage: "Round 2" },
  { opponent: "Saint Lucia",       flag: "🇱🇨", result: "4 – 0", stage: "Round 2" },
  { opponent: "Haiti",             flag: "🇭🇹", result: "5 – 1", stage: "Round 2" },
  { opponent: "Jamaica",           flag: "🇯🇲", result: "2 – 0", stage: "Round 3" },
  { opponent: "Trinidad & Tobago", flag: "🇹🇹", result: "1 – 1", stage: "Round 3" },
  { opponent: "Bermuda",           flag: "🇧🇲", result: "7 – 0", stage: "Round 3" },
  { opponent: "Jamaica (away)",    flag: "🇯🇲", result: "0 – 0 ✓", stage: "QUALIFIED", qualified: true },
]

const stats = [
  { label: "Goals Scored",           value: "28" },
  { label: "Expected Goals",         value: "22.9" },
  { label: "Avg Possession",         value: "62.1%" },
  { label: "Goals from Open Play",   value: "23/29" },
]

export default function RoadToTheWorldCup() {
  return (
    <section className="road" id="journey">
      <div className="road__inner">
        <h2 className="road__title">ROAD TO THE WORLD CUP</h2>

        <div className="road__matches">
          {matches.map((m, i) => (
            <div className={`road__match ${m.qualified ? "road__match--final" : ""}`} key={i}>
              <span className="road__stage">{m.stage}</span>
              <span className="road__opponent">{m.flag} {m.opponent}</span>
              <span className="road__result">{m.result}</span>
            </div>
          ))}
        </div>

        <div className="road__stats">
          <p className="road__stats-label">During the full qualifying campaign, Curaçao was <strong>UNDEFEATED</strong></p>
          <div className="road__stats-grid">
            {stats.map((s) => (
              <div className="road__stat" key={s.label}>
                <span className="road__stat-value">{s.value}</span>
                <span className="road__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}