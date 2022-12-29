import styled from "styled-components";

export const NavbarContainer = styled.div` 
width: 100%;
Height: 80px;
position: sticky;
top: 0;
z-index: 99;
background-color: #B6D4B9;
`;

export const NavbarWrapper = styled.div`
margin: auto;
width: 100%;
max-width: 1300px;
height: 100%;
align-items: center;
display: flex;
flew-wrap: wrap;
justify-content: space-between;
`;

export const IconLogo = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
font-family: "Montserrat";
font-size: 1.2rem;
color: #000000;
padding-left: 1rem;
`;

export const Menu = styled.ul`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 968px){
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => click ? 0 : "-100%"};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: #DB629E;
    &:hover{
        background-color: black;
        border-botton: 0.3rem solid #DB629E;
        transition: 0.4s ease-in;
    }
}
`;
export const MenuItem = styled.li`
height: 100%;
padding: 0.5rem 1.5rem;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
font-family: "Montserrat";
font-weight: 400;
&:hover{
    background-color: black;
    border-botton: 0.3rem solid #DB629E;
    transition: 0.4s ease-in;
}
@media screen and (max-width: 968px){
    width: 100%;
    height: 70px;
}
`;

export const MenuItemLink = styled.a`
text-decoration: none;
color: white;
`;

export const IconLogoMobile = styled.div`
    display: none;
    
    @media screen and (max-width: 968px){
        display: flex;
        color: #000000;
        font-size: 2rem;
        padding-right: 1rem;
    }
`;

export const IconCart = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    font-family: "Montserrat";
    font-size: 1.6rem;
    color: #000000;
    padding-left: 1rem;
    @media screen and (max-width: 968px){
        display: flex;
        color: #000000;
        font-size: 2rem;
        padding-right: 1rem;
    }
`;