import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ManageMenu from "./pages/ManageMenu.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/manage-menu" element={<ManageMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
