// import React, {useState} from 'react'
// import { register } from './auth';
// // import "./style/authentication.css";
// import { Link } from 'react-router-dom';

// export default function Signup() {

// const [email, setEmail] = useState('')
// const [password, setPassword] = useState('')
// const [username, setUsername] = useState('')
// const handleSubmit = async (e)=>{
//     e.preventDefault();
//     try{
//         await register(username, email, password)
//         console.log("registered")
//     }catch(error){
//         console.log("An error in registering ", error)
//         // throw error;
//     }
// }

//   return (
//     <div className='signup'>
//         <div className="registercontainer">
//             {/* <div className="registerbox"> */}
//                 <h1>Register</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="username">Username</label>
//                         <input type="text" className="form-control" id="username" placeholder="Enter Username" 
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required/>
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="email">Email</label>
//                             <input type="email" className="form-control" id="email" placeholder="Enter Email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required/>
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="password">Password</label>
//                                 <input type="password" className="form-control" id="password" placeholder="Enter Password"
//                                  value={password}
//                                  onChange={(e) => setPassword(e.target.value)}
//                                 required/>
//                             </div>
//                             {/* <div className="form-group">
//                                 <label htmlFor="password">Confirm Password</label>
//                                 <input type="password" className="form-control" id="password" placeholder="Enter Password" required/>
//                             </div> */}
//                             <div className="form-group submit-control">
//                             <button type="submit" className="btn">Register</button>
//                             <p >
//                                 Already registered <Link to="/login">log in?</Link>
//                             </p>
//                             </div>

                        

//                 </form>
//             {/* </div> */}
//         </div>
//     </div>
//   )
// }
