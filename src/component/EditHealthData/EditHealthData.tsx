import { useContext } from "react";
import HealthDataContext from "../../context/health-data-context";
import { Link } from "react-router-dom";

const EditHealthData = () => {
  const { userData, changeUserData } = useContext(HealthDataContext);

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
  const onChangeSBP = (e: any) => {
    const newSBP = { ...userData.SBP, value: e.target.value };
    const newUserData = { ...userData, SBP: newSBP };
    changeUserData(newUserData, true);
  };
  const onChangeDBP = (e: any) => {
    const newDBP = { ...userData.SBP, value: e.target.value };
    const newUserData = { ...userData, SBP: newDBP };
    changeUserData(newUserData, true);
  };
  return (
    <div>
      <Link to="/main" className="btn btn-primary btn-sm">
        Back
      </Link>
      <p>ID :- {userData.id}</p>
      <form className="d-flex">
        <div className="">
          <input
            type="text"
            value={userData.name}
            onChange={onNameChange}
            placeholder="name"
          />
          <input
            type="number"
            value={userData.BP.value}
            onChange={onChangeBP}
            placeholder={userData.BP.name}
          />

          <input
            type="number"
            value={userData.BP.value}
            onChange={onChangeSBP}
            placeholder={userData.SBP.name}
          />

          <input
            type="number"
            value={userData.BP.value}
            onChange={onChangeDBP}
            placeholder={userData.DBP.name}
          />
          <input
            type="number"
            value={userData.BP.value}
            onChange={onChangeBP}
            placeholder={userData.BP.name}
          />
          <input
            type="text"
            value={userData.name}
            onChange={onNameChange}
            placeholder="name"
          />

          <input
            type="number"
            value={userData.BP.value}
            onChange={onChangeBP}
            placeholder={userData.BP.name}
          />
        </div>
      </form>
    </div>
  );
};

export default EditHealthData;
