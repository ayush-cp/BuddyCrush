import './App.css'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Navbar from './components/Navbar'
import NewGroup from './components/NewGroup'
import DiscoverGroupsSection from './components/DiscoverGroupsSection'
// import Signup from './components/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserProvider } from './UserContext'
function App() {
  

  return (
    <UserProvider>

    <div className='main-container'>
      {/* <Navbar/> */}
      <Router>
        <Routes>
          {/* <Route path='/register' element={<Signup/>} /> */}
          <Route path='/' element={<Login/>} /> 
          <Route path='/newgroup' element={<NewGroup/>} /> 
          <Route path='/discovergroup' element={<DiscoverGroupsSection/>} /> 
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </Router>
      {/* <Signup/> */}
      {/* <Dashboard/> */}
      {/* <NewGroup/> */}
     </div>
    </UserProvider>
  )
}

export default App;
