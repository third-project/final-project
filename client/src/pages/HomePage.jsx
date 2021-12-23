import "./HomePage.css";
import teamwork from "../images/Data analyse.png";
import timeOff from "../images/calendar.png";
import clock from "../images/schedule.png";
import tasks from "../images/tasks.png";
import Footer from "./../components/Footer/Footer";
import Container from "@mui/material/Container";

function HomePage(props) {
  const {user} = props
  
  const style = ()=> {
    let style = {}
    if (user) {
      style ={width:"80vw"}
    }  else {
      style ={width:"98vw"}
    }
    return style
  }
  

  return (
    <>
      <div className="Home" style={style()} >
        <Container>
          {/* section one  */}

          <section className="section-one">
            <p className="title">
              Everything you need for Human Resources Management
            </p>
            <div className="container">
              <div className="text-container">
                <p>
                  Let's empower your job-processes with always up-to-date
                  information, making the best decisions for your business.
                </p>
              </div>
              <div className="image-container">
                <img src={teamwork} className="teamwork-img" alt="teamwork" />
              </div>
            </div>
          </section>
          {/* secondary section */}
          <section className="section-two">
            <div className="text-container">
              <p>
                Manage your employees' time-off and absences quickly and easily.
              </p>
            </div>
            <div className="image-container">
              <img src={timeOff} className="image" alt="calendar" />
            </div>
          </section>

          {/* secondary section */}

          <section className="section-two">
            <div className="image-container">
              <img src={clock} className="image" alt="calendar" />
            </div>
            <div className="text-container">
              <p>
                Record the hours your employees work, increase the productivity
                of your company and reduce absenteeism.
              </p>
            </div>
          </section>

          {/* secondary section */}

          <section className="section-two">
            <div className="text-container">
              <p>
                Plan, organize, and prioritize your employees' tasks, in order
                to fast the company productivity efficiently.
              </p>
            </div>
            <div className="image-container">
              <img src={tasks} className="image" alt="calendar" />
            </div>
          </section>
        </Container>
      </div>
      <Footer user={user} />
    </>
  );
}

export default HomePage;
