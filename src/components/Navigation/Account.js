import { BiUserCircle } from 'react-icons/bi';

function Account() {
  return (
    <div className="flex items-center gap-2">
      <a href="#!" className="flex items-center gap-1">
        <span className="text-3xl">
          <BiUserCircle />
        </span>{' '}
        Signup
      </a>
    </div>
  );
}

export default Account;
