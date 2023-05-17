import { useContext } from "react";
import HealthDataContext from "../../context/health-data-context";
import ShowHealthData from "../ShowHealthData/ShowHealthData";
import { TABLE } from "../../store/store-types";

const MainComponent = () => {
  setTimeout(() => {}, 1000);
  return (
    <div>
      <ShowHealthData />
    </div>
  );
};

export default MainComponent;
