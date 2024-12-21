import logo from "/home/eshan/React-JS/fc-barcelona/src/assets/images/logo.png";

const Header = () => {
  return (
    <>
      <nav className="relative flex font-medium bg-bgBlack font-title text-hwhite w-full  text-xl h-14 justify-between">
        <a
          href="#"
          className="flex  space-x-2 items-center absolute left-4 top-1"
        >
          <img src={logo} className="h-12 w-12"></img>
          <span>Fc Barcelona</span>
        </a>
        <div className="flex space-x-8 items-center  mx-auto">
          <div>Home</div>
          <div>Matches</div>
          <div>Players</div>
          <div>Standings</div>
        </div>
      </nav>
    </>
  );
};

export default Header;
