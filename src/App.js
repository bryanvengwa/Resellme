import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import StartCard from "./components/StartCard";
import ThemeContextProvider from "./Context/ThemeContext";

function App() {
	return (
		<ThemeContextProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/testing" element={<StartCard />} />
				</Routes>
			</Router>
		</ThemeContextProvider>
	);
}

export default App;
