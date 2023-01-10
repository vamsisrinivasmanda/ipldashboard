import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam
  return (
    <li id={id} className="team-list">
      <Link to={`/team-matches/${id}`} className="link-item">
        <img src={teamImageUrl} alt={name} className="team-image" />
        <h1 className="team-heading">{name}</h1>
      </Link>
    </li>
  )
}

export default TeamCard
