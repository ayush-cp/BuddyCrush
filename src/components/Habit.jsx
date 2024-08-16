import React, { useState } from 'react';
import person from "../assets/person.png";
import internet from "../assets/internet.png";
import habits from "../assets/habits.png";
import ActivityStatus from './ActivityStatus';
import LeaderboardRank from './LeaderboardRank';
import About from './About';

export default function Habit(props) {
  const [activeComponent, setActiveComponent] = useState('about'); // Default to 'about'

  const renderComponent = () => {
    switch (activeComponent) {
      case 'activity':
        return <ActivityStatus />;
      case 'leaderboard':
        return <LeaderboardRank />;
      case 'about':
      default:
        return <About />;
    }
  };
  const habitActivity = document.querySelector('.habitActivity')
    const habitLeaderboard = document.querySelector('.habitLeaderboard')
    const habitAbout = document.querySelector('.habitAbout')
  const handleActivity = ()=>{
    
    setActiveComponent('activity')
    habitActivity.classList.add('active')
    habitLeaderboard.classList.remove('active')
    habitAbout.classList.remove('active')
  }
  const handleLeaderboard = ()=>{
    setActiveComponent('leaderboard')
    habitLeaderboard.classList.add('active')
    habitAbout.classList.remove('active')
    habitActivity.classList.remove('active')
  }
  const handleAbout = ()=>{
    setActiveComponent('about')
    habitAbout.classList.add('active')
    habitLeaderboard.classList.remove('active')
    habitActivity.classList.remove('active')
  }
  const userData = props.data
  console.log(userData.name)
  return (
    <div className='habit'>
      <div className="mainHabit">
        <div className="habitTop">
          <div className="habitInfo">
            <span>Tweet</span>
            <img src={habits} alt="Habits" />
            <div className="habitCount">
              <img src={person} alt="Person" />
              <span>234</span>
            </div>
          </div>
          <div className="habitAdd">
            <img src={person} alt="Add Habit" />
          </div>
        </div>
        <div className="habitNav">
          <div className="habitMainNav">
            <div className="habitActivity" onClick={handleActivity}>
              <img src={internet} alt="Activity" />
              <span>Activity</span>
            </div>
            <div className="habitLeaderboard" onClick={handleLeaderboard}>
              <img src={internet} alt="Leaderboard" />
              <span>Leaderboard</span>
            </div>
            <div className="habitAbout" onClick={handleAbout}>
              <img src={internet} alt="About" />
              <span>About</span>
            </div>
          </div>
        </div>
        <div className="habitTask">
          <div className="habitComponents">
            {renderComponent()}
          </div>
          <div className="habitComplete">
            <button className='habitCompleteButton'>Complete Habit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
