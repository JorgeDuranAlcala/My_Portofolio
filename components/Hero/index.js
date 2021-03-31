import React from "react";
import styled from "styled-components";
import Anchor from "../basics/Anchor";
import Block from "../basics/Block";
import Text from "../Text";

function Hero({ heroTitle: title, heroDesc: desc }) {
  return (
    <Container direction="column">
      <Text variant="h1" size={40} fontWeight={900} lineHeight={60}>
        <Text variant="caption" secondary="true" fontWeight={900}>
          J
        </Text>
        orge Duran ,{title}
      </Text>
      <SubTitle
        variant="h3"
        size={24}
        txtcolor="rgba(43, 46, 74, 0.62)"
        fontWeight={300}
        lineHeight={36}
      >
        {desc}
      </SubTitle>
      <BtnsContainer direction="column" align="center">
        <MyWorkBtn>Work Samples</MyWorkBtn>
        <DownloadCvBtn>Download CV</DownloadCvBtn>
      </BtnsContainer>
    </Container>
  );
}

export default Hero;

const Container = styled(Block)`
  max-width: ${({ theme }) => theme.size("px", 587)};
  min-width: ${({ theme }) => theme.size("px", 313)};
  padding: 0 0.5rem;
`;

const SubTitle = styled(Text)`
  && {
    margin-top: ${({ theme }) => theme.size("px", 20)};
  }
`;

const BtnsContainer = styled(Block)`
  && {
    margin-top: ${({ theme }) => theme.size("px", 40)};
    @media only screen and (min-width: 750px) {
      flex-direction: row;
    }
  }
`;

const MyWorkBtn = styled(Anchor)`
  && {
    color: ${({ theme }) => theme.pallete.white};
    background-color: ${({ theme }) => theme.pallete.primary};
    padding: ${({ theme }) => theme.size("px", 15)};
    border-radius: 10px;
  }
`;
const DownloadCvBtn = styled(Anchor)`
  && {
    color: ${({ theme }) => theme.pallete.white};
    background-color: ${({ theme }) => theme.pallete.black};
    padding: ${({ theme }) => theme.size("px", 15)};
    border-radius: 10px;
    margin-top: ${({ theme }) => theme.size("px", 40)};
    @media only screen and (min-width: 750px) {
      margin-top: 0;
      margin-left: ${({ theme }) => theme.size("px", 40)};
    }
  }
`;
