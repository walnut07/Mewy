import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Style.css";
import Home from "./components/templates/Home";
import List from "./components/templates/List";
import Post from "./components/templates/Post";
import Single from "./components/templates/SinglePhoto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/list" element={<List />}/>
          <Route path="/post" element={<Post />}/>
          <Route path="/single" element={<Single />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
