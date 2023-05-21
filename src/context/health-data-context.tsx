import { createContext, useReducer } from "react";
import styless from "./HealthData.module.scss";
import reducerFunction, {
  initalState,
  initalStateValue,
} from "../store/reducer-store";


const HealthDataContext = createContext({
  users: initalState,
  dispatchFun: (action: any) => {},
});

export const HealthDataContextWrapper: React.FC<any> = (props) => {
  const [userState, dispatch] = useReducer(reducerFunction, initalStateValue);

  const dispatchFun = (action: any) => {
    dispatch(action);
  };

  const { children } = props;
  return (
    <HealthDataContext.Provider
      value={{
        users: userState,
        dispatchFun: dispatchFun,
      }}
    >
      <div className={styless["container-main"]}>{children}</div>
    </HealthDataContext.Provider>
  );
};

export default HealthDataContext;
