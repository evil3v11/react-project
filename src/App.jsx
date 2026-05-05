import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography"

function App() {
  return (
    <Stack sx={{ alignItems: "center" }}>
      <Stack sx={{ width: 300, gap: 3 }}>
        <Typography variant="h3">Вход в сервис</Typography>
        <TextField id="standard-basic" label="Login" variant="standard" />
        <TextField id="standard-basic" label="Password" type="password" variant="standard" />
        <Button variant="contained">Войти</Button>
      </Stack>
    </Stack>
  );
}

export default App;
