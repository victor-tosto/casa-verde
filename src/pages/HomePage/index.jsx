import { styled } from "styled-components";
import Header from "../../components/Header";
import Newsletter from "../../components/Newsletter";

const ContainerWrapper = styled.div`
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
`;

const HomePage = () => {
    return (
        <ContainerWrapper>
            <Header />
            <main>
                <Newsletter />
            </main>
        </ContainerWrapper>
    );
}

export default HomePage;
