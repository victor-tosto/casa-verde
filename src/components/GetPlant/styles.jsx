import styled from "styled-components";

export const GetPlantWrapper = styled.section`
    display: flex;
    max-width: 99.5rem;
    max-height: 44rem;
    margin: 22.8rem auto 0;
    margin-top: 22.8rem;
    filter: drop-shadow(10px 10px 30px rgba(0, 0, 0, 0.06));
    background-color: var(--white);
    z-index: 2;
    position: relative;
`;

export const GetPlantImage = styled.div`
    background-image: url('../../public/assets/images/get-plant.png');
    background-size: cover;
    background-repeat: no-repeat;
    width: 58.5rem;
`;

export const GetPlantInfo = styled.div`
    padding: 5.8rem 3.2rem;

    > p {
        font-size: 2.2rem;
        color: var(--link-color);
        opacity: 0.5;
        margin-bottom: 1.2rem;
    }

    > h3 {
        font-size: 4.2rem;
        font-weight: 900;
        font-family: var(--secondary-font);
        margin-bottom: 3.2rem;
    }
`;

export const GetPlantList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    li {
        display: flex;
        align-items: center;
        gap: 1.6rem;

        span {
            font-size: 2.2rem;
            color: var(--link-color);
            opacity: 0.5;
        }
    }
`
