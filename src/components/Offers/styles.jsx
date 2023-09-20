import styled from "styled-components";

export const OffersWrapper = styled.section`
    max-width: 120rem;
    margin: 4.4rem auto 15.3rem;

    > p {
        font-size: 2.2rem;
        color: var(--link-color);
        opacity: 0.5;
        text-align: center;
        margin-bottom: 1.2rem;
    }

    > ul {
        list-style-type: none;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 3rem;
    }
`;

export const OffersSubtitle = styled.h2`
    font-size: 8.2rem;
    font-weight: 900;
    font-family: var(--secondary-font);
    text-align: center;
    margin-bottom: 0.4rem;
`;

export const Filter = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 2rem 0;
`;

export const OrderButton = styled.button`

`;

