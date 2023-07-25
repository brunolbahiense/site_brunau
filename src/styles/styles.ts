import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  padding: 4em 8em;
  color: ${(props) => props.theme.white};
  @media only screen and (max-width: 768px) {
    border: none;
    box-shadow: none;
    width: auto;
    height: auto;
    padding: 1em;
  }
`
