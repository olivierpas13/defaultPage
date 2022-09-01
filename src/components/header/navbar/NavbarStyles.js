import styled from 'styled-components';
import { PrimaryColor, WhiteColor } from '../../../themeStyles/colors';

export const NavBar = styled.nav`
    width: 100%;
    ul{
        display: flex;
        list-style: none;
        flex-direction: row;
        align-items:center;
        width: 100%;
        height: 100%;
        justify-content: flex-end;
        a{
            color: ${WhiteColor};
            font-size: 130%;
            padding: 2%;
            border-radius: 25%;
            transition: all 300ms;
            &:hover{
                background-color: ${WhiteColor};
                color: ${PrimaryColor}
            }
        }
        
    }
`;
