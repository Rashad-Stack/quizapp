import Account from './Account';

function Navigation() {
  return (
    <header className="flex justify-between items-center bg-white border-b-2 border-gray-100 px-2 sticky top-0">
      <a href="#!" className="w-10 py-2">
        <img
          src="https://raw.githubusercontent.com/learnwithsumit/react-quiz/lesson-3/html/images/logo-bg.png"
          alt="Learn With Sumit"
          className="w-full object-cover"
        />
      </a>
      <nav className="font-Montserrat">
        <ul>
          <li></li>
        </ul>
      </nav>
      <Account />
    </header>
  );
}

export default Navigation;
