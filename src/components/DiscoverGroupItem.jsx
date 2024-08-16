import React, { useContext } from "react";
import person from "../assets/person.png";
import { UserContext } from "../UserContext";
import { arrayUnion, doc, updateDoc, where } from "firebase/firestore";
import { db } from "../Firebase";
export default function DiscoverGroupItem(props) {
  const { user } = useContext(UserContext);
  const handleJoin = async () => {
    try {
      const groupDocRef = doc(
        db,
        "Category",
        props.category,
        "groups",
        props.uid
      );

      const userDocRef = doc(db, "users", user.uid);

      await updateDoc(userDocRef, {
        groupsJoined: arrayUnion(groupDocRef.id),
      });
      
      // console.log(props.uid)
      await updateDoc(groupDocRef, {
        members: arrayUnion(user.uid),
      });
      console.log("User Successfully joined ");
    } catch (error) {
      console.log("Error in joining the group ", error);
    }
  };
  return (
    <div className="discoverGroupItem">
      <div className="groupItemName">
        <h2>{props.name}</h2>
      </div>
      <div className="groupItemInfo">
        <img src={person} alt="" />
        <span>{props.members.length}</span>members
        <div className="groupItemCreated">⌛ 4 days ago</div>
      </div>
      <div className="groupItemDesc">
        <span>{props.desc}</span>
        <div className="groupItemJoin" onClick={handleJoin}>
          <img src={person} alt="" />
          <span>Join</span>
        </div>
      </div>
    </div>
  );
}
