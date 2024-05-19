import styled, { css } from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('./header.jpg') no-repeat center;
    background-size: cover;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.8);
    }
`;

export const Heading = styled.h1`
    font-size: 4rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    z-index: 2;
`;

export const IntroSection = styled.section`
    padding: 0.8rem;
    margin-top: 2rem;

    ${({ theme }) => css`
        @media (min-width: ${theme.breakpoints.tablet + 1}px) {
            padding: 2.4rem;
        }
    `}
`;

export const IntroText = styled.p`
    font-size: 1.8rem;
`;

export const TeamSection = styled.section`
    padding: 0.8rem;
    margin-top: 2rem;
    font-size: 1.8rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => css`
        @media (min-width: ${theme.breakpoints.tablet + 1}px) {
            padding: 2.4rem;
        }
    `}
`;

export const TeamTitle = styled.p`
    font-size: 2.4rem;
    font-weight: 500;
    margin-bottom: 4rem;
`;

export const TeamDetails = styled.p`
    margin-bottom: 4rem;
`;  

export const TeamList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    ${({ theme }) => css`
        @media (min-width: ${theme.breakpoints.tablet + 1}px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    `}

    
`;

export const TeamMember = styled.li`
    display: flex;
    flex-direction: column;

    & a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};

        img {
            border-radius: 50%;
            border: 0.6rem solid ${({ theme }) => theme.colors.white};
        }

        p {
            font-size: 2.4rem;
            font-weight: 500;
        }
    }
`;


export const MemberTechs = styled.ul`
    list-style: none;
    li {
        position: relative;

        &:before {
            content: '- ';
        }
    }
`;