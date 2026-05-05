import { React, useState } from "react";
import Typography from "@mui/material/Typography";
import TodoItem from "./TodoItem";
import Button from "@mui/material/Button";
import AddTodo from "./AddTodo";

const todo = {
  id: "13",
  title: "Get Haircut",
  description: "Need to get to the barbershop",
  isDone: true,
};

const HomePage = (props) => {
  const [todos, setTodos] = useState([todo]);

  const handleAddTodo = (title, description) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
      description,
      isDone: true,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <Typography>{props.username}</Typography>
      <AddTodo addTodo={handleAddTodo} />
      {todos.map((item) => (
        <TodoItem todo={item} key={item.id} />
      ))}
    </div>
  );
};

export default HomePage;
