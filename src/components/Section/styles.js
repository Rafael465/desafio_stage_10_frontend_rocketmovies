import styled from 'styled-components';

export const Container = styled.section`
    margin: 0;

    > h2 {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 20px;
        font-weight: 400;
    }
`;