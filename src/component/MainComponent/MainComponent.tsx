import { useContext } from "react";
import HealthDataContext from "../../context/health-data-context";
import ShowHealthData from "../ShowHealthData/ShowHealthData";
import { TABLE } from "../../store/store-types";

const MainComponent = () => {
  const healthContext = useContext(HealthDataContext);

  const { currentPageState } = healthContext;
  setTimeout(() => {}, 1000);
  return <div>{currentPageState === TABLE && <ShowHealthData />}</div>;
};

export default MainComponent;
