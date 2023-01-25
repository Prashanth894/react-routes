import {Link} from "react-router-dom"
import './App.css';

function Nav() {
  return (
   <div>
     <nav className="Nav">
        
          <Link to="/" className="link active"> Home</Link>
          <Link to="/Cryptocurrency" className="link"> Cryptocurrency </Link>
          <Link to="/Nasa" className="link"> Nasa API </Link>
          <Link to="/Covid" className="link"> Covid API</Link>
          <Link to="/Login" className="link">Login</Link>
      </nav>
   
   </div>
  );
}

export default Nav;

