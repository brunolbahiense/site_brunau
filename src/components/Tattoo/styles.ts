import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${(props) => props.theme.darkGray};
  color: ${(props) => props.theme.white};
  width: 100vw;
  height: 10em;
  padding: 3em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Logo = styled.div`
  width: 14em;
`
export const Navbar = styled.nav`
  width: 20em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const HeaderBtn = styled.button`
  color: ${(props) => props.theme.white};
  font-size: 2rem;
  font-weight: 400;
  border-radius: 15px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.pink};
  }
`
