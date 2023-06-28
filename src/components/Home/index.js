// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamCard: [], isLoading: true}

  componentDidMount() {
    this.getTeamCard()
  }

  getTeamCard = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamCard: updatedData, isLoading: false})
  }

  loading = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  teamCardValues = () => {
    const {teamCard} = this.state
    return (
      <div className="bg-container">
        <div className="title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="title">IPL DashBoard</h1>
        </div>
        <ul className="totalTeamsContainer">
          {teamCard.map(each => (
            <TeamCard details={each} key={each.name} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return <div>{isLoading ? this.loading() : this.teamCardValues()}</div>
  }
}

export default Home
