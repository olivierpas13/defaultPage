import styled from 'styled-components';
import { SecondaryColor, WhiteColor } from '../../themeStyles/colors';

export const Header = styled.header`
    display: flex;
    background-color: ${SecondaryColor};
    color: ${WhiteColor};
    span{
        display: inline-block;
        height: 10vh;
        place-content: center;
        margin: 0 auto;
        img{
            width: 100%;
            height: 100%;
        }
        flex-grow: 2;
    }
    nav{
        flex-grow: 1;
    }

`;
