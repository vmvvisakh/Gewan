import Home from "./pages/home/home";
import Login from "./pages/login/login";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
      <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='login' element={<Login />} />  
      
      </Routes>
      </Router>
    </div>
  );
}

export default App;
