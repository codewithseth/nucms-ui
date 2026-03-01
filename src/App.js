import { Outlet } from "react-router-dom";
import "./App.css";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Outlet />
      <Toaster richColors position="top-center" duration={4000} />
    </>
  );
}

export default App;
