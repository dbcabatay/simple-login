import "./App.css";
import LoginForm from "./components/LoginForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LoginForm} />
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
