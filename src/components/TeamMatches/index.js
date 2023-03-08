import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'
import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatches: {},
    recentMatchesData: [],
    teamBannerUrl: {},
    style: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamRecentData()
  }

  getTeamRecentData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const matchResponse = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const matchDetails = await matchResponse.json()
    const updatedData = {
      latestMatchDetails: matchDetails.latest_match_details,
      recentMatches: matchDetails.recent_matches,
      teamBannerUrl: matchDetails.team_banner_url,
    }
    const {latestMatchDetails, recentMatches, teamBannerUrl} = updatedData
    const latestMatchInfo = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    const recentMatchesInfo = recentMatches.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      firstInnings: eachMatch.first_innings,
      id: eachMatch.id,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      secondInnings: eachMatch.second_innings,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
    }))

    this.setState({
      latestMatches: latestMatchInfo,
      recentMatchesData: recentMatchesInfo,
      teamBannerUrl,
      style: id,
      isLoading: false,
    })
  }

  render() {
    const {
      latestMatches,
      recentMatchesData,
      teamBannerUrl,
      style,
      isLoading,
    } = this.state

    const teamMatch = (
      <div className={`team-bg-cont ${style}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img src={teamBannerUrl} alt="team banner" className="banner-img" />
            <div className="matches-cont">
              <h1 className="latest-head">Latest Matches</h1>
              <LatestMatch latestMatchObj={latestMatches} />
              <div className="matches-card-cont">
                {recentMatchesData.map(eachTeam => (
                  <MatchCard recent={eachTeam} key={eachTeam.id} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    )

    return teamMatch
  }
}

export default TeamMatches
