import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

function SignUpForm() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleLogin = () => setIsLoginForm(true);
  const handleRegistration = () => setIsLoginForm(false);

  return isLoginForm ? (
    <LoginForm handleRegistration={handleRegistration} />
  ) : (
    <RegistrationForm handleLogin={handleLogin} />
  );
}

export default SignUpForm;
