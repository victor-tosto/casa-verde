import { styled } from "styled-components";
import Header from "../../components/Header";
import Newsletter from "../../components/Newsletter";
import Offers from "../../components/Offers";
import GetPlant from "../../components/GetPlant";

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
                <GetPlant />
                <Offers />
            </main>
        </ContainerWrapper>
    );
}

export default HomePage;
