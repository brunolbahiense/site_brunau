import styled from 'styled-components'

export const Footer = styled.footer`
  background-color: ${(props) => props.theme.white};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
`
export const Icon = styled.img`
  height: 8em;
  width: 8em;
  cursor: pointer;
`
