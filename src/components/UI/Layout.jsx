import { Person } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Stack,
  Toolbar,
  Typography,
  Link,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { selectUser, setUser } from "../../lib/userSlice";
import { jwtDecode } from "jwt-decode";
import { isFuture } from "date-fns";

const unloggedItems = [
  <NavLink style={{ color: "#fff", textDecoration: "none" }} to="login">
    Login
  </NavLink>,
  <NavLink style={{ color: "#fff", textDecoration: "none" }} to="register">
    Register
  </NavLink>,
  <NavLink style={{ color: "#fff", textDecoration: "none" }} to="about">
    About
  </NavLink>,
];

const loggedItems = [
  <NavLink style={{ color: "#fff", textDecoration: "none" }} to="about">
    About
  </NavLink>,
  <NavLink style={{ color: "#fff", textDecoration: "none" }} to="profile">
    <Person />
  </NavLink>,
];

function Layout() {
  const user = useSelector(selectUser);
  const localStorageToken = localStorage.getItem("token");
  const navItems = user ? loggedItems : unloggedItems;
  const dispatch = useDispatch();

  if (!user && localStorageToken) {
    const { exp, username } = jwtDecode(localStorageToken);
    if (isFuture(exp * 1000)) {
      dispatch(setUser({ username, access_token: localStorageToken }));
    } else localStorage.removeItem("token");
  }

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              component={NavLink}
              to="/"
              underline="hover"
              sx={{
                color: "whitesmoke",
                "&:hover": { color: "white", opacity: [0.9, 0.8, 0.7] },
              }}
            >
              Todo List
            </Link>
          </Typography>

          <Box>
            {navItems.map((item, i) => (
              <Button
                size="small"
                key={i}
                sx={{ "&:hover": { color: "white", opacity: [0.9, 0.8, 0.7] } }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Stack sx={{ marginTop: "80px", alignItems: "center" }}>
        <Outlet />
      </Stack>
    </>
  );
}

export default Layout;
