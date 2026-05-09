import axios from "axios";
import React from "react";
import { store } from "../../lib/store";
import { NavLink, useLoaderData } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import {
  ArrowBackIos,
  Tornado,
  TornadoOutlined,
  TornadoSharp,
} from "@mui/icons-material";

export const todoLoader = async ({ params }) => {
  const id = params.id;
  const user = store.getState().userSlice.user;

  try {
    const res = await axios.get(`https://todos-be.vercel.app/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${user?.access_token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

function Todo() {
  const todo = useLoaderData();
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
          sx={{ verticalAlign: "middle", position: "relative", bottom: "1.5px" }}
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
