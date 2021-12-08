import React from "react";
import './My Profile.css'
import { Person, Business } from '@mui/icons-material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: "#0e2b60",
      light: "#43538e",
      dark: "#000036"
    },
    secondary: {
      main: "#c8534c",
    },
  },
});

const MyProfile = () => {
  return (
    <ThemeProvider theme={theme}>
    <div className="MyProfile">
      <section >
        <p className= "title">My Profile</p>
      </section>
      <section className="generalInfo">
        <div className="divInfo">
          <Person sx={{color: "#c8534c", fontSize: 40, textAlign: "center"}}/> 
          <p className="formTitle">General information</p>
          <span>Fill in your personal data</span>
        </div>
        <div className="divForm">
        <Box
        sx={{width: 250, '& .MuiTextField-root': { m: 1, width: '25ch' } }} autoComplete="off" >
          <form>
            <label>Name:</label>
            <TextField 
            className="input"
            id="input-name"            
            type="text" 
            defaultValue=""           
            name="name"
            size= "small"
            // value={name}
            // onChange={}
            />
            <label>Last name:</label>
            <TextField 
            className="input"
            id="input-lastName"  
            type="text"
            defaultValue=""   
            name="lastName"
            size= "small"
            // value={lastName}
            // onChange={}
            />
            <label>Second last name:</label>
            <TextField 
            className="input"
            id="input-lastName2"  
            type="text"
            defaultValue=""   
            name="lastName2"
            size= "small"
            // value={lastName2}
            // onChange={}
            />
            <label>Date of birth:</label>
            <TextField 
            className="input"
            id="input-dateOfBirth"  
            type="date"
            defaultValue=""   
            name="dateOfBirth"
            size= "small"
            // value={dateOfBirth}
            // onChange={}
            />
            <label>Identification number:</label>
            <TextField 
            className="input"
            id="input-identification" 
            variant="outlined" 
            type="text"
            name="identification"
            size= "small"
            // onChange={}
            // value={legalGender}
            />      
           <label>Legal Gender:</label>
            <TextField 
            className="input"
            id="input-legalGender"  
            type="text"
            defaultValue=""   
            name="legalGender"
            size= "small"
            // value={legalGender}
            // onChange={}
            />
            <label>Phone number:</label>
            <TextField 
            className="input"
            id="input-phone" 
            variant="outlined" 
            type="text"
            name="phone"
            size= "small"
            // onChange={}
            // value={legalGender}
            />
            <Button variant="outlined" color= "secondary" className="button_submit" type="submit">
              Submit
            </Button>      
          </form>
          </Box>
        </div>
      </section>


      <section className="workInfo">
        <div className="divInfo">
          <Business sx={{color: "#c8534c", fontSize: 40, textAlign: "center"}}/> 
          <p className="formTitle">Work information</p>
          <span>Basic information about your role</span>
        </div>
        <div className="divForm">
        <Box
        sx={{width: 250, '& .MuiTextField-root': { m: 1, width: '25ch' } }} autoComplete="off" >
          <form>
            <label>Company:</label>
            <TextField 
            className="input"
            id="input-company"            
            type="text" 
            defaultValue=""           
            name="company"
            size= "small"
            // value={company}
            // onChange={}
            />
            <label>Start date:</label>
            <TextField 
            className="input"
            id="input-startDate"  
            type="date"
            defaultValue=""   
            name="startDate"
            size= "small"
            // value={lastName2}
            // onChange={}
            />
            <label>Working from:</label>
            <TextField 
            className="input"
            id="input-workingFrom"  
            type="text"
            defaultValue=""   
            name="workingFrom"
            size= "small"
            // value={dateOfBirth}
            // onChange={}
            />
            <Button variant="outlined" color= "secondary" className="button_submit" type="submit">
              Submit
            </Button> 
          </form>
          </Box>
        </div>
      </section>
    </div>
    </ThemeProvider>
  );
};

export default MyProfile;