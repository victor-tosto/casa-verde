import { styled } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import HomePage from "./pages/HomePage";

const PageWrapper = styled.div`
  background-image: url("/assets/images/Vector.png");
  background-repeat: no-repeat;
  background-position: top right;
`;

const App = () => {
  return (
    <PageWrapper>
      <GlobalStyles />
      <HomePage />
    </PageWrapper>
  );
}

export default App;
