import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { createGroup } from "./groups";

export default function NewGroup() {
  // const [groupInfo, setGroupInfo] = useState({});
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [category, setCategory] = useState("");
  const [members, setMembers] = useState([]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const groupInfo ={
        name: groupName[0].toUpperCase() + groupName.slice(1),
        description:
          groupDescription[0].toUpperCase() + groupDescription.slice(1),
        category: category[0].toUpperCase() + category.slice(1),
        members: members,
      };
        
        const groupHabit = await createGroup(groupInfo);
        console.log("group constructed successfully in group")
    } catch (error) {
        console.log("An error occured ", error)
    }
    // console.log(groupName[0].toUpperCase() + groupName.slice(1), groupDescription[0].toUpperCase() + groupDescription.slice(1), category[0].toUpperCase() + category.slice(1))
  };
  return (
    <div className="newGroup">
      <Navbar />
      <div className="newGroupMain">
        <form onSubmit={handleSubmit}>
          <Link to="/dashboard" className="newGroupLink">
            <div className="newGroupBack">
              <img src="https://img.icons8.com/?size=100&id=39789&format=png&color=000000" />
              <span>BACK</span>
            </div>
          </Link>
          <h1 className="newGroupHeading">Your new accountability group</h1>
          <div className="newGroupName">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Workout 💦, Read 📙, Sleep Early 😪 "
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              required
            />
            <label htmlFor="">
              Users can complete this habit once a day max
            </label>
          </div>
          <div className="newGroupDesc">
            <label htmlFor="">Description</label>
            <textarea
              type="text"
              rows="7"
              placeholder="What would people gain by joining your group"
              value={groupDescription}
              onChange={(e) => setGroupDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="newGroupCategory">
            <label htmlFor="">Category</label>
            <select
              name="category"
              id=""
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" disabled>
                Help users find your group
              </option>
              <option value="health">Health</option>
              <option value="educational">Educational</option>
              <option value="career">Career</option>
              <option value="finance">Finance</option>
              <option value="technology">Technology</option>
              <option value="other">Other</option>
            </select>
            {/* <label htmlFor=""></label> */}
          </div>
          <button type="submit" className="newGroupSubmit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
