import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <>
      <div className="w-screen min-h-screen bg-black flex flex-col ">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
