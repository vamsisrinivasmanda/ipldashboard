import {Component} from 'react'
import TeamCard from '../TeamCard/index'
import './index.css'

class Home extends Component {
  state = {iplteam: []}

  componentDidMount() {
    this.getiplteamdata()
  }

  getiplteamdata = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamdata = await response.json()
    const {teams} = teamdata
    console.log(teams)

    const updateteam = teams.map(eachteam => ({
      id: eachteam.id,
      name: eachteam.name,
      teamImageUrl: eachteam.team_image_url,
    }))
    this.setState({iplteam: updateteam})
  }

  render() {
    const {iplteam} = this.state
    return (
      <div className="home-container">
        <div className="ipl-header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul className="all-teams">
          {iplteam.map(eachTeam => (
            <TeamCard key={eachTeam.id} eachTeam={eachTeam} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
