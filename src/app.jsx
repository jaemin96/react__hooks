import "./app.css";
import { Routes, Route } from "react-router-dom";
import NotExistPage from "./pages/404/notExistPage";

function App() {
  return (
    <div>
      <Routes>
        {/* Add Components */}
        {/* ... */}
        {/* ... */}
        {/* ... */}
        {/* ... */}
        {/* ************** */}

        {/* 404 error - not exist page */}
        <Route path="*" element={<NotExistPage />} />
      </Routes>
    </div>
  );
}

export default App;
