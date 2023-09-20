import styled from "styled-components";

export const OfferItemWrapper = styled.li`
    max-width: 37.9rem;
    max-height: 20rem;
    display: flex;
    background: var(--white);
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);
`;

export const OfferPlant = styled.div`
    width: 37.9rem;
    background-image: url('/assets/images/${props => props.img}.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`;

export const PlantInfo = styled.div`

    padding: 2.7rem 2.5rem;

    > h2 {
        font-family: var(--secondary-font);
        font-size: 3.2rem;
        font-weight: 900;
        margin-bottom: 0.8rem;
    }

    > p {
        font-size: 1.6rem;
        color: var(--link-color);
        opacity: 0.5;
        margin-bottom: 2.4rem;
    }
`;

export const Buy = styled.div`

    display: flex;
    align-items: center;
    gap: 2.5rem;
    
    > p {
        font-size: 1.6rem;
        color: var(--yellow);
    }

    > img {
        width: 1.4rem;
    }
`;
