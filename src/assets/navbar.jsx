import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <div style={{
      display: "flex", justifyContent: "space-evenly", padding: "20px", fontSize: "larger", backgroundColor: "#f0f0f0",
      fontWeight: "bold",
      hover: {
        color: "blue", textDecoration: "underline", cursor: "pointer",
      }
    }
    } >



      <Link to="/home">
        Home
      </Link>
      <Link to="/contact">
        Contact
      </Link>
      <Link to="/about">
        About
      </Link>
      <Link to="/services">
        Services
      </Link>
      <Link to="/portfolio">
        Portfolio
      </Link>
      <Link to="/todo">
        To-Do
      </Link>
      <Link to="/ApiConnect">
        API Connect
      </Link>
      <Link to="/AdvencedApi">
        Advanced API
      </Link>


    </ div>
  );
}




export default Navbar

