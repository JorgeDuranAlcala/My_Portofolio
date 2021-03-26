import styled from "styled-components";
import Text from "../Text";
import Image from "next/image";
import Block from "../basics/Block";

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
