import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Notifications from "./pages/Notifications/Notifications";
import Home from "./pages/HomePage/HomePage";
import Default from "./pages/Default/Default";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="*" element={<Default />} />
      </Route>
    </Routes>
  );
}

export default App;
