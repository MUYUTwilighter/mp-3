import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-around;
    color: #fff;
    overflow: auto;
`;

const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media (pointer: fine) and (hover: hover) {
        :hover {
            background-color: #242424;
            color: white;
        }
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    text-align: center;
    height: 100%;
    justify-content: center;
    align-content: center;
    width: 30mm;

    @media screen and (max-width: 26cm) {
        width: 20mm;
        margin: 0 1mm;
    }
`;

export default function Nav() {
    return <StyledNav>
        <LinkContainer><StyledLink to={"/"}>Home</StyledLink></LinkContainer>
        <LinkContainer><StyledLink to={"/education"}>Education</StyledLink></LinkContainer>
        <LinkContainer><StyledLink to={"/skills"}>Skills</StyledLink></LinkContainer>
        <LinkContainer><StyledLink to={"/projects"}>Projects</StyledLink></LinkContainer>
        <LinkContainer><StyledLink to={"/interests"}>Interests</StyledLink></LinkContainer>
        <LinkContainer><StyledLink to={"/contact"}>Contact</StyledLink></LinkContainer>
    </StyledNav>
}