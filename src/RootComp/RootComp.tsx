import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import styless from "./RootComp.module.scss";


const RootComp = () => {
  return (
    <>
      <div className={styless["outlet"]}>
        <Header />
        <h1>USer-Outlet</h1>
        <Outlet />
      </div>
    </>
  );
};

export default RootComp;
