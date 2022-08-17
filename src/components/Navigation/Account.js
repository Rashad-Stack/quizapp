import { BiLogIn, BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Account() {
  const { currentUser, logout } = useAuth();
  return (
    <div className="flex items-center gap-2">
      {currentUser ? (
        <>
          <span className="cursor-pointer">
            <BiUserCircle size={30} />
          </span>
          <span> {currentUser.displayName}</span>
          <span className="cursor-pointer" onClick={logout}>
            <BiLogIn size={30} />
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}

export default Account;
