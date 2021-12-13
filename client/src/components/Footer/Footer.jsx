import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    const team = [
        {
            name: "José Luis",
            linkedin: "", 
            github: ""
        }, 
        {
            name: "Tatiana Prada",
            linkedin: "https://www.linkedin.com/in/tatiana-prada/", 
            github: "https://github.com/TatianaPrada"
        },
        {
            name: "Raquel Hidalgo",
            linkedin: "", 
            github: ""
        }
    ]

return (
    <footer>
    <div>
        <p> Created and develoved by:</p>
    </div>
    <div>
        {team.map((each, index) => {
          return (
            <div>
                <p>{each.name}</p>
                <a href={each.github}><GitHubIcon></GitHubIcon></a>
                <a href={each.linkedin}><LinkedInIcon></LinkedInIcon></a>
            </div>
            );
        })}
    </div>

    </footer>
)
}

export default Footer