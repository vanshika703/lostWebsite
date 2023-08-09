import "./App.css";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import HostelDetails from "./components/HostelDetails/HostelDetails";
import Footer from "./components/Footer";
import WorkWithUsPage from "./components/WorkWithUs/WorkWithUsPage";
import AOS from "aos";
import "aos/dist/aos.css";

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
        path: "/hostel/:id",
        element: <HostelDetails />,
      },
      {
        path: "/workwithus",
        element: <WorkWithUsPage />,
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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
