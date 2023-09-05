import { styled } from "styled-components";

export const NewsletterContainer = styled.section`
    display: flex;
    margin-top: 15rem;
`;

export const NewsletterText = styled.p`
    font-size: 2.2rem;
    color: var(--link-color);
    opacity: 0.5;
    margin-bottom: 1.2rem;
`;

export const NewsletterBoldText = styled.h2`
    font-size: 8.2rem;
    font-family: var(--secondary-font);
    max-width: 3.7rem;
    margin-bottom: 2.7rem;
`;

export const NewsletterParagraph = styled.p`
    font-size: 1.6rem;
    color: var(--link-color);
    opacity: 0.5;
    line-height: 2.6rem;
    max-width: 48rem;
    margin-bottom: 3.7rem;
`;

export const InputContainer = styled.div`

    position: relative;

    input, button {
        border: none;
        outline: 0;
        font-family: inherit;
    }

    input {
        padding: 2.7rem 5.5rem 2.8rem;
        font-size: 1.6rem;

        &::placeholder {
            opacity: 0.3;
        }
    }

    button {
        background-color: var(--yellow);
        color: var(--white);
        padding: 2.7rem 2.3rem 2.8rem;
        font-size: 1.6rem;
    }
`
