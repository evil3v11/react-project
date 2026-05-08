import {
  AppBar,
  Box,
  Button,
  Stack,
  Toolbar,
  Typography,
  Link,
} from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

const navItems = [
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

function Layout() {
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
