import React from "react";
import Head from 'next/head'
import styled from "styled-components";
import Block from "../basics/Block";
import { Menu as MenuIcon } from '@material-ui/icons'


function Header() {

    return (
        <Container align="center" justify="flex-end">
             <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MUIMenuIcon/>
        </Container>
    )
}

export default Header;

const MUIMenuIcon = styled(MenuIcon)`
    color: ${({ theme }) => theme.pallete.primary};
    font-size: ${({ theme }) => theme.size('px', 44)} !important;
`

const Container = styled(Block)`
    width: 100%;
    padding: ${({ theme }) => theme.size('px', 20)};
    background-color: ${({ theme }) => theme.bg.main};
    @media only screen and (min-width: 750px) {
        ${MUIMenuIcon} {
            display: none
        }
    }
`