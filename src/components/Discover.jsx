import React from 'react';
import person from "../assets/person.png";
import add from "../assets/add.png";
import { Link } from 'react-router-dom';

export default function Discover() {
  return (
    <div className='discover'>
      <Link to="/discovergroup" className='discoverLink'>
      <div className="discoverNewGroups">
        <div className="discoverGroupIcon">
          <img src={person} alt="Person Icon" />
        </div>
        <span>Discover Groups</span>
      </div>
      </Link>
      <Link to="/newgroup" className="discoverLink">
        <div className="discoverNewGroups">
          <div className="discoverNewGroupsIcon">
            <img src={add} alt="Add Icon" />
          </div>
          <span>New Group</span>
        </div>
      </Link>
    </div>
  );
}
