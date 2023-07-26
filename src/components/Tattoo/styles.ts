import styled from 'styled-components'

export const TattooContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  width: 100%;
  gap: 10em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 10em 0;
`
export const TattooTitle = styled.h1`
  font-size: 3em;
  margin-bottom: 1em;
  text-align: center;
`

export const PortfolioContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  width: 100%;
  gap: 2em;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  @media only screen and (max-width: 1300px) {
    justify-content: center;
  }
`
export const Tattoo = styled.img`
  width: 40em;
  height: 40em;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 10px 11px 15px 0px rgba(0, 0, 0, 0.25);
`
