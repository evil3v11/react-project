import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../../lib/userSlice";
import { NavLink } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { Stack, Button } from "@mui/material";

function Profile() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setUser(null));
  };

  return (
    <Stack sx={{ alignItems: "center", fontSize: "1.5rem" }}>
      <NavLink to={-1} style={{ position: "absolute", left: "10px" }}>
        <ArrowBack />
      </NavLink>
      {user.username[0].toUpperCase() + user.username.slice(1)}
      <Button
        variant="contained"
        style={{ marginTop: "25px" }}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Stack>
  );
}

export default Profile;
