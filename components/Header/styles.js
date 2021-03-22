import styled from "styled-components";
import Block from "../basics/Block";
import { Menu as MenuIcon, Close as CloseIcon } from '@material-ui/icons'
import Anchor from "../basics/Anchor";

export const MUIMenuIcon = styled(MenuIcon)`
    color: ${({ theme }) => theme.pallete.primary};
    font-size: ${({ theme }) => theme.size('px', 44)} !important;
`

export const FullScreen = styled(Block)`
    && {
        position: fixed;
        left: ${({ active }) => !active ? -1000 : 0}px;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        transition: left .5s ease;
        background: ${({ theme }) => theme.bg.main};
    }
`;

export const Container = styled(Block)`
    width: 100%;
    display: flex;
    padding: ${({ theme }) => theme.size('px', 20)};
    background-color: ${({ theme }) => theme.bg.main};
    @media only screen and (min-width: 750px) {
        ${MUIMenuIcon} {
            display: none
        }
        && {
            justify-content: center;
        }
    }
`

export const AnchorsContainer = styled(Block)`
    
`;

export const CloseBtnContainer = styled(Block)`
    padding: ${({ theme }) => theme.size(0.2)};
    border-radius: 50%;
    border: 1px solid gray;
`;

export const CloseBtn = styled(CloseIcon)`
  && {
      font-size: ${({ theme }) => theme.size('px', 24)};
      color: ${({ theme }) => theme.pallete.primary};
      cursor: pointer;
  }
`;

export const NavLink = styled(Anchor)`
  && {
      margin-top: ${({ mode, theme }) => mode !== 'full-screen' ?  0 : theme.size(1.2) };
      margin-left: ${({ theme }) => theme.size(1.2)};
      color: ${({ theme, selected }) => selected && theme.pallete.primary};
    }
    
`