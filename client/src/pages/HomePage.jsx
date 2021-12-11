import "./HomePage.css";
import teamwork from "../images/teamwork.png";
import Typography from '@mui/material/Typography';
import BasicCard from "../components/Cards/Cards";

function HomePage() {
  return (
    <div className="Home">
      {/* section one  */}

      <div className="section-one">
        <img src={teamwork} className="teamwork-img" alt="teamwork" />
      </div>

      {/* section two */}
      <div className="section-two">
       < Typography variant="h4" className="home-h4">Everything you need for HR management</Typography>
       <BasicCard/>
        
       </div>
    </div>
  );
}    

export default HomePage;
