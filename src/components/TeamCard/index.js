import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam
  return (
    <li id={id} className="team-list">
      <Link to={`/team-matches/${id}`} className="link-item">
        <img src={teamImageUrl} alt={name} className="team-image" />
        <p className="team-heading">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
