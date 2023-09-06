import { InputContainer, NewsletterBoldText, NewsletterContainer, NewsletterParagraph, NewsletterText, PlantImage,  } from "./styles";
import EmailIcon from "./EmailIcon";
import { useState } from "react";
import NewsletterModal from "./NewsletterModal";

const Newsletter = () => {

    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);

    const inputEmail = (e) => {
        setEmail(e.target.value);
    }

    const verifyEmail = (email) => {
        if (email.includes('@')) setIsValidEmail(!isValidEmail);
    };

    return (
        <NewsletterContainer>
            <div>
                <NewsletterText>Sua casa com as</NewsletterText>
                <NewsletterBoldText>melhores plantas</NewsletterBoldText>
                <NewsletterParagraph>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</NewsletterParagraph>
                <InputContainer>
                    <EmailIcon />
                    <form>
                        <input type="email" value={email} onChange={inputEmail} minLength="4" placeholder="Insira seu e-mail" />
                        <button type="submit">Assinar newsletter</button>
                    </form>
                </InputContainer>
            </div>
            {isValidEmail && <NewsletterModal />}
            <PlantImage>
            </PlantImage>
        </NewsletterContainer>
    );
}

export default Newsletter;
