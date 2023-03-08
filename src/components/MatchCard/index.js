import './index.css'

const MatchCard = props => {
  const {recent} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = recent

  const statusColor = matchStatus === 'Won' ? 'green' : 'red'

  const card = (
    <li className="card-cont">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="compete-team-logo-img"
      />

      <p className="team-name">{competingTeam}</p>
      <p className="won-by">{result}</p>
      <p className={`result ${statusColor}`}>{matchStatus}</p>
    </li>
  )

  return card
}

export default MatchCard
