import { Link, useLocation } from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <h3>Hi,</h3>
          <h5>I am M. Fiqri Al-Fathon</h5>
          <p>Mahasiswa Teknik Elektro FT UNTIRTA</p>
        </h1>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/mo-logo.jpeg`}
          alt="person picture"
          height="400"
        />
      </div>
    </div>
  );
}

export default Home;