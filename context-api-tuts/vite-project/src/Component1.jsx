import { useContext } from "react";
import { MyContext } from "./context";
import DisplayMsg from "./DisplayMsg";
import MyState from "./MyState";
import UpdateState from "./UpdateState";

const Component1 = () => {
  const { myMsg, myState ,setMyState} = useContext(MyContext);
   
  
  return (
          <div className="text-center mt-3">
        <h2 className="text-3xl"> Component1</h2>
         <DisplayMsg /> 
          <MyState />
      <UpdateState />

      </div>
    
  );
};

export default Component1;
