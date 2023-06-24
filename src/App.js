import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainNav from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNav />
        <Routes>
          <Route to="/" element={<Home />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
