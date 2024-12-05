import logo from "/home/eshan/React-JS/fc-barcelona/src/assets/images/logo.png";

const Header = () => {
  return (
    <>
      <div className="relative flex font-medium bg-bgBlack font-title text-hwhite w-full  text-xl h-14 justify-between">
        <div className="flex  space-x-2 items-center absolute left-4 top-1">
          <img src={logo} className="h-12 w-12"></img>
          <span>Fc Barcelona</span>
        </div>
        <div className="flex space-x-8 items-center  mx-auto">
          <div>Home</div>
          <div>Matches</div>
          <div>Players</div>
          <div>Store</div>
        </div>
      </div>
    </>
  );
};

export default Header;
