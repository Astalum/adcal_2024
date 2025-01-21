import "./index.css";
import MainPage from "./pages/home";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root") as Element);

root.render(
	<StrictMode>
		<MainPage />
	</StrictMode>,
);
