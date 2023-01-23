import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = eachMatch
  const matchStyle = status => (status === 'Won' ? 'match-won' : 'match-lost')
  const styleresult = matchStyle(matchStatus)

  return (
    <li className="card">
      <img
        src={competingTeamLogo}
        className="card-logo"
        alt={`competing team ${competingTeam}`}
      />
      <h1 className="card-heading">{competingTeam}</h1>
      <p className="card-desc">{result}</p>
      <p className={styleresult}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
