import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import HailTwoToneIcon from "@mui/icons-material/HailTwoTone";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';

import "./Cards.css";

export default function ActionAreaCard() {
 
  return (
   
    <div>
      <Container className="card-container">
        <Grid container spacing={2}>
          <Card sx={{ maxWidth: 345 }} className="cards">
            <CardActionArea className="card-item">
              <HailTwoToneIcon  />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Time Off
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Manage your employees vacations and absences quickly and
                  easily.
                </Typography>
              </CardContent>
            </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="cards">
            <CardActionArea >
              <AccessTimeTwoToneIcon/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Clock In
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Record the hours your employees work, increase the
                  productivity of your company and reduce absenteeism.
                </Typography>
              </CardContent>
            </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="cards"> 
            <CardActionArea >
            <AssignmentTwoToneIcon/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Tasks
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Allows you to plan, organize, and prioritize tasks to finish them efficiently.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Container>
    </div>
  );
}
