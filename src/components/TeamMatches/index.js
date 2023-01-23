import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard/index'
import './index.css'

class TeamMatches extends Component {
  state = {teamData: {}, isloading: true}

  componentDidMount() {
    this.getteammatches()
  }

  getchangeddata = data => ({
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    manOftheMatch: data.man_of_the_match,
    result: data.result,
    date: data.date,
    venue: data.venue,
    matchStatus: data.match_status,
    umpires: data.umpires,
  })

  getteammatches = async () => {
    // console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(match)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const urldata = await response.json()
    // console.log(data)
    const updatedata = {
      teamBanner: urldata.team_banner_url,
      latestMatch: this.getchangeddata(urldata.latest_match_details),
      recentMatches: urldata.recent_matches.map(eachdata =>
        this.getchangeddata(eachdata),
      ),
    }
    // console.log(updatedata)
    this.setState({teamData: updatedata, isloading: false})
  }

  renderLoader = () => (
    <div className="loader-container" testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  getClassname = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {teamData, isloading} = this.state
    const {teamBanner, latestMatch, recentMatches} = teamData
    const bckground = this.getClassname()

    console.log(teamData)
    return (
      <div className={`team-match-container ${bckground}`}>
        {isloading ? (
          this.renderloader()
        ) : (
          <div className="team-match-container">
            <img src={teamBanner} alt="team banner" />
            <p>Latest Matches</p>
            <LatestMatch latestMatchData={latestMatch} />
            <ul className="recent-match-cards">
              {recentMatches.map(eachmatch => (
                <MatchCard key={eachmatch.id} eachMatch={eachmatch} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
