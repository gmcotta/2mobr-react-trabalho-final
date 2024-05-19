import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    align-items: center;
    text-align: center;
    padding: 1.6rem;

    nav {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
    }
`;


export const Logo = styled.p`
    font-size: 2rem;
    font-weight: 500;
`;
