import Link from 'next/link'
import * as S from './styles'

interface HeaderProps {
  Logo: string
}

const Header = ({ Logo }: HeaderProps) => (
  <>
    <S.Header>
      <S.Logo>
        <h1>{Logo}</h1>
      </S.Logo>
      <S.Navbar>
        <Link href="#Sobre">
          <S.HeaderBtn>Sobre</S.HeaderBtn>
        </Link>
        <Link href="#Tattoo">
          <S.HeaderBtn>Tattoo</S.HeaderBtn>
        </Link>
        <Link href="#Contato">
          <S.HeaderBtn>Contato</S.HeaderBtn>
        </Link>
      </S.Navbar>
    </S.Header>
  </>
)

export default Header
