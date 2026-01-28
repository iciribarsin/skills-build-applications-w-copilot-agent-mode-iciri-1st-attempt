import './App.css';
import logo from './octofitapp-small.png';
import { FaUser, FaHeart, FaShoppingBag, FaSearch } from 'react-icons/fa';
import { Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <div className="App" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)' }}>
      {/* Header */}
      <header className="octofit-header shadow-sm bg-white">
        <div className="container-fluid d-flex align-items-center justify-content-between py-2">
          <div className="d-flex align-items-center">
            <img src={logo} alt="OctoFit Logo" className="App-logo me-2" style={{height: 48}} />
            <span className="fw-bold fs-3 text-primary">OctoFit</span>
          </div>
          <nav className="octofit-nav mx-4">
            <ul className="nav fw-bold">
              <li className="nav-item mx-2"><Link className="nav-link text-dark" to="/activities">ACTIVITIES</Link></li>
              <li className="nav-item mx-2"><Link className="nav-link text-dark" to="/leaderboard">LEADERBOARD</Link></li>
              <li className="nav-item mx-2"><Link className="nav-link text-dark" to="/teams">TEAMS</Link></li>
              <li className="nav-item mx-2"><Link className="nav-link text-dark" to="/users">USERS</Link></li>
              <li className="nav-item mx-2"><Link className="nav-link text-dark" to="/workouts">WORKOUTS</Link></li>
            </ul>
          </nav>
          <form className="d-flex align-items-center octofit-search" style={{maxWidth: 320}}>
            <input className="form-control me-2" type="search" placeholder="Search activities, users..." aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit"><FaSearch /></button>
          </form>
          <div className="d-flex align-items-center ms-4">
            <div className="mx-2 text-center"><FaUser size={20} /><div style={{fontSize: 12}}>Profile</div></div>
            <div className="mx-2 text-center"><FaHeart size={20} /><div style={{fontSize: 12}}>Wishlist</div></div>
            <div className="mx-2 text-center"><FaShoppingBag size={20} /><div style={{fontSize: 12}}>Bag</div></div>
          </div>
        </div>
      </header>
      {/* Banner */}
      <div className="octofit-banner d-flex align-items-center justify-content-center my-3" style={{background: 'linear-gradient(90deg, #fffde4 0%, #f7e8ff 100%)', borderRadius: 16, minHeight: 120}}>
        <div className="text-center">
          <span className="fw-bold fs-4 text-warning">Get 25% Off</span>
          <span className="mx-3 fs-5 text-secondary">Up To $200 Off*</span>
          <span className="badge bg-primary fs-6 mx-2">OCTOFIT25</span>
          <span className="text-muted ms-2">On Your First Activity Log | T&C Apply</span>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mt-4">
        <div className="card shadow-sm p-4 mb-4 bg-white rounded">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={<h2 className="display-5 text-center">Welcome to OctoFit Tracker! Use the menu to view data.</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
