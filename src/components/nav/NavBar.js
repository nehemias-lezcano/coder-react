import React, {useState} from "react";
import CartWidget from '../CartWidget';
import { 
  IconLogo, 
  Menu, 
  MenuItem, 
  MenuItemLink, 
  IconLogoMobile, 
  NavbarContainer,
  IconCart, 
  NavbarWrapper } from "./Navbar.elements";
import { DiCodeBadge } from "react-icons/di";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [click, setClick] = useState(false);
  
  const ChangeClick = () => {
    setClick(!click);
  };
  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <IconLogo>
            <DiCodeBadge size={"2em"} />
            NewPes
          </IconLogo>
          
          <IconLogoMobile onClick={() => ChangeClick()}>
            {click ? <FaTimes /> : <FaBars />}
          </IconLogoMobile>
          <Menu click ={click}>
            <MenuItem>
              <MenuItemLink onClick={() => ChangeClick()}>Inicio</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => ChangeClick()}>Nuestros productos</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => ChangeClick()}>Sobre nosotros</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => ChangeClick()}>Contacto</MenuItemLink>
            </MenuItem>
          </Menu>
          <IconCart>
            <CartWidget />
          </IconCart>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  );
};

export default Navbar;