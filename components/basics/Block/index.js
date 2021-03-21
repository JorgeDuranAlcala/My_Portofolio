import React from "react";
import styled from "styled-components";

function Block(props) {
    return (
        <Container {...props}>
            {props.children}
        </Container>
    )
}

export default Block;

const Container = styled.div`
    display: flex;
    flex-direction: ${({ direction = 'row' }) => direction};
    justify-content: ${({ justify }) => justify};
    align-items: ${({ align }) => align};
    flex: ${({ flex }) => flex};
    flex-wrap: ${({ wrap }) => wrap}l
`