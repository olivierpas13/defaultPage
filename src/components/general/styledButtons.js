import styled, { css } from 'styled-components';

export const Button = styled.button`
    padding: 2%;
    margin: 2%;
    font-size: 1.3em;
    font-weight: 600;
    border: none;
    border-radius: 1.2em; 
    text-transform: uppercase;  
    transition: all 300ms;
    cursor: pointer;
    ${props => props.primary && css`
    background: black;
    color: white;
    &:hover{
        background: white;
        color: black;
    }
  `}
`;
