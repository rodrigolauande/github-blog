import { HeaderContainer, HeaderContent } from "./styles";
import LogoGitHub from "../../assets/LogoGitHub.svg"

export function Header() {
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={LogoGitHub} className="logo" alt="" />
            </HeaderContent>
        </HeaderContainer>
    )
}