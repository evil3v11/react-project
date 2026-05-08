import { React, useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import { enqueueSnackbar } from "notistack";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const HomePage = (props) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTodos = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("https://todos-be.vercel.app/todos", {
        headers: {
          Authorization: `Bearer ${props.username.access_token}`,
        },
      });
      setTodos(res.data);
    } catch (e) {
      enqueueSnackbar(e.response?.data?.message || "Error fetching data", {
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (props.username.access_token) getTodos();
  }, [props.username.access_token]);

  if (isLoading) return <CircularProgress />;

  const handleAddTodo = async (title, description) => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://todos-be.vercel.app/todos",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${props.username.access_token}`,
          },
        },
      );
      await getTodos();
    } catch (e) {
      enqueueSnackbar(e.response?.data?.message || "Error sending data", {
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      setIsLoading(true);
      const res = await axios.delete(
        `https://todos-be.vercel.app/todos/${id}`,
        {
          headers: {
            Authorization: `Bearer ${props.username.access_token}`,
          },
        },
      );
      await getTodos();
    } catch (e) {
      enqueueSnackbar(e.response?.data?.message || "Error deleting data", {
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDoneTodo = async (id) => {
    try {
      setIsLoading(true);
      const res = await axios.patch(
        `https://todos-be.vercel.app/todos/${id}`,
        {
          completed: !todos.find((item) => item._id === id).completed,
        },
        {
          headers: {
            Authorization: `Bearer ${props.username.access_token}`,
          },
        },
      );
      await getTodos();
    } catch (e) {
      enqueueSnackbar(e.response?.data?.message || "Error", {
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateTodo = async (id, title, description) => {
    try {
      setIsLoading(true);
      const res = await axios.patch(
        `https://todos-be.vercel.app/todos/${id}`,
        {
          id,
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${props.username.access_token}`,
          },
        },
      );
      await getTodos();
    } catch (e) {
      enqueueSnackbar(e.response?.data?.message || "Error updating data", {
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Typography>{props.username.username}</Typography>
      <AddTodo addTodo={handleAddTodo} />
      {todos.map((item) => (
        <TodoItem
          todo={item}
          key={item._id}
          handleDeleteTodo={handleDeleteTodo}
          handleDoneTodo={handleDoneTodo}
          handleUpdateTodo={handleUpdateTodo}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
};

export default HomePage;
