import { HealthDataContextWrapper } from "./context/health-data-context";
import MainComponent from "./component/MainComponent/MainComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./component/HomePage/HomePage";
import Header from "./Header/Header";
import "./App.css";
import RootComp from "./RootComp/RootComp";
import EditHealthData from "./component/EditHealthData/EditHealthData";
import ViewHealthData from "./component/ViewHealthData/ViewHealthData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootComp />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/main",
        element: <MainComponent />,
      },
      {
        path: "/edit",
        element: <EditHealthData />,
      },
      {
        path: "/view",
        element: <ViewHealthData />,
      },
    ],
  },
]);

function App() {
  return (
    <HealthDataContextWrapper>
      <RouterProvider router={router} />
      {/* <MainComponent /> */}
    </HealthDataContextWrapper>
  );
}

export default App;
