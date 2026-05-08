import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
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
            Todo List
          </Typography>

          <Box>
            {navItems.map((item, i) => (
              <Button size="small" key={i}>
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
