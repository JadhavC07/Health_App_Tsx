import { useContext } from "react";
import { TABLE, stateType } from "../../store/store-types";
import HealthDataContext from "../../context/health-data-context";
import { Link } from "react-router-dom";

const EditHealthData = () => {
  const { userData, changeUserData, changeView } =
    useContext(HealthDataContext);

  //    const currentChange

  const submit = () => {};
  // console.log('userData',userData);

  // FormValidation
  // customHook
  //BP ,name

  const onNameChange = (e: any) => {
    const newUserData = { ...userData, name: e.target.value };
    changeUserData(newUserData, true);
  };

  const onChangeBP = (e: any) => {
    const newBP = { ...userData.BP, value: e.target.value };
    const newUserData = { ...userData, BP: newBP };
    changeUserData(newUserData, true);
  };
  return (
    <div>
      <Link to="/main" className="btn btn-primary btn-sm">Back</Link>
      <form>
        <p>ID :- {userData.id}</p>
        <input
          type="text"
          value={userData.name}
          onChange={onNameChange}
          placeholder="name"
        />

        <span>----------------------------</span>

        <input
          type="number"
          value={userData.BP.value}
          onChange={onChangeBP}
          placeholder={userData.BP.name}
        />
      </form>
    </div>
  );
};

export default EditHealthData;
