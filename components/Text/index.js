import { Typography, StylesProvider } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'

const Text = ({ children, ...rest }) => {
    return <StyledTypography {...rest} >
        { children }
    </StyledTypography>
}

export default Text

const StyledTypography = styled(Typography)`
    && {
        font-family: ${({ theme }) => theme.font.font_family};
        color: ${({ theme, txtcolor, secondary }) => !txtcolor 
                                                            ? !secondary 
                                                                ? theme.text.color.primary 
                                                                : theme.text.color.secondary 
                                                            : txtcolor};
        font-size: ${({ theme, size }) => size ? theme.size('px', size) : 'inherit'};
        font-weight: ${({ fontWeight }) => fontWeight};
        line-height: ${({ lineheight }) => lineheight ? theme.size('px', lineheight) : 'inherit'};
    }
`