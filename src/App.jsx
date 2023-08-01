import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import Preferences from './components/Preferences/Preferences'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import useToken from './customHooks/useToken'

function App() {
  const { token, setToken } = useToken()
  
  if (!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/preferences">Preferences</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
