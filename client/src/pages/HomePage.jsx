import "./HomePage.css";
import teamwork from "../images/teamwork.png";
import mission from "../images/mission.png";
import Typography from "@mui/material/Typography";
import BasicCard from "../components/Cards/Cards";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Footer from './../components/Footer/Footer'

function HomePage() {
  return (
    // <Box
    //   sx={{
    //     width: 1000,
    //     height: 300,
    //     textAlign: "center",
    //     "& .MuiTextField-root": { m: 1, width: "25ch" },
    //   }}
    //   autoComplete="off"
    // >

    <div className="Home">
      <Grid container spacing={2}>
        {" "}
        {/* section one  */}
        <Grid item xs={12}>
          <div className="section-one">
            <img src={teamwork} className="teamwork-img" alt="teamwork" />
          </div>
        </Grid>
        {/* section two */}
        <Grid item xs={12}>
          <div className="section-two">
            <Typography variant="h4" className="introduction-h4">
              Everything you need for HR management
            </Typography>
            <BasicCard />
          </div>
        </Grid>
        {/* section three */}
        <Grid item xs={12}>
          <div className="side">
            <img src={mission} alt="missiong-img" />
          </div>
        </Grid>  

          <Grid item xs={12}>
          <div className="side">
            <div className="circle">
              <Typography variant="h4" className="mission-text">
                {" "}
                Our Mission
              </Typography>
              <Typography variant="h5" className="mission-text">
                We help companies that want to automate their HR processes,
                empower their employees with always up-to-date information and
                make the best decisions for their business.
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="section-four"></div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default HomePage;
