import { React, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

function TodoItem({
  todo,
  handleDeleteTodo,
  handleDoneTodo,
  handleUpdateTodo,
  isLoading,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(todo.title || "");
  const [description, setDescription] = useState(todo.description || "");
  const navigate = useNavigate();

  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChangeDescription = (e) => setDescription(e.target.value);
  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
    if (isEdit) handleUpdateTodo(todo._id, title, description);
  };

  return (
    <Card
      sx={{
        minWidth: 275,
        backgroundColor: todo.completed ? "beige" : undefined,
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
              disabled={isLoading}
            />
          ) : (
            <Typography
              gutterBottom
              sx={{ cursor: "pointer" }}
              onClick={() => navigate(`todos/${todo._id}`)}
            >
              {todo.title}
            </Typography>
          )}
          {isEdit ? (
            <TextField
              label="Description"
              size="small"
              value={description}
              onChange={handleChangeDescription}
              disabled={isLoading}
            />
          ) : (
            <Typography
              variant="body2"
              sx={{ cursor: "pointer" }}
              onClick={() => navigate(`todos/${todo._id}`)}
            >
              {todo.description}
            </Typography>
          )}
        </Stack>
      </CardContent>
      <CardActions>
        <Checkbox
          checked={todo.completed}
          onChange={() => handleDoneTodo(todo._id)}
        />
        <Button size="small" onClick={toggleIsEdit} disabled={isLoading}>
          {isEdit ? "Save" : "Change"}
        </Button>
        <Button
          size="small"
          sx={{ backgroundColor: "crimson", color: "white" }}
          onClick={() => handleDeleteTodo(todo._id)}
          disabled={isLoading}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default TodoItem;
