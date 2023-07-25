import Link from 'next/link'
import * as S from './styles'

const Contato = () => (
  <S.Footer>
    <Link href="https://instagram.com/brunau.ink">
      <S.Icon src="/img/assets/icons/insta.png" />
    </Link>
    <Link href="https://tiktok.com">
      <S.Icon src="/img/assets/icons/tiktok.png" />
    </Link>
  </S.Footer>
)

export default Contato
