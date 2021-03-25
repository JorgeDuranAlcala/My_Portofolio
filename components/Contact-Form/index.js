import React from "react";
import useEmail from "../../hooks/useEmail.js";
import {
  FormContainer,
  InputsContainer,
  Input,
  EnailMessageArea,
  SendEmailBtn,
} from "./styles.js";

function ContactForm() {
  const { sendEmail } = useEmail();

  return (
    <FormContainer onSubmit={sendEmail}>
      <InputsContainer>
        <input type="hidden" name="to_name" value="Jorge Duran" />
        <label>Name</label>
        <Input type="text" name="from_name" />
        <label>Email</label>
        <Input type="email" name="user_email" />
      </InputsContainer>
      <label>Message</label>
      <EnailMessageArea rows={7} name="message" />
      <SendEmailBtn type="submit">Send Email</SendEmailBtn>
    </FormContainer>
  );
}

export default ContactForm;
