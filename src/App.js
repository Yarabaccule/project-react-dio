import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Cadastro } from "./pages/cadastro";
import { FirstPage } from "./pages/fistpage";


function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/firstpage" element={<FirstPage/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>
    </Router>
  </>
  );
}

export default App;
