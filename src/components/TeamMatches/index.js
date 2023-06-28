// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {matchDetails: [], isLoading: true}

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  loading = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(recentMatches => ({
        umpires: recentMatches.umpires,
        result: recentMatches.result,
        manOfTheMatch: recentMatches.man_of_the_match,
        id: recentMatches.id,
        date: recentMatches.date,
        venue: recentMatches.venue,
        competingTeam: recentMatches.competing_team,
        competingTeamLogo: recentMatches.competing_team_logo,
        firstInnings: recentMatches.first_innings,
        secondInnings: recentMatches.second_innings,
        matchStatus: recentMatches.match_status,
      })),
    }
    this.setState({matchDetails: updatedData, isLoading: false})
  }

  getMatchDetails = () => {
    const {matchDetails} = this.state

    return (
      <div className="banner-bg-container">
        <img
          src={matchDetails.teamBannerUrl}
          alt="team banner"
          className="banner"
        />
        <LatestMatch
          details={matchDetails.latestMatchDetails}
          key={matchDetails.latestMatchDetails.competingTeam}
        />
        <ul className="ulMatchDetailsContainer">
          {matchDetails.recentMatches.map(eachMatch => (
            <MatchCard details={eachMatch} key={eachMatch.competingTeam} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return <div>{isLoading ? this.loading() : this.getMatchDetails()}</div>
  }
}

export default TeamMatches
