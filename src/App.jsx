import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import EditMenu from "./pages/EditMenu.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/edit-menu" element={<EditMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
