import * as S from './styles'

const Sobre = () => (
  <S.SobreContainer id="Sobre">
    <S.Photo />
    <S.TextContainer>
      <S.SobreTitle>Bruno Castro</S.SobreTitle>
      <S.SobreDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud. Exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
        <br />
        <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </S.SobreDescription>
    </S.TextContainer>
  </S.SobreContainer>
)

export default Sobre
