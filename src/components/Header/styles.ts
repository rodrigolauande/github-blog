import { styled } from "styled-components";
import Background from "../../assets/Background.png"

export const HeaderContainer = styled.header`
background: ${(props) => props.theme['base-profile']};
`

export const HeaderContent = styled.div`
width: 100%;
height: 18.5rem;
background: url(${Background}) no-repeat center;
background-size: cover;

display: flex;
justify-content: center;
align-items: center;
`