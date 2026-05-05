import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";

function TodoItem({todo}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom>{todo.title}</Typography>
        <Typography variant="body2">{todo.description}</Typography>
      </CardContent>
      <CardActions>
        <Checkbox checked={todo.isDone} />
        <Button size="small">Change</Button>
        <Button
          size="small"
          sx={{ backgroundColor: "crimson", color: "white" }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default TodoItem;
