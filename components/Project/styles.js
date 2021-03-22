import styled from 'styled-components'

export const Container = styled.div`
    width: ${({ theme }) => theme.size('px', 320)};
    height: ${({ theme }) => theme.size('px', 295)};
    border-radius: 10px;
    background-color: #0B0D20;
    margin: ${({ theme }) => theme.size('px', 20)}; 0
`