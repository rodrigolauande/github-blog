import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const PostContainer = styled(Link)`
width: 100%;
height: 16.25rem;
border-radius: 10px;
background: ${(props) => props.theme['base-post']};
border: solid 2px ${(props) => props.theme['base-post']};
padding: 2rem;
transition: 0.4s;
text-decoration: none;


&:hover {
    border-color: ${(props) => props.theme['base-label']}
}

div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;

    strong {
        flex: 1;
        font: 20px bold 'Nunito';
        color: ${(props) => props.theme['base-title']};
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        
    }

    span {
        width: max-content;
        font: 14px 'Nunito';
        color: ${(props) => props.theme['base-span']};
    }
}

p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    color: ${(props) => props.theme['base-text']};

}
`