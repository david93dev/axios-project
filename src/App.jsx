import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
