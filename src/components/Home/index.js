import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamData: [], isLoading: true}

  componentDidMount() {
    this.getIplTeamsdata()
  }

  getIplTeamsdata = async () => {
    const responseData = await fetch('https://apis.ccbp.in/ipl')
    const iplTeamsData = await responseData.json()
    const {teams} = iplTeamsData
    const updatedIplTeamData = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({teamData: updatedIplTeamData, isLoading: false})
  }

  render() {
    const {teamData, isLoading} = this.state

    const allTeamCard = (
      <ul className="team-cards-cont">
        {teamData.map(eachTeam => (
          <TeamCard key={eachTeam.id} team={eachTeam} />
        ))}
      </ul>
    )

    const app = (
      <div className="home-bg-cont">
        <div className="dash-board-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="app-logo"
          />
          <h1 className="app-head">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>{allTeamCard}</>
        )}
      </div>
    )

    return app
  }
}

export default Home
