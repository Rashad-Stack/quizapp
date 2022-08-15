import { Link } from 'react-router-dom';
import Account from './Account';

function Navigation() {
  return (
    <header className="flex justify-between items-center bg-white border-b-2 border-gray-100 px-2 sticky top-0">
      <Link to="/" className="flex items-center gap-2 py-2">
        <div className="w-10">
          <img
            src="https://raw.githubusercontent.com/learnwithsumit/react-quiz/lesson-3/html/images/logo-bg.png"
            alt="Learn With Sumit"
            className="w-full object-cover"
          />
        </div>
        <h3 className="text-heading font-medium">Learn With Sumit</h3>
      </Link>
      <nav className="font-Montserrat">
        <ul>
          <li>
            <Link to="" />
          </li>
        </ul>
      </nav>
      <Account />
    </header>
  );
}

export default Navigation;
