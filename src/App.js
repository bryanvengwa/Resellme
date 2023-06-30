import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import StartCard from "./components/StartCard";

function App() {
	return (
		<Router>
			<Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/testing" element={<StartCard/>}  />
      </Routes>
		</Router>
	);
}

export default App;
