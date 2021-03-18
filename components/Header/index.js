import React from "react";
import styled from "styled-components";
import Block from "../basics/Block";
import { Menu as MenuIcon } from '@material-ui/icons'


function Header() {
    return (
        <Container align="center" justify="flex-end">
            <MUIMenuIcon/>
        </Container>
    )
}

export default Header;

const Container = styled(Block)`
    background-color: ${({ theme }) => theme.bg.main};
    padding: 4vmin;
`
const MUIMenuIcon = styled(MenuIcon)`
    color: red;
`