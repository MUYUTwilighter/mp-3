import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledFooter = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 8cm;
    height: 100%;
    font-size: 4mm;
`;

export default function Footer() {
    return <StyledFooter>
        <StyledNav>
            <Link to="https://github.com/MUYUTwilighter" target="_blank">GitHub</Link> |
            <Link to="https://space.bilibili.com/291040380" target="_blank">bilibili.com</Link> |
            <Link to="https://center.mcmod.cn/67935/" target="_blank">mcmod.cn</Link>
        </StyledNav>
    </StyledFooter>
}