import React, { useContext, useState, useEffect } from 'react';
import Navbar from './Navbar';
import Habit from './Habit';
import Discover from './Discover';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import { UserContext } from '../UserContext';

export default function Dashboard() {
  const { user, setUser } = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.uid) {
      const fetchUserData = async () => {
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(userDocRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setUserData(data);
            console.log('User data:', JSON.stringify(data, null, 2)); // Log the data here
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchUserData();
    } else {
      setLoading(false);
    }
  }, [user]);

  return (
    <div className='dashboard'>
      <Navbar />
      <div className="dashboardElements">
        {loading ? <div>Loading...</div> : <Habit data ={userData}/>}
        <Discover />
      </div>
    </div>
  );
}
