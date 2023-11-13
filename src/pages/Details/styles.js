import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";
    
    > main {
        grid-area: content;
        overflow-y: scroll;
        padding: 64px 0;
    }
`;

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 12px;

        a {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;

export const Content = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 123px;

    display: flex;
    flex-direction: column;

    > button:first-child {
        align-self: end;
    }

    #title {
        display: flex;
        margin-top: 24px;
        align-items: center;
        gap: 19px;
    }

    #icon {
        display: flex;
        gap: 6px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
        font-size: 20px;
    }

    > h1 {
        font-size: 36px;
        font-weight: 500;
        padding-top: 64px;
    }

    #profile{
        display: flex;
        margin-top: 24px;
        margin-bottom: 24px;
        gap: 8px;


        > img {    
            height: 16px;
            width: 16px;
            border-radius: 50%;
        }
        
    }

    > p {
        font-size: 16px;
        margin-top: 40px;
        text-align: justify;
    }

    > a {
        color: ${({ theme }) => theme.COLORS.ORANGE};
        display: flex;
        align-items: center;
        font-size: 16px;
        gap: 8px;
    }    
`;