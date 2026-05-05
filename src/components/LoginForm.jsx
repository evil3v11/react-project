import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useState } from "react";

function LoginForm(props) {
  const [data, setData] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeLogin = (e) => setData(e.target.value);
  const handleChangePass = (e) => setPassword(e.target.value);

  const handleLoginClick = () => {
    if (data === "admin" && password === "123") {
      props.setUser({ name: data });
    } else {
      console.log("Unknown user");
    }
  };

  return (
    <Stack sx={{ width: 300, gap: 3 }}>
      <Typography variant="h3" gutterBottom>
        Вход в сервис
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Нет учетной записи?
      </Typography>
      <Button variant="text" onClick={props.handleRegistration}>
        Зарегестрироваться
      </Button>
      <TextField
        id="login"
        label="Login"
        variant="standard"
        onChange={handleChangeLogin}
        value={data}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        variant="standard"
        onChange={handleChangePass}
        value={password}
      />
      <Button onClick={handleLoginClick} variant="contained">
        Войти
      </Button>
    </Stack>
  );
}

export default LoginForm;
