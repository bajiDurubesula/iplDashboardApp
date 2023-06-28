// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = details

  return (
    <div>
      <h1>Latest Matches</h1>
      <div className="latestMatchesContainer">
        <div>
          <p className="opponentName">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="detailsOfMatch">{venue}</p>
          <p className="detailsOfMatch">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="opponentImg"
        />
        <div>
          <h1 className="titlesOfMatch">First Innings</h1>
          <p className="detailsOfMatch">{firstInnings}</p>
          <h1 className="titlesOfMatch">Second Innings</h1>
          <p className="detailsOfMatch">{secondInnings}</p>
          <h1 className="titlesOfMatch">Man Of The Match</h1>
          <p className="detailsOfMatch">{manOfTheMatch}</p>
          <h1 className="titlesOfMatch">Umpires</h1>
          <p className="detailsOfMatch">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
