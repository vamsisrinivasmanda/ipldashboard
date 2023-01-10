import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData

  return (
    <div className="latest-match-container">
      <div className="match-details">
        <h1>{competingTeam}</h1>
        <h3>{date}</h3>
      </div>
      <img src={competingTeamLogo} alt={competingTeam} />
      <div>
        <p>firstInnings</p>
      </div>
    </div>
  )
}

export default LatestMatch
