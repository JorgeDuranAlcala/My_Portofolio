import React from "react";
import { ButtonContainer } from "./styles";

function Button({ children, ...rest }) {
    return (
        <ButtonContainer {...rest}>
            { children }
        </ButtonContainer>
    )
}

export default Button;