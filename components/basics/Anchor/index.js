import React from 'react'
import styled from 'styled-components'

const Anchor = ({ children, ...rest }) => {
    return <StyledAnchor {...rest} >
        { children }
    </StyledAnchor>
}

export default Anchor

const StyledAnchor = styled.a`
    color: ${({ theme }) => theme.text.color.primary}
    font-size: ${({ theme, size }) => size ? theme.size('px', size) : 'inherit'};
    font-weight: ${({ fontWeight }) => fontWeight};
    line-height: ${({ lineheight }) => lineheight ? theme.size('px', lineheight) : 'inherit'};
`
