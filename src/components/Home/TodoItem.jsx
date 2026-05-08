import { React, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

function TodoItem({ todo, handleDeleteTodo, handleDoneTodo, handleUpdateTodo }) {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(todo.title || "");
  const [description, setDescription] = useState(todo.description || "");

  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChangeDescription = (e) => setDescription(e.target.value);
  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
    if (isEdit) handleUpdateTodo(todo.id, title, description)
  } 

  return (
    <Card
      sx={{
        minWidth: 275,
        backgroundColor: todo.isDone ? "beige" : undefined,
      }}
    >
      <CardContent>
        <Stack>
          {isEdit ? (
            <TextField
              label="Heading"
              size="small"
              value={title}
              onChange={handleChangeTitle}
            />
          ) : (
            <Typography gutterBottom>{todo.title}</Typography>
          )}
          {isEdit ? (
            <TextField
              label="Description"
              size="small"
              value={description}
              onChange={handleChangeDescription}
            />
          ) : (
            <Typography variant="body2">{todo.description}</Typography>
          )}
        </Stack>
      </CardContent>
      <CardActions>
        <Checkbox
          checked={todo.isDone}
          onChange={() => handleDoneTodo(todo.id)}
        />
        <Button size="small" onClick={toggleIsEdit}>
          {isEdit ? "Save" : "Change"}
        </Button>
        <Button
          size="small"
          sx={{ backgroundColor: "crimson", color: "white" }}
          onClick={() => handleDeleteTodo(todo.id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default TodoItem;
