// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = details
  const isWon = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="matchesContainer">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="matchOpponentLogo"
      />
      <p className="competingTeamNames">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`${isWon}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
