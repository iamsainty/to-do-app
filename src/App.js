import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ToDoPage from "./components/ToDoPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/to-do" element={<ToDoPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
