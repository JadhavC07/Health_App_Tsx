import { useContext, useEffect, useState } from "react";
import HealthDataContext from "../../context/health-data-context";
import { Link, useParams } from "react-router-dom";
import styless from "./EditHealthData.module.scss";
import { initalState } from "../../store/reducer-store";
import { stateType } from "../../store/store-types";

const EditHealthData = () => {
  const parms = useParams();
  console.table(parms);
  const { users, dispatchFun } = useContext(HealthDataContext);

  const [userData, setUserData] = useState<stateType>(initalState[0]);

  const onNameChange = (e: any) => {
    console.log("e.name", e.target.value);
    const newUserData = { ...userData, name: e.target.value };
    setUserData(newUserData);
    const action = {
      type: "UPDATE_USER_DATA",
      userData: userData,
    };
    dispatchFun(action);
  };

  const onChangeHR = (e: any) => {
    const newHR = { ...userData.HR, value: e.target.value };
    const newUserData = { ...userData, HR: newHR };
    setUserData(newUserData);
  };

  const onChangeSBP = (e: any) => {
    const newSBP = { ...userData.SBP, value: e.target.value };
    const newUserData = { ...userData, SBP: newSBP };
    setUserData(newUserData);
  };
  const onChangeDBP = (e: any) => {
    const newDBP = { ...userData.DBP, value: e.target.value };
    const newUserData = { ...userData, BP: newDBP };
    setUserData(newUserData);
  };

  const onChangeBP = (e: any) => {
    const newBP = { ...userData.BP, value: e.target.value };
    const newUserData = { ...userData, BP: newBP };
    setUserData(newUserData);
  };

  const onChangePR = (e: any) => {
    const newPR = { ...userData.HR, value: e.target.value };
    const newUserData = { ...userData, HR: newPR };
    setUserData(newUserData);
  };

  const submitdAta = () => {
    const action = {
      type: "UPDATE_USER_DATA",
      userData: userData,
    };
    dispatchFun(action);
  };

  return (
    <div>
      <p className="btn btn-outline-primary m-2">ID :- {userData.id}</p>
      <form className={styless["form-control"]}>
        <div className={styless["form-input"]}>
          <label htmlFor="name" className={styless["font"]}>
            User Name
          </label>
          <input
            type="text"
            value={userData.name}
            onChange={onNameChange}
            placeholder="name"
          />
        </div>

        <div className={styless["form-input"]}>
          <label htmlFor="bp" className={styless["font"]}>
            {userData.BP.name}
          </label>
          <input
            type="number"
            value={userData.BP.value}
            onChange={onChangeBP}
            id="bp"
            placeholder={userData.BP.name}
          />
        </div>

        <div className={styless["form-input"]}>
          <label htmlFor="HR" className={styless["font"]}>
            {userData.HR.name}
          </label>
          <input
            type="number"
            value={userData.HR.value}
            onChange={onChangeHR}
            id="HR"
            placeholder={userData.HR.name}
          />
        </div>

        <div className={styless["form-input"]}>
          <label htmlFor="SBP" className={styless["font"]}>
            {userData.SBP.name}
          </label>
          <input
            type="number"
            value={userData.SBP.value}
            onChange={onChangeSBP}
            id="SBP"
            placeholder={userData.SBP.name}
          />
        </div>

        <div className={styless["form-input"]}>
          <label htmlFor="DBP" className={styless["font"]}>
            {userData.DBP.name}
          </label>
          <input
            type="number"
            value={userData.DBP.value}
            onChange={onChangeDBP}
            id="DBP"
            placeholder={userData.DBP.name}
          />
        </div>

        <div className={styless["form-input"]}>
          <label htmlFor="PR" className={styless["font"]}>
            {userData.PR.name}
          </label>
          <input
            type="number"
            value={userData.PR.value}
            onChange={onChangePR}
            id="PR"
            placeholder={userData.PR.name}
          />
        </div>

        <div className={styless["form-input"]}>
          <label htmlFor="SR" className={styless["font"]}>
            {userData.SR.name}
          </label>
          <input
            type="number"
            value={userData.SR.value}
            onChange={onChangeBP}
            id="SR"
            placeholder={userData.SR.name}
          />
        </div>
        <input type="button" value="Submit" onClick={submitdAta} />
      </form>
    </div>
  );
};

export default EditHealthData;
