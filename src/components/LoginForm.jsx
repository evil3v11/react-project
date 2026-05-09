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
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setUser } from "../lib/userSlice";

function LoginForm() {
  const [data, setData] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleChangeLogin = (e) => setData(e.target.value);
  const handleChangePass = (e) => setPassword(e.target.value);

  const handleLoginClick = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post("https://todos-be.vercel.app/auth/login", {
        username: data,
        password: password,
      });

      if (res.status === 200 && res.data.username) {
        const setUserAction = setUser(res.data);
        dispatch(setUserAction);

        enqueueSnackbar("Welcome, " + res.data.username, {
          variant: "success",
        });
        
        navigate('/')
      }
    } catch (e) {
      enqueueSnackbar("Invalid data or server error?", { variant: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack sx={{ width: 300, gap: 3, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        Вход в сервис
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Нет учетной записи?
        <NavLink style={{ display: "block", marginTop: '10px', textDecoration: 'none', color: 'rgb(25, 118, 210)' }} to="/register">
          Зарегистрироваться
        </NavLink>
      </Typography>

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
        onClick={handleLoginClick}
        variant="contained"
      >
        Войти
      </Button>
    </Stack>
  );
}

export default LoginForm;
