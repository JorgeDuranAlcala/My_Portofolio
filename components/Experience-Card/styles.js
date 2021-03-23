import styled from "styled-components";
import Block from "../basics/Block";
import Text from "../Text";

export const CardContainer = styled(Block)`
  max-width ${({ theme }) => theme.size("px", 320)};
  min-width ${({ theme }) => theme.size("px", 280)};
  padding: ${({ theme }) => theme.size("px", 20)};
  background: linear-gradient(135deg, #DADADA 0%, #F0F0F0 100%);
  border-radius: 10px;
  margin: 10px 20px;
  border: 2px solid lightgray;
`;

export const CardTitle = styled(Text)`
  && {
    margin: ${({ theme }) => theme.size("px", 5)} 0;
  }
`;

export const Subtitle = styled(Text)`
  && {
    margin: ${({ theme }) => theme.size("px", 5)} 0;
  }
`;

export const CardDate = styled(Text)`
  && {
    margin: ${({ theme }) => theme.size("px", 5)} 0;
  }
`;

export const CardContent = styled(Text)`
  && {
    margin: ${({ theme }) => theme.size("px", 20)} 0;
  }
`;
