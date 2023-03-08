import './index.css'

const LatestMatch = props => {
  const {latestMatchObj} = props

  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchObj

  console.log(matchStatus)

  const latestEl = (
    <div className="latest-match-cont">
      <div className="compete-details-cont">
        <div className="compete-team">
          <p className="compete-team-name">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="team-logo-img"
        />
      </div>
      <hr className="hr-line" />

      <div className="match-details-cont">
        <p className="details-text">First Innings</p>
        <p className="details-text-team">{firstInnings}</p>
        <p className="details-text">Second Innings</p>
        <p className="details-text-team">{secondInnings}</p>
        <p className="details-text">Man of The Match</p>
        <p className="details-text-team">{manOfTheMatch}</p>
        <p className="details-text">Umpire</p>
        <p className="details-text-team">{umpires}</p>
      </div>
    </div>
  )
  return latestEl
}

export default LatestMatch
