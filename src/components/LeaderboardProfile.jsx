import React from 'react'
import gold from '../assets/gold.png'
export default function LeaderboardProfile() {
  return (
    <div className='leaderboardProfile'>
        <img src={gold} alt="" className="leaderboardMedal" />
        <div className="leaderboardPeople">
          <div className="leaderboardPeopleInitial">A</div>
          <span>Ayush Panwar</span>
        </div>
        <span className="leaderboardCount">3</span>
    </div>
  )
}
