import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { CircularProgress, Stack, Typography } from "@mui/material";
import {
  ArrowBackIos,
  Tornado,
  TornadoOutlined,
  TornadoSharp,
} from "@mui/icons-material";
import { enqueueSnackbar } from "notistack";
import { useSelector } from "react-redux";
import { selectUser } from "../../lib/userSlice";

function Todo() {
  const [isLoading, setIsLoading] = useState(false);
  const [todo, setTodo] = useState();
  const user = useSelector(selectUser);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      axios
        .get(`https://todos-be.vercel.app/todos/${id}`, {
          headers: {
            Authorization: `Bearer ${user?.access_token}`,
          },
        })
        .then((res) => setTodo(res.data))
        .catch((e) => {
          enqueueSnackbar(
            e.response?.data?.message || "Invalid data or server error",
            { variant: "error" },
          );
        })
        .finally(() => setIsLoading(false));
    }
  }, [id]);

  if (!id) {
    return (
      <div>
        <Typography variant="h3">ID was not found</Typography>
        <NavLink to="/">Home Page</NavLink>
      </div>
    );
  }

  if (isLoading) return <CircularProgress />;

  return (
    <Stack>
      <NavLink
        to={-1}
        style={{
          position: "absolute",
          left: "10px",
          textDecoration: "none",
          verticalAlign: "top",
          color: "rgb(25, 118, 210)",
          fontFamily: "Roboto",
        }}
      >
        <ArrowBackIos
          sx={{
            verticalAlign: "middle",
            position: "relative",
            bottom: "1.5px",
          }}
        />
        Back
      </NavLink>
      <Stack sx={{ alignItems: "center" }}>
        <Typography variant="h3">{todo?.title}</Typography>
        <Typography variant="h4">{todo?.description}</Typography>
      </Stack>
    </Stack>
  );
}

export default Todo;
