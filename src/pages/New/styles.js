import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    >main {
        grid-area: content;
        overflow-y: auto;
    }

    .title {
        display: flex;
        gap: 40px;
        margin-bottom: 40px;
    }

    .tags {
        display: flex;
        gap: 24px;
        padding: 16px;
        margin-top: 24px;
        border-radius: 8px;
        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    h2 {
        margin-top: 40px;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;

export const Form = styled.form`
    margin: 38px 123px;

    > header {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;

        gap: 24px;
        margin-bottom: 36px;

        a {
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.ORANGE};
        }
    }

    #back {
        display: flex;
        gap: 8px;
        align-items: center;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > footer {
        display: flex;
        margin-top: 40px;
        gap: 40px;
    }

    #delete {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`;