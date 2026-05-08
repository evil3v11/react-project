import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useSnackbar } from "notistack";
import { React, useState } from "react";

function RegistrationForm(props) {
  const [data, setData] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleChangeLogin = (e) => setData(e.target.value);
  const handleChangePass = (e) => setPassword(e.target.value);

  const handleRegistrationClick = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://todos-be.vercel.app/auth/register",
        {
          username: data,
          password: password,
        },
      );

      if (res.status === 201 && res.data.username) {
        const res = await axios.post("https://todos-be.vercel.app/auth/login", {
          username: data,
          password: password,
        });

        if (res.status === 200 && res.data.username) {
          props.setUser({ name: res.data.username });
          enqueueSnackbar("Welcome, " + res.data.username, {
            variant: "success",
          });
        }
      }
    } catch (e) {
      enqueueSnackbar(
        e.response?.data?.message || "Invalid data or server error",
        { variant: "error" },
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack sx={{ width: 300, gap: 3 }}>
      <Typography variant="h3" gutterBottom>
        Регистрация
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Есть учетная запись?
      </Typography>
      <Button variant="text" onClick={props.handleLogin}>
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
      <Button
        disabled={isLoading || !data || !password}
        variant="contained"
        onClick={handleRegistrationClick}
      >
        Регистрация
      </Button>
    </Stack>
  );
}

export default RegistrationForm;
