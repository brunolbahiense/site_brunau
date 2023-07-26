import styled from 'styled-components'

export const Footer = styled.footer`
  background-color: ${(props) => props.theme.darkGray};
  color: ${(props) => props.theme.white};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3em 24em;
  height: 30em;
  @media only screen and (max-width: 768px) {
    padding: 4em;
    flex-direction: column;
    height: auto;
  }
`

export const ContactContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 2em;
  @media only screen and (max-width: 1300px) {
    padding-right: 2em;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    padding: 0;
  }
`
export const IconContainer = styled.div`
  width: 40%;
  height: 100%;
  border-left: solid 2px white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8em;
  @media only screen and (max-width: 768px) {
    border: none;
    margin: 4em 0;
  }
`
export const Icon = styled.img`
  height: 8em;
  width: 8em;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    height: 6em;
    width: 6em;
  }
`
export const ContactTitle = styled.h1`
  font-size: 3em;
  margin-bottom: 1em;
`
export const ContactDescription = styled.p`
  font-size: 2em;
  text-align: center;
  cursor: pointer;
`
