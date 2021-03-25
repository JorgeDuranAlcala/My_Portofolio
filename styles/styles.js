import styled from "styled-components";
import Block from "../components/basics/Block";
import Button from "../components/Button";
import Figure from "../components/Figure";
import Text from "../components/Text";

export const Container = styled(Block)`
  background-color: ${({ theme }) => theme.bg.main};
  min-width: ${({ theme }) => theme.size("px", 350)};
  min-height: 100vh;
  padding: 0 0.5rem;
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media only screen and ${({ theme }) => theme.breakpoints.min.md} {
    flex-direction: row;
    min-height: 100vh;
  }
}
`;

export const MainSections = styled(Section)``;

export const FigureJ = styled(Figure)`
  margin: ${({ theme }) => theme.size("px", 60)} 0;
`;

export const SubTitle = styled.h3`
  position: relative;
  color: ${({ theme }) => theme.text.primary};
  font-weight: bold;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.size("px", 32)};
  line-height: ${({ theme }) => theme.size("px", 48)};
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    margin-top: ${({ theme }) => theme.size("px", 10)};
    margin-left: auto;
    margin-right: auto;
    width: 100px;
    height: 100%;
    border-bottom: 7px solid ${({ theme }) => theme.pallete.primary};
  }
`;

export const SeeMoreBtn = styled(Button)`
  background-color: ${({ theme }) => theme.pallete.primary};
  border-radius: 10px;
  color: ${({ theme }) => theme.pallete.white};
  font-size: ${({ theme }) => theme.size("px", 24)};
  font-weight: bold;
  padding: ${({ theme }) => theme.size("px", 12)};
  margin: ${({ theme }) => theme.size("px", 20)}; 0;
`;

export const ProfileImg = styled.img`
  width: ${({ theme }) => theme.size("px", 310)};
  height: ${({ theme }) => theme.size("px", 370)};
`;

export const AboutMeText = styled(Text)`
  min-width: ${({ theme }) => theme.size("px", 310)};
  max-width: ${({ theme }) => theme.size("px", 750)};
  padding: ${({ theme }) => theme.size("px", 15)};
`;
