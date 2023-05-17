import { HealthDataContextWrapper } from "./context/health-data-context";
import MainComponent from "./component/MainComponent/MainComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./component/HomePage/HomePage";
import RootComp from "./RootComp/RootComp";
import EditHealthData from "./component/EditHealthData/EditHealthData";
import ViewHealthData from "./component/ViewHealthData/ViewHealthData";
import "./App.css";
import ShowHealthData from "./component/ShowHealthData/ShowHealthData";

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
        path: "/show",
        element: <ShowHealthData />,
      },
      {
        path: "/edit/:userId",
        element: <EditHealthData />,
      },
      {
        path: "/view/:userId",
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
