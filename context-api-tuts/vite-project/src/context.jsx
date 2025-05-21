import { createContext, useState } from "react";

const MyContext = createContext({
  myMsg: "",
  myState: "",
  setMyState: () => {},
});

const MyContextProvider = ({ children }) => {
  const myMsg = "hello i  am data df";
  const [myState, setMyState] = useState("maha");

  return (
    <MyContext.Provider value={{ myMsg, myState, setMyState }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
