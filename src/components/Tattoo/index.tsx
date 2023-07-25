import * as S from './styles'

const array = ['tattoo_01', 'tattoo_02', 'tattoo_03', 'tattoo_04']

const Tattoo = () => (
  <S.TattooContainer id="Tattoo">
    <S.TattooTitle>Confira minhas Tattoos</S.TattooTitle>
    <S.PortfolioContainer>
      {array.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <S.Tattoo src={`img/assets/${item}.jpg`} />
      ))}
    </S.PortfolioContainer>
  </S.TattooContainer>
)

export default Tattoo
