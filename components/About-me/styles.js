import styled from "styled-components";
import Text from "../Text";

export const AboutMeText = styled(Text)`
  text-align: left;
  min-width: ${({ theme }) => theme.size("px", 310)};
  margin-left: ${({ theme }) => theme.size(2)};
  max-width: ${({ theme }) => theme.size("px", 750)};
  padding: ${({ theme }) => theme.size("px", 15)};
`;
