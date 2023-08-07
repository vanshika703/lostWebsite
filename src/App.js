import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import HostelDetails from "./components/HostelDetails/HostelDetails";
import Footer from "./components/Footer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/hostel",
        element: <HostelDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-dmsans">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
