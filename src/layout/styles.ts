import { styled } from "styled-components";

export const LayoutContainer = styled.div`
max-width: 100vw;
height: 100vh;
margin: auto;
/* padding: 1.5rem; */

background: ${(props) => props.theme.background};
border-radius: 8px;

display: flex;
flex-direction: column;

> main {
    width: 100%;
    max-width: 54rem;
    margin: 0 auto;

    @media (max-width: 54rem) {
      padding: 0 1rem;
}
}
`