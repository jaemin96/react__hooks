import "./app.css";
import { Routes, Route } from "react-router-dom";
import NotExistPage from "./pages/404/notExistPage";
import HookUseRef from "./components/UseRef/hookUseRef";
import HookUseState from "./components/UseState/hookUseState";

function App() {
  return (
    <div>
      <Routes>
        {/* Add Components */}
        <Route path="/ref" element={<HookUseRef />} />
        <Route path="/state" element={<HookUseState />} />
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
