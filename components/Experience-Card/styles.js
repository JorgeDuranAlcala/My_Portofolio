import styled from 'styled-components';
import Block from '../basics/Block';

export const CardContainer = styled(Block)`
  max-width ${({ theme }) => theme.size('px', 370)};
  min-width ${({ theme }) => theme.size('px', 310)};
  height: 391px;
  filter: drop-shadow(0px 62px 80px rgba(0, 0, 0, 0.07)), drop-shadow(0px 25.9021px 33.4221px rgba(0, 0, 0, 0.0503198)), drop-shadow(0px 13.8485px 17.869px rgba(0, 0, 0, 0.0417275)), drop-shadow(0px 7.76336px 10.0172px rgba(0, 0, 0, 0.035)), drop-shadow(0px 4.12306px 5.32008px rgba(0, 0, 0, 0.0282725)), drop-shadow(0px 1.7157px 2.21381px rgba(0, 0, 0, 0.0196802));
`;



