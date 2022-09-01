import styled from 'styled-components';
import { WhiteColor } from '../../themeStyles/colors';

export const PrimaryTitle = styled.h1`
    margin-top: 5%;
    margin-right: 2%;
    line-height: 150%;
    color: ${props => props.color ? props.color : WhiteColor};
    /* color: ${WhiteColor}; */
    font-size: 400%;
    text-shadow: 3px 3px 3px black;
    `;

export const SecondaryTitle = styled.h2`
    margin-right: 2%;
    margin-top: 2%;
    font-size: 300%;
    /* text-align: right; */
    color: ${props => props.color ? props.color : WhiteColor};
    line-height: 135%;
    text-shadow: 3px 3px 2px black;
`;
