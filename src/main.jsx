import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import ThemeProvider from "./providers/ThemeProvider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={router} />
    <Toaster />
  </ThemeProvider>
);
