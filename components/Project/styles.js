import styled from "styled-components";
import Text from "../Text";
import Image from "next/image";
import Block from "../basics/Block";
import { IconButton } from "@material-ui/core";
import { fadeIn } from "../styles/animation";
import Anchor from "../basics/Anchor";

export const Mask = styled(Block)`
  && {
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: background 0.5s ease;
  }
`;

export const ProjectImg = styled(Image)`
  border-radius: 10px;
`;

export const Title = styled(Text)`
  && {
    z-index: 2;
    display: none;
    color: ${({ theme }) => theme.pallete.white};
  }
`;
export const Container = styled(Block)`
  && {
    position: relative;
    width: ${({ theme }) => theme.size("px", 320)};
    height: ${({ theme }) => theme.size("px", 295)};
    background-color: #0b0d20;
    border-radius: 10px;
    margin: ${({ theme }) => theme.size("px", 20)} 0;
    cursor: pointer;
    transition: transform 0.5s ease;
    &:hover {
      transform: scale(1.1);
      box-shadow: 0 10px 12px rgba(255, 255, 255, 0.2);
      ${Mask} {
        background: rgba(0, 0, 0, 0.4);
      }
      ${Title} {
        display: inline-block;
      }
    }
  }
`;

export const CloseBtn = styled(IconButton)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  ${fadeIn({ time: ".5s" })}
  display: grid;
  grid-template-rows: 220px minmax(200px, 1fr);
  min-width: 320px;
  max-width: 600px;
  margin: 20px;
  z-index: 99;
  @media only screen and ${({ theme }) => theme.breakpoints.min.md} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: none;
  }
`;
export const ModalImg = styled(Image)`
  /* border-radius: 10px 0 0 10px; */
`;

export const ModalContent = styled.div`
  display: grid;
  grid-template-rows: 30px auto;
  background-color: white;
  padding: 15px;
  border-radius: 0 10px 10px 0px;
`;

export const PreviewBtn = styled(Anchor)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.pallete.secondary};
  padding: ${({ theme }) => theme.size("px", 15)};
  margin: ${({ theme }) => theme.size(2)} 0;
  border-radius: 10px;
`;
