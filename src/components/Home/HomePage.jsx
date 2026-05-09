import { React, useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import { enqueueSnackbar } from "notistack";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../lib/userSlice";
import { Navigate } from "react-router-dom";

function HomePage() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector(selectUser);

  const getTodos = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("https://todos-be.vercel.app/todos", {
        headers: {
          Authorization: `Bearer ${user?.access_token}`,
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
    if (user?.access_token) getTodos();
  }, [user?.access_token]);

  if (!user) return <Navigate to='/login' />

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
            Authorization: `Bearer ${user?.access_token}`,
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
            Authorization: `Bearer ${user?.access_token}`,
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
            Authorization: `Bearer ${user?.access_token}`,
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
            Authorization: `Bearer ${user?.access_token}`,
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
      <Typography>{user?.username}</Typography>
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
}

export default HomePage;
