import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header"
    "content";

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Content = styled.div`
    padding: 0 123px;
    overflow-y: auto;

    #top {
        display: flex;
        margin-top: 50px;
        margin-bottom: 50px;
        justify-content: space-between;
    }
`;

export const NewNote = styled(Link)`
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    min-width: 200px;
    height: 48px;

    svg {
        margin-right: 8px;
    }
`;