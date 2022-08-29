import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Style.css";
import Home from "./components/templates/Home";
import List from "./components/templates/List";
import Post from "./components/templates/Post";
import Single from "./components/templates/SinglePhoto";
import { AuthProvider } from './context/Authcontext';

function App() {
  return (
    <div className="App">
      <AuthProvider >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/list" element={<List />}/>
            <Route path="/post" element={<Post />}/>
            <Route path="/single" element={<Single />}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
