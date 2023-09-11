import { styled } from "styled-components";

export const HomeContainer = styled.main`
width: 100%;
display: flex;
flex-direction: column;

justify-content: center;
align-items: center;
`

export const HomerContent = styled.main`
width: 100%;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
gap: 2rem;
margin-bottom: 14rem;
`