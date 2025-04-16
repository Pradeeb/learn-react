import { useContext } from "react";
import { userContext } from "../App";

function Header(props) {
  console.log(props);

  let {user}=useContext(userContext)
  
  console.log(user);
  
  return (
    <div>
        <h1 className="bg-orange-300">ToDo List  <span><b>USER :</b>{user.name}</span></h1>
    </div>
  )
}

export default Header