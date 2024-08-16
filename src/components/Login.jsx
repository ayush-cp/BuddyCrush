import React, { useContext, useState } from 'react'
import { signInWithGoogle } from './auth'
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';
import { createUser } from './users';

export default function Login() {
    const { setUser } = useContext(UserContext);  // Accessing setUser from UserContext
    const navigate = useNavigate();
    // 
    // const [userInfo, setUserInfo] = useState(null)
    const [groupsJoined, setGroupsJoined] = useState([])
    const handleGoogleSignIn = async () => {
        try {
            const user = await signInWithGoogle();
            if (!user || !user.uid) {
                console.error("No valid user data returned from Google sign-in.");
                alert("Error signing in: No user information found.");
                return;
            }

            console.log(user);

            setUser(user);
            
            const userInfo ={
                name: user.displayName,
                uid: user.uid,
                email: user.email,
                photoUrl: user.photoURL,
                groupsJoined: groupsJoined,
            }
            console.log(userInfo)
            await createUser(userInfo);
            console.log("User successfully created with ", userInfo)
            console.log(`Welcome ${user.displayName}`);
            navigate('/dashboard');  // Redirecting to the dashboard
        } catch (error) {
            console.error("Error signing in with Google:", error);
            console.log("Error signing in with Google");
        }
    }

    return (
    <div className='login'>
        <div className="loginContainer">
            <h1>Login</h1>
            <button className="loginGoogle" onClick={handleGoogleSignIn}>
                <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" />
                <span>Sign in with Google</span> 
            </button>
        </div>
    </div>
    );
}
