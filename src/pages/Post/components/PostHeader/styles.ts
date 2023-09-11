import { styled } from "styled-components";

export const PostContainer = styled.div`
width: 100%;
min-height: 11.25rem;
margin-top: -5.5rem;
background: ${(props) => props.theme['base-profile']};
box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
border-radius: 10px;
padding: 1rem 2.5rem;
display: flex;
gap: 2rem;
`

export const PostDetails = styled.div`
flex: 1;
display: flex;
flex-direction: column;

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    
    ul {
        display: flex;
        justify-content: space-between;
        width: 100%;
        

        li {
            border: none;
                background: none;
                color: ${(props) => props.theme['blue']};
                text-transform: uppercase;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-weight: 700;
                transition: 0.4s;
                border-bottom: 1px solid transparent;
                height: 19px;
                line-height: 19px;
                font-size: 12px;
                cursor: pointer;

                svg {
                    width: 0.75rem;
                    height: 0.75rem;
                    color: ${(props) => props.theme['blue']}

                }

                &:hover {
                    border-color: ${(props) => props.theme['blue']}
                }
            
            a {
                border: none;
                background: none;
                color: ${(props) => props.theme['blue']};
                text-transform: uppercase;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-weight: 700;
                transition: 0.4s;
                border-bottom: 1px solid transparent;
                height: 19px;
                line-height: 19px;
                font-size: 12px;

                svg {
                    width: 0.75rem;
                    height: 0.75rem;
                    color: ${(props) => props.theme['blue']}

                }

                &:hover {
                    border-color: ${(props) => props.theme['blue']}
                }
            }
            
        }
    }
}

ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: 1rem;
    
    li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    
        svg {
            width: 1.125rem;
            height: 1.125rem;
            color: ${(props) => props.theme['base-label']}
        }
    }
}
`