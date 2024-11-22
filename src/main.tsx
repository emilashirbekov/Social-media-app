import { createRoot } from "react-dom/client";
import "./index.css";
import { AppRouter } from "./router/AppRouter";

createRoot(document.getElementById("root")!).render(<AppRouter />);
