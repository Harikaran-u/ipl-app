import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {team} = props
  const {id, name, teamImageUrl} = team

  const listItems = (
    <Link to={`/team-matches/${id}`} className="link-styles">
      <li className="teams-list-cont">
        <img src={teamImageUrl} alt={name} className="team-img" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
  return listItems
}

export default TeamCard
