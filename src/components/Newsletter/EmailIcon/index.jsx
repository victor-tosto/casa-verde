import { styled } from "styled-components";

const IconContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 1.75rem;
    transform: translateY(-50%);
`

const EmailIcon = () => {
    return (
        <IconContainer>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" viewBox="0 0 24 12" fill="none">
                <g opacity="0.3">
                    <path d="M3.58826 1H20.8432C22.0294 1 23 1.56008 23 2.24461V9.7123C23 10.3968 22.0294 10.9569 20.8432 10.9569H3.58826C2.40198 10.9569 1.4314 10.3968 1.4314 9.7123V2.24461C1.4314 1.56008 2.40198 1 3.58826 1Z" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M23 2.24475L12.2157 6.60091L1.4314 2.24475" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
            </svg>
        </IconContainer>
    );
}

export default EmailIcon;
