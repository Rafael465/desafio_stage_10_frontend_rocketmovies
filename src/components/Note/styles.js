import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled(Link)``;

export const Content = styled.div`
    background: rgba(255, 133, 155, 5%);
    padding: 32px;
    border-radius: 8px;
    margin-bottom: 24px;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > p {
        display: flex;
        margin-top: 15px;
        text-align: justify;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }

    #star {
        display: flex;
        gap: 6px;
    }

    svg {
            display: flex;
            margin-top: 8px;
            color: ${({ theme }) => theme.COLORS.ORANGE};
            font-size: 24px;
    }
`;