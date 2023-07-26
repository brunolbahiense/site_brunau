import styled from 'styled-components'

export const Container = styled.main`
  padding: 4em 24em;
  color: ${(props) => props.theme.white};

  @media only screen and (max-width: 768px) {
    border: none;
    box-shadow: none;
    width: auto;
    height: auto;
    padding: 1em;
  }
`
