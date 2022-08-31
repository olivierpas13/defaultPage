import styled from 'styled-components';
import { PrimaryColor, WhiteColor } from '../../themeStyles/colors';

export const NavBar = styled.nav`
    width: 100%;
    ul{
        display: flex;
        list-style: none;
        flex-direction: row;
        width: 100%;
        height: 100%;
        justify-content: center;
        padding: 0;
        a{
            color: ${WhiteColor};
            padding: 2% 2%;
            &:hover{
                background-color: ${PrimaryColor};
            }
        }
        
    }
`;
