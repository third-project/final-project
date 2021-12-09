import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import HailTwoToneIcon from "@mui/icons-material/HailTwoTone";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';

import "./Cards.css";

const cardUseStyles = makeStyles((theme) => ({
  Card: {
    height: "100%",
    width:"40%",
    display: "flex",
    flexPosition: "row",
  },
  CardContent: {
    backgroundColor:"9695F0",
    maxHeight: "100%",
    maxWidth: "100%",
  },
}));

export default function ActionAreaCard() {
  const cardClasses = cardUseStyles();
  return (
    <div className="card-item">
      <Container className={cardClasses.cardGrid}>
        {/* End hero unit */}
        <Grid container spacing={2}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea classname="cards">
              <HailTwoToneIcon />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Holidays and absences
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Manage your employees vacations and absences quickly and
                  easily.
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActionArea>
              <AccessTimeTwoToneIcon />
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

            <CardActionArea>
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
