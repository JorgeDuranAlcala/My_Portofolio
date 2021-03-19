import * as utils from '../utils'

const txt_color = {
    primary: "#2B2E4A",
    secondary: "#E84545",
}

export const theme = {
    bg: {
        main: "#E5E5E5"
    },
    pallete: {
        primary: "#E84545",
        secondary: "#2B2E4A",
        black: '#2B2E4A',
        white: '#E5E5E5'
    },
    font: {
        font_family: 'Poppins'
    },
    text: {
        color: {...txt_color},
    },
    size: utils.size
}

export const dark_theme = {
    ...theme,
    bg: {
        main: "#2B2E4A"
    },
    text: {
        color: {
            ...txt_color,
            primary: "#E5E5E5"
        }
    }
}