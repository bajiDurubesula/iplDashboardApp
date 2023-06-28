// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamImageUrl} = details

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="eachCardContainer">
        <img src={teamImageUrl} alt={name} className="eachLogo" />
        <p className="eachTeamName">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
