import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleLogin = () => {
    setIsLoginForm(true);
  };

  const handleRegistration = () => {
    setIsLoginForm(false);
  };

  const handleChangeLogin = (e) => {
    setData(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Stack sx={{ alignItems: "center" }}>
      {isLoginForm ? (
        <Stack sx={{ width: 300, gap: 3 }}>
          <Typography variant="h3">Вход в сервис {data}</Typography>
          <Typography variant="subtitle1">Нет учетной записи?</Typography>
          <Button variant="text" onClick={handleRegistration}>
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
          <Button onClick={handleLogin} variant="contained">
            Войти
          </Button>
        </Stack>
      ) : (
        <Stack sx={{ width: 300, gap: 3 }}>
          <Typography variant="h3">Регистрация</Typography>
          <Typography variant="subtitle1">Есть учетная запись?</Typography>
          <Button variant="text" onClick={handleLogin}>
            Войти
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
          <Button variant="contained">Регистрация</Button>
        </Stack>
      )}
    </Stack>
  );
}

export default App;
