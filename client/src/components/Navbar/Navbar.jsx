import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
      navigate('/login')
  }

  const handleRegister = () => {
    navigate('/register')
  }

  return (
    <div className="container">
        <div className="logo">
            <Link to='/'>Zomato</Link>
        </div>
        <div className="buttons">
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
        </div>
    </div>
  )
}

export default Navbar