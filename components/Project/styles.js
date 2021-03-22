import styled from "styled-components";
import Text from "../Text";
import Image from "next/image";

export const Container = styled.div`
    position: relative;
    width: ${({ theme }) => theme.size("px", 320)};
    height: ${({ theme }) => theme.size("px", 295)};
    border-radius: 10px;
    background-color: #0B0D20;
    margin: ${({ theme }) => theme.size("px", 20)}; 0
`;

export const ProjectImg = styled(Image)`
  /* position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; */
`;

export const Title = styled(Text)`
  && {
    z-index: 2;
    position: absolute;
    left: 0;
    right: 0;
    margin-right: 0;
    margin-left: 0;
    width: ${({ theme }) => theme.size("px", 70)};
    color: ${({ theme }) => theme.pallete.white};
  }
`;
