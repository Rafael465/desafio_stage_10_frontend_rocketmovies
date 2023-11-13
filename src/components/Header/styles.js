import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;

    height: 116px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

    display: flex;
    justify-content: space-between;

    padding: 0 123px;
`;

export const Brand = styled(Link)`
    display: flex;
    justify-content: start;
    align-items: center;

    > h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`;

export const Search = styled.div`
    display: flex;
    width: 100%;
    padding: 0 64px;
    align-items: center;
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: end;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 16px;
        line-height: 24px;

        strong {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.WHITE};
            min-width: 94px;
        }

        button {
            background: none;
            border: none;
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_300};        
        }
    }
`;

export const Logout= styled.button`
    border: none;
    background: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 12px;
    }
`;