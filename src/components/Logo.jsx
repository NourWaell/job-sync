import logo from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <img
      src={logo}
      alt="JobSync logo"
      className="logo"
      style={{ height: "50px" }}
    />
  );
};
export default Logo;
