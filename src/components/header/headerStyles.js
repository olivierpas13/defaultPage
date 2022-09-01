import styled from 'styled-components';
import { PrimaryColor, SecondaryColor, WhiteColor } from '../../themeStyles/colors';

export const Header = styled.header`
    display: flex;
    background-color: ${SecondaryColor};
    color: ${WhiteColor};
        span{
        /* display: inline-block; */
        height: 10vh;
        align-items: center;
        place-content: center;
        padding: 0% 9%;
        margin: 5px auto;
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

export const Logo = styled.span`
    display: flex;
    flex-direction: row;
    font-size: 1.3em;
    cursor: pointer;
    transition: all 300ms;
    span{
        color: ${PrimaryColor};
        transition: all 300ms;
    }
    &:hover{
        span{
            color:${WhiteColor}
        }
        color: ${PrimaryColor};
    }
`;
