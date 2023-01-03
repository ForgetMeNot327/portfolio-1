import { Routes, Route } from "react-router-dom";
import Home from "./route/Home";

const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

function App() {
  return (
    <>
      <MyRoute />
    </>
  );
}

export default App;
