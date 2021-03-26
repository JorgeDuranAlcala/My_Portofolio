import styled from "styled-components";
import Block from "../basics/Block";
import Button from "../Button";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  min-width: ${({ theme }) => theme.size("px", 320)};
  max-width: ${({ theme }) => theme.size("px", 500)};
  margin: ${({ theme }) => theme.size(5)} 0;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  display: flex;
  margin: ${({ theme }) => theme.size(1.2)} 0;
  padding: ${({ theme }) => `${theme.size(1.5)} ${theme.size(0.5)}`};
  background-color: #c4c4c4;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.pallete.secondary};
  font-size: ${({ theme }) => theme.size("px", 18)};
  border-radius: 10px;
`;

export const EnailMessageArea = styled.textarea`
  max-width: 100%;
  box-sizing: border-box;
  resize: none;
  /*  min-width: ${({ theme }) => theme.size("px", 280)}; */
  /* min-width: ${({ theme }) => theme.size("px", 320)}; */
  margin: ${({ theme }) => theme.size(1.2)} 0;
  padding: ${({ theme }) => `${theme.size(1.5)} ${theme.size(0.5)}`};
  background-color: #c4c4c4;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.pallete.secondary};
  font-size: ${({ theme }) => theme.size("px", 18)};
  border-radius: 10px;
  /*  @media only screen and ${({ theme }) => theme.breakpoints.min.md} {
    max-width: ${({ theme }) => theme.size("px", 500)} !important;
  } */
`;

export const SendEmailBtn = styled(Button)`
  margin: ${({ theme }) => theme.size(1.2)} 0;
  padding: ${({ theme }) => theme.size(0.5)};
  color: ${({ theme }) => theme.pallete.white};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.size("px", 20)};
  background-color: ${({ theme }) => theme.pallete.primary};
`;
