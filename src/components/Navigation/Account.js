import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

function Account() {
  return (
    <div className="flex items-center gap-2">
      <Link to="/profile" className="flex items-center gap-1">
        <span className="text-3xl">
          <BiUserCircle />
        </span>
      </Link>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Account;
