import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  <NavLink to="login">Login</NavLink>,
  <NavLink to="register">Register</NavLink>,
  <NavLink to="about">About</NavLink>,
];

function Layout() {
  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Todo List
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, i) => (
              <Button key={i} sx={{ color: "#fff" }}>
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
