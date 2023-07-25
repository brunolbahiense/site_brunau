import Sobre from '../components/Sobre'
import * as S from '../styles/styles'
import Header from '../components/Header'
import Tattoo from '../components/Tattoo'
import Contato from '../components/Contato'

export default function Home() {
  return (
    <>
      <Header Logo={'Brunau Ink'} />
      <S.Container>
        <Sobre />
        <Tattoo />
      </S.Container>
      <Contato />
    </>
  )
}
