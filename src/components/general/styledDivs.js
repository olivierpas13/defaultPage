import styled, { css } from 'styled-components';

export const StyledSection = styled.section`
    height: 100vh;
    background: url(${props => props.bgimg}) ${props => props.bgcolor} no-repeat ;
    background-size: fill;
    margin: 0px 100px;
`;

export const FluidContainer = styled.article`
    width: 100%;
    margin: 5% 5%;
    ${props => {
        return css`
            background-color: props.bgcolor;
        `;
    }}
`;
