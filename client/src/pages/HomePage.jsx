import "./HomePage.css";
import logo from "../images/groupingLogo.png";
import homeImage from "../images/homeImage.png"
import Grid from "@mui/material/Grid";

function HomePage() {
  return (
    <div className="Home">
     
     {/* section one  */}

          <div className="section-one">
            <img className="logo" src={logo} alt="grouping-logo" />
            <h1 className="home-h1">Everything you need for HR management</h1>
          </div>

{/* section two */}
          <div className="section-two">
          <img className="homeImage" src={homeImage} alt="home"/>
            {/* <div className="features">
              <h2>Declarative</h2>
              <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="features">
              <h2>Components</h2>
              <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className="features">
              <h2>Single-Way</h2>
              <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div className="features">
              <h2>JSX</h2>
              <p>Statically-typed, designed to run on modern browsers.</p>
            </div> */}
          </div>
          </div>
   
  );
}

export default HomePage;
