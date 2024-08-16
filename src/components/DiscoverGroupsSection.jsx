import React,{useState, useEffect} from 'react'
import DiscoverGroupCategory from './DiscoverGroupCategory'
import { Link } from 'react-router-dom'
import { collection, doc, getDoc, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from '../Firebase'

export default function discoverGroupsSection() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true)
  const [groupCategories, setGroupCategories] = useState({
    Career: [],
    Health: [],
    Other: [],
    Educational: [],
    Finance: [],
    Technology: []
  });

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const categories = ['Career', 'Health', 'Other', 'Educational', 'Finance', 'Technology'];
        const groupData = [];

        for (const category of categories) {
          const groupCollectionRef = collection(db, 'Category', category, 'groups');
          const querySnapshot = await getDocs(groupCollectionRef);
          
          querySnapshot.forEach((doc) => {
            groupData.push({
              ...doc.data(),
              id: doc.id,
              category: category
            });
          });
        }

        setGroups(groupData);
      } catch (error) {
        console.error("Error fetching groups:", error);
      }finally{
        setLoading(false)
      }
    };

    fetchGroups();
  }, []);

  useEffect(() => {
    const categorizedGroups = {
      Career: [],
      Health: [],
      Other: [],
      Educational: [],
      Finance: [],
      Technology: []
    };

    groups.forEach((group) => {
      switch (group.category) {
        case "Career":
          categorizedGroups.Career.push(group);
          break;
        case "Educational":
          categorizedGroups.Educational.push(group);
          break;
        case "Finance":
          categorizedGroups.Finance.push(group);
          break;
        case "Health":
          categorizedGroups.Health.push(group);
          break;
        case "Other":
          categorizedGroups.Other.push(group);
          break;
        case "Technology":
          categorizedGroups.Technology.push(group);
          break;
        default:
          categorizedGroups.Other.push(group);
          break;
      }
    });

    setGroupCategories(categorizedGroups);
  }, [groups]);
  if(loading){
    return <div>Loading...</div>
  }
  console.log(groupCategories);
  
  return (
    <div className='discoverGroupsSection'>
      <div className="groupSectionMain">
        <Link to="/dashboard" className='discoverGroupLink'>
        <div className="discoverGroupBack">
          <img src="https://img.icons8.com/?size=100&id=39789&format=png&color=000000" alt="" />
          <span>BACK</span>
        </div>
        </Link>
        <h1>Discover Accountability Groups</h1>
        <div className="groupCategory">
         
            <DiscoverGroupCategory  categoryName = "Educational 📙" categoryGroups={groupCategories.Educational}/>
            <DiscoverGroupCategory  categoryName = "Career 👷‍♂️" categoryGroups={groupCategories.Career}/>
            <DiscoverGroupCategory  categoryName = "Finance 💸" categoryGroups={groupCategories.Finance}/>
            <DiscoverGroupCategory  categoryName = "Health ❤" categoryGroups={groupCategories.Health}/>
            <DiscoverGroupCategory  categoryName = "Technology 💡" categoryGroups={groupCategories.Technology}/>
            <DiscoverGroupCategory categoryName = "Other 💡" categoryGroups={groupCategories.Other}/>
        </div>
      </div>
    </div>
  )
}
