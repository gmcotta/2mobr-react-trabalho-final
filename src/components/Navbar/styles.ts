import styled from 'styled-components';

export const Navbar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    height: 4rem;
    display: flex;
    align-items: center;
    padding: 0 0.8rem;
    z-index: 1;

    & a {
        font-size: 2rem;
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.black};
    }
`;
