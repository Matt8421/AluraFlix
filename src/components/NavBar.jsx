import { Link } from "react-router-dom";
import logo from "../../public/img/LogoMatt.png";
import styled from "styled-components";
const Logo = styled.img`
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  @media screen and (max-width: 768px) {
    width: 10.5208rem;
    height: 2.5rem;
  }
`;

const NavBar = () => {
  return (
    <Link to="/">
      <Logo className="header__logo" src={logo} alt="" />
    </Link>
  );
};

export default NavBar;
