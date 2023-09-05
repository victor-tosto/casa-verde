import Logo from "./Logo";
import { HeaderWrapper, NavList, NavLink, Separator } from "./styles";

const Header = () => {
    return (
        <HeaderWrapper>
            <Logo />
            <nav>
                <NavList>
                    <li>
                        <NavLink href="/">Como Fazer</NavLink>
                        <Separator>/</Separator>
                    </li>
                    <li>
                        <NavLink href="/">Ofertas</NavLink>
                        <Separator>/</Separator>
                    </li>
                    <li>
                        <NavLink href="/">Depoimentos</NavLink>
                        <Separator>/</Separator>
                    </li>
                    <li>
                        <NavLink href="/">Vídeos</NavLink>
                        <Separator>/</Separator>
                    </li>
                    <li>
                        <NavLink href="/">Meu carrinho</NavLink>
                    </li>
                </NavList>
            </nav>
        </HeaderWrapper>
    );
}

export default Header;
