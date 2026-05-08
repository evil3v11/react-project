import { Stack, Typography } from "@mui/material";
import NotInterstedIcon from "@mui/icons-material/NotInterested";
import { NavLink } from "react-router-dom";

function ErrorElement() {
  return (
    <Stack sx={{ marginTop: "150px", alignItems: "center" }}>
      <NotInterstedIcon color="error" sx={{ width: "50px", height: "50px" }} />
      <Typography variant="h3" color="initial">
        An error has occured
      </Typography>
      <Typography>We're working to fix it</Typography>
      <NavLink to="/login">Main Page</NavLink>
    </Stack>
  );
}

export default ErrorElement;
