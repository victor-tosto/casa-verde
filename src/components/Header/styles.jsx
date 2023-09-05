import { styled } from "styled-components";

export const HeaderWrapper = styled.header`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
`;

export const NavList = styled.ul`
    display: flex;
    list-style: none;
`;

export const NavLink = styled.a`
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--link-color);
    text-decoration: none;
`;

export const Separator = styled.span`
    font-size: 1.6rem;
    color: var(--link-color);
    margin: 0 1.5rem;
`;
