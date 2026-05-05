import { React, useState } from "react";
import Typography from "@mui/material/Typography";
import TodoItem from "./TodoItem";
import Button from "@mui/material/Button";

const todo = {
  id: "13",
  title: "Get Haircut",
  description: "Need to get to the barbershop",
  isDone: true,
};

const HomePage = (props) => {
  const [todos, setTodos] = useState([todo]);

  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now().toString(),
      title: "Get Haircut",
      description: "Need to get to the barbershop",
      isDone: true,
    };
    
    setTodos([...todos, newTodo])
  };

  return (
    <div>
      <Typography>{props.username}</Typography>
      <Button onClick={handleAddTodo}>Add Todo</Button>
      {todos.map((item) => (
        <TodoItem todo={item} key={item.id} />
      ))}
    </div>
  );
};

export default HomePage;
