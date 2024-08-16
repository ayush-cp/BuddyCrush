import React from 'react'
import person from '../assets/person.png'
import AboutInfo from './AboutInfo'
export default function About() {
  return (
    <div className='about'>
        <div className="aboutGroup">
        <span className='aboutDescription'>Build an audience of like-minded people. 1 or more Tweet per day.</span>
        <span className='aboutCreated'>Created August 04, 2023</span>
        </div>
        <div className="aboutMembers">
            <div className="aboutCountMembers">
                <img src={person} alt="" />
                <span>238 </span>
                members
            </div>
            <div className="aboutMemberList">
              <AboutInfo/>
              <AboutInfo/>
              <AboutInfo/>
              <AboutInfo/>
              <AboutInfo/>
              <AboutInfo/>
              <AboutInfo/>
              <AboutInfo/>
              <AboutInfo/>
              <AboutInfo/>
              <AboutInfo/>
              <AboutInfo/>
              <AboutInfo/>
              <AboutInfo/>
              <AboutInfo/>
            <div className="aboutLogOut">
              <button className="logOutButton">Log out</button>
            </div>
            </div>
        </div>

    </div>
  )
}
