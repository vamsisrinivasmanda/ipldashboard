import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
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
    secondInnings: data.secondInnings,
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
    <div className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  render() {
    const {teamData, isloading} = this.state
    const {teamBanner, latestMatch} = teamData
    return (
      <div>
        {isloading ? (
          this.renderloader()
        ) : (
          <div className="team-match-container">
            <img src={teamBanner} alt="team match" />
            <p>Latest Matches</p>
            <LatestMatch latestMatchData={latestMatch} />
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
