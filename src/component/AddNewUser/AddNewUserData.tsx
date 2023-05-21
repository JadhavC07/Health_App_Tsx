import { useState } from "react";
import styless from "../TableComp/TableComp.module.scss";
import { useNavigate } from "react-router-dom";
import { stateType } from "../../store/store-types";

const AddNewUserData = () => {
  const [newUsersData, setnewUsersData] = useState<any>([]);
  const [showAddUser, setShowAddUser] = useState(false);

  const [newUserId, setNewUserId] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newUserBP, setNewUserBP] = useState("");
  const [newUserHR, setNewUserHR] = useState("");
  const [newUserSBP, setNewUserSBP] = useState("");
  const [newUserDBP, setNewUserDBP] = useState("");
  const [newUserPR, setNewUserPR] = useState("");
  const [newUserSR, setNewUserSR] = useState("");

  const BtnNavigate = useNavigate();
  const handleToggleAddUser = () => {
    setShowAddUser(!showAddUser);
  };

  
  const onEdit = (userDATA: stateType) => {
    BtnNavigate(`/edit/${userDATA.id}`);
  };

  const onView = (userDATA: stateType) => {
    console.table(userDATA);

    BtnNavigate(`/view/${userDATA.id}`);
  };
  const newUser = (
    userId: any,
    userName: any,
    userBP: any,
    userHR: any,
    userSBP: any,
    userDBP: any,
    userPR: any,
    userSR: any
  ) => {
    const getNewUserData = {
      id: userId,
      name: userName,
      BP: { value: userBP },
      HR: { value: userHR },
      SBP: { value: userSBP },
      DBP: { value: userDBP },
      PR: { value: userPR },
      SR: { value: userSR },
    };

    setnewUsersData((prevUsers: any) => [...prevUsers, getNewUserData]);
  };
  const handleAddUser = () => {
    newUser(
      newUserId,
      newUserName,
      newUserBP,
      newUserHR,
      newUserSBP,
      newUserDBP,
      newUserPR,
      newUserSR
    );
  };

  const userDataMap = newUsersData.map((user: any) => (
    <tr className={styless["tr"]} key={user.id}>
      <td className={styless["td"]}>{user.id}</td>
      <td className={styless["td"]}>{user.name}</td>
      <td className={styless["td"]}>{user.BP.value}</td>
      <td className={styless["td"]}>{user.HR.value}</td>
      <td className={styless["td"]}>{user.SBP.value}</td>
      <td className={styless["td"]}>{user.DBP.value}</td>
      <td className={styless["td"]}>{user.PR.value}</td>
      <td className={styless["td"]}>{user.SR.value}</td>
      <td className={styless["td"]}>
        <button className="btn btn-primary" onClick={() => onEdit(user)}>
          Edit
        </button>
      </td>
      <td className={styless["td"]}>
        <button className="btn btn-outline-dark" onClick={() => onView(user)}>
          View
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <button className="btn btn-primary" onClick={handleToggleAddUser}>
        {showAddUser ? "Cancel" : "Add User"}
      </button>

      {showAddUser && (
        <>
          <input
            type="number"
            value={newUserId}
            onChange={(e) => setNewUserId(e.target.value)}
            placeholder="id"
          />
          <input
            type="text"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="number"
            value={newUserBP}
            onChange={(e) => setNewUserBP(e.target.value)}
            placeholder="BP"
          />
          <input
            type="number"
            value={newUserHR}
            onChange={(e) => setNewUserHR(e.target.value)}
            placeholder="HR"
          />
          <input
            type="number"
            value={newUserSBP}
            onChange={(e) => setNewUserSBP(e.target.value)}
            placeholder="SBP"
          />
          <input
            type="number"
            value={newUserDBP}
            onChange={(e) => setNewUserDBP(e.target.value)}
            placeholder="DBP"
          />
          <input
            type="number"
            value={newUserPR}
            onChange={(e) => setNewUserPR(e.target.value)}
            placeholder="PR"
          />
          <input
            type="number"
            value={newUserSR}
            onChange={(e) => setNewUserSR(e.target.value)}
            placeholder="SR"
          />
          <button className="btn btn-primary" onClick={handleAddUser}>
            Add User
          </button>
        </>
      )}
      {userDataMap}
    </div>
  );
};

export default AddNewUserData;


