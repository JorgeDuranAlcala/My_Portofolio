import styled from "styled-components";
import Text from "../Text";

export const AboutMeText = styled(Text)`
  min-width: ${({ theme }) => theme.size("px", 310)};
  max-width: ${({ theme }) => theme.size("px", 750)};
  padding: ${({ theme }) => theme.size("px", 15)};
`;
