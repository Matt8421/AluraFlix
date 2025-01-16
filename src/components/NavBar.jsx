
import { Link } from "react-router-dom";
import styled from "styled-components";

// Define el estilo para el texto del logo
const LogoText = styled.h1`
  font-size: 2rem; /* Tamaño del texto */
  color: #1e2a44; /* Color personalizado (puedes cambiarlo) */
  font-weight: bold; /* Asegura que el texto esté en negrita */
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  
  @media screen and (max-width: 768px) {
    font-size: 1.5rem; /* Tamaño reducido para pantallas pequeñas */
  }
`;

const NavBar = () => {
  return (
    <Link to="/">
      <LogoText className="header__logo">MattDeveloper</LogoText>
    </Link>
  );
};

export default NavBar;
