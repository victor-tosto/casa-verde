import { InputContainer, NewsletterBoldText, NewsletterContainer, NewsletterParagraph, NewsletterText, PlantImage,  } from "./styles";
import EmailIcon from "./EmailIcon";

const Newsletter = () => {
    return (
        <NewsletterContainer>
            <div>
                <NewsletterText>Sua casa com as</NewsletterText>
                <NewsletterBoldText>melhores plantas</NewsletterBoldText>
                <NewsletterParagraph>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</NewsletterParagraph>
                <InputContainer>
                    <EmailIcon />
                    <input type="email" placeholder="Insira seu e-mail" />
                    <button>Assinar newsletter</button>
                </InputContainer>
            </div>
            <PlantImage>
            </PlantImage>
        </NewsletterContainer>
    );
}

export default Newsletter;
