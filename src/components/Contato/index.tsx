import Link from 'next/link'
import * as S from './styles'

const Contato = () => (
  <S.Footer id="Contato">
    <S.ContactContainer>
      <S.ContactTitle>
        Entre em contato comigo e me conta a sua ideia!
      </S.ContactTitle>
      <Link href="tel:5571992365136">
        <S.ContactDescription>71 99236-5136</S.ContactDescription>
      </Link>
      <Link href="mailto:brunauInk@gmail.com">
        <S.ContactDescription>brunauInk@gmail.com</S.ContactDescription>
      </Link>
    </S.ContactContainer>
    <S.IconContainer>
      <Link href="https://instagram.com/brunau.ink">
        <S.Icon src="/img/assets/icons/insta.png" />
      </Link>

      <Link href="https://wa.me/557192365136?text=Quero%20fazer%20um%20orçamento%20">
        <S.Icon src="/img/assets/icons/whats.png" />
      </Link>
    </S.IconContainer>
  </S.Footer>
)

export default Contato
