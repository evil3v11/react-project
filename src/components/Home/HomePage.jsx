import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";

const HomePage = (props) => {
  const toDo = {
    id: "13",
    title: "Get Haircut",
    description: "Need to get to the barbershop",
    isDone: true,
  };

  return (
    <div>
      <Typography>{props.username}</Typography>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography gutterBottom>{toDo.title}</Typography>
          <Typography variant="body2">{toDo.description}</Typography>
        </CardContent>
        <CardActions>
          <Checkbox checked={toDo.isDone} />
          <Button size="small">Change</Button>
          <Button
            size="small"
            sx={{ backgroundColor: "crimson", color: "white" }}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default HomePage;
