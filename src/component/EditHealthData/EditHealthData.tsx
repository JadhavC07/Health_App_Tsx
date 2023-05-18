import { useContext, useEffect, useState } from "react";
import HealthDataContext from "../../context/health-data-context";
import { Link, useParams } from "react-router-dom";
import styless from "./EditHealthData.module.scss";
import { initalState } from "../../store/reducer-store";
import { stateType } from "../../store/store-types";

const EditHealthData = () => {
  const parms: any = useParams();
  console.table(parms);

  console.table(parms);
  const { users, dispatchFun } = useContext(HealthDataContext);

  const [userData, setUserData] = useState<any>(initalState[0]);

  useEffect(() => {
    if (parms.userId) {
      users.forEach((user) => {
        if (user.id === parseInt(parms.userId)) {
          setUserData(user);
        }
      });
    }
    console.log("userData", userData);
  }, [parms]);

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

  const onChangeHealthData = (value: any, healthName: any) => {
    console.log("healthName", healthName);

    const healthData = {
      ...userData[healthName],
      value: value,
    };

    const newUserData = {
      ...userData,
      [healthName]: healthData,
    };

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
            onChange={(e) => onChangeHealthData(e.target.value, "BP")}
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
            onChange={(e) => onChangeHealthData(e.target.value, "HR")}
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
            onChange={(e) => onChangeHealthData(e.target.value, "SBP")}
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
            onChange={(e) => onChangeHealthData(e.target.value, "DBP")}
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
            onChange={(e) => onChangeHealthData(e.target.value, "PR")}
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
            onChange={(e) => onChangeHealthData(e.target.value, "SR")}
            id="SR"
            placeholder={userData.SR.name}
          />
        </div>
        <button type="button" onClick={submitdAta}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditHealthData;
