import { InputContainer, NewsletterBoldText, NewsletterContainer, NewsletterParagraph, NewsletterText,  } from "./styles";

const Newsletter = () => {
    return (
        <NewsletterContainer>
            <div>
                <NewsletterText>Sua casa com as</NewsletterText>
                <NewsletterBoldText>melhores plantas</NewsletterBoldText>
                <NewsletterParagraph>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</NewsletterParagraph>
                <InputContainer>
                    <input type="email" placeholder="Insira seu e-mail" />
                    <button>Assinar newsletter</button>
                </InputContainer>
            </div>
                img
            <div>

            </div>
        </NewsletterContainer>
    );
}

export default Newsletter;
