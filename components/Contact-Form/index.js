import React from "react";
import { 
    FormContainer, 
    InputsContainer, 
    Input, 
    EnailMessageArea,
    SendEmailBtn
} from './styles.js'

function ContactForm() {
    return (
        <FormContainer>
            <InputsContainer>
                <label>Name</label>
                <Input type="text"/>
                <label>Email</label>
                <Input type="email"/>
            </InputsContainer>
            <label>Message</label>
            <EnailMessageArea/>
            <SendEmailBtn>Send Email</SendEmailBtn>
        </FormContainer>
    )
}

export default ContactForm;