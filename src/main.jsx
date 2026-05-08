import { createRoot } from "react-dom/client";
import { SnackbarProvider } from "notistack";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./lib/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </Provider>,
);
